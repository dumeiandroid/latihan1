// Nama tabel yang diinginkan
const currentTable = 'cover';
// URL API yang telah diubah namanya dan dinamis
const baseUrl = 'https://lidan-co-id.pages.dev/api/contacts_filter_dinamis'; 

// Fungsi untuk memuat data dengan filter dan menampilkannya sebagai tabel HTML
function loadFilteredDataX04Emotional() {
    const tableContainer = document.getElementById("tableContainer");

    if (!tableContainer) {
        console.error("Elemen dengan ID 'tableContainer' tidak ditemukan di HTML.");
        return;
    }

    tableContainer.innerHTML = '<p class="text-center py-4"><i class="fas fa-spinner fa-spin me-2"></i>Loading data where X_04 contains "EMOSIONAL"...</p>';

    // Bangun URL dengan parameter tabel dan filter x_04_like=EMOSIONAL
    // API contacts_filter_dinamis akan memproses parameter ini untuk pencarian 'mengandung'
    const url = `${baseUrl}?table=${currentTable}&x_04_like=EMOSIONAL`; // <-- FILTER BARU DI SINI

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
        const data = apiResponse.data; 

        if (data && Array.isArray(data) && data.length > 0) {
            const table = document.createElement('table');
            table.classList.add('table', 'table-striped', 'table-hover', 'mb-0'); 
            
            const responsiveDiv = document.createElement('div');
            responsiveDiv.classList.add('table-responsive-custom'); 
            
            const thead = document.createElement('thead');
            thead.classList.add('table-dark', 'sticky-top'); 
            const headerRow = document.createElement('tr');

            const headers = Object.keys(data[0]); 
            
            headers.forEach(headerText => {
                const th = document.createElement('th');
                th.textContent = headerText.toUpperCase(); 
                headerRow.appendChild(th); 
            });
            thead.appendChild(headerRow);
            table.appendChild(thead);

            const tbody = document.createElement('tbody');
            data.forEach(item => {
                const row = document.createElement('tr'); 
                headers.forEach(key => { 
                    const td = document.createElement('td');
                    td.textContent = item[key] || ''; 
                    row.appendChild(td); 
                });
                tbody.appendChild(row); 
            });
            table.appendChild(tbody); 

            responsiveDiv.appendChild(table);
            tableContainer.innerHTML = ''; 
            tableContainer.appendChild(responsiveDiv);

        } else {
            tableContainer.innerHTML = '<p class="text-center py-4 text-muted">Tidak ada data ditemukan di mana X_04 mengandung "EMOSIONAL".</p>';
        }
    })
    .catch(error => {
        console.error("Error saat memuat data:", error);
        tableContainer.innerHTML = `<p class="text-center py-4 text-danger">Error loading data: ${error.message}</p>`;
    });
}

// Panggil fungsi ini saat seluruh DOM halaman selesai dimuat
document.addEventListener('DOMContentLoaded', loadFilteredDataX04Emotional);