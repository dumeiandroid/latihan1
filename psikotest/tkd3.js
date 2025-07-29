const questionsData = [
  {
    "question": "1. Nuri : Burung = Sepat : ?",
    "options": {
      "A": "Mangkuk",
      "B": "Ikan",
      "C": "Aquarium",
      "D": "Merah"
    },
    "answer": "B",
    "explanation": "Nuri adalah jenis burung, sedangkan sepat adalah jenis ikan."
  },
  {
    "question": "2. Panas : Dingin = Suka : ?",
    "options": {
      "A": "Bekerja",
      "B": "Tertawa",
      "C": "Duka",
      "D": "Getir"
    },
    "answer": "C",
    "explanation": "Panas dan dingin adalah antonim, sama halnya dengan suka dan duka."
  },
  {
    "question": "3. Putera : Uteri = Dewa : ?",
    "options": {
      "A": "Bidadari",
      "B": "Kayangan",
      "C": "Dewi",
      "D": "Resi"
    },
    "answer": "C",
    "explanation": "Putera berasal dari uteri (rahim), sedangkan dewa berpasangan dengan dewi."
  },
  {
    "question": "4. Kapten : Kapal = Pilot : ?",
    "options": {
      "A": "Udara",
      "B": "Cepat",
      "C": "Pemboman",
      "D": "Kapal Terbang"
    },
    "answer": "D",
    "explanation": "Kapten mengendalikan kapal, sama seperti pilot mengendalikan kapal terbang."
  },
  {
    "question": "5. Wanita : Kebaya = Pria : ?",
    "options": {
      "A": "Sepatu",
      "B": "Baju",
      "C": "Topi",
      "D": "Jas"
    },
    "answer": "D",
    "explanation": "Kebaya adalah pakaian untuk wanita, sedangkan jas adalah pakaian untuk pria."
  },
  {
    "question": "6. Makan : Gemuk = Kelaparan : ?",
    "options": {
      "A": "Makan",
      "B": "Kurus",
      "C": "Mati",
      "D": "Dahaga"
    },
    "answer": "B",
    "explanation": "Makan berhubungan dengan gemuk, sedangkan kelaparan berhubungan dengan kurus."
  },
  {
    "question": "7. Mobil : Bensin = Kereta : ?",
    "options": {
      "A": "Perlahan-lahan",
      "B": "Kusir",
      "C": "Mengendarai",
      "D": "Kuda"
    },
    "answer": "D",
    "explanation": "Mobil membutuhkan bensin untuk berfungsi, sedangkan kereta ditarik oleh kuda."
  },
  {
    "question": "8. Gerobak : Roda = Kacamata : ?",
    "options": {
      "A": "Lensa",
      "B": "Hidung",
      "C": "Melihat",
      "D": "Teropong"
    },
    "answer": "A",
    "explanation": "Gerobak memiliki roda, sedangkan kacamata memiliki lensa."
  },
  {
    "question": "9. Siang : Matahari = Malam : ?",
    "options": {
      "A": "Gelap",
      "B": "Bintang",
      "C": "Jauh",
      "D": "Tidur"
    },
    "answer": "B",
    "explanation": "Siang identik dengan matahari, sedangkan malam identik dengan bintang."
  },
  {
    "question": "10. Menjahit : Jarum = Menebang : ?",
    "options": {
      "A": "Pisau",
      "B": "Rotan",
      "C": "Pohon",
      "D": "Kampak"
    },
    "answer": "D",
    "explanation": "Menjahit menggunakan jarum, sedangkan menebang menggunakan kampak."
  },
  {
    "question": "11. Teman : Kenalan = Marah : ?",
    "options": {
      "A": "Ganas",
      "B": "Bengis",
      "C": "Murka",
      "D": "Berbahaya"
    },
    "answer": "C",
    "explanation": "Teman adalah kenalan yang lebih dekat, sementara marah dapat menjadi murka."
  },
  {
    "question": "12. Besar : Lebih besar = Lebih besar : ?",
    "options": {
      "A": "Raksasa",
      "B": "Besar",
      "C": "Lebih besar",
      "D": "Paling besar"
    },
    "answer": "D",
    "explanation": "Besar berlanjut ke lebih besar, sama seperti lebih besar berlanjut ke paling besar."
  },
  {
    "question": "13. Menggerutu : Memaki = Membohong : ?",
    "options": {
      "A": "Buruk",
      "B": "Penipu",
      "C": "Membual",
      "D": "Menghukum"
    },
    "answer": "C",
    "explanation": "Menggerutu adalah bentuk dari memaki, sama seperti membohong dapat berarti membual."
  },
  {
    "question": "14. Es : Dingin = Air : ?",
    "options": {
      "A": "Basah",
      "B": "Minum",
      "C": "Sungai",
      "D": "Kering"
    },
    "answer": "A",
    "explanation": "Es identik dengan dingin, sedangkan air identik dengan basah."
  },
  {
    "question": "15. Kuda : Cepat = Siput : ?",
    "options": {
      "A": "Merayap",
      "B": "Lambat",
      "C": "Berledir",
      "D": "Berumah"
    },
    "answer": "B",
    "explanation": "Kuda dikenal cepat, sedangkan siput dikenal lambat."
  },
  {
    "question": "16. Beras : Padi = Kacang : ?",
    "options": {
      "A": "Hijau",
      "B": "Buah polong-polongan",
      "C": "Tanah",
      "D": "Panjang"
    },
    "answer": "B",
    "explanation": "Beras berasal dari padi, sedangkan kacang berasal dari buah polong-polongan."
  },
  {
    "question": "17. Saya : Kami = Ia : ?",
    "options": {
      "A": "Kita",
      "B": "Mereka",
      "C": "Kalian",
      "D": "Anda"
    },
    "answer": "B",
    "explanation": "Saya adalah bentuk tunggal, sedangkan kami adalah bentuk jamak, sama seperti ia dan mereka."
  },
  {
    "question": "18. Minum : Dahaga = Bernapas : ?",
    "options": {
      "A": "Sesak",
      "B": "Paru-paru",
      "C": "Udara",
      "D": "Jantung"
    },
    "answer": "A",
    "explanation": "Minum mengatasi dahaga, sama seperti bernapas mengatasi kebutuhan udara."
  },
  {
    "question": "19. Enam : Delapanbelas = Dua : ?",
    "options": {
      "A": "Delapan",
      "B": "Empat",
      "C": "Dua",
      "D": "Enam"
    },
    "answer": "D",
    "explanation": "Enam dikali tiga menghasilkan delapanbelas, sama seperti dua dikali empat menghasilkan delapan."
  },
  {
    "question": "20. Busur : Panah = Senapan : ?",
    "options": {
      "A": "Peluru",
      "B": "Laras",
      "C": "Tembakan",
      "D": "Letusan"
    },
    "answer": "A",
    "explanation": "Busur digunakan untuk menembakkan panah, sedangkan senapan menggunakan peluru."
  },
  {
    "question": "21. Bangau : Katak = Ular : ?",
    "options": {
      "A": "Reptil",
      "B": "Bisa",
      "C": "Tikus",
      "D": "Melingkar"
    },
    "answer": "C",
    "explanation": "Bangau sering memakan katak, sedangkan ular sering memakan tikus."
  },
  {
    "question": "22. Gelas : Susu = Piring : ?",
    "options": {
      "A": "Batu",
      "B": "Bundar",
      "C": "Bubur",
      "D": "Makan"
    },
    "answer": "C",
    "explanation": "Gelas digunakan untuk menyimpan susu, sedangkan piring untuk menyimpan bubur."
  },
  {
    "question": "23. Ayam : Berkokok = Kambing : ?",
    "options": {
      "A": "Memanggil",
      "B": "Mengembik",
      "C": "Padang rumput",
      "D": "Domba"
    },
    "answer": "B",
    "explanation": "Ayam berkokok, sedangkan kambing mengembik."
  },
  {
    "question": "24. Kutilang : Burung = Mujai : ?",
    "options": {
      "A": "Air",
      "B": "Hasil penangkapan",
      "C": "Ikan",
      "D": "Umpan"
    },
    "answer": "C",
    "explanation": "Kutilang adalah jenis burung, sedangkan mujai adalah jenis ikan."
  },
  {
    "question": "25. Kelakuan : Laku = Perjalanan : ?",
    "options": {
      "A": "Menjalankan",
      "B": "Berjalan-jalan",
      "C": "Jalan",
      "D": "Berjalan"
    },
    "answer": "C",
    "explanation": "Kelakuan berhubungan dengan laku, sama seperti perjalanan berhubungan dengan berjalan."
  },
  {
    "question": "26. Rumah : Batu = Tungku : ?",
    "options": {
      "A": "Pipa",
      "B": "Panas",
      "C": "Cerobong",
      "D": "Besi"
    },
    "answer": "D",
    "explanation": "Rumah terbuat dari batu, sedangkan tungku menghasilkan panas."
  },
  {
    "question": "27. Matahari : Bulat = Balok : ?",
    "options": {
      "A": "Panjang",
      "B": "Berat",
      "C": "Kayu",
      "D": "Bundar"
    },
    "answer": "A",
    "explanation": "Matahari berbentuk bulat, sedangkan balok adalah bentuk yang tidak bulat."
  },
  {
    "question": "28. Cemara : Pohon = Putih : ?",
    "options": {
      "A": "Merah",
      "B": "Susu",
      "C": "Warna",
      "D": "Bunga"
    },
    "answer": "C",
    "explanation": "Cemara adalah jenis pohon, sementara putih adalah warna."
  },
  {
    "question": "29. Menyakiti : Menyayangi = Melukai : ?",
    "options": {
      "A": "Sakit",
      "B": "Luka",
      "C": "Mencium",
      "D": "Merawat"
    },
    "answer": "D",
    "explanation": "Menyakiti adalah kebalikan dari menyayangi, sedangkan melukai adalah kebalikan dari merawat."
  },
  {
    "question": "30. Kenari : Burung = Kemarahan : ?",
    "options": {
      "A": "Kerusakan",
      "B": "Perasaan",
      "C": "Orang",
      "D": "Berang"
    },
    "answer": "B",
    "explanation": "Kenari adalah jenis burung, sedangkan kemarahan adalah jenis perasaan."
  },
  {
    "question": "31. Bersalah : Hukuman = Jasa : ?",
    "options": {
      "A": "Tanda-tanda",
      "B": "Anugerah",
      "C": "Uang",
      "D": "Pekerja"
    },
    "answer": "B",
    "explanation": "Bersalah menerima hukuman, sedangkan jasa mendapatkan anugerah."
  },
  {
    "question": "32. Es : Air = Air : ?",
    "options": {
      "A": "Mendidih",
      "B": "Uap",
      "C": "Es",
      "D": "Basah"
    },
    "answer": "B",
    "explanation": "Es menjadi air saat mencair, dan air menjadi uap saat mendidih."
  },
  {
    "question": "33. Jam tangan : Waktu = Thermometer : ?",
    "options": {
      "A": "Iklim",
      "B": "Derajat",
      "C": "Suhu",
      "D": "Cuaca"
    },
    "answer": "C",
    "explanation": "Jam tangan mengukur waktu, sedangkan thermometer mengukur suhu."
  },
  {
    "question": "34. Kanvas : Melukis = Tanah liat : ?",
    "options": {
      "A": "Patung",
      "B": "Kesenian",
      "C": "Membentuk",
      "D": "Estetika"
    },
    "answer": "A",
    "explanation": "Kanvas digunakan untuk melukis, sedangkan tanah liat dapat digunakan untuk membuat patung."
  },
  {
    "question": "35. Imigran : Tiba = Emigrasi : ?",
    "options": {
      "A": "Pergi",
      "B": "Emigran",
      "C": "Asing",
      "D": "Penduduk"
    },
    "answer": "A",
    "explanation": "Imigran tiba di tempat baru, sedangkan emigrasi berarti pergi dari tempat asal."
  },
  {
    "question": "36. Fisiologi : Ilmu = Hukum : ?",
    "options": {
      "A": "Ahli hukum",
      "B": "Pengadilan",
      "C": "Jabatan",
      "D": "Undang-undang"
    },
    "answer": "D",
    "explanation": "Fisiologi adalah cabang ilmu, sedangkan hukum adalah sistem peraturan (undang-undang)."
  },
  {
    "question": "37. Keuntungan : Penjualan = Kemasyuran : ?",
    "options": {
      "A": "Pembelian",
      "B": "Penipuan",
      "C": "Keberanian",
      "D": "Jenderal"
    },
    "answer": "C",
    "explanation": "Keuntungan dihasilkan dari penjualan, sedangkan kemasyuran dapat dihasilkan dari pembelian."
  },
  {
    "question": "38. Bulan : Bumi = Bumi : ?",
    "options": {
      "A": "Mars",
      "B": "Bulan",
      "C": "Orbit",
      "D": "Matahari"
    },
    "answer": "D",
    "explanation": "Bulan mengorbit Bumi, sedangkan Bumi mengorbit Matahari."
  },
  {
    "question": "39. Kesulitan : Kelalaian = Respon : ?",
    "options": {
      "A": "Jawaban-jawaban",
      "B": "Stimuli",
      "C": "Dampak",
      "D": "Baik"
    },
    "answer": "B",
    "explanation": "Kesulitan dapat diakibatkan oleh kelalaian, sama seperti respon dapat diakibatkan oleh stimuli."
  },
  {
    "question": "40. Kubus : Piramid = Empat persegi : ?",
    "options": {
      "A": "Peti",
      "B": "Mesir",
      "C": "Pentagon",
      "D": "Segitiga"
    },
    "answer": "D",
    "explanation": "Kubus dan piramid adalah bentuk tiga dimensi, sama seperti empat persegi dan segitiga."
  }
];