 body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
    margin: 0;
    padding: 20px;
}
        body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
    margin: 0;
    padding: 20px;
}


h1 {
    text-align: center;
    color: #333;
}

#timer {
    font-size: 1.5em;
    text-align: center;
    margin: 20px 0;
    color: #f4f4f4; /* Red color for urgency */
}

#startButton {
    display: block;
    margin: 0 auto;
    padding: 10px 20px;
    background-color: #585353; /* Green color */
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 1.2em;
    cursor: pointer;
    transition: background-color 0.3s;
}

#startButton:hover {
    background-color: #050000; /* Darker green on hover */
}

#question {
    text-align: center;
    margin: 30px 0;
    font-size: 1.2em;
    color: #333;
}

.options {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 20px 0;
}

.options1 {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    flex-direction: column;
    margin: 20px 0;
}

.options img {
    width: 100px; /* Set image width */
    height: auto;
    margin: 0 10px;
    cursor: pointer;
    border: 2px solid transparent;
    border-radius: 5px;
    transition: border-color 0.3s;
}

.options img:hover {
    border-color: #5bc0de; /* Blue border on hover */
}

button {
    margin-top: 20px;
    padding: 10px 15px;
    background-color: #585353; /* Warning color */
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
    /*text-align: left;*/
}

button:hover {
    background-color: #050000; /* Darker 050000 on hover */
}

/* Responsive design */
@media (max-width: 600px) {
    #startButton, button {
        width: 100%;
        font-size: 1em;
    }

    .options img {
        width: 80px; /* Smaller images on mobile */
    }
}

.tengah {
    justify-content: center; /* Rata tengah secara horizontal */
    text-align: center; /* Mengatur teks di dalam div menjadi rata tengah */
}
#startButton:disabled {
    background-color: #f4f4f4; /* Warna latar belakang saat dinonaktifkan */
    color: #f4f4f4; /* Warna teks untuk menunjukkan bahwa tombol tidak aktif */
    cursor: not-allowed; /* Ubah kursor untuk menunjukkan tidak bisa diklik */
}
input[type="text"],
input[type="number"],
input[type="email"],
input[type="password"],
textarea {
    width: 100%; /* Lebar penuh */
    padding: 10px; /* Ruang dalam */
    margin: 10px 0; /* Jarak vertikal */
    border: 1px solid #ccc; /* Warna border */
    border-radius: 5px; /* Sudut membulat */
    font-size: 1em; /* Ukuran font */
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Bayangan untuk efek kedalaman */
    transition: border-color 0.3s, box-shadow 0.3s; /* Transisi untuk efek hover */
}

input[type="text"]:focus,
input[type="number"]:focus,
input[type="email"]:focus,
input[type="password"]:focus,
textarea:focus {
    border-color: #5cb85c; /* Warna border saat fokus */
    box-shadow: 0 0 5px rgba(92, 184, 92, 0.5); /* Bayangan saat fokus */
    outline: none; /* Hapus outline default */
}


        .hidden {
            display: none;
        }
        .options button {
            margin: 5px; /* Menambahkan margin di sekitar tombol */
            padding: 10px; /* Menambahkan padding untuk tampilan yang lebih baik */
            cursor: pointer; /* Menunjukkan bahwa tombol dapat diklik */
        }
.putih {
    color: white;
}

.hitam {
    color: black;
}
#question {
    user-select: none; /* Mencegah teks untuk disalin */
    pointer-events: none; /* Mencegah interaksi dengan elemen */
}
.options {
    user-select: none;  /* Mencegah interaksi dengan elemen */
}
.image {
            width: 100%;
            height: auto;
            border-radius: 10px;
            margin-bottom: 10px;
            transition: transform 0.3s;
        }   
button {
    user-select: none;  /* Mencegah interaksi dengan elemen */
}
/* Responsive design for larger screens */
@media (min-width: 601px) {
    .options img {
        width: 120px; /* Ukuran gambar yang lebih besar pada layar yang lebih lebar */
    }

    #timer {
        font-size: 2em; /* Ukuran font yang lebih besar untuk timer */
    }

    #question {
        font-size: 1.5em; /* Ukuran font yang lebih besar untuk pertanyaan */
    }
}

/* Responsive adjustments for buttons */
@media (max-width: 600px) {
    button {
        width: 100%; /* Tombol bercakap penuh pada layar kecil */
        font-size: 1em; /* Ukuran font tombol */
    }

    #timer {
        font-size: 1.2em; /* Ukuran font timer lebih kecil untuk mobile */
    }
}


/*.options {
    flex-direction: column;
}

.options img {
    margin: 10px 0;
}*/
#question img {
    max-width: 100%; /* Membatasi lebar gambar agar tidak melebihi lebar elemen induk */
    height: auto; /* Memastikan tinggi gambar mengikuti aspek rasio */
}

#question {
    overflow: hidden; /* Menyembunyikan bagian gambar yang melebihi batas */
}