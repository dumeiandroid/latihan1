const questionsData = [
    {
        "question": "1. Saya suka memperbaiki alat-alat listrik.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "2. Saya suka memperbaiki motor.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "3. Saya suka memperbaiki peralatan mekanik.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "4. Saya suka menggunakan perkakas bengkel dan mesin.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "5. Saya mampu membuat gambar dengan skala.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "6. Saya mampu menggunakan peralatan mesin (misal bor listrik atau mesin jahit).",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "7. Saya mampu melakukan perbaikan kecil pada alat listrik.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "8. Saya mampu melakukan perbaikan kecil pada pipa air, keran, dll.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "9. Saya tertarik menjadi mekanik pesawat terbang.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "10. Saya tertarik menjadi penanggung jawab keamanan.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "11. Saya tertarik menjadi mekanik/montir mobil.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "12. Saya tertarik menjadi pengrajin kayu.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "13. Saya tertarik menjadi spesialis perikanan/margasatwa.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "14. Saya tertarik menjadi operator alat-alat berat.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "15. Saya tertarik menjadi pengawas bangunan.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "16. Saya tertarik menjadi pengemudi bis.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "17. Saya tertarik menjadi insinyur otomotif.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "18. Saya tertarik menjadi ahli mesin.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "19. Saya suka membaca buku ilmiah atau majalah ilmiah.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "20. Saya suka bekerja di laboratorium.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "21. Saya suka mengerjakan suatu proyek ilmiah.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "22. Saya suka mempelajari suatu teori ilmiah.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "23. Saya suka membaca mengenai topik-topik khusus atau keinginan sendiri.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "24. Saya suka menerapkan matematika dalam masalah praktis.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "25. Saya mampu melakukan percobaan atau penelitian ilmiah.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "26. Saya mampu memprogram komputer untuk mempelajari masalah ilmiah.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "27. Saya mampu menginterpretasikan rumus kimia sederhana.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "28. Saya mampu mengerti mengapa satelit buatan manusia tidak jatuh ke bumi.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "29. Saya mampu menyebutkan tiga makanan yang memiliki protein tinggi.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "30. Saya tertarik menjadi ahli biologi/hayati.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "31. Saya tertarik menjadi ahli astronomi/bintang.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "32. Saya tertarik menjadi teknisi laboratorium medis.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "33. Saya tertarik menjadi ahli kimia.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "34. Saya tertarik menjadi ilmuwan peneliti.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "35. Saya tertarik menjadi ahli geologi.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "36. Saya tertarik menjadi pekerja riset ilmiah.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "37. Saya suka membuat sketsa, menggambar, atau melukis.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "38. Saya suka menjadi pemain dalam kelompok musik, orkestra, atau teater.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "39. Saya suka merancang perabotan, pakaian, atau poster.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "40. Saya suka bermain dalam suatu band, kelompok, atau orkestra.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "41. Saya suka memainkan alat musik.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "42. Saya suka menulis untuk suatu majalah atau koran.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "43. Saya suka membuat lukisan atau foto orang.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "44. Saya suka menulis novel atau cerita.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "45. Saya suka membaca atau menulis puisi.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "46. Saya mampu memainkan alat musik.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "47. Saya mampu bermain dalam drama.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "48. Saya mampu menginterpretasikan cerita atau bahan bacaan.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "49. Saya mampu membuat sketsa orang sehingga dapat dikenali.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "50. Saya mampu melukis atau membuat patung.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "51. Saya tertarik menjadi pemain musik.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "52. Saya tertarik menjadi penulis novel.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "53. Saya tertarik menjadi aktor/aktris.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "54. Saya tertarik menjadi wartawan.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "55. Saya suka bertemu dengan pengamat sosial atau pendidikan.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "56. Saya suka bekerja untuk palang merah sebagai relawan.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "57. Saya suka membantu orang lain dengan masalah pribadinya.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "58. Saya suka menjaga/mengurus dan mengawasi anak-anak.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "59. Saya suka mempelajari kenakalan remaja.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "60. Saya mampu mudah bicara dengan semua orang.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "61. Saya mampu memimpin diskusi kelompok.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "62. Saya mampu pandai dalam menjelaskan sesuatu kepada orang lain.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "63. Saya mampu berpartisipasi dalam pencarian dana atau amal.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "64. Saya mampu mengajar anak-anak dengan mudah.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "65. Saya mampu mengajar orang dewasa dengan mudah.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "66. Saya mampu pandai dalam menolong orang lain yang sedang bingung atau bermasalah.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "67. Saya mampu dalam menghibur dan menemani orang yang lebih tua dari saya.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "68. Saya mampu orang mencari saya untuk menceritakan masalah mereka.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "69. Saya tertarik menjadi kepala sekolah.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "70. Saya tertarik menjadi konselor masalah pribadi.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "71. Saya tertarik menjadi pekerja sosial.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "72. Saya tertarik menjadi konselor kejuruan dan pekerjaan.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "73. Saya suka mempengaruhi orang lain.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "74. Saya suka menjual suatu produk.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "75. Saya suka mempelajari strategi untuk keberhasilan bisnis.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "76. Saya suka menjadi pemimpin dalam kelompok.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "77. Saya suka memimpin kelompok dalam meraih tujuan tertentu.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "78. Saya mampu saya memenangkan penghargaan sebagai tenaga penjual atau pemimpin.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "79. Saya mampu saya tahu bagaimana menjadi pemimpin yang berhasil/sukses.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "80. Saya mampu saya seorang pembicara di depan umum yang baik.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "81. Saya mampu saya dapat mengelola usaha kecil.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "82. Saya mampu saya dapat membuat kelompok sosial atau kerja berjalan dengan baik.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "83. Saya mampu saya dikenal dapat berbicara dengan orang yang sulit/keras kepala.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "84. Saya mampu saya dapat mengelola kampanye penjualan.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "85. Saya mampu saya dapat mengatur pekerjaan orang lain.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "86. Saya mampu saya seorang yang berambisi dan cenderung bicara apa adanya.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "87. Saya mampu dan pandai mempengaruhi orang untuk melakukan sesuatu menurut cara saya.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "88. Saya mampu saya seorang tenaga penjual yang baik.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "89. Saya tertarik menjadi eksekutif periklanan.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "90. Saya tertarik menjadi pembawa acara/mc.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "91. Saya suka melakukan pekerjaan surat menyurat atau masalah perkantoran.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "92. Saya suka melakukan operasi matematika dalam bisnis atau pembukuan.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "93. Saya suka membuat catatan pengeluaran yang terperinci.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "94. Saya suka menyusun sistem pengarsipan.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "95. Saya suka membuat daftar inventaris dari persediaan atau produk.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        },
    {
        "question": "96. Saya mampu mengetik sepuluh jari dengan cepat.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "97. Saya mampu menjalankan mesin duplikator/mesin penjumlah.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "98. Saya mampu mengarsip surat dan berkas-berkas lain.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "99. Saya mampu melakukan pekerjaan administrasi kantor.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "100. Saya mampu menggunakan program pembukuan.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "101. Saya mampu melakukan tugas administratif dalam waktu singkat.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "102. Saya mampu menempatkan kredit dan debet.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "103. Saya mampu mencatat dengan cermat pembayaran/penjualan.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "104. Saya tertarik menjadi manajer penjualan.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "105. Saya tertarik menjadi ahli pembukuan.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "106. Saya tertarik menjadi kasir bank.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "107. Saya tertarik menjadi analis keuangan.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "108. Saya tertarik menjadi penaksir biaya.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    }
];