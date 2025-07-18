<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form Biodata</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 20px;
        }
        .container {
            max-width: 400px;
            margin: auto;
            padding: 20px;
            background: white;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        h2 {
            text-align: center;
        }
        label {
            display: block;
            margin-top: 10px;
        }
        input[type="text"],
        input[type="number"],
        select {
            width: 100%;
            padding: 10px;
            margin: 5px 0 15px;
            border: 1px solid #ccc;
            border-radius: 4px;
        }
        input[type="submit"] {
            width: 100%;
            padding: 10px;
            background-color: #28a745;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
        }
        input[type="submit"]:hover {
            background-color: #218838;
        }
        .message {
            padding: 10px;
            margin: 10px 0;
            border-radius: 4px;
            text-align: center;
        }
        .success {
            background-color: #d4edda;
            color: #155724;
            border: 1px solid #c3e6cb;
        }
        .error {
            background-color: #f8d7da;
            color: #721c24;
            border: 1px solid #f5c6cb;
        }
    </style>
</head>
<body>
    <div class="container">
        <h2>Form Biodata</h2>
        <div id="message" class="message" style="display: none;"></div>
        
        <form id="biodataForm">
            <label for="name">Nama:</label>
            <input type="text" id="name" name="name" required>
            
            <label for="age">Usia:</label>
            <input type="number" id="age" name="age" required>
            
            <label for="gender">Jenis Kelamin:</label>
            <select id="gender" name="gender" required>
                <option value="">Pilih...</option>
                <option value="Laki-laki">Laki-laki</option>
                <option value="Perempuan">Perempuan</option>
            </select>
            
            <input type="submit" value="Kirim">
        </form>
    </div>

    <!-- Include session manager -->
    <script src="js/session.js"></script>
    
    <script>
        // Konfigurasi API
        const API_BASE_URL = '/api/contacts';
        
        // Pastikan user sudah login sebelum mengakses form
        if (!SessionManager.requireLogin()) {
            // Jika tidak login, akan otomatis redirect ke login.html
            // Script di bawah tidak akan dieksekusi
        }
        
        // Ambil data user yang sedang login
        const currentUserData = SessionManager.getCurrentUser();
        const currentUser = currentUserData ? currentUserData.x_01 : null;
        
        if (!currentUser) {
            alert('Sesi tidak valid. Silakan login kembali.');
            window.location.href = 'login.html';
        }
        
        document.getElementById('biodataForm').addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const form = e.target;
            const formData = new FormData(form);
            const messageDiv = document.getElementById('message');
            
            // Mengambil data dari form
            const name = formData.get('name');
            const age = formData.get('age');
            const gender = formData.get('gender');
            
            // Menggabungkan data seperti pada PHP original (dengan separator ;)
            const biodataString = `${name};;${age};;${gender}||||||||||||`;
            
            try {
                // Cek apakah user sudah ada
                const checkResponse = await fetch(`${API_BASE_URL}?table=nilai1`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'X-Table-Name': 'nilai1'
                    }
                });
                
                const checkData = await checkResponse.json();
                
                // Cari record berdasarkan x_01 (username)
                const existingRecord = checkData.data ? checkData.data.find(record => record.x_01 === currentUser) : null;
                
                let response;
                if (existingRecord) {
                    // Update existing record
                    response = await fetch(`${API_BASE_URL}/${existingRecord.id_x}?table=nilai1`, {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json',
                            'X-Table-Name': 'nilai1'
                        },
                        body: JSON.stringify({
                            x_01: currentUser,
                            x_02: biodataString
                        })
                    });
                } else {
                    // Create new record
                    response = await fetch(`${API_BASE_URL}?table=nilai1`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'X-Table-Name': 'nilai1'
                        },
                        body: JSON.stringify({
                            x_01: currentUser,
                            x_02: biodataString
                        })
                    });
                }
                
                const result = await response.json();
                
                if (result.success) {
                    showMessage('Data berhasil diperbarui!', 'success');
                    form.reset();
                    
                    // Redirect seperti pada PHP original
                    setTimeout(() => {
                        window.location.href = 'index.html';
                    }, 1500);
                } else {
                    showMessage('Error: ' + result.message, 'error');
                }
                
            } catch (error) {
                console.error('Error:', error);
                showMessage('Terjadi kesalahan saat mengirim data: ' + error.message, 'error');
            }
        });
        
        function showMessage(message, type) {
            const messageDiv = document.getElementById('message');
            messageDiv.textContent = message;
            messageDiv.className = `message ${type}`;
            messageDiv.style.display = 'block';
            
            // Auto hide after 5 seconds
            setTimeout(() => {
                messageDiv.style.display = 'none';
            }, 5000);
        }
    </script>
</body>
</html>