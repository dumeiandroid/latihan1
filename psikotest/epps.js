const questionsData = [
    {
        "question": "1",
        "options": {
            "A": "Saya suka menolong teman-teman saya, bila mereka berada dalam kesulitan.",
            "B": "Saya ingin melakukan pekerjaan apa saja sebaik mungkin."
        }
    },
    {
        "question": "2",
        "options": {
            "A": "Saya ingin mengetahui bagaimana pandangan orang-orang besar, mengenai berbagai masalah yang menarik perhatian saya.",
            "B": "Saya ingin menjadi seorang akhli yang diakui dalam salah satu pekerjaan, jabatan atau bidang khusus."
        }
    },
    {
        "question": "3",
        "options": {
            "A": "Saya ingin agar setiap pekerjaan tulisan saya teliti, rapi dan tersusun dengan baik.",
            "B": "Saya ingin menjadi seorang ahli yang diakui dalam salah satu pekerjaan, jabatan atau bidang khusus."
        }
    },
    {
        "question": "4",
        "options": {
            "A": "Saya suka menceritakan cerita-cerita yang lucu dan lelucon-lelucon waktu pesta.",
            "B": "Saya ingin menulis roman atau sandiwara yang hebat."
        }
    },
    {
        "question": "5",
        "options": {
            "A": "Saya ingin dapat berbuat sekehendak hati saya.",
            "B": "Saya ingin bisa mengatakan bahwa saya telah melakukan dengan baik suatu pekerjaan yang sulit."
        }
    },
    {
        "question": "6",
        "options": {
            "A": "Saya ingin dapat memecahkan teka-teki dan persoalan-persoalan yang sukar bagi orang lain.",
            "B": "Saya suka mengikuti petunjuk-petunjuk dan melakukan apa yang diharapkan orang dari diri saya."
        }
    },
    {
        "question": "7",
        "options": {
            "A": "Saya ingin mengalami hal-hal yang baru dan perubahan-perubahan dalam kehidupan saya sehari-hari.",
            "B": "Saya suka menyatakan pada atasan-atasan saya, bahwa mereka telah melakukan sesuatu pekerjaan dengan baik, bila memang demikian halnya menurut pikiran saya."
        }
    },
    {
        "question": "8",
        "options": {
            "A": "Saya suka merencanakan dan mengatur detail-detail dari setiap pekerjaan yang harus saya lakukan.",
            "B": "Saya suka mengikuti petunjuk-petunjuk dan melakukan apa yang diharapkan orang dari diri saya."
        }
    },
    {
        "question": "9",
        "options": {
            "A": "Saya ingin orang-orang memperhatikan dan memberikan komentar mengenai penampilan saya di depan umum.",
            "B": "Saya suka membaca riwayat hidup orang-orang besar."
        }
    },
    {
        "question": "10",
        "options": {
            "A": "Saya suka mengelakkan keadaan-keadaan di mana saya diharapkan akan berlaku secara konvensional (kebiasaan umum).",
            "B": "Saya suka membaca riwayat hidup orang-orang besar."
        }
    },
    {
        "question": "11",
        "options": {
            "A": "Saya ingin menjadi seorang ahli yang diakui dalam salah satu pekerjaan, jabatan atau bidang khusus.",
            "B": "Saya ingin agar pekerjaan saya diatur dan direncanakan sebelum dimulai."
        }
    },
    {
        "question": "12",
        "options": {
            "A": "Saya ingin mengetahui bagaimana pandangan orang-orang besar/ahli, mengenai berbagai masalah yang menarik perhatian saya.",
            "B": "Seandainya saya harus bepergian, maka saya ingin segala sesuatunya telah direncanakan terlebih dahulu."
        }
    },
    {
        "question": "13",
        "options": {
            "A": "Saya ingin mengerjakan sampai selesai setiap pekerjaan ataupun tugas yang telah saya mulai.",
            "B": "Saya ingin barang-barang saya tersusun rapi dan teratur di atas meja atau di dalam ruang kerja saya."
        }
    },
    {
        "question": "14",
        "options": {
            "A": "Saya suka bercerita kepada orang-orang lain tentang petualangan-petualangan saya dan hal-hal aneh yang pernah saya alami.",
            "B": "Saya suka makan saya teratur dan ada waktu-waktu tertentu untuk makan."
        }
    },
    {
        "question": "15",
        "options": {
            "A": "Saya ingin tidak tergantung dari orang lain dalam menentukan apa yang akan saya lakukan.",
            "B": "Saya ingin barang-barang saya tersusun rapi dan teratur di atas meja atau di dalam ruang kerja saya."
        }
    },
    {
        "question": "16",
        "options": {
            "A": "Saya ingin bisa mengerjakan segala sesuatu lebih baik dari pada orang-orang lain.",
            "B": "Saya suka menceritakan cerita-cerita lucu dan lelucon-lelucon waktu pesta."
        }
    },
    {
        "question": "17",
        "options": {
            "A": "Saya suka mengikuti adat-istiadat, dan menghindarkan melakukan hal-hal yang mungkin dianggap tidak wajar oleh orang-orang yang saya hormati.",
            "B": "Saya suka berbicara tentang hal-hal yang telah saya capai."
        }
    },
    {
        "question": "18",
        "options": {
            "A": "Saya ingin agar hidup saya teratur sedemikian rupa sehingga berjalan lancar dan tanpa banyak perubahan-perubahan dalam rencana saya.",
            "B": "Saya suka bercerita kepada orang-orang lain tentang petualangan-petualangan saya dan hal-hal aneh yang pernah saya alami."
        }
    },
    {
        "question": "19",
        "options": {
            "A": "Saya suka membaca buku-buku atau sandiwara-sandiwara yang terutama berkisar sekitar soal-soal sex.",
            "B": "Saya suka menjadi pusat perhatian dalam suatu kelompok."
        }
    },
    {
        "question": "20",
        "options": {
            "A": "Saya suka mengecam orang-orang yang mempunyai kedudukan sebagai yang berwenang.",
            "B": "Saya suka menggunakan kata-kata yang maknanya seringkali tidak diketahui oleh orang lain."
        }
    },
    {
        "question": "21",
        "options": {
            "A": "Saya ingin menyelesaikan tugas-tugas yang dianggap orang membutuhkan ketrampilan serta usaha.",
            "B": "Saya ingin dapat berbuat sekehendak hati saya."
        }
    },
    {
        "question": "22",
        "options": {
            "A": "Saya suka memuji seseorang yang saya kagumi.",
            "B": "Saya ingin merasa bebas untuk melakukan apa yang saya kehendaki."
        }
    },
    {
        "question": "23",
        "options": {
            "A": "Saya suka menyimpan surat-surat, bon-bon, dan kertas-kertas lain secara tersusun rapi dan menurut sistem tertentu.",
            "B": "Saya ingin tidak tergantung dari orang lain dalam menentukan apa yang akan saya lakukan."
        }
    },
    {
        "question": "24",
        "options": {
            "A": "Saya suka mengajukan pertanyaan-pertanyaan yang setahu saya tak seorangpun akan bisa menjawabnya.",
            "B": "Saya suka mengecam orang-orang yang mempunyai kedudukan sebagai yang berwenang."
        }
    },
    {
        "question": "25",
        "options": {
            "A": "Saya menjadi sedemikian marahnya, sehingga rasanya ingin melemparkan dan merusak barang-barang.",
            "B": "Saya suka mengelakkan tanggung jawab dan kewajiban-kewajiban."
        }
    },
    {
        "question": "26",
        "options": {
            "A": "Saya ingin berhasil dalam apa yang saya lakukan.",
            "B": "Saya suka membuat teman-teman baru."
        }
    },
    {
        "question": "27",
        "options": {
            "A": "Saya suka mengikuti petunjuk-petunjuk dan melakukan apa yang diharapkan orang dari diri saya.",
            "B": "Saya ingin mempunyai ikatan perasaan yang kuat dengan teman-teman saya."
        }
    },
    {
        "question": "28",
        "options": {
            "A": "Saya ingin agar setiap pekerjaan tulisan saya teliti, rapi dan tersusun dengan baik.",
            "B": "Saya ingin membuat teman sebanyak mungkin."
        }
    },
    {
        "question": "29",
        "options": {
            "A": "Saya suka menceritakan cerita-cerita lucu dan lelucon-lelucon waktu pesta.",
            "B": "Saya suka berkirim surat pada teman-teman saya."
        }
    },
    {
        "question": "30",
        "options": {
            "A": "Saya ingin dapat berbuat sekehendak hati saya.",
            "B": "Saya suka bersama-sama dengan teman-teman saya melakukan atau melayani sesuatu."
        }
    },
    {
        "question": "31",
        "options": {
            "A": "Saya ingin dapat memecahkan teka-teki dan persoalan-persoalan yang sukar bagi orang lain.",
            "B": "Saya suka menilai orang-orang berdasarkan sebab-sebab mereka melakukan sesuatu dan bukan atas dasar yang sesungguhnya mereka lakukan."
        }
    },
    {
        "question": "32",
        "options": {
            "A": "Saya suka menerima pimpinan orang-orang yang saya kagumi.",
            "B": "Saya ingin memahami bagaimana perasaan teman-teman saya dalam menghadapi pelbagai masalah."
        }
    },
    {
        "question": "33",
        "options": {
            "A": "Saya suka makan saya teratur dan ada waktu-waktu tertentu untuk makan.",
            "B": "Saya suka mempelajari dan menganalisa tingkah laku orang-orang lain."
        }
    },
    {
        "question": "34",
        "options": {
            "A": "Saya ingin mengatakan hal-hal yang dianggap lucu dan cerdas oleh orang-orang lain.",
            "B": "Saya suka menempatkan diri saya ke dalam kedudukan orang-orang lain, dan membayangkan bagaimana perasaan saya bila berada dalam keadaan yang sama."
        }
    },
    {
        "question": "35",
        "options": {
            "A": "Saya ingin merasa bebas untuk melakukan apa yang saya kehendaki.",
            "B": "Saya suka mengamat-amati bagaimana perasaan orang lain dalam suatu keadaan tertentu."
        }
    },
    {
        "question": "36",
        "options": {
            "A": "Saya ingin menyelesaikan tugas-tugas yang dianggap orang membutuhkan ketrampilan serta usaha.",
            "B": "Saya ingin teman-teman memberi dorongan-dorongan kepada saya bila saya menghadapi kegagalan."
        }
    },
    {
        "question": "37",
        "options": {
            "A": "Dalam merencanakan sesuatu, saya ingin mendapat saran-saran dari orang-orang yang perdapatnya saya hormati.",
            "B": "Saya ingin diperlakukan dengan ramah oleh teman-teman saya."
        }
    },
    {
        "question": "38",
        "options": {
            "A": "Saya ingin agar hidup saya teratur sedemikian rupa sehingga berjalan lancar dan tanpa banyak perubahan-perubahan dalam rencana saya.",
            "B": "Saya ingin teman-teman saya merasa kasihan pada saya apabila saya sakit."
        }
    },
    {
        "question": "39",
        "options": {
            "A": "Saya suka menjadi pusat perhatian dalam suatu kelompok.",
            "B": "Saya ingin agar teman-teman saya meributkan tentang diri saya, apabila saya mendapatkan cedera atau sakit."
        }
    },
    {
        "question": "40",
        "options": {
            "A": "Saya suka mengelakkan keadaan-keadaan di mana saya diharapkan akan berlaku secara konvensional (kebiasaan umum).",
            "B": "Saya ingin agar teman-teman saya bersimpati terhadap saya dan menghibur saya bila saya bersusah hati."
        }
    },
    {
        "question": "41",
        "options": {
            "A": "Saya ingin menulis roman atau sandiwara yang hebat.",
            "B": "Bila saya termasuk dalam suatu kepanitiaan, saya ingin ditunjuk atau dipilih sebagai ketuanya."
        }
    },
    {
        "question": "42",
        "options": {
            "A": "Bila saya berada dalam suatu kelompok, saya suka menerima pimpinan orang lain dalam memutuskan apa yang akan dilakukan oleh kelompok itu.",
            "B": "Saya ingin mengawasi dan mengarahkan tindakan-tindakan orang lain bilamana saya mungkin."
        }
    },
    {
        "question": "43",
        "options": {
            "A": "Saya suka menyimpan surat-surat, bon-bon dan kertas-kertas lainnya secara tersusun rapi dan menurut sistem tertentu.",
            "B": "Saya ingin menjadi salah seorang pemimpin dalam organisasi-organisasi atau kelompok-kelompok di mana saya menjadi anggotanya."
        }
    },
    {
        "question": "44",
        "options": {
            "A": "Saya suka mengajukan pertanyaan-pertanyaan yang setahu saya, tak seorangpun akan bisa menjawabnya.",
            "B": "Saya suka mengatakan pada orang-orang lain bagaimana mereka harus melakukan pekerjaan mereka."
        }
    },
    {
        "question": "45",
        "options": {
            "A": "Saya suka mengelakkan tanggung jawab dan kewajiban-kewajiban.",
            "B": "Saya ingin diminta untuk menyelesaikan perdebatan-perdebatan atau perselisihan-perselisihan antara orang-orang lain."
        }
    },
    {
        "question": "46",
        "options": {
            "A": "Saya ingin menjadi seorang ahli yang diakui dalam suatu pekerjaan, jabatan atau bidang yang khusus.",
            "B": "Saya merasa bersalah apabila saya telah melakukan sesuatu yang saya ketahui adalah tidak baik."
        }
    },
    {
        "question": "47",
        "options": {
            "A": "Saya suka membaca riwayat hidup orang-orang besar.",
            "B": "Saya merasa bahwa saya harus mengakui hal-hal yang telah saya lakukan dan saya anggap tidak baik."
        }
    },
    {
        "question": "48",
        "options": {
            "A": "Saya suka merencanakan dan mengatur detail-detail setiap pekerjaan yang harus saya lakukan.",
            "B": "Bila keadaan kurang menguntungkan bagi saya, maka saya merasa bahwa saya harus lebih disalahkan dari pada orang lain."
        }
    },
    {
        "question": "49",
        "options": {
            "A": "Saya suka menggunakan kata-kata yang maknanya sering tidak diketahui oleh orang lain.",
            "B": "Saya merasa dalam banyak hal, saya kalah bila dibandingkan dengan orang-orang lain."
        }
    },
    {
        "question": "50",
        "options": {
            "A": "Saya suka mengecam orang-orang yang mempunyai kedudukan sebagai yang berwenang.",
            "B": "Saya merasa canggung di tengah-tengah orang-orang lain yang saya anggap sebagai atasan saya."
        }
    },
    {
        "question": "51",
        "options": {
            "A": "Saya ingin melakukan pekerjaan apa saja sebaik mungkin.",
            "B": "Saya suka menolong orang-orang yang tidak begitu beruntung seperti saya."
        }
    },
    {
        "question": "52",
        "options": {
            "A": "Saya ingin mengetahui bagaimana pandangan orang-orang besar mengenai berbagai masalah yang menarik perhatian saya.",
            "B": "Saya suka bermurah hati terhadap teman-teman saya."
        }
    },
    {
        "question": "53",
        "options": {
            "A": "Saya suka membuat rencana sebelum memulai pekerjaan yang sulit.",
            "B": "Saya suka memberi pertolongan-pertolongan kecil kepada teman-teman saya."
        }
    },
    {
        "question": "54",
        "options": {
            "A": "Saya suka bercerita kepada orang-orang lain tentang petualangan-petualangan saya dan hal-hal aneh yang pernah saya alami.",
            "B": "Saya ingin teman-teman saya mempercayai saya dan menceritakan kesulitan-kesulitan mereka kepada saya."
        }
    },
    {
        "question": "55",
        "options": {
            "A": "Saya suka menyatakan pendapat saya tentang pelbagai hal.",
            "B": "Saya suka memaafkan teman-teman saya yang kadang-kadang mungkin menyakiti hati saya."
        }
    },
    {
        "question": "56",
        "options": {
            "A": "Saya ingin bisa mengerjakan segala sesuatu lebih baik dari pada orang-orang lain.",
            "B": "Saya suka makan di restoran-restoran yang baru atau asing."
        }
    },
    {
        "question": "57",
        "options": {
            "A": "Saya suka mengikuti adat istiadat dan menghindarkan untuk melakukan hal-hal yang mungkin dianggap tidak wajar oleh orang-orang yang saya hormati.",
            "B": "Saya suka mengikuti mode-mode baru."
        }
    },
    {
        "question": "58",
        "options": {
            "A": "Saya ingin pekerjaan saya diatur dan direncanakan sebelum dimulai.",
            "B": "Saya suka bepergian melihat-lihat daerah pedalaman."
        }
    },
    {
        "question": "59",
        "options": {
            "A": "Saya ingin orang-orang memperhatikan dan memberikan komentar mengenai penampilan saya di depan umum.",
            "B": "Saya suka berkeliling di pedalaman dan tinggal di pelbagai tempat."
        }
    },
    {
        "question": "60",
        "options": {
            "A": "Saya ingin tidak tergantung dari orang lain dalam menentukan apa yang akan saya lakukan.",
            "B": "Saya suka mengerjakan hal-hal yang baru dan lain. "
        }
    },
    {
        "question": "61",
        "options": {
            "A": "Saya ingin bisa mengatakan bahwa saya telah melakukan dengan baik sesuatu pekerjaan yang sulit.",
            "B": "Saya suka bekerja keras pada tiap pekerjaan yang saya hadapi."
        }
    },
    {
        "question": "62",
        "options": {
            "A": "Saya suka mengatakan pada atasan-atasan saya bahwa mereka telah melakukan sesuatu pekerjaan dengan baik, bila memang demikian halnya, menurut pikiran saya.",
            "B": "Saya ingin menyelesaikan pekerjaan satu per satu sebelum memulai yang lainnya."
        }
    },
    {
        "question": "63",
        "options": {
            "A": "Seandainya saya harus bepergian, maka saya ingin agar segala sesuatunya telah direncanakan terlebih dahulu.",
            "B": "Saya suka mengerjakan teka-teki atau memecahkan persoalan-persoalan sampai selesai."
        }
    },
    {
        "question": "64",
        "options": {
            "A": "Saya kadang-kadang suka melakukan hal-hal hanya untuk melihat bagaimana efeknya terhadap orang lain.",
            "B": "Saya suka bertahan menghadapi suatu pekerjaan atau masalah, sekalipun tampaknya seolah-olah saya tak akan berhasil."
        }
    },
    {
        "question": "65",
        "options": {
            "A": "Saya suka melakukan hal-hal yang dianggap orang lain tidak sesuai dengan adat kebiasaan.",
            "B": "Saya ingin bekerja berjam-jam tanpa diganggu."
        }
    },
    {
        "question": "66",
        "options": {
            "A": "Saya ingin mengerjakan sesuatu yang berarti.",
            "B": "Saya suka mencium orang yang menarik dari lawan jenis saya."
        }
    },
    {
        "question": "67",
        "options": {
            "A": "Saya suka memuji seseorang yang saya kagumi.",
            "B": "Saya ingin dianggap punya daya tarik fisik oleh orang-orang dari lawan jenis saya."
        }
    },
    {
        "question": "68",
        "options": {
            "A": "Saya ingin barang-barang saya tersusun rapi dan teratur di atas meja atau di dalam ruang kerja saya.",
            "B": "Saya suka jatuh cinta pada seseorang dari lawan jenis saya."
        }
    },
    {
        "question": "69",
        "options": {
            "A": "Saya suka berbicara tentang hal-hal yang telah saya capai.",
            "B": "Saya suka mendengarkan atau menceritakan lelucon-lelucon yang terutama berkisar soal sex."
        }
    },
    {
        "question": "70",
        "options": {
            "A": "Saya ingin melakukan hal-hal dengan cara saya sendiri tanpa menghiraukan apa yang mungkin dipikirkan orang lain.",
            "B": "Saya suka membaca buku-buku dan sandiwara yang terutama berkisar sekitar soal sex."
        }
    },
    {
        "question": "71",
        "options": {
            "A": "Saya ingin menulis roman atau sandiwara yang hebat.",
            "B": "Saya suka menyerang pendirian-pendirian yang bertentangan dengan pendirian saya."
        }
    },
    {
        "question": "72",
        "options": {
            "A": "Bila saya berada dalam suatu kelompok, saya suka menerima pimpinan orang lain dalam memutuskan apa yang akan dilakukan oleh kelompok.",
            "B": "Saya rasanya ingin mengecam seseorang di muka umum bila orang itu memang patut menerimanya."
        }
    },
    {
        "question": "73",
        "options": {
            "A": "Saya ingin agar hidup saya teratur sedemikian rupa sehingga berjalan lancar dan tanpa banyak perubahan dalam rencana-rencana saya.",
            "B": "Saya menjadi sedemikian marahnya sehingga rasanya ingin melemparkan dan merusak barang-barang."
        }
    },
    {
        "question": "74",
        "options": {
            "A": "Saya suka mengajukan pertanyaan-pertanyaan yang setahu saya, tak seorangpun akan bisa menjawabnya.",
            "B": "Saya suka mengatakan kepada orang-orang lain bagaimana pendapat saya mengenai mereka."
        }
    },
    {
        "question": "75",
        "options": {
            "A": "Saya suka mengelakkan tanggung jawab dan kewajiban-kewajiban.",
            "B": "Saya rasanya ingin memperolok-olok orang-orang yang melakukan hal-hal yang saya anggap bodoh."
        }
    },
    {
        "question": "76",
        "options": {
            "A": "Saya ingin loyal terhadap teman-teman saya.",
            "B": "Saya ingin melakukan pekerjaan apa saja sebaik mungkin."
        }
    },
    {
        "question": "77",
        "options": {
            "A": "Saya suka mengamat-amati bagaimana perasaan orang lain dalam suatu keadaan tertentu.",
            "B": "Saya ingin bisa mengatakan bahwa saya telah melakukan dengan baik sesuatu pekerjaan yang sulit."
        }
    },
    {
        "question": "78",
        "options": {
            "A": "Saya ingin teman-teman saya memberi dorongan kepada saya bila saya menghadapi kegagalan.",
            "B": "Saya ingin berhasil dalam apa yang saya lakukan."
        }
    },
    {
        "question": "79",
        "options": {
            "A": "Saya ingin menjadi salah seorang pemimpin dalam organisasi-organisasi atau kelompok-kelompok di mana saya menjadi anggota.",
            "B": "Saya ingin bisa mengerjakan segala sesuatu lebih baik dari pada orang-orang lain."
        }
    },
    {
        "question": "80",
        "options": {
            "A": "Bila keadaan kurang menguntungkan bagi saya, maka saya merasa bahwa saya harus lebih disalahkan dari pada orang lain.",
            "B": "Saya ingin dapat memecahkan teka-teki dan persoalan-persoalan yang sukar bagi orang lain."
        }
    },
    {
        "question": "81",
        "options": {
            "A": "Saya suka melakukan sesuatu untuk teman-teman saya.",
            "B": "Dalam merencanakan sesuatu saya ingin mendapat saran-saran dari orang-orang yang pendapatnya saya hormati."
        }
    },
    {
        "question": "82",
        "options": {
            "A": "Saya suka menempatkan diri saya ke dalam kedudukan orang lain dan membayangkan bagaimana perasaan saya bila berada dalam keadaan yang sama.",
            "B": "Saya suka mengatakan kepada atasan-atasan saya bahwa mereka telah melakukan sesuatu pekerjaan dengan baik, bila menurut pikiran saya memang demikian halnya."
        }
    },
    {
        "question": "83",
        "options": {
            "A": "Saya ingin agar teman-teman saya menunjukkan simpati dan pengertian bila saya mengalami kesukaran-kesukaran.",
            "B": "Saya suka menerima pimpinan dari orang-orang yang saya kagumi."
        }
    },
    {
        "question": "84",
        "options": {
            "A": "Bila saya termasuk dalam suatu kepanitiaan, saya ingin ditunjuk atau dipilih sebagai ketuanya.",
            "B": "Bila saya berada dalam suatu kelompok, saya suka menerima pimpinan orang lain dalam memutuskan apa yang akan dilakukan oleh kelompok itu."
        }
    },
    {
        "question": "85",
        "options": {
            "A": "Apabila saya melakukan sesuatu hal yang salah, saya merasa bahwa untuk itu saya harus dihukum.",
            "B": "Saya suka mengikuti adat istiadat dan menghindarkan untuk melakukan hal-hal yang mungkin dianggap tidak wajar oleh orang-orang yang saya hormati."
        }
    },
    {
        "question": "86",
        "options": {
            "A": "Saya suka bersama-sama dengan teman-teman saya melakukan atau menjalani sesuatu.",
            "B": "Saya suka membuat perencanaan sebelum memulai pekerjaan yang sulit."
        }
    },
    {
        "question": "87",
        "options": {
            "A": "Saya ingin memahami bagaimana perasaan teman-teman saya dalam menghadapi pelbagai masalah.",
            "B": "Seandainya saya harus bepergian, maka saya ingin agar segala sesuatunya telah direncanakan terlebih dahulu."
        }
    },
    {
        "question": "88",
        "options": {
            "A": "Saya ingin diperlakukan dengan ramah oleh teman-teman saya.",
            "B": "Saya ingin pekerjaan saya diatur dan direncanakan sebelum dimulai."
        }
    },
    {
        "question": "89",
        "options": {
            "A": "Saya ingin dianggap sebagai pemimpin oleh orang-orang lain.",
            "B": "Saya suka menyimpan surat-surat, bon-bon dan kertas-kertas lain secara tersusun rapi dan menurut sistem tertentu."
        }
    },
    {
        "question": "90",
        "options": {
            "A": "Saya merasa bahwa pilu hati dan kesusahan yang telah saya alami, lebih banyak membawa kebaikan dari pada kerugian bagi saya.",
            "B": "Saya ingin agar hidup saya teratur sedemikian rupa sehingga berjalan lancar dan tanpa banyak perubahan dalam rencana-rencana saya."
        }
    },
    {
        "question": "91",
        "options": {
            "A": "Saya ingin mempunyai ikatan perasaan yang kuat dengan teman-teman saya.",
            "B": "Saya ingin mengatakan hal-hal yang dianggap lucu dan cerdas oleh orang-orang lain."
        }
    },
    {
        "question": "92",
        "options": {
            "A": "Saya suka merenungkan kepribadian teman-teman saya dan mencoba mengerti sebab-sebab yang menjadikan mereka sebagaimana terlihat.",
            "B": "Saya kadang-kadang suka melakukan hal-hal hanya untuk melihat bagaimana efeknya terhadap orang-orang."
        }
    },
    {
        "question": "93",
        "options": {
            "A": "Saya ingin agar teman-teman saya meributkan tentang diri saya, bila saya mendapat cedera atau sakit.",
            "B": "Saya suka berbicara tentang hal-hal yang telah saya capai."
        }
    },
    {
        "question": "94",
        "options": {
            "A": "Saya suka mengatakan kepada orang-orang bagaimana mereka harus melakukan pekerjaan mereka.",
            "B": "Saya suka menjadi pusat perhatian dalam suatu kelompok."
        }
    },
    {
        "question": "95",
        "options": {
            "A": "Saya merasa canggung di tengah orang-orang yang saya anggap sebagai atasan saya.",
            "B": "Saya suka menggunakan kata-kata yang maknanya sering tidak diketahui oleh orang lain."
        }
    },
    {
        "question": "96",
        "options": {
            "A": "Saya lebih suka mengerjakan sesuatu bersama-sama dengan teman-teman saya dari pada sendirian.",
            "B": "Saya suka menyatakan pendapat saya tentang pelbagai hal."
        }
    },
    {
        "question": "97",
        "options": {
            "A": "Saya suka mempelajari dan menganalisa tingkah laku orang-orang lain.",
            "B": "Saya suka melakukan hal-hal yang dianggap orang lain tidak sesuai dengan adat kebiasaan."
        }
    },
    {
        "question": "98",
        "options": {
            "A": "Saya ingin agar teman-teman saya merasa kasihan pada saya, bila saya sakit.",
            "B": "Saya suka mengelakkan keadaan-keadaan di mana saya diharapkan akan berlaku secara konvensional (kebiasaan umum)."
        }
    },
    {
        "question": "99",
        "options": {
            "A": "Saya ingin mengawasi dan mengarahkan tindakan-tindakan orang lain bilamana saja mungkin.",
            "B": "Saya suka melakukan hal-hal dengan cara saya sendiri tanpa menghiraukan apa yang mungkin dipikirkan orang lain."
        }
    },
    {
        "question": "100",
        "options": {
            "A": "Saya merasa bahwa dalam banyak hal saya kalah bila dibandingkan dengan orang lain.",
            "B": "Saya suka mengelakkan tanggung jawab dan kewajiban-kewajiban."
        }
    },
    {
        "question": "101",
        "options": {
            "A": "Saya ingin berhasil dalam apa yang saya lakukan.",
            "B": "Saya suka membuat teman-teman baru."
        }
    },
    {
        "question": "102",
        "options": {
            "A": "Saya suka menganalisa perasaan-perasaan saya dan sebab-sebab mengapa saya melakukan sesuatu.",
            "B": "Saya ingin membuat teman saya sebanyak mungkin."
        }
    },
    {
        "question": "103",
        "options": {
            "A": "Saya ingin agar teman-teman saya membantu saya bila saya mengalami kesulitan.",
            "B": "Saya suka melakukan sesuatu untuk teman-teman saya."
        }
    },
    {
        "question": "104",
        "options": {
            "A": "Saya suka memperdebatkan pendirian saya bila diserang oleh orang-orang lain.",
            "B": "Saya suka berkirim surat kepada teman-teman saya."
        }
    },
    {
        "question": "105",
        "options": {
            "A": "Saya merasa bersalah apabila saya telah melakukan sesuatu hal yang saya ketahui adalah tidak baik.",
            "B": "Saya ingin mempunyai ikatan perasaan yang kuat dengan teman-teman saya."
        }
    },
    {
        "question": "106",
        "options": {
            "A": "Saya suka bersama-sama dengan teman-teman saya melakukan atau menjalani sesuatu.",
            "B": "Saya suka menganalisa perasaan-perasaan saya dan sebab-sebab mengapa saya melakukan sesuatu."
        }
    },
    {
        "question": "107",
        "options": {
            "A": "Saya suka menerima pimpinan orang-orang yang saya kagumi.",
            "B": "Saya ingin memahami perasaan teman-teman saya dalam menghadapi pelbagai masalah."
        }
    },
    {
        "question": "108",
        "options": {
            "A": "Saya ingin agar teman-teman saya dengan gembira memberikan pertolongan-pertolongan kecil kepada saya.",
            "B": "Saya suka menilai orang-orang berdasarkan sebab-sebab mereka melakukan sesuatu, dan bukannya atas dasar apa yang sesungguhnya mereka lakukan."
        }
    },
    {
        "question": "109",
        "options": {
            "A": "Bila saya berada dalam suatu kelompok, saya ingin menentukan apa yang akan kami kerjakan.",
            "B": "Saya suka meramalkan bagaimana teman-teman saya akan bertindak dalam pelbagai situasi."
        }
    },
    {
        "question": "110",
        "options": {
            "A": "Saya lebih suka bila saya mengalah dan menghindarkan perkelahian dari pada bila saya mencoba memaksakan kemauan saya.",
            "B": "Saya suka menganalisa perasaan orang lain dan sebab-sebab mengapa mereka melakukan sesuatu."
        }
    },
    {
        "question": "111",
        "options": {
            "A": "Saya suka membuat teman-teman baru.",
            "B": "Saya ingin agar teman-teman saya membantu saya bila saya mengalami kesulitan."
        }
    },
    {
        "question": "112",
        "options": {
            "A": "Saya suka menilai orang-orang berdasarkan sebab-sebab mereka melakukan sesuatu dan bukan atas dasar apa yang sesungguhnya mereka lakukan.",
            "B": "Saya ingin teman-teman saya banyak menunjukkan rasa sayang mereka terhadap saya."
        }
    },
    {
        "question": "113",
        "options": {
            "A": "Saya ingin agar hidup saya teratur sedemikian rupa sehingga berjalan lancar dan tanpa banyak perubahan-perubahan dalam rencana-rencana saya.",
            "B": "Saya ingin agar teman-teman saya merasa kasihan pada saya apabila saya sakit."
        }
    },
    {
        "question": "114",
        "options": {
            "A": "Saya ingin diminta untuk menyelesaikan perdebatan-perdebatan atau perselisihan-perselisihan antara orang-orang lain.",
            "B": "Saya ingin agar teman-teman saya dengan gembira memberikan pertolongan-pertolongan kecil kepada saya."
        }
    },
    {
        "question": "115",
        "options": {
            "A": "Saya merasa saya harus mengakui hal-hal yang telah saya lakukan dan saya anggap tidak baik.",
            "B": "Saya ingin teman-teman saya bersimpati terhadap saya dan menghibur saya bila saya bersusah hati."
        }
    },
    {
        "question": "116",
        "options": {
            "A": "Saya lebih suka melakukan sesuatu dengan teman saya dari pada sendirian.",
            "B": "Saya suka memperdebatkan pendirian saya bila diserang orang lain."
        }
    },
    {
        "question": "117",
        "options": {
            "A": "Saya suka merenungkan kepribadian teman-teman saya dan mencoba mengerti sebab-sebab yang menjadikan mereka sebagaimana terlihat.",
            "B": "Saya ingin mampu membujuk dan mempengaruhi orang lain untuk melakukan apa yang saya kehendaki."
        }
    },
    {
        "question": "118",
        "options": {
            "A": "Saya ingin teman-teman saya bersimpati terhadap saya dan menghibur saya bila saya bersusah hati.",
            "B": "Bila saya berada dalam suatu kelompok, saya ingin menentukan apa yang akan kami lakukan."
        }
    },
    {
        "question": "119",
        "options": {
            "A": "Saya suka mengajukan pertanyaan yang setahu saya tak seorangpun akan bisa menjawabnya.",
            "B": "Saya suka menyatakan kepada orang lain bagaimana mereka harus melakukan pekerjaan mereka."
        }
    },
    {
        "question": "120",
        "options": {
            "A": "Saya merasa canggung di tengah orang-orang yang saya anggap sebagai atasan saya.",
            "B": "Saya ingin mengawasi dan mengarahkan tindakan-tindakan orang lain bilamana saja mungkin."
        }
    },
    {
        "question": "121",
        "options": {
            "A": "Saya suka bergaul dalam lingkungan dimana para anggotanya mempunyai perasaan-perasaan yang akrab satu sama lainnya.",
            "B": "Saya merasa bersalah apabila saya telah melakukan sesuatu hal yang saya ketahui adalah tidak baik."
        }
    },
    {
        "question": "122",
        "options": {
            "A": "Saya suka menganalisa perasaan orang lain dan sebab-sebab mereka melakukan sesuatu.",
            "B": "Saya merasa sedih oleh ketidakmampuan saya sendiri untuk menghadapi pelbagai macam keadaan."
        }
    },
    {
        "question": "123",
        "options": {
            "A": "Saya ingin agar teman-teman saya merasa kasihan pada saya bila saya sakit.",
            "B": "Saya lebih suka bila saya mengalah dan menghindarkan perkelahian dari pada bila saya mencoba memaksakan kemauan saya."
        }
    },
    {
        "question": "124",
        "options": {
            "A": "Saya ingin mampu membujuk dan mempengaruhi orang lain untuk melakukan apa yang saya kehendaki.",
            "B": "Saya merasa sedih oleh ketidakmampuan saya sendiri untuk menghadapi pelbagai macam keadaan."
        }
    },
    {
        "question": "125",
        "options": {
            "A": "Saya suka mengecam orang-orang yang mempunyai kedudukan sebagai yang berwenang.",
            "B": "Saya merasa canggung di tengah orang-orang yang saya anggap sebagai atasan saya."
        }
    },
    {
        "question": "126",
        "options": {
            "A": "Saya suka bergaul dalam lingkungan dimana para anggotanya mempunyai perasaan yang akrab satu sama lainnya.",
            "B": "Saya suka menolong teman-teman saya bila mereka berada dalam kesulitan."
        }
    },
    {
        "question": "127",
        "options": {
            "A": "Saya suka menganalisa perasaan-perasaan saya dan sebab-sebab mengapa saya melakukan sesuatu.",
            "B": "Saya suka menunjukkan simpati saya kepada teman-teman saya bila mereka mendapat cedera atau sakit."
        }
    },
    {
        "question": "128",
        "options": {
            "A": "Saya ingin agar teman-teman saya membantu saya bila saya mengalami kesulitan.",
            "B": "Saya suka memperlakukan orang lain dengan ramah dan simpatik."
        }
    },
    {
        "question": "129",
        "options": {
            "A": "Saya ingin menjadi salah seorang pemimpin dalam organisasi atau kelompok-kelompok yang saya masuki.",
            "B": "Saya suka menunjukkan simpati saya kepada teman-teman saya bila mereka mendapat cedera atau sakit."
        }
    },
    {
        "question": "130",
        "options": {
            "A": "Saya merasa bahwa pilu hati dan penderitaan yang telah saya alami lebih banyak membawa kebaikan dari pada kerugian bagi diri saya.",
            "B": "Saya suka berlaku sangat ramah terhadap teman-teman saya."
        }
    },
    {
        "question": "131",
        "options": {
            "A": "Saya lebih suka melakukan sesuatu bersama-sama teman saya dari pada sendirian.",
            "B": "Saya suka bereksperimen dan mencoba hal-hal yang baru."
        }
    },
    {
        "question": "132",
        "options": {
            "A": "Saya suka merenungkan kepribadian teman-teman saya dan mencoba memahami apa yang menjadikan mereka sebagaimana terlihat.",
            "B": "Saya lebih suka mencoba pekerjaan-pekerjaan yang baru dan lain dari pada terus-menerus melakukan pekerjaan yang sama."
        }
    },
    {
        "question": "133",
        "options": {
            "A": "Saya ingin agar teman-teman saya menunjukkan simpati dan pengertian bila saya mengalami kesukaran-kesukaran.",
            "B": "Saya suka bertemu dengan orang-orang baru."
        }
    },
    {
        "question": "134",
        "options": {
            "A": "Saya suka memperdebatkan pendirian saya bila diserang orang lain.",
            "B": "Saya ingin mengalami hal-hal yang baru dan perubahan-perubahan dalam kehidupan saya sehari-hari."
        }
    },
    {
        "question": "135",
        "options": {
            "A": "Saya lebih suka bila saya mengalah dan menghindarkan perkelahian dari pada bila saya mencoba memaksakan kemauan saya.",
            "B": "Saya suka berkeliling di pedalaman dan tinggal di pelbagai tempat."
        }
    },
    {
        "question": "136",
        "options": {
            "A": "Saya suka melakukan sesuatu untuk teman-teman saya.",
            "B": "Bila saya harus melakukan suatu tugas, saya ingin mengerjakannya sampai selesai."
        }
    },
    {
        "question": "137",
        "options": {
            "A": "Saya suka menganalisa perasaan orang lain dan sebab-sebab mengapa mereka melakukan sesuatu.",
            "B": "Saya ingin menghindarkan gangguan bila saya sedang bekerja."
        }
    },
    {
        "question": "138",
        "options": {
            "A": "Saya ingin agar teman-teman saya dengan gembira memberikan pertolongan kecil kepada saya.",
            "B": "Saya suka bekerja sampai jauh malam untuk menyelesaikan suatu pekerjaan."
        }
    },
    {
        "question": "139",
        "options": {
            "A": "Saya ingin dianggap sebagai pemimpin oleh orang-orang lain.",
            "B": "Saya ingin bekerja berjam-jam tanpa diganggu."
        }
    },
    {
        "question": "140",
        "options": {
            "A": "Bila saya melakukan sesuatu yang salah, saya merasa bahwa untuk itu saya harus dihukum.",
            "B": "Saya suka bertahan menghadapi suatu pekerjaan atau masalah sekalipun tampaknya seolah-olah saya tak akan berhasil."
        }
    },
    {
        "question": "141",
        "options": {
            "A": "Saya ingin loyal terhadap teman-teman saya.",
            "B": "Saya suka bepergian dengan (untuk laki-laki) wanita-wanita yang menarik. (untuk wanita) laki-laki yang menarik."
        }
    },
    {
        "question": "142",
        "options": {
            "A": "Saya suka meramalkan bagaimana teman-teman saya akan bertindak dalam pelbagai situasi.",
            "B": "Saya suka ikut serta dalam diskusi-diskusi tentang sex dan aktivitas seksual."
        }
    },
    {
        "question": "143",
        "options": {
            "A": "Saya ingin teman-teman saya banyak menunjukkan rasa sayang mereka terhadap saya.",
            "B": "Saya suka nafsu saya terangsang."
        }
    },
    {
        "question": "144",
        "options": {
            "A": "Bila saya berada dalam suatu kelompok, saya ingin menentukan apa yang akan kami kerjakan.",
            "B": "Saya suka bersibuk diri dengan aktivitas-aktivitas sosial bersama-sama dengan orang-orang dari lawan jenis saya."
        }
    },
    {
        "question": "145",
        "options": {
            "A": "Saya merasa sedih oleh ketidak-mampuan saya sendiri untuk menghadapi pelbagai macam keadaan.",
            "B": "Saya suka membaca buku-buku dan sandiwara-sandiwara yang terutama berkisar sekitar soal-soal sex."
        }
    },
    {
        "question": "146",
        "options": {
            "A": "Saya suka berkirim surat kepada teman-teman saya.",
            "B": "Saya suka membaca berita-berita surat kabar tentang pembunuhan-pembunuhan dan lain-lain perbuatan kekerasan."
        }
    },
    {
        "question": "147",
        "options": {
            "A": "Saya suka meramalkan bagaimana teman-teman saya akan bertindak dalam pelbagai situasi.",
            "B": "Saya suka menyerang pendirian yang bertentangan dengan pendirian saya."
        }
    },
    {
        "question": "148",
        "options": {
            "A": "Saya ingin teman-teman saya meributkan tentang diri saya, bila saya mendapat cedera atau sakit.",
            "B": "Saya rasanya ingin menyalahkan orang lain bila keadaannya kurang menguntungkan bagi saya."
        }
    },
    {
        "question": "149",
        "options": {
            "A": "Saya suka menyatakan kepada orang-orang lain bagaimana mereka harus melakukan pekerjaan mereka.",
            "B": "Saya rasanya ingin membalas dendam bila seseorang menghina saya."
        }
    },
    {
        "question": "150",
        "options": {
            "A": "Saya merasa bahwa dalam banyak hal saya kalah bila dibandingkan dengan orang lain.",
            "B": "Saya rasanya ingin menghardik orang lain bila saya berbeda pendapat dengan mereka."
        }
    },
    {
        "question": "151",
        "options": {
            "A": "Saya suka menolong teman-teman saya bila mereka berada dalam kesulitan.",
            "B": "Saya ingin melakukan pekerjaan apa saja sebaik mungkin."
        }
    },
    {
        "question": "152",
        "options": {
            "A": "Saya suka bepergian melihat-lihat daerah pedalaman.",
            "B": "Saya ingin menyelesaikan tugas-tugas yang dianggap orang membutuhkan ketrampilan serta usaha."
        }
    },
    {
        "question": "153",
        "options": {
            "A": "Saya suka bekerja keras pada tiap pekerjaan yang saya hadapi.",
            "B": "Saya ingin mengerjakan sesuatu yang berarti."
        }
    },
    {
        "question": "154",
        "options": {
            "A": "Saya suka bepergian dengan (untuk laki-laki) wanita-wanita yang menarik. (untuk wanita) laki-laki yang menarik.",
            "B": "Saya ingin berhasil dalam apa yang saya lakukan."
        }
    },
    {
        "question": "155",
        "options": {
            "A": "Saya suka membaca berita-berita surat kabar tentang pembunuhan-pembunuhan dan lain-lain perbuatan kekerasan.",
            "B": "Saya ingin menulis roman atau sandiwara yang hebat."
        }
    },
    {
        "question": "156",
        "options": {
            "A": "Saya suka memberikan pertolongan-pertolongan kecil kepada teman-teman saya.",
            "B": "Dalam merencanakan sesuatu, saya ingin mendapat saran-saran dari orang-orang yang pendapatnya saya hormati."
        }
    },
    {
        "question": "157",
        "options": {
            "A": "Saya ingin mengalami hal-hal yang baru dan perubahan-perubahan dalam kehidupan saya sehari-hari.",
            "B": "Saya suka menyatakan pada atasan saya bahwa mereka telah melakukan suatu pekerjaan dengan baik, bila memang demikian halnya menurut pikiran saya."
        }
    },
    {
        "question": "158",
        "options": {
            "A": "Saya suka bekerja sampai jauh malam untuk menyelesaikan suatu pekerjaan.",
            "B": "Saya suka memuji seseorang yang saya kagumi."
        }
    },
    {
        "question": "159",
        "options": {
            "A": "Saya suka nafsu saya terangsang.",
            "B": "Saya suka menerima pimpinan dari orang-orang yang saya kagumi."
        }
    },
    {
        "question": "160",
        "options": {
            "A": "Saya rasanya ingin membalas dendam bila seseorang menghina saya.",
            "B": "Bila saya berada dalam suatu kelompok, saya suka menerima pimpinan orang lain dalam memutuskan apa yang akan dilakukan oleh kelompok itu."
        }
    },
    {
        "question": "161",
        "options": {
            "A": "Saya suka bermurah hati terhadap teman-teman saya.",
            "B": "Saya suka membuat rencana sebelum memulai pekerjaan yang sulit."
        }
    },
    {
        "question": "162",
        "options": {
            "A": "Saya suka bertemu dengan orang-orang baru.",
            "B": "Saya ingin setiap pekerjaan tulisan saya teliti, rapi dan tersusun dengan baik."
        }
    },
    {
        "question": "163",
        "options": {
            "A": "Saya ingin mengerjakan sampai selesai setiap pekerjaan ataupun tugas yang telah saya mulai.",
            "B": "Saya ingin barang-barang saya tersusun rapi dan teratur di atas meja atau di dalam ruang kerja saya."
        }
    },
    {
        "question": "164",
        "options": {
            "A": "Saya ingin dianggap mempunyai daya tarik fisik oleh orang-orang dari lawan jenis saya.",
            "B": "Saya suka merencanakan dan mengatur detail-detail dari setiap pekerjaan yang harus saya lakukan."
        }
    },
    {
        "question": "165",
        "options": {
            "A": "Saya suka mengatakan kepada orang-orang lain bagaimana pendapat saya mengenai mereka.",
            "B": "Saya suka makan saya teratur dan ada waktu tertentu untuk makan."
        }
    },
    {
        "question": "166",
        "options": {
            "A": "Saya suka berlaku sangat ramah terhadap teman-teman saya.",
            "B": "Saya ingin mengatakan hal-hal yang dianggap lucu dan cerdas oleh orang-orang lain."
        }
    },
    {
        "question": "167",
        "options": {
            "A": "Saya lebih suka mencoba pekerjaan yang baru dan lain dari pada terus-menerus melakukan pekerjaan yang sama.",
            "B": "Saya kadang-kadang suka melakukan hal-hal hanya untuk melihat bagaimana efeknya terhadap orang lain."
        }
    },
    {
        "question": "168",
        "options": {
            "A": "Saya suka bertahan menghadapi satu pekerjaan atau masalah, sekalipun tampaknya seolah-olah saya tak akan berhasil.",
            "B": "Saya ingin orang-orang memperhatikan dan memberikan komentar mengenai penampilan saya di depan umum."
        }
    },
    {
        "question": "169",
        "options": {
            "A": "Saya suka membaca buku-buku dan sandiwara-sandiwara yang terutama berkisar sekitar soal-soal sex.",
            "B": "Saya suka menjadi pusat perhatian dalam suatu kelompok."
        }
    },
    {
        "question": "170",
        "options": {
            "A": "Saya rasanya ingin menyalahkan orang-orang lain bila keadaan kurang menguntungkan bagi saya.",
            "B": "Saya suka mengajukan pertanyaan-pertanyaan yang setahu saya, tak seorangpun akan bisa menjawabnya."
        }
    },
    {
        "question": "171",
        "options": {
            "A": "Saya suka menunjukkan simpati saya kepada teman-teman saya bila mereka mendapat cedera atau sakit.",
            "B": "Saya suka mengatakan pendapat saya tentang pelbagai hal."
        }
    },
    {
        "question": "172",
        "options": {
            "A": "Saya suka makan di restoran-restoran yang baru atau asing.",
            "B": "Saya suka melakukan hal-hal yang dianggap orang lain tidak sesuai dengan adat kebiasaan."
        }
    },
    {
        "question": "173",
        "options": {
            "A": "Saya ingin menyelesaikan pekerjaan satu per satu sebelum memulai yang lain.",
            "B": "Saya ingin merasa bebas untuk melakukan apa yang saya kehendaki."
        }
    },
    {
        "question": "174",
        "options": {
            "A": "Saya suka ikut serta dalam diskusi-diskusi tentang sex dan aktivitas seksual.",
            "B": "Saya ingin melakukan hal-hal dengan cara saya sendiri tanpa menghiraukan apa yang mungkin dipikirkan orang lain."
        }
    },
    {
        "question": "175",
        "options": {
            "A": "Saya menjadi sedemikian marahnya sehingga rasanya ingin melemparkan dan merusak barang-barang.",
            "B": "Saya suka mengelakkan tanggung jawab dan kewajiban-kewajiban."
        }
    },
    {
        "question": "176",
        "options": {
            "A": "Saya suka menolong teman-teman saya bila mereka berada dalam kesulitan.",
            "B": "Saya ingin loyal terhadap teman-teman saya."
        }
    },
    {
        "question": "177",
        "options": {
            "A": "Saya suka melakukan hal-hal yang baru dan lain.",
            "B": "Saya suka membuat teman-teman baru."
        }
    },
    {
        "question": "178",
        "options": {
            "A": "Bila saya harus melakukan suatu tugas, saya ingin mengerjakannya sampai selesai.",
            "B": "Saya suka bergaul dalam lingkungan di mana para anggotanya mempunyai perasaan yang akrab satu sama lainnya."
        }
    },
    {
        "question": "179",
        "options": {
            "A": "Saya suka bepergian dengan: (untuk laki-laki) wanita-wanita yang menarik. (untuk wanita) laki-laki yang menarik.",
            "B": "Saya ingin membuat teman sebanyak mungkin."
        }
    },
    {
        "question": "180",
        "options": {
            "A": "Saya suka menyerang pendirian-pendirian yang bertentangan dengan pendirian saya.",
            "B": "Saya suka berkirim surat kepada teman-teman saya."
        }
    },
    {
        "question": "181",
        "options": {
            "A": "Saya suka bermurah hati kepada teman-teman saya.",
            "B": "Saya suka mengamat-amati bagaimana perasaan orang lain dalam suatu keadaan tertentu."
        }
    },
    {
        "question": "182",
        "options": {
            "A": "Saya suka makan di restoran-restoran yang baru atau asing.",
            "B": "Saya suka menempatkan diri saya dalam kedudukan orang lain, dan membayangkan bagaimana perasaan saya bila berada dalam keadaan yang sama."
        }
    },
    {
        "question": "183",
        "options": {
            "A": "Saya suka bekerja sampai jauh malam untuk menyelesaikan suatu pekerjaan.",
            "B": "Saya ingin memahami bagaimana perasaan teman-teman saya dalam menghadapi pelbagai masalah."
        }
    },
    {
        "question": "184",
        "options": {
            "A": "Saya suka nafsu saya terangsang.",
            "B": "Saya suka mempelajari dan menganalisa tingkah laku orang-orang lain."
        }
    },
    {
        "question": "185",
        "options": {
            "A": "Saya rasanya ingin memperolok-olok orang-orang yang melakukan hal-hal yang saya anggap bodoh.",
            "B": "Saya suka meramalkan bagaimana teman-teman saya akan bertindak dalam pelbagai situasi."
        }
    },
    {
        "question": "186",
        "options": {
            "A": "Saya suka memaafkan teman-teman saya yang kadang-kadang mungkin menyakiti hati saya.",
            "B": "Saya ingin teman-teman saya memberi dorongan kepada saya bila saya mengalami kegagalan."
        }
    },
    {
        "question": "187",
        "options": {
            "A": "Saya suka bereksperimen dan mencoba hal-hal yang baru.",
            "B": "Saya ingin agar teman-teman saya menunjukkan simpati dan pengertian bila saya mengalami kesukaran-kesukaran."
        }
    },
    {
        "question": "188",
        "options": {
            "A": "Saya suka mengerjakan teka-teki atau memecahkan persoalan-persoalan sampai selesai.",
            "B": "Saya ingin diperlakukan dengan ramah oleh teman-teman saya."
        }
    },
    {
        "question": "189",
        "options": {
            "A": "Saya ingin dianggap mempunyai daya tarik fisik oleh orang-orang dari lawan jenis saya.",
            "B": "Saya ingin teman-teman saya banyak menunjukkan rasa sayang mereka terhadap saya."
        }
    },
    {
        "question": "190",
        "options": {
            "A": "Saya rasanya ingin mengecam seseorang di muka umum bila orang itu memang patut menerimanya.",
            "B": "Saya ingin agar teman-teman saya meributkan diri saya apabila saya mendapat cedera atau sakit."
        }
    },
    {
        "question": "191",
        "options": {
            "A": "Saya suka berlaku sangat ramah terhadap teman-teman saya.",
            "B": "Saya ingin dianggap sebagai pemimpin oleh orang-orang lain."
        }
    },
    {
        "question": "192",
        "options": {
            "A": "Saya lebih suka mencoba pekerjaan-pekerjaan yang baru dan lain dari pada terus-menerus melakukan pekerjaan yang sama.",
            "B": "Bila saya termasuk dalam suatu kepanitiaan, saya ingin ditunjuk atau dipilih sebagai ketua."
        }
    },
    {
        "question": "193",
        "options": {
            "A": "Saya ingin mengerjakan sampai selesai setiap pekerjaan ataupun tugas yang telah saya mulai.",
            "B": "Saya ingin mampu membujuk dan mempengaruhi orang lain untuk melakukan apa yang saya kehendaki."
        }
    },
    {
        "question": "194",
        "options": {
            "A": "Saya suka ikut serta dalam diskusi-diskusi tentang sex dan aktivitas seksual.",
            "B": "Saya ingin diminta untuk menyelesaikan perdebatan-perdebatan atau perselisihan-perselisihan antara orang-orang lain."
        }
    },
    {
        "question": "195",
        "options": {
            "A": "Saya menjadi sedemikian marahnya sehingga rasanya ingin melemparkan dan merusak barang-barang.",
            "B": "Saya suka mengatakan kepada orang lain bagaimana mereka harus melakukan pekerjaan mereka."
        }
    },
    {
        "question": "196",
        "options": {
            "A": "Saya suka berlaku sangat ramah terhadap teman-teman saya.",
            "B": "Bila keadaan kurang menguntungkan bagi saya, maka saya merasa bahwa saya harus lebih disalahkan dari pada orang-orang lain."
        }
    },
    {
        "question": "197",
        "options": {
            "A": "Saya suka berkeliling di pedalaman dan tinggal di pelbagai tempat.",
            "B": "Apabila saya melakukan sesuatu yang salah, saya merasa bahwa untuk itu saya harus dihukum."
        }
    },
    {
        "question": "198",
        "options": {
            "A": "Saya suka bertahan menghadapi suatu pekerjaan atau masalah, sekalipun tampaknya seolah-olah saya tak akan berhasil.",
            "B": "Saya merasa bahwa pilu hati dan penderitaan yang telah saya alami lebih banyak membawa kebaikan dari pada kerugian bagi saya."
        }
    },
    {
        "question": "199",
        "options": {
            "A": "Saya suka membaca buku-buku dan sandiwara yang terutama berkisar sekitar soal-soal sex.",
            "B": "Saya merasa bahwa saya harus mengakui hal-hal yang telah saya lakukan dan saya anggap tidak baik."
        }
    },
    {
        "question": "200",
        "options": {
            "A": "Saya rasanya ingin menyalahkan orang lain bila keadaan kurang menguntungkan bagi saya.",
            "B": "Saya merasa bahwa saya dalam banyak hal kalah bila dibandingkan dengan orang lain."
        }
    },
    {
        "question": "201",
        "options": {
            "A": "Saya ingin melakukan setiap pekerjaan sebaik mungkin.",
            "B": "Saya suka menolong orang-orang lain yang tidak begitu beruntung seperti saya."
        }
    },
    {
        "question": "202",
        "options": {
            "A": "Saya suka melakukan hal-hal yang baru dan lain.",
            "B": "Saya suka memperlakukan orang-orang lain dengan ramah dan simpatik."
        }
    },
    {
        "question": "203",
        "options": {
            "A": "Bila saya harus melakukan suatu tugas, saya ingin mengerjakannya sampai selesai.",
            "B": "Saya suka menolong orang-orang lain yang tidak begitu beruntung seperti saya."
        }
    },
    {
        "question": "204",
        "options": {
            "A": "Saya suka bersibuk diri dengan aktivitas-aktivitas sosial, bersama-sama dengan orang-orang dari lawan jenis saya.",
            "B": "Saya suka memaafkan teman-teman saya yang kadang-kadang mungkin menyakiti hati saya."
        }
    },
    {
        "question": "205",
        "options": {
            "A": "Saya akan menyerang pendirian-pendirian yang bertentangan dengan pendirian saya.",
            "B": "Saya ingin teman-teman saya mempercayai saya dan menceritakan kesulitan-kesulitan mereka kepada saya."
        }
    },
    {
        "question": "206",
        "options": {
            "A": "Saya suka memperlakukan orang lain dengan ramah dan simpatik.",
            "B": "Saya suka bepergian melihat-lihat ke daerah pedalaman."
        }
    },
    {
        "question": "207",
        "options": {
            "A": "Saya suka mengikuti adat istiadat dan menghindarkan melakukan hal-hal yang mungkin dianggap tidak wajar oleh orang-orang yang saya hormati.",
            "B": "Saya suka mengikuti mode baru."
        }
    },
    {
        "question": "208",
        "options": {
            "A": "Saya suka bekerja keras pada tiap pekerjaan yang saya hadapi.",
            "B": "Saya ingin mengalami hal-hal yang baru dan perubahan-perubahan dalam kehidupan saya sehari-hari."
        }
    },
    {
        "question": "209",
        "options": {
            "A": "Saya suka mencium orang-orang yang menarik dari lawan jenis saya.",
            "B": "Saya suka bereksperimen dan mencoba hal-hal yang baru."
        }
    },
    {
        "question": "210",
        "options": {
            "A": "Saya rasanya ingin menghardik orang lain bila saya berbeda pendapat dengan mereka.",
            "B": "Saya suka mengikuti mode baru."
        }
    },
    {
        "question": "211",
        "options": {
            "A": "Saya suka menolong orang-orang lain yang tidak begitu beruntung seperti saya.",
            "B": "Saya ingin mengerjakan sampai selesai setiap pekerjaan atau tugas yang telah saya mulai."
        }
    },
    {
        "question": "212",
        "options": {
            "A": "Saya suka berkeliling di pedalaman dan tinggal di pelbagai tempat.",
            "B": "Saya ingin bekerja berjam-jam tanpa diganggu."
        }
    },
    {
        "question": "213",
        "options": {
            "A": "Jika saya bepergian, saya ingin segala sesuatunya telah direncanakan terlebih dahulu.",
            "B": "Saya suka mengerjakan teka-teki dan memecahkan persoalan-persoalan sampai selesai."
        }
    },
    {
        "question": "214",
        "options": {
            "A": "Saya suka jatuh cinta pada seseorang dari lawan jenis saya.",
            "B": "Saya ingin mengerjakan pekerjaan satu per satu, sebelum memulai yang baru."
        }
    },
    {
        "question": "215",
        "options": {
            "A": "Saya suka mengatakan kepada orang-orang lain bagaimana pendapat saya mengenai mereka.",
            "B": "Saya ingin menghindarkan diganggu bila saya sedang bekerja."
        }
    },
    {
        "question": "216",
        "options": {
            "A": "Saya suka memberi pertolongan-pertolongan kecil kepada teman-teman saya.",
            "B": "Saya suka bersibuk diri dengan aktivitas-aktivitas sosial bersama-sama dengan orang-orang dari lawan jenis saya."
        }
    },
    {
        "question": "217",
        "options": {
            "A": "Saya suka bertemu dengan orang-orang baru.",
            "B": "Saya suka mencium orang-orang yang menarik dari lawan jenis saya."
        }
    },
    {
        "question": "218",
        "options": {
            "A": "Saya ingin mengerjakan teka-teki atau memecahkan persoalan-persoalan sampai selesai.",
            "B": "Saya suka jatuh cinta kepada seseorang dari lawan jenis saya."
        }
    },
    {
        "question": "219",
        "options": {
            "A": "Saya suka berbicara tentang hal-hal yang telah saya capai.",
            "B": "Saya suka mendengarkan atau menceritakan lelucon-lelucon yang terutama berkisar soal-soal sex."
        }
    },
    {
        "question": "220",
        "options": {
            "A": "Saya rasanya ingin memperolok orang-orang yang melakukan hal-hal yang saya anggap bodoh.",
            "B": "Saya suka mendengarkan atau menceritakan lelucon-lelucon yang terutama berkisar soal-soal sex."
        }
    },
    {
        "question": "221",
        "options": {
            "A": "Saya ingin teman-teman saya mempercayai saya dan menceritakan kesulitan-kesulitan mereka kepada saya.",
            "B": "Saya suka membaca berita-berita surat kabar tentang pembunuhan-pembunuhan dan lain-lain perbuatan kekerasan."
        }
    },
    {
        "question": "222",
        "options": {
            "A": "Saya suka mengikuti mode baru.",
            "B": "Saya rasanya ingin mengecam seseorang di muka umum bila orang itu memang patut menerimanya."
        }
    },
    {
        "question": "223",
        "options": {
            "A": "Saya ingin menghindarkan diganggu bila saya sedang bekerja.",
            "B": "Saya rasanya ingin menghardik orang-orang lain bila saya berbeda pendapat dengan mereka."
        }
    },
    {
        "question": "224",
        "options": {
            "A": "Saya suka mendengarkan atau menceritakan lelucon-lelucon yang terutama berkisar sekitar soal-soal sex.",
            "B": "Saya rasanya ingin membalas dendam bila seseorang menghina saya."
        }
    },
    {
        "question": "225",
        "options": {
            "A": "Saya suka mengelakkan tanggung jawab dan kewajiban-kewajiban.",
            "B": "Saya rasanya ingin memperolok-olok orang-orang yang melakukan hal-hal yang saya anggap bodoh."
        }
    }
];