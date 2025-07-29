const questionsData = [
    {
        "question": "1. Senang menulis atau mengarang cerita, puisi, sajak, atau dongeng.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "2. Menyukai pelajaran Bahasa Indonesia, sejarah, atau mata pelajaran yang berkaitan dengan interaksi sosial.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "3. Senang bercerita panjang lebar, menceritakan apa yang pernah dialami atau dibaca.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "4. Mudah berkomunikasi dan mengekspresikan diri dalam bentuk ucapan dan tulisan.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "5. Suka berdebat, memberi pendapat berserta penjelasan mendetail.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "6. Suka mendengarkan diskusi, radio, atau ceramah.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "7. Memiliki kosa kata yang baik, istilah bahasa yang banyak.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "8. Senang membaca apa saja: buku, majalah, koran, spanduk, bahkan label produk.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "9. Kamu mudah mengingat tanggal, serta nama-nama tempat.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "10. Senang dengan game permainan kata, membuat plesetan kata, atau pantun lucu.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "11. Suka bekerja secara sistematis, tersusun, dan terencana dengan baik.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "12. Senang permainan catur atau game yang membutuhkan strategi.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "13. Sangat senang dengan pelajaran matematika, fisika, atau akuntansi.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "14. Suka bermain dengan angka, melakukan perhitungan matematis.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "15. Senang bermain teka-teki yang melibatkan logika.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "16. Tertarik pada teknologi, suka bereksperimen dengan benda baru.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "17. Dapat menganalisis situasi dan membuat urutan peristiwa.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "18. Senang pada sesuatu yang membutuhkan pemikiran logis.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "19. Memiliki ketertarikan pada ilmu pengetahuan, sains, dan komputer.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "20. Menunjukkan minat pada mata pelajaran yang berhubungan dengan sains.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "21. Menyukai kegiatan menggambar, mencetak, atau melukis.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "22. Lebih mudah belajar dan bekerja dengan gambar daripada dengan tulisan.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "23. Senang menonton film dan melihat cerita bergambar.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "24. Senang mengabadikan gambar, foto, atau membuat rekaman video.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "25. Mudah dalam membaca sebuah denah, peta, diagram, dan grafik.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "26. Mampu merancang konstruksi bangunan, bentuk, ruang, dekorasi, dan interior.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "27. Sering membayangkan ruang sebelum masuk dan membuat denah ruang.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "28. Senang melamun, berhayal, atau membaca cerita imajinatif.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "29. Menyukai bacaan dengan banyak gambar atau ilustrasi.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "30. Suka membuat coretan-coretan kecil ketika sedang berpikir.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "31. Menyukai beladiri, olahraga, atau membuat prakarya.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "32. Suka berolahraga atau menggerakan tubuh dengan teratur.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "33. Mempelajari sesuatu dengan memegang atau menyentuhnya secara langsung.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "34. Lebih suka belajar praktik dibandingkan duduk diam mendengarkan.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "35. Senang dengan permainan yang berani, berbahaya, dan 'Menguji Nyali.'",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "36. Senang berlari-larian dan memiliki stamina yang tahan lama.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "37. Lebih senang mempelajari hal baru langsung dengan praktik.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "38. Mampu mengekspresikan diri secara dramatis.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "39. Selalu bergerak, tidak bisa diam, atau selalu gelisah ketika duduk lama.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "40. Dapat menirukan tingkah laku atau ciri khas orang.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "41. Bisa bernyanyi atau memainkan alat musik dengan baik.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "42. Menyukai pelajaran seni musik dan suara.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "43. Memahami ketika mendengar nada sumbang.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "44. Sering bersenandung dan bernyanyi sendiri tanpa sadar.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "45. Menjadi sangat bersemangat ketika musik dimainkan.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "46. Dapat mengingat melodi atau irama dengan cepat.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "47. Suka mendengarkan musik di mana pun berada.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "48. Tanpa sadar memiliki kebiasaan mengetuk-ngetuk.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "49. Memiliki cara berbicara dan bergerak yang berirama.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "50. Musik (lagu, film, atau iklan) secara tiba-tiba bisa muncul dalam kepala.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "51. Senang bekerja sama dan menjadi bagian dalam satu kelompok.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "52. Memiliki rasa empati atau perhatian yang besar terhadap orang lain.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "53. Senang bersosialisasi dan mudah bergaul dengan siapa pun.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "54. Mudah menyesuaikan diri dengan lingkungan yang baru.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "55. Mempunyai banyak teman dan beberapa sahabat dekat.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "56. Menyukai olahraga tim, seperti basket, volley, atau sepakbola.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "57. Senang memberi saran pada teman yang mengalami masalah.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "58. Suka bila menjadi penasihat atau menjadi pemimpin.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "59. Senang menjadi anggota klub, panitia, atau kelompok informal di antara teman sebaya.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "60. Senang mengajari anak-anak secara informal.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "61. Suka membuat catatan pribadi atau diary kejadian dan pemikiran.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "62. Selalu melakukan introspeksi diri dalam merefleksikan masalah yang ada.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "63. Suka menikmati kesendirian.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "64. Pemikir yang andal, tidak dipengaruhi orang dalam memutuskan sesuatu.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "65. Memiliki kehidupan pribadi yang tidak diketahui oleh orang lain.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "66. Senang bekerja sendirian atau dengan cara sendiri.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "67. Bekerja dan belajar atas tujuan yang ditetapkan oleh diri sendiri.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "68. Tahu kelebihan dan kekurangan diri sendiri dan berusaha memperbaikinya.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "69. Selalu berpikir dengan saksama sebelum memutuskan tindakan yang pantas.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "70. Senang dengan materi pengembang diri, konseling, dan mengenal diri.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "71. Menyukai hewan atau tumbuhan.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "72. Memiliki hewan peliharaan atau kebun kecil di rumah.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "73. Sangat senang pada pelajaran biologi dan lingkungan hidup.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "74. Sangat terganggu ketika ada yang merusak lingkungan dan membuang sampah sembarangan, atau menyiksa binatang.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "75. Menyukai karya wisata di alam, kebun binatang, atau museum purbakala.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "76. Senang melakukan penelitian yang berhubungan dengan alam.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "77. Bisa mengetahui perubahan musim atau dapat membaca tanda-tanda alam.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "78. Senang mengetahui bagaimana bekerja dan hal yang berhubungan dengan kesehatan.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "79. Menyukai kegiatan alam, mendaki gunung, dan menanam pohon.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "80. Senang menyerukan hak binatang atau perlunya melindungi planet bumi atau melestarikan alam.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    }
];