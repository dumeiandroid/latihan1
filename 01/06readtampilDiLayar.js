const currentTable = 'cover'; // Nama tabel yang diinginkan adalah 'cover'
const baseUrl = 'https://lidan-co-id.pages.dev/api/contacts';

// Fungsi untuk memuat data menggunakan Fetch API dan menampilkannya di div#outputArray
function loadAllXDataWithFetchAndDisplayInDiv() {
    const url = `${baseUrl}?table=${currentTable}`;
    const outputDiv = document.getElementById("outputArray"); // Dapatkan elemen div

    // Set pesan loading awal
    if (outputDiv) {
        outputDiv.innerHTML = '<p><i class="fas fa-spinner fa-spin me-2"></i>Loading data...</p>';
    }

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
        if (outputDiv) { // Pastikan elemen div ditemukan
            if (data.data && Array.isArray(data.data) && data.data.length > 0) {
                // Gunakan JSON.stringify untuk mengubah seluruh array data menjadi string yang diformat.
                // Parameter null, 2 akan menambahkan indentasi 2 spasi agar mudah dibaca.
                const formattedDataString = JSON.stringify(data.data, null, 2);
                
                // Masukkan string yang sudah diformat ke dalam textContent div
                // Menggunakan textContent akan mencegah masalah XSS
                outputDiv.textContent = formattedDataString;

            } else {
                outputDiv.textContent = `Tidak ada data ditemukan untuk tabel '${currentTable}' atau respons kosong.`;
            }
        }
    })
    .catch(error => {
        console.error("Error saat memuat data menggunakan Fetch API:", error);
        if (outputDiv) {
            outputDiv.innerHTML = `<p style="color: red;">Error loading data: ${error.message}</p>`;
        }
    });
}

// Panggil fungsi ini agar dijalankan saat DOM selesai dimuat
document.addEventListener('DOMContentLoaded', loadAllXDataWithFetchAndDisplayInDiv);