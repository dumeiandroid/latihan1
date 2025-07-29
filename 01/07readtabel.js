const currentTable = 'cover';
const baseUrl = 'https://lidan-co-id.pages.dev/api/contacts';

// Fungsi untuk memuat data dan menampilkannya sebagai tabel HTML
function loadDataAndDisplayAsTable() {
    const url = `${baseUrl}?table=${currentTable}`;
    const tableContainer = document.getElementById("tableContainer");

    if (!tableContainer) {
        console.error("Elemen dengan ID 'tableContainer' tidak ditemukan.");
        return;
    }

    // Tampilkan pesan loading
    tableContainer.innerHTML = '<p class="text-center py-4"><i class="fas fa-spinner fa-spin me-2"></i>Loading data...</p>';

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
    .then(apiResponse => {
        const data = apiResponse.data; // Asumsi data aktual ada di properti 'data'

        if (data && Array.isArray(data) && data.length > 0) {
            // 1. Buat elemen tabel
            const table = document.createElement('table');
            table.classList.add('table', 'table-striped', 'table-hover', 'mb-0'); // Kelas Bootstrap
            
            // Bungkus tabel dalam div responsif jika diinginkan
            const responsiveDiv = document.createElement('div');
            responsiveDiv.classList.add('table-responsive-custom'); // Kelas CSS kustom untuk responsif

            // 2. Buat header tabel (thead)
            const thead = document.createElement('thead');
            thead.classList.add('table-dark', 'sticky-top'); // Kelas Bootstrap
            const headerRow = document.createElement('tr');

            // Ambil semua kunci (nama kolom) dari objek pertama sebagai header
            // Termasuk id_x dan x_01 sampai x_12
            const headers = ['id_x']; // Mulai dengan id_x
            for (let i = 1; i <= 12; i++) {
                headers.push(`x_${i < 10 ? '0' : ''}${i}`);
            }

            headers.forEach(headerText => {
                const th = document.createElement('th');
                th.textContent = headerText.toUpperCase(); // Ubah ke huruf kapital
                headerRow.appendChild(th);
            });
            thead.appendChild(headerRow);
            table.appendChild(thead);

            // 3. Buat body tabel (tbody)
            const tbody = document.createElement('tbody');
            data.forEach(item => {
                const row = document.createElement('tr');

                // Tambahkan sel untuk id_x
                const idCell = document.createElement('td');
                idCell.textContent = item.id_x || '';
                row.appendChild(idCell);

                // Tambahkan sel untuk x_01 sampai x_12
                for (let i = 1; i <= 12; i++) {
                    const key = `x_${i < 10 ? '0' : ''}${i}`;
                    const td = document.createElement('td');
                    td.textContent = item[key] || ''; // Tampilkan nilai atau string kosong jika undefined/null
                    row.appendChild(td);
                }
                tbody.appendChild(row);
            });
            table.appendChild(tbody);
            
            // Hapus pesan loading dan tambahkan tabel ke kontainer
            responsiveDiv.appendChild(table);
            tableContainer.innerHTML = ''; // Hapus konten sebelumnya
            tableContainer.appendChild(responsiveDiv);

        } else {
            tableContainer.innerHTML = '<p class="text-center py-4 text-muted">Tidak ada data ditemukan.</p>';
        }
    })
    .catch(error => {
        console.error("Error saat memuat data:", error);
        tableContainer.innerHTML = `<p class="text-center py-4 text-danger">Error loading data: ${error.message}</p>`;
    });
}

// Panggil fungsi ini saat DOM selesai dimuat
document.addEventListener('DOMContentLoaded', loadDataAndDisplayAsTable);