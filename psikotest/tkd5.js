const questionsData = [
  {
    "question": "1. Berapa jumlah 47 orang dan 9 orang?",
    "options": {
      "A": "56",
      "B": "57",
      "C": "58",
      "D": "55",
      "E": ""
    },
    "answer": "A",
    "explanation": "Jumlah 47 + 9 = 56."
  },
  {
    "question": "2. Kalau 6 orang harus membagi 480 rupiah, berapa rupiahkah yang akan diperoleh masing-masing?",
    "options": {
      "A": "80",
      "B": "78",
      "C": "90",
      "D": "70",
      "E": ""
    },
    "answer": "A",
    "explanation": "480 dibagi 6 = 80 rupiah per orang."
  },
  {
    "question": "3. Berapa jam yang akan ditempuh oleh sebuah kereta api yang kecepatan 70 kilometer per jam dan panjang jalan itu 350 km?",
    "options": {
      "A": "4.5",
      "B": "5",
      "C": "6",
      "D": "7",
      "E": ""
    },
    "answer": "B",
    "explanation": "Waktu = Jarak / Kecepatan = 350 km / 70 km/jam = 5 jam."
  },
  {
    "question": "4. Kalau saya berjalan ke muka 8 meter dan mundur lagi 4 meter, berapa jauh saya dari titik semula?",
    "options": {
      "A": "4",
      "B": "8",
      "C": "2",
      "D": "0",
      "E": ""
    },
    "answer": "A",
    "explanation": "8 meter maju - 4 meter mundur = 4 meter dari titik semula."
  },
  {
    "question": "5. Berapa batang rokok dapat Saudara beli dengan uang 160 rupiah, kalau dengan uang 40 rupiah saudara mendapat tiga batang?",
    "options": {
      "A": "12",
      "B": "15",
      "C": "10",
      "D": "9",
      "E": ""
    },
    "answer": "A",
    "explanation": "Dengan 40 rupiah dapat 3 batang, jadi 160 rupiah = 3 x 4 = 12 batang."
  },
  {
    "question": "6. Kalau seorang mendapat upah Rp. 250,- dalam satu jam, berapa upahnya dalam 7 jam?",
    "options": {
      "A": "1750",
      "B": "1500",
      "C": "2000",
      "D": "2500",
      "E": ""
    },
    "answer": "A",
    "explanation": "Upah = 250 x 7 = Rp. 1750,-."
  },
  {
    "question": "7. Amat mempunyai uang Rp. 19.000,- la menerima lagi Rp. 7.500,- dan mengeluarkan Rp. 13.000,- Berapakah uang Amat sekarang?",
    "options": {
      "A": "13.500",
      "B": "14.500",
      "C": "15.000",
      "D": "16.500",
      "E": ""
    },
    "answer": "A",
    "explanation": "Uang sekarang = 19000 + 7500 - 13000 = Rp. 13.500,-."
  },
  {
    "question": "8. Sebuah bak persegi panjang, panjangnya 4 meter dan lebarnya 3 meter. Isi bak itu 40 meter kubik. Berapakah dalamnya bak itu?",
    "options": {
      "A": "3.33",
      "B": "4",
      "C": "5",
      "D": "6.67",
      "E": ""
    },
    "answer": "A",
    "explanation": "Volume = Panjang x Lebar x Tinggi, jadi Tinggi = 40 / (4 x 3) = 3.33 meter."
  },
  {
    "question": "9. Seorang petani membeli beberapa ekor anak kambing dengan harga Rp. 6.000,- la jual dengan harga Rp. 7.500,- dan ia mendapat keuntungan 300 rupiah untuk tiap ekor anak kambing. Berapa ekor anak kambing yang ia beli?",
    "options": {
      "A": "5",
      "B": "8",
      "C": "12",
      "D": "6",
      "E": ""
    },
    "answer": "A",
    "explanation": "Keuntungan = 7500 - 6000 = 1500, jadi 1500 / 300 = 5 ekor, pembelian = 5 ekor."
  },
  {
    "question": "10. Seorang pengendara sepeda motor menempuh jarak 500 km dalam waktu 5 hari. Hari pertama, ia menempuh jarak 90 km. Hari kedua, 75 km. Hari ketiga 120 km. Dan hari keempat 30 km. Berapa kilometer yang ditempuh pada hari kelima?",
    "options": {
      "A": "185",
      "B": "170",
      "C": "150",
      "D": "160",
      "E": ""
    },
    "answer": "A",
    "explanation": "500 - (90 + 75 + 120 + 30) = 185 km pada hari kelima."
  },
  {
    "question": "11. Saya membeli tiga butir telur dengan harga Rp. 15,- sebutirnya dan 1 Kg gula seharga Rp.120.- Berapa uang kembaliannya bila saya bayar dengan uang Rp. 1000,-?",
    "options": {
      "A": "835",
      "B": "840",
      "C": "850",
      "D": "860",
      "E": ""
    },
    "answer": "A",
    "explanation": "Total = 3 x 15 + 120 = 165, kembali = 1000 - 165 = Rp. 835,-."
  },
  {
    "question": "12. Empat orang menggali selokan air selama 7 hari. Berapa orang yang diperlukan untuk menggali selokan itu dalam setengah hari?",
    "options": {
      "A": "32",
      "B": "28",
      "C": "24",
      "D": "16",
      "E": ""
    },
    "answer": "A",
    "explanation": "Total kerja = 4 orang x 7 hari = 28 orang-hari. Dalam setengah hari, dibutuhkan 28 / 0.5 = 56 orang."
  },
  {
    "question": "13. Kalau tujuh-setengah Kg gula merah harganya Rp. 900, Berapa harga dua-setengah Kg gula merah itu?",
    "options": {
      "A": "300",
      "B": "400",
      "C": "500",
      "D": "600",
      "E": ""
    },
    "answer": "A",
    "explanation": "Harga per kilogram = 900 / 7.5 = Rp. 120,-. Harga untuk 2.5 kg = 120 x 2.5 = Rp. 300,-."
  },
  {
    "question": "14. Seseorang membelanjakan sepersembilan dari uangnya untuk membeli kertas tulis dan lima kali daripadanya itu untuk membeli perangko. Sisanya ada Rp.450,-. Berapa uangnya semula?",
    "options": {
      "A": "900",
      "B": "810",
      "C": "850",
      "D": "720",
      "E": ""
    },
    "answer": "A",
    "explanation": "Jika x adalah uang semula, maka (1/9)x + 5(1/9)x + 450 = x, jadi x = 900."
  },
  {
    "question": "15. Ibu membeli satu setengah kg mentega seharga Rp. 1.350,- Berapa banyak ibu mendapat mentega dengan uang Rp. 3.000, -?",
    "options": {
      "A": "3",
      "B": "2",
      "C": "4",
      "D": "5",
      "E": ""
    },
    "answer": "C",
    "explanation": "Harga per kg = 1350 / 1.5 = Rp. 900,-. Dengan 3000, ibu mendapat 3000 / 900 = 3.33 kg."
  },
  {
    "question": "16. Saya memberikan sepertujuh dari uang saya pada si A dan tiga kali sebanyak itu pada B. Sisa uang saya sekarang 900 rupiah. Jadi berapa uang saya semula?",
    "options": {
      "A": "2100",
      "B": "2000",
      "C": "2500",
      "D": "3000",
      "E": ""
    },
    "answer": "A",
    "explanation": "Jika x adalah uang semula, maka (1/7)x + 3(1/7)x + 900 = x, jadi x = 2100."
  },
  {
    "question": "17. Sebuah mobil berjalan dengan kecepatan rata-rata 30 Km/jam dalam cuaca berkabut dan di hari terang cuaca, rata-rata 60 Km/jam. Berapa lama waktu yang dibutuhkan untuk jarak sepanjang 210 Km, kalau dua pertujuh dari perjalanan itu ditimpa kabut?",
    "options": {
      "A": "6.5",
      "B": "7",
      "C": "8",
      "D": "9",
      "E": ""
    },
    "answer": "A",
    "explanation": "Jarak kabut = 60 km, waktu = 60 / 30 = 2 jam; jarak terang = 150 km, waktu = 150 / 60 = 2.5 jam; total = 2 + 2.5 = 4.5 jam."
  },
  {
    "question": "18. Suatu pintu air di suatu tempat mempunyai 523 cabang saluran. Dalam satu minggu terpakai 8891 liter air. Berapa liter air rata-rata yang dipakai oleh tiap-tiap keluarga dalam waktu itu?",
    "options": {
      "A": "17",
      "B": "18",
      "C": "19",
      "D": "20",
      "E": ""
    },
    "answer": "A",
    "explanation": "Rata-rata = 8891 / 523 = 17 liter per keluarga."
  },
  {
    "question": "19. Seorang tukang untuk pembuat jalan harus memasang ubin yang panjangnya 4 dm (desimeter) dan lebarnya 40 cm (centimeter). Ia membutuhkan 600 buah batu ubin. Berapa meter persegikah luas jalan itu?",
    "options": {
      "A": "240",
      "B": "250",
      "C": "260",
      "D": "270",
      "E": ""
    },
    "answer": "A",
    "explanation": "Luas ubin = 0.4 m x 0.4 m = 0.16 m², jadi total luas = 600 x 0.16 = 96 m²."
  },
  {
    "question": "20. Pada suatu tempat ada 1365 pemuda yang memenuhi syarat untuk dinas militer. Sembilan persen tidak memenuhi syarat. Berapa orangkah yang datang dalam pemeriksaan itu?",
    "options": {
      "A": "1240",
      "B": "1200",
      "C": "1300",
      "D": "1350",
      "E": ""
    },
    "answer": "A",
    "explanation": "9% dari 1365 = 123.85, jadi yang datang = 1365 - 123 = 1242."
  }
];