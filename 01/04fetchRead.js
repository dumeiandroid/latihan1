// Asumsi kode ini berada di dalam tag <script> di HTML Anda atau di file JavaScript terpisah.

const currentTable = 'cover'; // Nama tabel yang diinginkan adalah 'cover'
const baseUrl = 'https://lidan-co-id.pages.dev/api/contacts';

// Fungsi untuk memuat data menggunakan Fetch API dan menampilkan x_03 di konsol
function loadDataWithFetchAndLogX03() {
    // Bangun URL dengan parameter tabel
    const url = `${baseUrl}?table=${currentTable}`;

    fetch(url, {
        method: 'GET',
        headers: {
            // Header X-Table-Name masih relevan jika API memerlukannya
            'X-Table-Name': currentTable
        }
    })
    .then(response => {
        // Cek apakah respons OK (status kode 200-299)
        if (!response.ok) {
            // Jika tidak OK, lemparkan error agar ditangkap oleh .catch()
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        // Parse respons sebagai JSON
        return response.json();
    })
    .then(data => {
        // Pastikan ada data dan data tersebut adalah array tidak kosong
        if (data.data && Array.isArray(data.data) && data.data.length > 0) {
            // Memberi nama variabel untuk array yang hanya berisi nilai x_03
            const dataX03Array = data.data.map(item => item.x_03);

            // Menampilkan variabel tersebut dengan console.log
            console.log("--- Data x_03 dari tabel 'cover' (menggunakan Fetch API) ---");
            console.log(dataX03Array);

            // Optional: Menampilkan setiap item x_03 secara detail
            data.data.forEach((item, index) => {
                console.log(`Item ${index + 1} (id_x: ${item.id_x || 'N/A'}): x_03 = ${item.x_03 || ''}`);
            });

        } else {
            console.log("Tidak ada data ditemukan untuk tabel 'cover' atau respons kosong.");
        }
    })
    .catch(error => {
        // Tangani error yang terjadi selama fetch atau parsing
        console.error("Error saat memuat data menggunakan Fetch API:", error);
    });
}

// Panggil fungsi ini agar dijalankan saat DOM selesai dimuat
document.addEventListener('DOMContentLoaded', loadDataWithFetchAndLogX03);

// Catatan: Jika Anda juga menggunakan jQuery di halaman, pastikan DOMContentLoaded tidak berkonflik
// dengan $(document).ready(). Umumnya, Anda bisa memilih salah satu atau menempatkan
// kode fetch ini di dalam $(document).ready() jika jQuery adalah pendekatan utama Anda.
// Contoh dengan jQuery ready (jika Anda ingin ini dijalankan setelah jQuery siap):
// $(document).ready(function() {
//     loadDataWithFetchAndLogX03();
// });