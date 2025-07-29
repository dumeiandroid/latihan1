const questionsData = [
    {
        "question": "1. Apa Anda selalu takut bahwa orang akan membentak Anda?",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "2. Apakah Anda takut jika berada dalam gelap?",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "3. Apakah Anda takut akan bunyi geledek?",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "4. Apakah Anda takut air?",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "5. Apakah Anda takut melalui sebuah terowongan?",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "6. Apakah Anda takut juga apabila Anda melewati sebuah sungai?",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "7. Pernahkah timbul keinginan pada Anda untuk melompat ke dalam air jika Anda melalui sebuah jembatan?",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "8. Jika dibandingkan dengan orang-orang lain apakah Anda sering mengalami rasa takut?",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "9. Apakah Anda merasa takut pada waktu tengah malam?",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "10. Apakah Anda pada malam hari mendengarkan bunyi-bunyi yang menakutkan?",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "11. Apakah Anda kadang-kadang mimpi tentang orang-orang yang sudah meninggal?",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "12. Pernahkah Anda menggigit kuku Anda sedemikian rupa sehingga Anda merasa kesakitan?",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "13. Apakah Anda kadang-kadang menganggap bila Anda sedang meluap atau marah?",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "14. Dapatkah Anda lama duduk dengan tenang?",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "15. Apakah Anda mempunyai kebiasaan untuk menggerak-gerakan kepala, leher, bahu Anda?",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "16. Apakah Anda senang mengganti-ganti pekerjaan/sekolah?",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "17. Seringkah orang mengatakan kepada Anda bahwa Anda orang pelupa?",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "18. Sukakah Anda untuk waktu yang agak lama memainkan permainan yang sama?",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "19. Adakah orang yang kadang-kadang demikian mengganggu Anda hingga Anda menangis?",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "20. Sanggupkah Anda menahan sakit seperti orang lain lamanya?",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "21. Cukup tahankah Anda melihat darah?",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "22. Seringkah Anda merasa sakit?",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "23. Seringkah Anda mempunyai perasaan bahwa Anda tak dapat bernafas lagi?",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "24. Apakah Anda pada umumnya merasa sungguh-sungguh sehat?",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "25. Apakah Anda masih merasa salah setiap kali Anda bangun pada pagi hari?",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "26. Apakah Anda selalu merasa lelah?",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "27. Seringkah Anda merasa jemu?",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "28. Seringkah Anda merasa sakit kepala?",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "29. Adakah makanan yang Anda tidak dapat memakannya?",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "30. Apakah makanan tersebut Anda benci hingga Anda tak dapat memakannya?",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "31. Apakah Anda umumnya nyenyak tidur?",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "32. Apakah Anda selalu tahu pasti apa yang Anda kehendaki?",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "33. Sukarkah bagi Anda untuk memutuskan sesuatu?",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "34. Apakah Anda percaya pada tahayul?",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "35. Pernahkah Anda mempunyai keinginan untuk lari dari rumah?",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "36. Pernahkah Anda mempunyai perasaan seakan-akan ada yang mendorong Anda untuk melarikan diri?",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "37. Pernahkah Anda lari dari rumah?",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "38. Pernahkah Anda takut untuk menyeberang jalan atau melalui lapangan yang luas?",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "39. Apakah Anda kadang-kadang merasa takut untuk duduk dalam suatu ruangan yang tertutup?",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "40. Apakah Anda takut sekali dengan api?",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "41. Apakah Anda kadang-kadang takut menyalakan api?",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "42. Apakah Anda biasanya melihat dahulu ke kolong tempat tidur sebelum Anda pergi untuk tidur?",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "43. Senangkah Anda bermain-main dengan orang lain?",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "44. Apakah Anda lebih suka bermain sendiri daripada dengan orang lain?",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "45. Apakah orang lain setuju jika Anda bermain dengan mereka?",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "46. Seringkah Anda menjadi marah?",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "47. Pada waktu bermain-main apakah Anda selalu memerintah?",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "48. Pada umumnya apakah Anda merasa bahagia?",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "49. Adakah kalanya Anda merasa tidak sama dengan orang-orang lain?",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "50. Adakah kalanya Anda merasa bahwa tidak ada orang yang mengerti dengan kondisi Anda?",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "51. Apakah Anda mempunyai idaman untuk mempunyai penghidupan yang lain disamping penghidupan sehari-hari?",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "52. Pernahkah Anda membayangkan diri Anda sebagai anak pungut, dan sukarkah bagi Anda untuk melepaskan diri dari bayangan ini?",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "53. Adakah bayangan-bayangan lain yang serupa ini?",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "54. Seringkah Anda diganggu oleh bayangan-bayangan bahwa benda-benda yang ada di sekitar Anda dalam kenyataannya tidak ada?",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "55. Mudahkah Anda mendapatkan teman?",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "56. Seringkah Anda merasa akan melakukan tindakan-tindakan yang buruk?",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "57. Apakah Anda yakin bahwa Anda disukai orang-orang sebagaimana orang lain?",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "58. Adakah kalanya Anda merasa yakin bahwa Anda tak mencintai seorangpun?",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "59. Apakah Anda sukar mengikuti keadaan di tempat kerja/sekolah?",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "60. Apakah keluarga Anda bijaksana terhadap Anda?",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "61. Apakah guru/atasan Anda bijaksana terhadap Anda?",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "62. Apakah Anda sering diganggu oleh bayangan bahwa Anda diikuti orang?",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "63. Seringkah Anda mempunyai bayangan bahwa ada orang yang hendak berbuat jahat terhadap Anda?",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "64. Apakah Anda jadi gusar jika orang tak melakukan apa yang Anda kehendaki?",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "65. Pernahkah Anda merusak barang-barang pada waktu Anda marah?",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "66. Seringkah Anda marah-marah tanpa alasan?",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "67. Pernahkah Anda jatuh pingsan?",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "68. Seringkah Anda jatuh pingsan?",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "69. Adakah kalanya Anda tak dapat melihat sesuatu dengan baik?",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "70. Sukakah Anda pada suatu pekerjaan di mana dilakukan pembunuhan binatang?",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "71. Pernahkah Anda mempunyai keinginan untuk membuat orang marah?",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "72. Senangkah Anda mengganggu orang lain sedemikian hingga ia menangis?",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "73. Pernahkah timbul perasaan senang pada Anda jika Anda dapat menyakiti orang lain?",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "74. Pernahkah Anda merasa senang jika Anda menyiksa seekor binatang?",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "75. Pernahkah Anda mempunyai keinginan untuk mencuri?",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    }
];