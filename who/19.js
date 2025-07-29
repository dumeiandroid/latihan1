const questionsData = [
    {
        "question": "1. ",
        "options": {
            "A": "Mudah bergaul, mudah menyesuaikan",
            "B": "Penuh kepercayaan, percaya pada orang lain",
            "C": "Petualang, pengambil resiko",
            "D": "Penuh toleransi, penuh hormat"
        }
    },
    {
        "question": "2. ",
        "options": {
            "A": "Yang penting adalah hasil",
            "B": "Melakukan dengan benar, ketepatan sangat penting",
            "C": "Membuat sesuatu menjadi menyenangkan",
            "D": "Mengerjakan sesuatu bersama-sama"
        }
    },
    {
        "question": "3. ",
        "options": {
            "A": "Pendidikan, kebudayaan",
            "B": "Prestasi, penghargaan",
            "C": "Keselamatan, keamanan",
            "D": "Bersosialisasi, pertemuan kelompok"
        }
    },
    {
        "question": "4. ",
        "options": {
            "A": "Lembut, berbicara halus, kalem",
            "B": "Optimistik, visioner",
            "C": "Pusat perhatian, mudah bersosialisasi",
            "D": "Pembuat perdamaian, membawa keselarasan/harmonis"
        }
    },
    {
        "question": "5. ",
        "options": {
            "A": "Mampu mengontrol diri",
            "B": "Akan membeli karena hasrat atau dorongan hati",
            "C": "Akan menanggung, tanpa tekanan",
            "D": "Akan membeli apa yang saya inginkan"
        }
    },
    {
        "question": "6. ",
        "options": {
            "A": "Mengambil kendali, pendekatan langsung",
            "B": "Mudah bergaul, antusias",
            "C": "Mudah ditebak, konsisten",
            "D": "Waspada, berhati-hati"
        }
    },
    {
        "question": "7. ",
        "options": {
            "A": "Menyemangati orang lain ",
            "B": "Berusaha mencapai kesempurnaan",
            "C": "Menjadi bagian dari tim",
            "D": "Ingin mencapai tujuan"
        }
    },
    {
        "question": "8. ",
        "options": {
            "A": "Ramah, mudah berteman",
            "B": "Unik, bosan dengan rutinitas",
            "C": "Suka mengubah sesuatu",
            "D": "Menginginkan sesuatu tetap sama"
        }
    },
    {
        "question": "9. ",
        "options": {
            "A": "Tidak mudah dikalahkan",
            "B": "Akan melakukan sesuai perintah, mengikuti pimpinan",
            "C": "Riang, bersemangat",
            "D": "Ingin segalanya teratur, rapi"
        }
    },
    {
        "question": "10. ",
        "options": {
            "A": "Mudah frustasi",
            "B": "Memendam perasaan dalam hati",
            "C": "Menyampaikan sudut pandang pribadi",
            "D": "Berani bersikap sebagai oposisi"
        }
    },
    {
        "question": "11. ",
        "options": {
            "A": "Mengalah, tidak suka pertantangan",
            "B": "Penuh dengan rincian/detail",
            "C": "Berani berubah pada menit terakhir",
            "D": "Menuntut, mendesak, memaksa"
        }
    },
    {
        "question": "12. ",
        "options": {
            "A": "Saya akan pimpin mereka",
            "B": "Saya akan mengikuti",
            "C": "Saya akan bujuk/pengaruhi mereka",
            "D": "Saya akan mendapatkan faktanya "
        }
    },
    {
        "question": "13. ",
        "options": {
            "A": "Hidup, lincah, suka mengobrol",
            "B": "Bekerja dengan cepat, penuh keyakinan",
            "C": "Berusaha mempertahankan keseimbangan",
            "D": "Berusaha mengikuti aturan"
        }
    },
    {
        "question": "14. ",
        "options": {
            "A": "Menginginkan kemajuan/peningkatan",
            "B": "Mudah puas",
            "C": "Menunjukkan perasaan secara terbuka",
            "D": "Rendah hati, sederhana"
        }
    },
    {
        "question": "15. ",
        "options": {
            "A": "Memikirkan orang lain dahulu",
            "B": "Kompetitif, menyukai tantangan",
            "C": "Optimistis, berpikir positif",
            "D": "Berpikir logis, sistematis"
        }
    },
    {
        "question": "16. ",
        "options": {
            "A": "Mengelola waktu secara efisien",
            "B": "Sering terburu-buru, merasa tertekan",
            "C": "Hal-hal sosial, merupakan hal yang penting",
            "D": "Menyelesaikan apa yang telah dimulai"
        }
    },
    {
        "question": "17. ",
        "options": {
            "A": "Tenang, pendiam",
            "B": "Bahagia, tanpa beban",
            "C": "Menyenangkan, baik hati",
            "D": "Tegas, berani"
        }
    },
    {
        "question": "18. ",
        "options": {
            "A": "Menyenangkan orang, mudah setuju",
            "B": "Tertawa lepas, lincah",
            "C": "Pemberani, tegas",
            "D": "Tenang, pendiam"
        }
    },
    {
        "question": "19. ",
        "options": {
            "A": "Menolak perubahan mendadak",
            "B": "Cenderung terlalu banyak berjanji",
            "C": "Menarik diri jika dibawah tekanan",
            "D": "Tidak takut berkonfrontasi"
        }
    },
    {
        "question": "20. ",
        "options": {
            "A": "Menggunakan waktu secara berkualitas ketika bersama orang lain",
            "B": "Mererncanakan masa depan, menyiapkan diri",
            "C": "Perjalanan untuk mendapatkan pengalaman baru",
            "D": "Mendapat penghargaan atas pencapaian tujuan/target"
        }
    },
    {
        "question": "21. ",
        "options": {
            "A": "Menginginkan kekuasaan/wewenang lebih",
            "B": "Menginginkan kesempatan baru",
            "C": "Menghindari konflik perselisihan",
            "D": "Menginginkan arahan yang jelas"
        }
    },
    {
        "question": "22. ",
        "options": {
            "A": "Seorang pendukung/penyemangat yang baik",
            "B": "Seorang pendengar yang baik",
            "C": "Seorang penganalisa yang baik",
            "D": "Seorang delegator yang baik"
        }
    },
    {
        "question": "23. ",
        "options": {
            "A": "Peraturan perlu ditinjau ulang",
            "B": "Peraturan membuat adil",
            "C": "Peraturan membuat bosan",
            "D": "Peraturan membuat aman"
        }
    },
    {
        "question": "24. ",
        "options": {
            "A": "Dapat diandalkan, dapat dipercaya",
            "B": "Kreatif, unik",
            "C": "Berorientasi pada hasil",
            "D": "Memegang teguh standar tinggi, akurat"
        }
    }
];