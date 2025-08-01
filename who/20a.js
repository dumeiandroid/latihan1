const questionsData = [
    {
        "question": "1. Saya setuju bahwa remaja akan lebih baik jika mereka berusaha lebih keras untuk memahami dan belajar dari pengalaman orang yang lebih tua.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "2. Saya menikmati mengemudi dengan kecepatan tinggi.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "3. Saya umumnya berhasil menjaga penampilan tenang bahkan ketika saya sangat kesal di dalam.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "4. Saya merasa bahwa saat ini terlalu sedikit orang yang memiliki keberanian untuk membela apa yang benar.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "5. Saya setuju bahwa orang yang cenderung \"Bossy\" sebenarnya kurang percaya diri meskipun mereka mungkin tidak menyadarinya.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "6. Saya tidak suka ketika orang tidak jelas tentang apa yang saya katakan dan meminta saya untuk mengulanginya.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "7. Saya percaya bahwa kepemimpinan yang efektif berarti memberdayakan orang untuk memberikan yang terbaik dari diri mereka sendiri daripada mencari yang terbaik untuk diri mereka sendiri.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "8. Saya merasa bahwa saat ini terlalu banyak adegan seks dan kekerasan di TV.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "9. Menurut saya, sehat untuk secara bebas membahas topik seperti seks, fungsi tubuh, keintiman, dan lain-lain.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "10. Saya merasa sulit untuk melakukan diet, berhenti merokok, atau melakukan kebiasaan buruk lainnya.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "11. Menurut saya, batas kecepatan harus ditegakkan dengan ketat.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "12. Saya setuju bahwa orang tua cenderung terlalu permisif saat ini.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "13. Saya percaya bahwa keterbukaan dan kejujuran mutlak dengan orang lain adalah mungkin.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "14. Menurut saya, sebagian besar keputusan penting dalam hidup didasarkan pada perasaan.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "15. Saya merasa bahwa terlalu banyak orang saat ini membiarkan orang lain terlalu banyak menekan mereka.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "16. Tidak seperti kebanyakan orang, saya merasa cukup nyaman dengan periode keheningan yang lama.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "17. Saya dapat mengingat situasi di mana, sebagai seorang anak, orang lain membuat saya merasa malu.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "18. Saya percaya bahwa terkadang anak-anak perlu dipukul pantatnya demi kebaikan mereka sendiri.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "19. Saya merasa bahwa kita membutuhkan lebih banyak sensor dalam film, TV, majalah, dan lain-lain.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "20. Saya jarang, jika pernah, merasa bosan, tidak sabar, atau kesepian, bahkan saat bersama orang asing.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "21. Saya tahu bahwa kadang-kadang saya seharusnya makan dan minum lebih sedikit dari yang saya lakukan.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "22. Opini baik dari orang lain itu penting bagi saya.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "23. Orang tua saya mendorong saya untuk menjelajahi dan mempelajari hal-hal sendiri.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "24. Saya merasa tidak nyaman ketika sesuatu yang tidak terduga terjadi.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "25. Saya percaya bahwa bahkan ketika seseorang merasa hidup tidak layak dijalani, tidak seorang pun dibenarkan melakukan bunuh diri.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "26. Saya mencoba dan menghadiri banyak kursus, seminar, kuliah, dan lain-lain.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "27. Kadang-kadang saya berkata pada diri sendiri, “Diam - kamu terlalu banyak bicara”.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "28. Saya merasa bahwa solusi untuk perceraian adalah dengan membuat persyaratan lebih ketat sehingga pernikahan akan dipertimbangkan lebih serius.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "29. Saya jarang, jika pernah, tersipu.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "30. Menurut saya, sebagian besar kesalahan disebabkan oleh kesalahpahaman daripada kecerobohan.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "31. Situasi tegang membuat saya merasa cukup tidak nyaman sehingga saya harus melakukan sesuatu tentang hal itu.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "32. Saya merasa bahwa sebagian besar anak muda akan mendapat manfaat dari wajib militer.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "33. Saya seringkali harus mengubah keyakinan kuat saya sebagai hasil dari informasi baru.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "34. Saya percaya bahwa kerendahan hati adalah salah satu kebajikan, mungkin yang terbesar.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "35. Saya merasa bahwa gaya rambut ekspresif tampaknya harus mengkompensasi otak kecil saat ini.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "36. Menurut saya, pengalaman itu berguna tetapi dalam banyak kasus, mungkin perlu dimodifikasi oleh fakta dan informasi baru.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "37. Saya merasa bahwa pernikahan antara orang-orang dari ras atau negara yang berbeda cenderung bermasalah.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "38. Saya setuju bahwa terlalu banyak bekerja tanpa bersenang-senang membuat hidup membosankan dan itu bukan cara saya ingin hidup.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "39. Kadang-kadang saya mendengar diri saya berkata “Saya tidak membuat aturan, saya hanya mengikutinya”.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "40. Saya percaya bahwa Anda tidak dapat mengubah sifat manusia.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "41. Saya tidak percaya bahwa harus ada...",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "42. Kadang-kadang saya merasa sangat putus asa sehingga saya ingin melarikan diri.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "43. Saya setuju bahwa hukuman mati seharusnya tidak pernah dihapuskan sepenuhnya.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "44. Menurut saya, orang-orang harus lebih sering pergi ke gereja.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "45. Saya setuju bahwa sebagian besar keputusan membawa beberapa konsekuensi dan saya suka mengevaluasi konsekuensi tersebut sebelum membuat keputusan.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "46. Saya khawatir tentang persetujuan orang lain.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "47. Saya suka menjalankan sesuatu, menjadi bos dalam situasi, mengambil alih.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "48. Bahkan di pertemuan sosial, saya menemukan diri saya membahas bisnis atau mengumpulkan data dari majalah dan buku.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "49. Saya merasa bahwa menjadi bawahan tidaklah mudah tetapi lebih baik daripada menjadi bos.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "50. Saya cepat bosan dengan suatu situasi.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "51. Saya percaya bahwa masyarakat akan lebih baik jika hukum ditegakkan lebih ketat.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "52. Saya tidak malu dengan air mata saya ketika saya cukup sedih untuk menangis, bahkan ketika orang lain ada di sekitar.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "53. Saya mengatakan apa yang saya pikirkan ketika orang lain salah atau bodoh.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "54. Saya iri pada orang yang berhenti dari karir mereka untuk memulai gaya hidup baru.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "55. Saya tidak bisa mempercayai orang seperti yang tampaknya dilakukan banyak orang.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "56. Meskipun mungkin ada pendekatan standar untuk suatu situasi, saya suka mencari cara baru.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "57. Saya menunda-nunda sesuatu sampai tidak bisa lagi ditunda.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "58. Saya cenderung menantang orang lain, bertanya dan menjadi agresif.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "59. Saya setuju bahwa sebagian besar orang mampu melakukan pengarahan dan pengendalian diri yang berkelanjutan.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "60. Hal-hal seperti berkebun, berenang, seks, dan bentuk aktivitas fisik lainnya membuat saya merasa nyaman.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    },
    {
        "question": "61. Saya marah atau jijik dengan seseorang yang menurut saya penurut, berkompromi, dll.",
        "options": {
            "A": "Ya",
            "B": "Tidak"
        }
    }
];