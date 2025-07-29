const currentTable = 'cover';
// Ubah baseUrl untuk menunjuk ke endpoint filter jika perlu, atau tambahkan parameter ke endpoint contacts
const baseUrl = 'https://lidan-co-id.pages.dev/api/contacts_filter'; 

function loadFilteredDataAndDisplayAsTable() {
    const tableContainer = document.getElementById("tableContainer");
    if (!tableContainer) {
        console.error("Elemen dengan ID 'tableContainer' tidak ditemukan.");
        return;
    }
    tableContainer.innerHTML = '<p class="text-center py-4"><i class="fas fa-spinner fa-spin me-2"></i>Loading filtered data...</p>';

    // URL dengan filter id_x_less_than=10
    const url = `${baseUrl}?table=${currentTable}&id_x_less_than=10`; // <-- Ini kuncinya

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

            // Ambil semua kunci (nama kolom) dari objek pertama sebagai header
            const headers = Object.keys(data[0]); // Ambil semua key dari objek pertama
            
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
                headers.forEach(key => { // Loop berdasarkan headers yang sudah diambil
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
            tableContainer.innerHTML = '<p class="text-center py-4 text-muted">Tidak ada data ditemukan dengan id_x kurang dari 10.</p>';
        }
    })
    .catch(error => {
        console.error("Error saat memuat data:", error);
        tableContainer.innerHTML = `<p class="text-center py-4 text-danger">Error loading data: ${error.message}</p>`;
    });
}

document.addEventListener('DOMContentLoaded', loadFilteredDataAndDisplayAsTable);