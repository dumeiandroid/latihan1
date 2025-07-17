// hitung-cepat/worker.js

import { Router } from 'itty-router';

// Inisialisasi router
const router = Router();

// --- Fungsi Utilitas (Diubah untuk Demo Password Plaintext) ---

// Fungsi untuk "menghash" password (HANYA UNTUK DEMO, SANGAT TIDAK AMAN!)
async function hashPassword(password) {
    // Untuk demo, kita akan menyimpan password dalam bentuk plaintext.
    // SANGAT TIDAK AMAN UNTUK PRODUKSI!
    return password;
}

// Fungsi untuk memverifikasi password (Diubah untuk Demo Password Plaintext)
async function verifyPassword(inputPassword, storedPassword) {
    // Untuk demo, kita akan membandingkan password dalam bentuk plaintext.
    // SANGAT TIDAK AMAN UNTUK PRODUKSI!
    return inputPassword === storedPassword;
}

// Fungsi untuk memetakan nama kolom generik ke nama yang mudah dibaca
const mapUserToReadable = (userRow) => {
    if (!userRow) return null;
    return {
        id_user: userRow.id_x,
        username: userRow.x_01,
        password_hash: userRow.x_02, // Tetap sertakan untuk debugging jika perlu
        role: userRow.x_03,
        highest_scores_by_op: JSON.parse(userRow.x_04 || '{}'),
        last_played: userRow.x_05,
        created_at: userRow.x_06,
        updated_at: userRow.x_07,
        // Kolom generik lainnya bisa ditambahkan jika diperlukan di frontend
        // x_08: userRow.x_08,
        // ...
    };
};

// Fungsi untuk memetakan nama yang mudah dibaca kembali ke kolom generik untuk DB
const mapUserToGeneric = (userData) => {
    const genericData = {};
    if (userData.username !== undefined) genericData.x_01 = userData.username;
    if (userData.password_hash !== undefined) genericData.x_02 = userData.password_hash;
    if (userData.role !== undefined) genericData.x_03 = userData.role;
    if (userData.highest_scores_by_op !== undefined) genericData.x_04 = JSON.stringify(userData.highest_scores_by_op);
    if (userData.last_played !== undefined) genericData.x_05 = userData.last_played;
    if (userData.created_at !== undefined) genericData.x_06 = userData.created_at;
    if (userData.updated_at !== undefined) genericData.x_07 = userData.updated_at;
    // Tambahkan mapping untuk x_08 hingga x_20 jika digunakan
    return genericData;
};

// Middleware untuk otentikasi
async function authenticate(request, env) {
    const authHeader = request.headers.get('Authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return new Response(JSON.stringify({ success: false, message: 'Unauthorized: Missing or invalid token' }), { status: 401, headers: { 'Content-Type': 'application/json' } });
    }

    const token = authHeader.split(' ')[1];
    // Untuk demo, token adalah username itu sendiri
    const username = token;

    try {
        const { results } = await env.DB.prepare('SELECT * FROM users WHERE x_01 = ?').bind(username).all();
        if (!results || results.length === 0) {
            return new Response(JSON.stringify({ success: false, message: 'Unauthorized: User not found' }), { status: 401, headers: { 'Content-Type': 'application/json' } });
        }
        request.user = mapUserToReadable(results[0]); // Attach user data to request
        return null; // Lanjutkan ke handler route
    } catch (error) {
        console.error('Authentication error:', error);
        return new Response(JSON.stringify({ success: false, message: 'Authentication failed' }), { status: 500, headers: { 'Content-Type': 'application/json' } });
    }
}

// Middleware untuk otorisasi (hanya admin)
async function authorizeAdmin(request, env) {
    if (!request.user || request.user.role !== 'admin') {
        return new Response(JSON.stringify({ success: false, message: 'Forbidden: Admin access required' }), { status: 403, headers: { 'Content-Type': 'application/json' } });
    }
    return null; // Lanjutkan ke handler route
}

// --- API Routes ---

// POST /api/login
router.post('/api/login', async (request, env) => {
    try {
        const { username, password } = await request.json();
        const { results } = await env.DB.prepare('SELECT * FROM users WHERE x_01 = ?').bind(username).all();

        if (!results || results.length === 0) {
            return new Response(JSON.stringify({ success: false, message: 'Invalid username or password' }), { status: 401, headers: { 'Content-Type': 'application/json' } });
        }

        const user = mapUserToReadable(results[0]);

        // Verifikasi password (menggunakan fungsi yang diubah)
        const isPasswordValid = await verifyPassword(password, user.password_hash);

        if (!isPasswordValid) {
            return new Response(JSON.stringify({ success: false, message: 'Invalid username or password' }), { status: 401, headers: { 'Content-Type': 'application/json' } });
        }

        // Update last_played timestamp
        const now = new Date().toISOString();
        await env.DB.prepare('UPDATE users SET x_05 = ?, x_07 = ? WHERE id_x = ?')
                    .bind(now, now, user.id_user)
                    .run();

        // Untuk demo, token adalah username itu sendiri
        const token = user.username;

        return new Response(JSON.stringify({
            success: true,
            message: 'Login successful',
            user: {
                id_user: user.id_user,
                username: user.username,
                role: user.role,
                highest_scores_by_op: user.highest_scores_by_op
            },
            token: token
        }), { status: 200, headers: { 'Content-Type': 'application/json' } });

    } catch (error) {
        console.error('Login error:', error);
        return new Response(JSON.stringify({ success: false, message: error.message || 'Internal server error during login' }), { status: 500, headers: { 'Content-Type': 'application/json' } });
    }
});

// POST /api/submit-score (Requires authentication)
router.post('/api/submit-score', authenticate, async (request, env) => {
    try {
        const { operation, score } = await request.json();
        const userId = request.user.id_user; // id_x dari user yang terotentikasi
        const currentHighestScores = request.user.highest_scores_by_op || {};

        let message = 'Skor Anda berhasil disimpan.';
        let newHighestScore = currentHighestScores[operation];

        if (score > (currentHighestScores[operation] || 0)) {
            currentHighestScores[operation] = score;
            newHighestScore = score;
            message = `Selamat! Anda mencetak skor tertinggi baru untuk ${operation}: ${score}`;
        } else {
            message = `Skor Anda ${score} tidak melampaui skor tertinggi Anda saat ini (${currentHighestScores[operation] || 0}) untuk ${operation}.`;
        }

        const now = new Date().toISOString();
        const genericData = mapUserToGeneric({
            highest_scores_by_op: currentHighestScores,
            last_played: now,
            updated_at: now
        });

        const stmt = env.DB.prepare('UPDATE users SET x_04 = ?, x_05 = ?, x_07 = ? WHERE id_x = ?')
                           .bind(genericData.x_04, genericData.x_05, genericData.x_07, userId);
        await stmt.run();

        return new Response(JSON.stringify({ success: true, message: message, new_highest_score: newHighestScore }), { status: 200, headers: { 'Content-Type': 'application/json' } });

    } catch (error) {
        console.error('Submit score error:', error);
        return new Response(JSON.stringify({ success: false, message: error.message || 'Internal server error during score submission' }), { status: 500, headers: { 'Content-Type': 'application/json' } });
    }
});

// GET /api/leaderboard/:operation (Tidak perlu otentikasi)
router.get('/api/leaderboard/:operation', async (request, env) => {
    try {
        const { operation } = request.params;

        // Validasi operasi
        const validOperations = ['penjumlahan', 'pengurangan', 'perkalian', 'pembagian', 'akar', 'pangkat'];
        if (!validOperations.includes(operation)) {
            return new Response(JSON.stringify({ success: false, message: 'Invalid operation specified.' }), { status: 400, headers: { 'Content-Type': 'application/json' } });
        }

        // Query untuk mendapatkan top 3 berdasarkan skor di x_04 (JSON)
        // SQLite JSON functions: JSON_EXTRACT(json, path)
        const { results } = await env.DB.prepare(
            `SELECT x_01, JSON_EXTRACT(x_04, '$.${operation}') AS score_op
             FROM users
             WHERE JSON_EXTRACT(x_04, '$.${operation}') IS NOT NULL
             ORDER BY score_op DESC
             LIMIT 3`
        ).all();

        const top_3 = results.map(row => ({
            username: row.x_01, // x_01 adalah username
            score: parseInt(row.score_op) || 0 // Pastikan skor adalah integer
        }));

        return new Response(JSON.stringify({ success: true, top_3: top_3 }), { status: 200, headers: { 'Content-Type': 'application/json' } });

    } catch (error) {
        console.error('Leaderboard error:', error);
        return new Response(JSON.stringify({ success: false, message: error.message || 'Internal server error during leaderboard fetch' }), { status: 500, headers: { 'Content-Type': 'application/json' } });
    }
});

// GET /api/my-rank/:operation (Requires authentication)
router.get('/api/my-rank/:operation', authenticate, async (request, env) => {
    try {
        const { operation } = request.params;
        const userId = request.user.id_user;
        const username = request.user.username;

        const validOperations = ['penjumlahan', 'pengurangan', 'perkalian', 'pembagian', 'akar', 'pangkat'];
        if (!validOperations.includes(operation)) {
            return new Response(JSON.stringify({ success: false, message: 'Invalid operation specified.' }), { status: 400, headers: { 'Content-Type': 'application/json' } });
        }

        // Dapatkan skor user saat ini untuk operasi tersebut
        const { results: userScoreResult } = await env.DB.prepare(
            `SELECT JSON_EXTRACT(x_04, '$.${operation}') AS score_op
             FROM users
             WHERE id_x = ?`
        ).bind(userId).all();

        const yourScore = parseInt(userScoreResult[0]?.score_op) || 0;

        // Hitung peringkat: jumlah user dengan skor lebih tinggi dari user saat ini
        const { results: rankResults } = await env.DB.prepare(
            `SELECT COUNT(id_x) AS higher_rank_count
             FROM users
             WHERE JSON_EXTRACT(x_04, '$.${operation}') > ?`
        ).bind(yourScore).all();

        const higherRankCount = rankResults[0]?.higher_rank_count || 0;
        const yourRank = higherRankCount + 1; // Peringkat adalah jumlah user di atas + 1

        // Dapatkan total member (opsional, untuk konteks)
        const { results: totalMembersResult } = await env.DB.prepare(
            `SELECT COUNT(id_x) AS total_members FROM users WHERE x_03 = 'member'`
        ).all();
        const totalMembers = totalMembersResult[0]?.total_members || 0;


        return new Response(JSON.stringify({
            success: true,
            your_rank: yourRank,
            your_score: yourScore,
            total_members: totalMembers
        }), { status: 200, headers: { 'Content-Type': 'application/json' } });

    } catch (error) {
        console.error('My rank error:', error);
        return new Response(JSON.stringify({ success: false, message: error.message || 'Internal server error during rank fetch' }), { status: 500, headers: { 'Content-Type': 'application/json' } });
    }
});


// GET /api/users (Requires authentication and admin role)
router.get('/api/users', authenticate, authorizeAdmin, async (request, env) => {
    try {
        const { results } = await env.DB.prepare('SELECT * FROM users').all();
        const mappedUsers = results.map(mapUserToReadable); // Map semua user
        return new Response(JSON.stringify({ success: true, data: mappedUsers }), { status: 200, headers: { 'Content-Type': 'application/json' } });
    } catch (error) {
        console.error('Get users error:', error);
        return new Response(JSON.stringify({ success: false, message: error.message || 'Internal server error fetching users' }), { status: 500, headers: { 'Content-Type': 'application/json' } });
    }
});

// POST /api/users (Requires authentication and admin role)
router.post('/api/users', authenticate, authorizeAdmin, async (request, env) => {
    try {
        const { username, password, role } = await request.json();

        // Validasi input
        if (!username || !password || !role) {
            return new Response(JSON.stringify({ success: false, message: 'Username, password, and role are required.' }), { status: 400, headers: { 'Content-Type': 'application/json' } });
        }
        if (!['member', 'admin'].includes(role)) {
            return new Response(JSON.stringify({ success: false, message: 'Role must be "member" or "admin".' }), { status: 400, headers: { 'Content-Type': 'application/json' } });
        }

        // Cek apakah username sudah ada
        const { results: existingUser } = await env.DB.prepare('SELECT id_x FROM users WHERE x_01 = ?').bind(username).all();
        if (existingUser && existingUser.length > 0) {
            return new Response(JSON.stringify({ success: false, message: 'Username already exists.' }), { status: 409, headers: { 'Content-Type': 'application/json' } });
        }

        // Hash password (menggunakan fungsi yang diubah)
        const hashedPassword = await hashPassword(password);
        const now = new Date().toISOString();

        const genericData = mapUserToGeneric({
            username: username,
            password_hash: hashedPassword,
            role: role,
            highest_scores_by_op: {}, // Default empty scores
            created_at: now,
            updated_at: now
        });

        // Masukkan data ke D1
        const stmt = env.DB.prepare('INSERT INTO users (x_01, x_02, x_03, x_04, x_06, x_07) VALUES (?, ?, ?, ?, ?, ?)')
                           .bind(genericData.x_01, genericData.x_02, genericData.x_03, genericData.x_04, genericData.x_06, genericData.x_07);
        await stmt.run();

        return new Response(JSON.stringify({ success: true, message: 'User created successfully' }), { status: 201, headers: { 'Content-Type': 'application/json' } });

    } catch (error) {
        console.error('Create user error:', error);
        return new Response(JSON.stringify({ success: false, message: error.message || 'Internal server error during user creation' }), { status: 500, headers: { 'Content-Type': 'application/json' } });
    }
});

// PUT /api/users/:id (Reset password, requires authentication and admin role)
router.put('/api/users/:id', authenticate, authorizeAdmin, async (request, env) => {
    try {
        const userId = request.params.id;
        const { password } = await request.json(); // Hanya izinkan update password untuk demo ini

        if (!password) {
            return new Response(JSON.stringify({ success: false, message: 'New password is required.' }), { status: 400, headers: { 'Content-Type': 'application/json' } });
        }

        // Hash password baru (menggunakan fungsi yang diubah)
        const hashedPassword = await hashPassword(password);
        const now = new Date().toISOString();

        // Update password di D1
        const stmt = env.DB.prepare('UPDATE users SET x_02 = ?, x_07 = ? WHERE id_x = ?')
                           .bind(hashedPassword, now, userId);
        const { changes } = await stmt.run();

        if (changes === 0) {
            return new Response(JSON.stringify({ success: false, message: 'User not found or no changes made.' }), { status: 404, headers: { 'Content-Type': 'application/json' } });
        }

        return new Response(JSON.stringify({ success: true, message: 'Password reset successfully.' }), { status: 200, headers: { 'Content-Type': 'application/json' } });

    } catch (error) {
        console.error('Reset password error:', error);
        return new Response(JSON.stringify({ success: false, message: error.message || 'Internal server error during password reset' }), { status: 500, headers: { 'Content-Type': 'application/json' } });
    }
});


// Catch-all for unknown routes
router.all('*', () => new Response('Not Found.', { status: 404 }));

// Export the default handler for the Worker
export default {
    async fetch(request, env) {
        // Handle static assets from the 'public' folder
        const url = new URL(request.url);
        if (url.pathname.startsWith('/hitung-cepat/')) {
            const assetPath = url.pathname.substring('/hitung-cepat/'.length);
            if (assetPath === '' || assetPath.endsWith('/')) {
                // Serve index.html for the root of the app
                return env.ASSETS.fetch(new Request(`${url.origin}/index.html`, request));
            } else {
                // Serve other assets directly
                try {
                    return env.ASSETS.fetch(new Request(`${url.origin}/${assetPath}`, request));
                } catch (e) {
                    // Fallback to router if asset not found, maybe it's an API route
                    console.warn(`Asset not found: ${assetPath}, trying API router.`);
                }
            }
        }

        // Handle API routes
        return router.handle(request, env);
    },
};