const currentTable = 'cover'; // Nama tabel yang diinginkan adalah 'cover'
const baseUrl = 'https://lidan-co-id.pages.dev/api/contacts';

// Fungsi untuk memuat data menggunakan Fetch API dan menampilkan x_01 s/d x_12 di konsol
function loadAllXDataWithFetchAndLogExtended() {
    const url = `${baseUrl}?table=${currentTable}`;

    fetch(url, {
        method: 'GET',
        headers: {
            'X-Table-Name': currentTable
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        if (data.data && Array.isArray(data.data) && data.data.length > 0) {
            console.log(`--- Seluruh Data Kolom (x_01 s/d x_12) dari tabel '${currentTable}' (menggunakan Fetch API) ---`);

            data.data.forEach((item, index) => {
                console.log(`--- Data Item ke-${index + 1} (id_x: ${item.id_x || 'N/A'}) ---`);
                
                // Menampilkan setiap kolom dari x_01 hingga x_12
                // Perubahan di sini: loop sampai i <= 12
                for (let i = 1; i <= 12; i++) { 
                    const key = `x_${i < 10 ? '0' : ''}${i}`; // Memastikan format x_01, x_02, ... x_12
                    console.log(`${key}: ${item[key] || ''}`); 
                }
                console.log('------------------------------'); 
            });

            console.log("\n--- Seluruh Array Data Mentah (mirip print_r) ---");
            console.log(data.data);

            console.log("\n--- Seluruh Array Data dalam Format Tabel (console.table) ---");
            console.table(data.data);

        } else {
            console.log(`Tidak ada data ditemukan untuk tabel '${currentTable}' atau respons kosong.`);
        }
    })
    .catch(error => {
        console.error("Error saat memuat data menggunakan Fetch API:", error);
    });
}

// Panggil fungsi ini agar dijalankan saat DOM selesai dimuat
document.addEventListener('DOMContentLoaded', loadAllXDataWithFetchAndLogExtended);