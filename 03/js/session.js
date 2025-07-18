// Lokasi File: public/js/session.js

// Konfigurasi API dan Sesi
// PASTIKAN USERS_TABLE_NAME INI SESUAI DENGAN NAMA TABEL PENGGUNA DI BACKEND ANDA (misal: 'nilai1')
const API_BASE_URL = '/api/contacts'; 
const USERS_TABLE_NAME = 'nilai1';    
const SESSION_KEY = 'user_session';
const COOKIE_NAME = 'user_token';

/**
 * Fungsi bantu untuk membaca nilai cookie berdasarkan namanya.
 * @param {string} name - Nama cookie yang ingin dibaca.
 * @returns {string|null} Nilai cookie atau null jika tidak ditemukan.
 */
function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
    return null;
}

/**
 * Fungsi bantu untuk menghapus cookie berdasarkan namanya.
 * @param {string} name - Nama cookie yang ingin dihapus.
 */
function removeCookie(name) {
    document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/`;
}

/**
 * Objek global untuk mengelola sesi pengguna.
 * Tersedia melalui window.SessionManager.
 */
window.SessionManager = {
    /**
     * Memeriksa apakah pengguna saat ini sedang login dan sesi mereka valid.
     * @returns {object|null} Objek data pengguna jika login dan valid, atau null jika tidak.
     */
    isLoggedIn: function() {
        const session = localStorage.getItem(SESSION_KEY);
        const cookie = getCookie(COOKIE_NAME);
        
        if (session) {
            try {
                const userData = JSON.parse(session);
                // Jika ada tanggal kadaluarsa (expiry) di sesi, periksa.
                if (userData.expiry) {
                     const today = new Date().toISOString().split('T')[0];
                     if (userData.expiry >= today) {
                         return userData; // Sesi valid dan belum kadaluarsa
                     } else {
                         // Sesi kadaluarsa, bersihkan dan anggap tidak login
                         console.warn('Session expired (x_03). Logging out.');
                         localStorage.removeItem(SESSION_KEY);
                         removeCookie(COOKIE_NAME);
                         return null;
                     }
                } else { 
                    // Jika tidak ada tanggal kadaluarsa, anggap valid selama data ada
                    // (ini tergantung implementasi backend Anda)
                    return userData; 
                }
            } catch (error) {
                // Tangani kesalahan parsing sesi dari localStorage
                console.error('Error parsing session from localStorage:', error);
                localStorage.removeItem(SESSION_KEY); // Hapus sesi yang rusak
                removeCookie(COOKIE_NAME);
                return null;
            }
        }
        
        // Jika tidak ada sesi di localStorage tetapi ada cookie,
        // Ini bisa berarti sesi browser telah dihapus, tapi cookie masih ada.
        // Dalam kasus ini, kita paksa user untuk login kembali.
        if (cookie) {
            console.log("Cookie found, but no localStorage session. User needs to re-authenticate.");
            // Tidak melakukan redirect langsung di sini, tapi requireLogin akan melakukannya.
            return null; 
        }

        return null; // Tidak ada sesi yang ditemukan sama sekali
    },

    /**
     * Mendapatkan data pengguna dari sesi yang sedang aktif.
     * Ini hanya pembungkus untuk isLoggedIn().
     * @returns {object|null} Objek data pengguna jika login, atau null.
     */
    getCurrentUser: function() {
        return this.isLoggedIn();
    },

    /**
     * Membersihkan semua data sesi (localStorage dan cookie) dan mengarahkan ke halaman login.
     */
    logout: function() {
        localStorage.removeItem(SESSION_KEY);
        removeCookie(COOKIE_NAME);
        // Alert ini opsional, bisa dihilangkan jika halaman logout.html sudah ada pesan visual.
        alert('Anda telah logout.'); 
        window.location.href = 'login.html';
    },

    /**
     * Memerlukan pengguna untuk login untuk mengakses halaman saat ini.
     * Jika tidak login, akan otomatis diarahkan ke login.html.
     * @returns {boolean} True jika pengguna login, false jika tidak (dan redirect).
     */
    requireLogin: function() {
        if (!this.isLoggedIn()) {
            window.location.href = 'login.html'; // PENGALIHAN UTAMA KE LOGIN.HTML
            return false;
        }
        return true;
    }
};