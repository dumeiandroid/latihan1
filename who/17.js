const questionsData = [
    {
        "question": "1",
        "options": {
            "A": "Saya seorang pekerja keras.",
            "B": "Saya tidak suka uring-uringan."
        }
    },
    {
        "question": "2",
        "options": {
            "A": "Saya suka menghasilkan pekerjaan yang lebih baik daripada orang lain.",
            "B": "Saya akan tetap menangani suatu pekerjaan sampai selesai."
        }
    },
    {
        "question": "3",
        "options": {
            "A": "Saya suka menunjukkan pada orang lain cara melakukan sesuatu.",
            "B": "Saya ingin berusaha sebaik mungkin."
        }
    },
    {
        "question": "4",
        "options": {
            "A": "Saya suka melucu.",
            "B": "Saya senang memberitahu orang lain hal-hal yang harus dikerjakan."
        }
    },
    {
        "question": "5",
        "options": {
            "A": "Saya suka bergabung dengan kelompok.",
            "B": "Saya senang diperhatikan oleh kelompok."
        }
    },
    {
        "question": "6",
        "options": {
            "A": "Saya suka menjalin hubungan pribadi yang akrab.",
            "B": "Saya suka berteman dengan kelompok."
        }
    },
    {
        "question": "7",
        "options": {
            "A": "Saya dapat cepat berubah jika merasa perlu.",
            "B": "Saya berusaha menjalin hubungan pribadi yang akrab."
        }
    },
    {
        "question": "8",
        "options": {
            "A": "Saya suka menyerang kembali jika benar-benar disakiti.",
            "B": "Saya suka melakukan hal-hal yang baru dan berbeda."
        }
    },
    {
        "question": "9",
        "options": {
            "A": "Saya ingin agar atasan menyukai saya.",
            "B": "Saya suka menegur orang lain jika mereka melakukan kesalahan."
        }
    },
    {
        "question": "10",
        "options": {
            "A": "Saya suka mengikuti petunjuk-petunjuk yang diberikan pada saya.",
            "B": "Saya suka menyenangkan orang-orang yang menjadi atasan saya."
        }
    },
    {
        "question": "11",
        "options": {
            "A": "Saya berusaha keras sekali.",
            "B": "Saya seorang yang teratur. Saya meletakkan segala sesuatu pada tempatnya."
        }
    },
    {
        "question": "12",
        "options": {
            "A": "Saya dapat membuat orang lain melakukan apa yang saya inginkan.",
            "B": "Saya tidak mudah marah."
        }
    },
    {
        "question": "13",
        "options": {
            "A": "Saya suka memberitahu kelompok, hal-hal yang harus mereka kerjakan.",
            "B": "Saya selalu bertahan pada suatu pekerjaan sampai selesai."
        }
    },
    {
        "question": "14",
        "options": {
            "A": "Saya ingin menjadi orang yang penuh gairah dan menarik.",
            "B": "Saya ingin menjadi orang yang sangat berhasil."
        }
    },
    {
        "question": "15",
        "options": {
            "A": "Saya ingin menjadi bagian dalam kelompok.",
            "B": "Saya suka membantu orang lain mengambil keputusan."
        }
    },
    {
        "question": "16",
        "options": {
            "A": "Saya cemas bila seseorang tidak menyukai saya.",
            "B": "Saya ingin agar orang lain memperhatikan saya."
        }
    },
    {
        "question": "17",
        "options": {
            "A": "Saya suka mencoba hal-hal baru.",
            "B": "Saya lebih suka bekerja bersama orang lain daripada sendiri."
        }
    },
    {
        "question": "18",
        "options": {
            "A": "Kadang-kadang saya menyalahkan orang lain jika ada yang tidak beres.",
            "B": "Saya merasa terganggu jika seseorang tidak menyukai saya."
        }
    },
    {
        "question": "19",
        "options": {
            "A": "Saya suka menyenangkan orang yang menjadi atasan saya.",
            "B": "Saya senang mencoba pekerjaan yang baru dan berbeda."
        }
    },
    {
        "question": "20",
        "options": {
            "A": "Saya menyukai petunjuk-petunjuk terperinci untuk melaksanakan tugas.",
            "B": "Saya suka memberitahu orang lain apabila mereka menjengkelkan."
        }
    },
    {
        "question": "21",
        "options": {
            "A": "Saya selalu berusaha keras.",
            "B": "Saya selalu melaksanakan setiap langkah dengan sangat hati-hati."
        }
    },
    {
        "question": "22",
        "options": {
            "A": "Saya seorang pemimpin yang baik.",
            "B": "Saya menata pekerjaan dengan baik."
        }
    },
    {
        "question": "23",
        "options": {
            "A": "Saya mudah marah.",
            "B": "Saya lambat dalam membuat keputusan."
        }
    },
    {
        "question": "24",
        "options": {
            "A": "Saya mengerjakan beberapa tugas pada saat yang bersamaan.",
            "B": "Bila berada dalam suatu kelompok, saya suka berdiam diri."
        }
    },
    {
        "question": "25",
        "options": {
            "A": "Saya senang sekali bila diundang.",
            "B": "Saya ingin melakukan sesuatu lebih baik daripada orang lain."
        }
    },
    {
        "question": "26",
        "options": {
            "A": "Saya suka membangun hubungan pribadi yang akrab.",
            "B": "Saya memberi nasihat pada orang lain."
        }
    },
    {
        "question": "27",
        "options": {
            "A": "Saya suka melakukan hal-hal yang baru dan berbeda.",
            "B": "Saya suka menceritakan bagaimana saya berhasil dalam melakukan sesuatu."
        }
    },
    {
        "question": "28",
        "options": {
            "A": "Apabila pendapat saya benar, saya suka mempertahankannya.",
            "B": "Saya ingin menjadi bagian dari suatu kelompok."
        }
    },
    {
        "question": "29",
        "options": {
            "A": "Saya tidak mau berbeda dari orang lain.",
            "B": "Saya berusaha akrab dengan orang lain."
        }
    },
    {
        "question": "30",
        "options": {
            "A": "Saya senang diberitahu bagaimana melakukan suatu pekerjaan.",
            "B": "Saya mudah bosan."
        }
    },
    {
        "question": "31",
        "options": {
            "A": "Saya bekerja keras.",
            "B": "Saya banyak berpikir dan membuat rencana."
        }
    },
    {
        "question": "32",
        "options": {
            "A": "Saya memimpin kelompok.",
            "B": "Detail (hal-hal kecil) menarik buat saya."
        }
    },
    {
        "question": "33",
        "options": {
            "A": "Saya membuat keputusan dengan mudah dan cepat.",
            "B": "Saya menyimpan barang-barang secara rapi dan teratur."
        }
    },
    {
        "question": "34",
        "options": {
            "A": "Saya membuat keputusan dengan mudah dan cepat.",
            "B": "Saya jarang marah atau sedih."
        }
    },
    {
        "question": "35",
        "options": {
            "A": "Saya ingin menjadi bagian dalam kelompok.",
            "B": "Saya ingin melakukan hanya satu pekerjaan pada satu waktu."
        }
    },
    {
        "question": "36",
        "options": {
            "A": "Saya berusaha berteman secara akrab.",
            "B": "Saya berusaha sangat keras untuk menjadi yang terbaik."
        }
    },
    {
        "question": "37",
        "options": {
            "A": "Saya suka gaya terbaru dalam hal pakaian dan mobil.",
            "B": "Saya suka bertanggung jawab atas orang lain."
        }
    },
    {
        "question": "38",
        "options": {
            "A": "Saya senang berdebat.",
            "B": "Saya suka mendapat perhatian."
        }
    },
    {
        "question": "39",
        "options": {
            "A": "Saya suka menyenangkan orang yang menjadi atasan saya.",
            "B": "Saya tertarik untuk menjadi bagian dari kelompok."
        }
    },
    {
        "question": "40",
        "options": {
            "A": "Saya suka mengikuti peraturan dengan hati-hati.",
            "B": "Saya suka orang lain mengenal saya dengan baik."
        }
    },
    {
        "question": "41",
        "options": {
            "A": "Saya berusaha keras sekali.",
            "B": "Saya sangat ramah."
        }
    },
    {
        "question": "42",
        "options": {
            "A": "Orang lain berpendapat bahwa saya pemimpin yang baik.",
            "B": "Saya berpikir hati-hati dan lama."
        }
    },
    {
        "question": "43",
        "options": {
            "A": "Saya sering memanfaatkan kesempatan.",
            "B": "Saya suka cerewet mengenai hal-hal yang kecil."
        }
    },
    {
        "question": "44",
        "options": {
            "A": "Orang lain berpendapat bahwa saya bekerja cepat.",
            "B": "Orang lain berpendapat bahwa saya menyimpan segala sesuatu secara teratur dan rapi."
        }
    },
    {
        "question": "45",
        "options": {
            "A": "Saya menyukai permainan dan olahraga.",
            "B": "Saya sangat menyenangkan."
        }
    },
    {
        "question": "46",
        "options": {
            "A": "Saya senang bila orang lain bersikap akrab dan ramah.",
            "B": "Saya selalu berusaha menyelesaikan sesuatu yang telah saya mulai."
        }
    },
    {
        "question": "47",
        "options": {
            "A": "Saya suka bereksperimen dan mencoba hal-hal baru.",
            "B": "Saya suka melaksanakan pekerjaan sulit dengan baik."
        }
    },
    {
        "question": "48",
        "options": {
            "A": "Saya suka diperlakukan secara adil.",
            "B": "Saya suka memberitahu orang lain cara mengerjakan sesuatu."
        }
    },
    {
        "question": "49",
        "options": {
            "A": "Saya suka melakukan hal-hal yang diharapkan dari saya.",
            "B": "Saya suka mendapat perhatian."
        }
    },
    {
        "question": "50",
        "options": {
            "A": "Saya suka petunjuk-petunjuk terperinci untuk melaksanakan suatu tugas.",
            "B": "Saya senang berada bersama orang lain."
        }
    },
    {
        "question": "51",
        "options": {
            "A": "Saya selalu berusaha melakukan pekerjaan secara sempurna.",
            "B": "Orang mengatakan bahwa saya hampir tidak pernah lelah."
        }
    },
    {
        "question": "52",
        "options": {
            "A": "Saya tipe seorang pemimpin.",
            "B": "Saya mudah berteman."
        }
    },
    {
        "question": "53",
        "options": {
            "A": "Saya memanfaatkan kesempatan.",
            "B": "Saya banyak sekali berpikir."
        }
    },
    {
        "question": "54",
        "options": {
            "A": "Saya bekerja dengan tempo yang cepat dan mantap.",
            "B": "Saya senang menangani pekerjaan detail."
        }
    },
    {
        "question": "55",
        "options": {
            "A": "Saya memiliki banyak tenaga untuk permainan dan olahraga.",
            "B": "Saya menyimpan segala sesuatu secara rapi dan teratur."
        }
    },
    {
        "question": "56",
        "options": {
            "A": "Saya bergaul dengan semua orang.",
            "B": "Saya berwatak tenang."
        }
    },
    {
        "question": "57",
        "options": {
            "A": "Saya ingin bertemu orang-orang baru dan melakukan hal-hal baru.",
            "B": "Saya selalu ingin menyelesaikan pekerjaan yang telah saya mulai."
        }
    },
    {
        "question": "58",
        "options": {
            "A": "Saya biasanya suka mempertahankan keyakinan saya.",
            "B": "Saya biasanya suka bekerja keras."
        }
    },
    {
        "question": "59",
        "options": {
            "A": "Saya menyukai saran-saran dan orang-orang yang saya kagumi.",
            "B": "Saya suka bertanggung jawab terhadap orang lain."
        }
    },
    {
        "question": "60",
        "options": {
            "A": "Saya membiarkan orang lain mempengaruhi diri saya secara kuat.",
            "B": "Saya suka mendapat banyak perhatian."
        }
    },
    {
        "question": "61",
        "options": {
            "A": "Saya biasanya bekerja keras sekali.",
            "B": "Saya biasanya bekerja cepat."
        }
    },
    {
        "question": "62",
        "options": {
            "A": "Apabila saya berbicara, kelompok menyimak.",
            "B": "Saya terampil menggunakan peralatan."
        }
    },
    {
        "question": "63",
        "options": {
            "A": "Saya lambat dalam berteman.",
            "B": "Saya lambat dalam mengambil keputusan."
        }
    },
    {
        "question": "64",
        "options": {
            "A": "Saya biasanya makan dengan cepat.",
            "B": "Saya senang membaca."
        }
    },
    {
        "question": "65",
        "options": {
            "A": "Saya menyukai pekerjaan yang membuat saya banyak bergerak.",
            "B": "Saya menyukai pekerjaan yang harus saya kerjakan secara hati-hati."
        }
    },
    {
        "question": "66",
        "options": {
            "A": "Saya berteman dengan sebanyak mungkin orang.",
            "B": "Saya dapat menemukan sesuatu yang telah saya sisihkan."
        }
    },
    {
        "question": "67",
        "options": {
            "A": "Saya merencanakan jauh di muka.",
            "B": "Saya selalu menyenangkan."
        }
    },
    {
        "question": "68",
        "options": {
            "A": "Saya sangat bangga akan nama baik saya.",
            "B": "Saya tetap menangani suatu permasalahan sampai terpecahkan."
        }
    },
    {
        "question": "69",
        "options": {
            "A": "Saya suka menyenangkan orang-orang yang saya kagumi.",
            "B": "Saya ingin berhasil."
        }
    },
    {
        "question": "70",
        "options": {
            "A": "Saya suka orang-orang lain membuat keputusan-keputusan untuk kelompok.",
            "B": "Saya suka membuat keputusan-keputusan untuk kelompok."
        }
    },
    {
        "question": "71",
        "options": {
            "A": "Saya selalu berusaha sangat keras.",
            "B": "Saya membuat keputusan secara mudah dan cepat."
        }
    },
    {
        "question": "72",
        "options": {
            "A": "Kelompok biasanya melaksanakan keinginan saya.",
            "B": "Saya biasa tergesa-gesa."
        }
    },
    {
        "question": "73",
        "options": {
            "A": "Saya sering merasa lelah.",
            "B": "Saya lambat dalam membuat keputusan."
        }
    },
    {
        "question": "74",
        "options": {
            "A": "Saya bekerja cepat.",
            "B": "Saya mudah berteman."
        }
    },
    {
        "question": "75",
        "options": {
            "A": "Saya biasanya bersemangat atau bergairah.",
            "B": "Saya menggunakan banyak waktu untuk berpikir."
        }
    },
    {
        "question": "76",
        "options": {
            "A": "Saya sangat ramah terhadap orang lain.",
            "B": "Saya menyukai pekerjaan yang menuntut ketelitian."
        }
    },
    {
        "question": "77",
        "options": {
            "A": "Saya banyak berpikir dan merencana.",
            "B": "Saya menyimpan segala sesuatu pada tempatnya."
        }
    },
    {
        "question": "78",
        "options": {
            "A": "Saya menyukai pekerjaan yang menuntut hal-hal yang mendetail.",
            "B": "Saya tidak cepat marah."
        }
    },
    {
        "question": "79",
        "options": {
            "A": "Saya suka mengikuti orang-orang yang saya kagumi.",
            "B": "Saya selalu menyelesaikan pekerjaan yang telah saya mulai."
        }
    },
    {
        "question": "80",
        "options": {
            "A": "Saya menyukai petunjuk-petunjuk yang jelas.",
            "B": "Saya suka bekerja keras."
        }
    },
    {
        "question": "81",
        "options": {
            "A": "Saya mengejar hal-hal yang menjadi keinginan saya.",
            "B": "Saya seorang pemimpin yang baik."
        }
    },
    {
        "question": "82",
        "options": {
            "A": "Saya membuat orang lain bekerja keras.",
            "B": "Saya suka bersenang-senang."
        }
    },
    {
        "question": "83",
        "options": {
            "A": "Saya membuat keputusan dengan cepat.",
            "B": "Saya berbicara cepat."
        }
    },
    {
        "question": "84",
        "options": {
            "A": "Saya biasanya bekerja secara tergesa-gesa.",
            "B": "Saya berolahraga secara teratur."
        }
    },
    {
        "question": "85",
        "options": {
            "A": "Saya tidak suka bertemu orang-orang lain.",
            "B": "Saya cepat lelah."
        }
    },
    {
        "question": "86",
        "options": {
            "A": "Saya berteman dengan banyak sekali orang.",
            "B": "Saya menggunakan banyak waktu untuk berpikir."
        }
    },
    {
        "question": "87",
        "options": {
            "A": "Saya suka bekerja dengan teori.",
            "B": "Saya suka melaksanakan pekerjaan detail."
        }
    },
    {
        "question": "88",
        "options": {
            "A": "Saya suka melaksanakan pekerjaan detail.",
            "B": "Saya suka mengatur pekerjaan saya."
        }
    },
    {
        "question": "89",
        "options": {
            "A": "Saya meletakkan segala sesuatu pada tempatnya.",
            "B": "Saya selalu menyenangkan."
        }
    },
    {
        "question": "90",
        "options": {
            "A": "Saya senang diberitahu hal-hal yang harus saya kerjakan.",
            "B": "Saya harus menyelesaikan apa yang telah saya mulai."
        }
    }
];