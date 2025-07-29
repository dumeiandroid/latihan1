// Nama tabel yang diinginkan adalah 'cover'
const currentTable = 'cover';
// URL dasar API, sesuaikan jika endpoint 'contacts' dan 'contacts_filter_dinamis' berbeda path
const baseUrl = 'https://lidan-co-id.pages.dev/api/contacts_filter_dinamis'; // Asumsi API filter berada di path ini

// Fungsi untuk memuat data dengan filter dan menampilkannya sebagai tabel HTML
function loadFilteredDataX01ToX20() {
    // Dapatkan elemen kontainer tabel dari DOM
    const tableContainer = document.getElementById("tableContainer");

    // Periksa apakah elemen kontainer ditemukan di HTML
    if (!tableContainer) {
        console.error("Elemen dengan ID 'tableContainer' tidak ditemukan di HTML.");
        return;
    }

    // Tampilkan pesan loading di kontainer tabel saat data sedang diambil
    tableContainer.innerHTML = '<p class="text-center py-4"><i class="fas fa-spinner fa-spin me-2"></i>Loading data (ID_X > 10) for X_01 to X_20...</p>';

    // Bangun URL dengan parameter tabel dan filter id_x_gt=10
    // API contacts_filter_dinamis akan memproses parameter ini
    const url = `${baseUrl}?table=${currentTable}&id_x_gt=10`; //

    // Lakukan permintaan data menggunakan Fetch API
    fetch(url, {
        method: 'GET',
        headers: {
            // Header X-Table-Name tetap dikirim sesuai kebutuhan API
            'X-Table-Name': currentTable 
        }
    })
    .then(response => {
        // Cek apakah respons dari server sukses (status 2xx)
        if (!response.ok) {
            // Jika tidak sukses, lemparkan error
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json(); // Parse body respons sebagai JSON
    })
    .then(apiResponse => {
        // Ambil array data aktual dari properti 'data' dalam respons API
        const data = apiResponse.data; 

        // Periksa apakah ada data dan data tersebut adalah array tidak kosong
        if (data && Array.isArray(data) && data.length > 0) {
            // Buat elemen tabel HTML baru
            const table = document.createElement('table');
            // Tambahkan kelas Bootstrap untuk styling tabel yang rapi
            table.classList.add('table', 'table-striped', 'table-hover', 'mb-0'); 
            
            // Buat div pembungkus untuk responsivitas tabel dan scrolling
            const responsiveDiv = document.createElement('div');
            responsiveDiv.classList.add('table-responsive-custom'); // Kelas CSS kustom Anda untuk responsivitas
            
            // Buat bagian header tabel (<thead>)
            const thead = document.createElement('thead');
            thead.classList.add('table-dark', 'sticky-top'); // Kelas Bootstrap untuk header gelap dan sticky
            const headerRow = document.createElement('tr'); // Baris untuk header

            // Dapatkan semua kunci (nama kolom) dari objek data pertama sebagai header tabel.
            // Ini akan secara otomatis menangkap id_x dan semua x_01 hingga x_20 yang ada di data.
            const headers = Object.keys(data[0]); 
            
            // Iterasi setiap nama kolom untuk membuat elemen <th> (table header)
            headers.forEach(headerText => {
                const th = document.createElement('th');
                th.textContent = headerText.toUpperCase(); // Tampilkan teks header dalam huruf kapital
                headerRow.appendChild(th); // Tambahkan <th> ke baris header
            });
            thead.appendChild(headerRow); // Tambahkan baris header ke thead
            table.appendChild(thead); // Tambahkan thead ke tabel

            // Buat bagian body tabel (<tbody>)
            const tbody = document.createElement('tbody');
            // Iterasi setiap objek (item) dalam array data (setiap baris)
            data.forEach(item => {
                const row = document.createElement('tr'); // Buat baris baru untuk setiap item
                // Iterasi setiap header (kolom) untuk membuat elemen <td> (table data/cell)
                headers.forEach(key => { 
                    const td = document.createElement('td');
                    td.textContent = item[key] || ''; // Isi sel dengan nilai data, jika tidak ada, tampilkan string kosong
                    row.appendChild(td); // Tambahkan <td> ke baris
                });
                tbody.appendChild(row); // Tambahkan baris ke body tabel
            });
            table.appendChild(tbody); // Tambahkan tbody ke tabel

            // Setelah tabel selesai dibangun, hapus pesan loading dan tampilkan tabel
            responsiveDiv.appendChild(table);
            tableContainer.innerHTML = ''; // Kosongkan konten kontainer
            tableContainer.appendChild(responsiveDiv); // Tambahkan div responsif yang berisi tabel

        } else {
            // Jika tidak ada data yang ditemukan setelah filter
            tableContainer.innerHTML = '<p class="text-center py-4 text-muted">Tidak ada data ditemukan dengan ID_X lebih besar dari 10.</p>';
        }
    })
    .catch(error => {
        // Tangani error yang terjadi selama permintaan fetch
        console.error("Error saat memuat data:", error);
        tableContainer.innerHTML = `<p class="text-center py-4 text-danger">Error loading data: ${error.message}</p>`;
    });
}

// Panggil fungsi ini agar dijalankan setelah seluruh konten DOM halaman selesai dimuat
document.addEventListener('DOMContentLoaded', loadFilteredDataX01ToX20);