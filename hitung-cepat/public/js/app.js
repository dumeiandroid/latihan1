// hitung-cepat/public/js/app.js

// 1. Variabel Global dan Konfigurasi Awal
const API_BASE_URL = '/hitung-cepat/api'; // Base URL untuk API kita
let currentUser = null; // Objek untuk menyimpan data user yang sedang login (akan menggunakan x_xx properties)
let currentToken = null; // Token (username) user yang sedang login
let gameInterval; // Variabel untuk menyimpan interval timer game
let timeLeft = 60; // Waktu awal game dalam detik
let currentScore = 0; // Skor saat ini dalam sesi game
let currentOperation = ''; // Operasi yang dipilih (e.g., 'perkalian')
let currentDifficulty = ''; // Kesulitan yang dipilih (e.g., '1_digit')
let currentQuestion = {}; // Objek untuk menyimpan soal dan jawaban benar

// DOM Elements (Tidak ada perubahan, karena HTML tetap sama)
const appContent = document.getElementById('app-content');
const mainNav = document.getElementById('main-nav');
const authStatus = document.getElementById('auth-status');

const loginSection = document.getElementById('login-section');
const loginForm = document.getElementById('login-form');
const loginError = document.getElementById('login-error');

const dashboardSection = document.getElementById('dashboard-section');
const dashboardUsername = document.getElementById('dashboard-username');
const dashboardRole = document.getElementById('dashboard-role');
const userHighestScoresList = document.getElementById('user-highest-scores');
const btnStartGameDashboard = document.getElementById('btn-start-game');

const gameSection = document.getElementById('game-section');
const operationSelect = document.getElementById('operation-select');
const difficultySelect = document.getElementById('difficulty-select');
const startGameBtn = document.getElementById('start-game-btn');
const gameArea = document.getElementById('game-area');
const timerDisplay = document.getElementById('time-left');
const scoreDisplay = document.getElementById('current-score');
const questionDisplay = document.getElementById('question');
const answerOptionsDiv = document.getElementById('answer-options');
const feedbackMessage = document.getElementById('feedback');
const gameResultsDiv = document.getElementById('game-results');
const finalScoreDisplay = document.getElementById('final-score');
const newHighestScoreMsg = document.getElementById('new-highest-score-msg');
const playAgainBtn = document.getElementById('play-again-btn');
const backToDashboardBtn = document.getElementById('back-to-dashboard-btn');

const leaderboardSection = document.getElementById('leaderboard-section');
const leaderboardOpSelect = document.getElementById('leaderboard-op-select');
const showLeaderboardBtn = document.getElementById('show-leaderboard-btn');
const leaderboardResultsDiv = document.getElementById('leaderboard-results');
const leaderboardOperationName = document.getElementById('leaderboard-operation-name');
const top3TableBody = document.querySelector('#top3-table tbody');
const yourRankDisplay = document.getElementById('your-rank-display');

const adminPanelSection = document.getElementById('admin-panel-section');
const navAdminPanel = document.getElementById('nav-admin-panel');
const refreshUsersBtn = document.getElementById('refresh-users-btn');
const usersTableBody = document.querySelector('#users-table tbody');
const createUserForm = document.getElementById('create-user-form');
const newUsernameInput = document.getElementById('new-username');
const newPasswordInput = document.getElementById('new-password');
const newRoleSelect = document.getElementById('new-role');
const createUserMessage = document.getElementById('create-user-message');


// 2. Fungsi Utilitas (Menampilkan/Menyembunyikan Bagian UI)
function showSection(sectionElement) {
    const sections = appContent.querySelectorAll('section');
    sections.forEach(sec => sec.style.display = 'none');
    sectionElement.style.display = 'block';
}

function showMessage(element, message, isError = false) {
    element.textContent = message;
    element.className = isError ? 'error-message' : 'success-message';
    element.style.display = 'block';
    setTimeout(() => {
        element.style.display = 'none';
        element.textContent = '';
    }, 5000); // Pesan hilang setelah 5 detik
}

function updateNavActiveState(activeId) {
    const navLinks = mainNav.querySelectorAll('a');
    navLinks.forEach(link => {
        if (link.id === activeId) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// 3. Fungsi API (Interaksi dengan Backend Worker)
async function callApi(endpoint, method = 'GET', data = null, needsAuth = true) {
    const headers = {
        'Content-Type': 'application/json',
    };
    if (needsAuth && currentToken) {
        headers['Authorization'] = `Bearer ${currentToken}`;
    }

    const options = {
        method: method,
        headers: headers,
    };
    if (data) {
        options.body = JSON.stringify(data);
    }

    try {
        const response = await fetch(`${API_BASE_URL}${endpoint}`, options);
        const result = await response.json();
        if (!response.ok) {
            throw new Error(result.message || 'Something went wrong');
        }
        return result;
    } catch (error) {
        console.error('API Error:', error);
        throw error;
    }
}

// 4. Logika Otentikasi dan Manajemen Sesi
async function handleLogin(e) {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    try {
        loginError.textContent = ''; // Hapus pesan error sebelumnya
        const result = await callApi('/login', 'POST', { username, password }, false); // Tidak perlu auth untuk login
        if (result.success) {
            // Mapping data user dari backend (yang mungkin menggunakan x_xx) ke properti yang lebih jelas di frontend
            currentUser = {
                id_user: result.user.id_user,
                username: result.user.username, // Ini sudah diconvert di worker.js
                role: result.user.role,       // Ini sudah diconvert di worker.js
                highest_scores_by_op: result.user.highest_scores_by_op // Ini sudah diconvert di worker.js
            };
            currentToken = result.token;
            localStorage.setItem('userToken', currentToken); // Simpan token di localStorage
            localStorage.setItem('currentUser', JSON.stringify(currentUser)); // Simpan user info
            renderApp();
        } else {
            showMessage(loginError, result.message || 'Login failed', true);
        }
    } catch (error) {
        showMessage(loginError, error.message || 'An error occurred during login', true);
    }
}

function handleLogout() {
    currentUser = null;
    currentToken = null;
    localStorage.removeItem('userToken');
    localStorage.removeItem('currentUser');
    renderApp(); // Kembali ke halaman login
}

// 5. Logika Dashboard
function renderDashboard() {
    if (!currentUser) return;

    // Menggunakan properti yang sudah di-map di `currentUser`
    dashboardUsername.textContent = currentUser.username;
    dashboardRole.textContent = currentUser.role.charAt(0).toUpperCase() + currentUser.role.slice(1);

    userHighestScoresList.innerHTML = '';
    // Mengakses highest_scores_by_op dari objek currentUser yang sudah di-map
    const scores = currentUser.highest_scores_by_op || {};
    const operations = ['penjumlahan', 'pengurangan', 'perkalian', 'pembagian', 'akar', 'pangkat'];

    operations.forEach(op => {
        const score = scores[op] !== undefined ? scores[op] : 0;
        const li = document.createElement('li');
        li.textContent = `${op.charAt(0).toUpperCase() + op.slice(1)}: ${score}`;
        userHighestScoresList.appendChild(li);
    });

    showSection(dashboardSection);
    updateNavActiveState('nav-dashboard');
}

// 6. Logika Game Matematika (Tidak ada perubahan di sini karena ini logika frontend murni)
function generateQuestion() {
    let num1, num2, answer, options = new Set();
    const min = currentDifficulty === '1_digit' ? 1 : 10;
    const max = currentDifficulty === '1_digit' ? 9 : 99;

    let questionText = '';

    while (true) { // Loop untuk memastikan soal valid (misal: pembagian tidak nol)
        num1 = Math.floor(Math.random() * (max - min + 1)) + min;
        num2 = Math.floor(Math.random() * (max - min + 1)) + min;

        switch (currentOperation) {
            case 'penjumlahan':
                questionText = `${num1} + ${num2} = ?`;
                answer = num1 + num2;
                break;
            case 'pengurangan':
                // Pastikan hasil tidak negatif untuk kesederhanaan
                if (num1 < num2) [num1, num2] = [num2, num1]; // Swap jika num1 lebih kecil
                questionText = `${num1} - ${num2} = ?`;
                answer = num1 - num2;
                break;
            case 'perkalian':
                questionText = `${num1} x ${num2} = ?`;
                answer = num1 * num2;
                break;
            case 'pembagian':
                // Pastikan num1 adalah kelipatan num2 dan num2 bukan 0
                if (num2 === 0) continue;
                num1 = num1 * num2; // Pastikan num1 adalah kelipatan num2
                questionText = `${num1} / ${num2} = ?`;
                answer = num1 / num2;
                if (answer % 1 !== 0) continue; // Pastikan hasil bulat
                break;
            case 'akar':
                // Cari angka yang akarnya bulat dan dalam rentang digit
                const originalNum = Math.floor(Math.random() * 10) + 2; // Akar dari 2-11
                num1 = originalNum * originalNum;
                questionText = `√${num1} = ?`;
                answer = originalNum;
                break;
            case 'pangkat':
                // Batasi basis dan pangkat agar hasil tidak terlalu besar
                num1 = Math.floor(Math.random() * (currentDifficulty === '1_digit' ? 3 : 5)) + 2; // Basis 2-4 atau 2-6
                num2 = Math.floor(Math.random() * (currentDifficulty === '1_digit' ? 2 : 3)) + 2; // Pangkat 2-3 atau 2-4
                if (currentDifficulty === '1_digit' && (num1 > 3 || num2 > 3)) continue; // Jaga agar tetap 1 digit hasil jika memungkinkan
                if (currentDifficulty === '2_digit' && (num1 > 6 || num2 > 4)) continue;
                answer = Math.pow(num1, num2);
                if (answer > 9999) continue; // Hindari hasil terlalu besar
                questionText = `${num1}^${num2} = ?`;
                break;
            default:
                questionText = 'Error: Invalid operation';
                answer = 0;
                break;
        }

        // Pastikan jawaban valid dan dalam rentang yang wajar
        if (!isNaN(answer) && isFinite(answer) && answer !== null) {
            break; // Keluar dari loop jika soal valid
        }
    }

    options.add(answer);
    while (options.size < 4) {
        let wrongAnswer;
        if (currentOperation === 'akar') {
            // Untuk akar, pilihan salah harus mirip dengan akar bulat
            wrongAnswer = Math.floor(Math.random() * 5) + Math.max(1, answer - 2);
            if (wrongAnswer === answer || wrongAnswer <= 0) continue;
        } else if (currentOperation === 'pembagian' && answer % 1 !== 0) {
            // Jika hasilnya pecahan, jangan buat pilihan bulat (untuk kesederhanaan, kita sudah memastikan bulat)
            wrongAnswer = answer + (Math.random() > 0.5 ? 1 : -1) * Math.floor(Math.random() * 5 + 1);
        }
        else {
            wrongAnswer = answer + (Math.random() > 0.5 ? 1 : -1) * Math.floor(Math.random() * 10 + 1);
            // Hindari jawaban negatif untuk penjumlahan/perkalian/pangkat
            if (currentOperation === 'penjumlahan' || currentOperation === 'perkalian' || currentOperation === 'pangkat') {
                 if (wrongAnswer <= 0) wrongAnswer = answer + Math.floor(Math.random() * 10 + 1);
            }
             // Untuk 1 digit, usahakan jawaban dalam rentang 1-20
            if (currentDifficulty === '1_digit' && (wrongAnswer < 1 || wrongAnswer > 20)) {
                wrongAnswer = Math.floor(Math.random() * 20) + 1;
            }
        }
        options.add(wrongAnswer);
    }

    const shuffledOptions = Array.from(options).sort(() => Math.random() - 0.5);

    currentQuestion = {
        text: questionText,
        answer: answer,
        options: shuffledOptions
    };

    questionDisplay.textContent = currentQuestion.text;
    answerOptionsDiv.innerHTML = '';
    currentQuestion.options.forEach(opt => {
        const btn = document.createElement('button');
        btn.classList.add('answer-option');
        btn.textContent = opt;
        btn.onclick = () => checkAnswer(opt);
        answerOptionsDiv.appendChild(btn);
    });
}

function startGame() {
    currentOperation = operationSelect.value;
    currentDifficulty = difficultySelect.value;
    timeLeft = 60;
    currentScore = 0;
    timerDisplay.textContent = timeLeft;
    scoreDisplay.textContent = currentScore;
    feedbackMessage.textContent = '';
    gameResultsDiv.style.display = 'none'; // Sembunyikan hasil game sebelumnya
    gameArea.style.display = 'block'; // Tampilkan area game

    generateQuestion();

    clearInterval(gameInterval); // Pastikan tidak ada interval yang berjalan
    gameInterval = setInterval(() => {
        timeLeft--;
        timerDisplay.textContent = timeLeft;
        if (timeLeft <= 0) {
            endGame();
        }
    }, 1000);
}

async function checkAnswer(selectedAnswer) {
    if (timeLeft <= 0) return; // Jangan proses jika game sudah berakhir

    if (parseInt(selectedAnswer) === currentQuestion.answer) {
        currentScore++;
        scoreDisplay.textContent = currentScore;
        feedbackMessage.textContent = 'Benar!';
        feedbackMessage.classList.remove('error-message');
        feedbackMessage.classList.add('success-message');
    } else {
        feedbackMessage.textContent = `Salah! Jawaban benar: ${currentQuestion.answer}`;
        feedbackMessage.classList.remove('success-message');
        feedbackMessage.classList.add('error-message');
    }

    // Soal langsung berganti
    setTimeout(() => {
        feedbackMessage.textContent = ''; // Hapus feedback
        generateQuestion();
    }, 500); // Beri jeda singkat untuk melihat feedback
}

async function endGame() {
    clearInterval(gameInterval);
    gameArea.style.display = 'none';
    finalScoreDisplay.textContent = currentScore;

    // Submit skor ke backend
    try {
        const result = await callApi('/submit-score', 'POST', {
            operation: currentOperation,
            score: currentScore
        }, true);
        if (result.success) {
            newHighestScoreMsg.textContent = result.message;
            if (result.new_highest_score !== undefined) {
                 // Perbarui data currentUser di frontend yang sudah di-map
                currentUser.highest_scores_by_op = currentUser.highest_scores_by_op || {};
                currentUser.highest_scores_by_op[currentOperation] = result.new_highest_score;
                localStorage.setItem('currentUser', JSON.stringify(currentUser)); // Simpan perubahan
            }
        } else {
            newHighestScoreMsg.textContent = `Gagal menyimpan skor: ${result.message}`;
            newHighestScoreMsg.classList.add('error-message');
        }
    } catch (error) {
        newHighestScoreMsg.textContent = `Error: ${error.message}`;
        newHighestScoreMsg.classList.add('error-message');
    }

    gameResultsDiv.style.display = 'block';
}

// 7. Logika Leaderboard
async function renderLeaderboard() {
    const selectedOperation = leaderboardOpSelect.value;
    leaderboardOperationName.textContent = selectedOperation.charAt(0).toUpperCase() + selectedOperation.slice(1);
    top3TableBody.innerHTML = '';
    yourRankDisplay.textContent = 'Memuat peringkat Anda...';

    try {
        // Ambil top 3 dari API
        const top3Result = await callApi(`/leaderboard/${selectedOperation}`, 'GET', null, false); // Leaderboard bisa dilihat semua orang
        if (top3Result.success) {
            top3Result.top_3.forEach((entry, index) => {
                const row = top3TableBody.insertRow();
                row.insertCell(0).textContent = index + 1;
                row.insertCell(1).textContent = entry.username; // Username sudah di-map di worker
                row.insertCell(2).textContent = entry.score;
            });
            if (top3Result.top_3.length === 0) {
                 const row = top3TableBody.insertRow();
                 const cell = row.insertCell(0);
                 cell.colSpan = 3;
                 cell.textContent = 'Belum ada data peringkat untuk operasi ini.';
                 cell.style.textAlign = 'center';
            }
        } else {
            console.error("Failed to fetch top 3:", top3Result.message);
            top3TableBody.innerHTML = `<tr><td colspan="3" class="error-message">${top3Result.message}</td></tr>`;
        }

        // Ambil peringkat user sendiri
        // Menggunakan currentUser.role (sudah di-map)
        if (currentUser && currentUser.role === 'member') {
            const myRankResult = await callApi(`/my-rank/${selectedOperation}`, 'GET', null, true);
            if (myRankResult.success) {
                let rankMessage = `Peringkat Anda: ${myRankResult.your_rank}`;
                if (myRankResult.your_score === 0 && myRankResult.your_rank > myRankResult.total_members) {
                    rankMessage += ` (Belum ada skor tercatat untuk operasi ini atau skor Anda 0)`;
                } else {
                    rankMessage += ` (Skor Anda: ${myRankResult.your_score})`;
                }
                yourRankDisplay.textContent = rankMessage;
            } else {
                console.error("Failed to fetch your rank:", myRankResult.message);
                yourRankDisplay.textContent = `Gagal memuat peringkat Anda: ${myRankResult.message}`;
                yourRankDisplay.classList.add('error-message');
            }
        } else {
             yourRankDisplay.textContent = 'Login sebagai Member untuk melihat peringkat Anda.';
             yourRankDisplay.classList.remove('error-message', 'success-message');
        }

        leaderboardResultsDiv.style.display = 'block';

    } catch (error) {
        console.error('Error loading leaderboard:', error);
        top3TableBody.innerHTML = `<tr><td colspan="3" class="error-message">Error: ${error.message}</td></tr>`;
        yourRankDisplay.textContent = `Error: ${error.message}`;
        yourRankDisplay.classList.add('error-message');
    }

    showSection(leaderboardSection);
    updateNavActiveState('nav-leaderboard');
}


// 8. Logika Panel Admin
async function renderAdminPanel() {
    // Menggunakan currentUser.role (sudah di-map)
    if (!currentUser || currentUser.role !== 'admin') {
        // Ini seharusnya tidak terpanggil jika nav admin sudah disembunyikan
        return;
    }

    usersTableBody.innerHTML = '<tr><td colspan="5" style="text-align:center;">Memuat data pengguna...</td></tr>';
    try {
        const result = await callApi('/users', 'GET', null, true); // Perlu auth
        if (result.success) {
            usersTableBody.innerHTML = ''; // Kosongkan tabel
            result.data.forEach(user => { // User di sini sudah di-map di worker
                const row = usersTableBody.insertRow();
                row.insertCell(0).textContent = user.id_user; // id_x
                row.insertCell(1).textContent = user.username; // x_01
                row.insertCell(2).textContent = user.role;    // x_03
                // Tampilkan JSON highest_scores_by_op dalam bentuk yang lebih mudah dibaca
                const scoresCell = row.insertCell(3);
                scoresCell.innerHTML = `<code>${JSON.stringify(user.highest_scores_by_op || {}, null, 2)}</code>`; // x_04 (sudah di-map)

                const actionCell = row.insertCell(4);
                const resetPwBtn = document.createElement('button');
                resetPwBtn.classList.add('btn', 'danger');
                resetPwBtn.textContent = 'Reset PW';
                // id_user di sini sudah dari hasil mapping di worker
                resetPwBtn.onclick = () => promptResetPassword(user.id_user, user.username);
                actionCell.appendChild(resetPwBtn);
            });
        } else {
            showMessage(createUserMessage, result.message || 'Failed to load users', true);
        }
    } catch (error) {
        showMessage(createUserMessage, `Error loading users: ${error.message}`, true);
    }

    showSection(adminPanelSection);
    updateNavActiveState('nav-admin');
}

async function handleCreateUser(e) {
    e.preventDefault();
    const username = newUsernameInput.value;
    const password = newPasswordInput.value;
    const role = newRoleSelect.value;

    try {
        createUserMessage.textContent = '';
        // Mengirim username, password, role seperti biasa; mapping ke x_xx terjadi di worker
        const result = await callApi('/users', 'POST', { username, password, role }, true);
        if (result.success) {
            showMessage(createUserMessage, `User ${username} created successfully!`, false);
            newUsernameInput.value = '';
            newPasswordInput.value = '';
            newRoleSelect.value = 'member'; // Reset ke default
            renderAdminPanel(); // Refresh daftar user
        } else {
            showMessage(createUserMessage, result.message || 'Failed to create user', true);
        }
    } catch (error) {
        showMessage(createUserMessage, error.message || 'An error occurred during user creation', true);
    }
}

async function promptResetPassword(userId, username) {
    const newPassword = prompt(`Masukkan password baru untuk user ${username}:`);
    if (newPassword) {
        try {
            // Mengirim password baru; mapping ke x_xx terjadi di worker
            const result = await callApi(`/users/${userId}`, 'PUT', { password: newPassword }, true);
            if (result.success) {
                alert(`Password untuk ${username} berhasil direset.`);
                renderAdminPanel(); // Refresh tabel user
            } else {
                alert(`Gagal mereset password untuk ${username}: ${result.message}`);
            }
        } catch (error) {
            alert(`Error mereset password: ${error.message}`);
        }
    }
}

// 9. Event Listeners (Menghubungkan UI dengan Logika)
document.addEventListener('DOMContentLoaded', () => {
    // Cek sesi saat halaman dimuat
    const storedToken = localStorage.getItem('userToken');
    const storedUser = localStorage.getItem('currentUser');
    if (storedToken && storedUser) {
        try {
            // Penting: Parse JSON dan tetapkan ke currentUser
            currentUser = JSON.parse(storedUser);
            currentToken = storedToken;
            renderApp(); // Render aplikasi berdasarkan sesi
        } catch (e) {
            console.error("Failed to parse stored user data:", e);
            handleLogout(); // Hapus data sesi yang rusak
        }
    } else {
        showSection(loginSection); // Tampilkan login jika tidak ada sesi
    }
});

// Fungsi utama untuk merender tampilan aplikasi berdasarkan status login/role
function renderApp() {
    if (currentUser) {
        // Tampilkan status login dan navigasi
        // Menggunakan properti yang sudah di-map di `currentUser`
        authStatus.innerHTML = `Selamat datang, <strong>${currentUser.username}</strong> (<span style="color:${currentUser.role === 'admin' ? 'red' : 'green'};">${currentUser.role.charAt(0).toUpperCase() + currentUser.role.slice(1)}</span>)`;
        mainNav.style.display = 'block';

        // Tampilkan/sembunyikan link admin panel berdasarkan role (sudah di-map)
        if (currentUser.role === 'admin') {
            navAdminPanel.style.display = 'list-item';
        } else {
            navAdminPanel.style.display = 'none';
        }

        // Default ke dashboard setelah login
        renderDashboard();

    } else {
        // Kembali ke login
        authStatus.textContent = '';
        mainNav.style.display = 'none';
        showSection(loginSection);
    }
}

// Event Listeners for Forms and Buttons (Tidak ada perubahan di sini)
loginForm.addEventListener('submit', handleLogin);
document.getElementById('nav-logout').addEventListener('click', handleLogout);

document.getElementById('nav-dashboard').addEventListener('click', (e) => { e.preventDefault(); renderDashboard(); });
document.getElementById('nav-play').addEventListener('click', (e) => { e.preventDefault(); showSection(gameSection); updateNavActiveState('nav-play'); });
document.getElementById('nav-leaderboard').addEventListener('click', (e) => { e.preventDefault(); renderLeaderboard(); }); // Langsung render saat klik
document.getElementById('nav-admin').addEventListener('click', (e) => { e.preventDefault(); renderAdminPanel(); });

btnStartGameDashboard.addEventListener('click', () => {
    showSection(gameSection);
    updateNavActiveState('nav-play');
});

startGameBtn.addEventListener('click', startGame);
playAgainBtn.addEventListener('click', startGame); // Memulai game baru dari hasil
backToDashboardBtn.addEventListener('click', () => {
    renderDashboard();
});

showLeaderboardBtn.addEventListener('click', renderLeaderboard); // Untuk me-refresh leaderboard

refreshUsersBtn.addEventListener('click', renderAdminPanel); // Refresh user list di admin panel
createUserForm.addEventListener('submit', handleCreateUser);