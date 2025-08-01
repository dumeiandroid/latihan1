const questionsData = [
    {
        "question": "77. Jika seorang anak memiliki 50 rupiah dan memberikan 15 rupiah kepada orang lain, berapa rupiahkah yang masih tinggal padanya?",
        "options": {
            "A": "35",
            "B": "25"
        },
        "answer": "A",
        "explanation": "50 - 15 = 35"
    },
    {
        "question": "78. Berapa km-kah yang dapat ditempuh oleh kereta api dalam waktu 7 jam, jika kecepatannya 40 km/jam?",
        "options": {
            "A": "280 km",
            "B": "300 km"
        },
        "answer": "A",
        "explanation": "40 km/jam * 7 jam = 280 km"
    },
    {
        "question": "79. 15 peti buah-buahan beratnya 250 kg dan setiap peti kosong beratnya 3 kg. Berapakah berat buah-buahan itu?",
        "options": {
            "A": "225 kg",
            "B": "200 kg"
        },
        "answer": "A",
        "explanation": "Berat total = 250 kg - (15 peti * 3 kg) = 250 kg - 45 kg = 205 kg"
    },
    {
        "question": "80. Seseorang mempunyai persediaan rumput yang cukup untuk 7 ekor kuda selama 78 hari. Berapa harikah persediaan itu cukup untuk 21 ekor kuda?",
        "options": {
            "A": "26 hari",
            "B": "32 hari"
        },
        "answer": "A",
        "explanation": "Persediaan untuk 21 kuda = 78 hari * 7 / 21 = 26 hari"
    },
    {
        "question": "81. 3 batang coklat harganya Rp. 5,- Berapa batangkah yang dapat kita beli dengan Rp. 50,-?",
        "options": {
            "A": "30 batang",
            "B": "25 batang"
        },
        "answer": "A",
        "explanation": "Rp. 50 / (Rp. 5 / 3) = 30 batang"
    },
    {
        "question": "82. Seseorang dapat berjalan 1,75 m dalam waktu 1/4 detik. Berapa meterkah yang dapat ia tempuh dalam waktu 10 detik?",
        "options": {
            "A": "70 m",
            "B": "75 m"
        },
        "answer": "A",
        "explanation": "1,75 m * (10 / 0.25) = 70 m"
    },
    {
        "question": "83. Jika sebuah batu terletak 15 m disebelah selatan dari sebatang pohon dan pohon itu berada 30m di sebelah selatan dari sebuah rumah, berapa meterkah jarak antara batu dan rumah itu?",
        "options": {
            "A": "45 m",
            "B": "15 m"
        },
        "answer": "A",
        "explanation": "30 m + 15 m = 45 m"
    },
    {
        "question": "84. Jika 41/2 m bahan sandang harganya Rp. 90,- berapa rupiahkah harganya 21/2 m?",
        "options": {
            "A": "50",
            "B": "45"
        },
        "answer": "A",
        "explanation": "Rp. 90 / 4.5 * 2.5 = Rp. 50"
    },
    {
        "question": "85. 7 orang dapat menyelesaikan sesuatu pekerjaan dalam 6 hari. Berapa orangkah yang diperlukan untuk menyelesaikan pekerjaan itu dalam setengah hari?",
        "options": {
            "A": "84 orang",
            "B": "70 orang"
        },
        "answer": "A",
        "explanation": "7 orang * 6 hari / 0.5 hari = 84 orang"
    },
    {
        "question": "86. Karena dipanaskan, kawat yang panjangnya 48 cm akan mengembang menjadi 52 cm. Setelah pemanasan, berapakah panjangnya kawat yang berukuran 72 cm?",
        "options": {
            "A": "78 cm",
            "B": "80 cm"
        },
        "answer": "A",
        "explanation": "Panjang bertambah 4 cm, jadi 72 cm + 4 cm = 76 cm"
    },
    {
        "question": "87. Suatu pabrik dapat menghasilkan 304 batang pinsil dalam waktu 8 jam. Berapa batangkah dihasilkan dalam waktu setengah jam?",
        "options": {
            "A": "19 batang",
            "B": "20 batang"
        },
        "answer": "A",
        "explanation": "304 batang / 8 jam = 38 batang/jam, jadi 38 / 2 = 19 batang"
    },
    {
        "question": "88. Untuk suatu campuran diperlukan 2 bagian perak dan 3 bagian timah. Berapa gramkah perak yang diperlukan untuk mendapatkan campuran itu yang beratnya 15 gram?",
        "options": {
            "A": "6 gram",
            "B": "5 gram"
        },
        "answer": "A",
        "explanation": "2/(2+3) * 15 gram = 6 gram"
    },
    {
        "question": "89. Untuk setiap Rp. 3,- yang dimiliki Sidin, Hamid memiliki Rp. 5,- Jika mereka bersama mempunyai Rp. 120,- berapa rupiahkah yang dimiliki Hamid?",
        "options": {
            "A": "80",
            "B": "40"
        },
        "answer": "A",
        "explanation": "3x + 5x = 120, x = 15, jadi 5x = Rp. 75,-"
    },
    {
        "question": "90. Mesin A menenun 60 m kain, sedangkan mesin B menenun 40 m. Berapa meterkah yang ditenun mesin A, jika mesin B menenun 60 m?",
        "options": {
            "A": "90 m",
            "B": "80 m"
        },
        "answer": "A",
        "explanation": "60 m / 40 m = x / 60 m, jadi x = 90 m"
    },
    {
        "question": "91. Seseorang membelikan 1/10 dari uangnya untuk perangko dan 4 kali jumlah itu untuk alat tulis. Sisa uangnya masih Rp. 60,- Berapa rupiahkah uangnya semula?",
        "options": {
            "A": "100",
            "B": "80"
        },
        "answer": "A",
        "explanation": "x - (x/10 + 4*(x/10)) = 60, jadi x = Rp. 100"
    },
    {
        "question": "92. Didalam dua peti terdapat 43 buah piring. Di dalam peti yang satu terdapat 9 buah piring lebih banyak dari pada di dalam peti yang lain. Berapa buah piring terdapat didalam peti yang lebih kecil?",
        "options": {
            "A": "17",
            "B": "18"
        },
        "answer": "A",
        "explanation": "x + (x + 9) = 43, jadi x = 17"
    },
    {
        "question": "93. Suatu lembaran kain yang panjangnya 60 cm harus dibagi sedemikian rupa sehingga panjangnya satu bagian ialah 2/3 dari bagian yang lain. Berapa panjangnya bagian yang terpendek?",
        "options": {
            "A": "20 cm",
            "B": "30 cm"
        },
        "answer": "A",
        "explanation": "x + (2/3)x = 60 cm, x = 36 cm, bagian terpendek = 20 cm"
    },
    {
        "question": "94. Suatu perusahaan mengekspor 3/4 dari hasil produksinya dan menjual 4/5 dari sisa itu di dalam Negeri. Berapa % kah hasil produksi yang masih tinggal?",
        "options": {
            "A": "5%",
            "B": "10%"
        },
        "answer": "A",
        "explanation": "Hasil yang masih tinggal adalah 1/5 dari 1/4 = 5%"
    },
    {
        "question": "95. Jika suatu botol berisi anggur hanya 7/8 bagian dan harganya ialah Rp. 84,- berapakah harga anggur itu jika botol itu hanya terisi 1/2 penuh?",
        "options": {
            "A": "60",
            "B": "50"
        },
        "answer": "A",
        "explanation": "Harga per 1/8 bagian = Rp. 12, jadi untuk 1/2 = Rp. 60"
    },
    {
        "question": "96. Di dalam suatu keluarga setiap anak perempuan mempunyai jumlah saudara laki-laki yang sama dengan jumlah saudara perempuan dan setiap anak laki-laki mempunyai dua kali lebih banyak saudara perempuan dari pada saudara laki-laki. Berapa anak laki-lakikah yang terdapat didalam keluarga itu?",
        "options": {
            "A": "2",
            "B": "3"
        },
        "answer": "A",
        "explanation": "Jika ada x anak laki-laki dan y anak perempuan, y = x + 1, jadi x = 2"
    }
];