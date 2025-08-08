/**
 * @fileoverview Berisi data mengenai minat serta kekuatan dan kelemahan.
 * Data ini awalnya dari format PHP dan telah dikonversi ke JavaScript.
 */

/**
 * Array yang berisi objek-objek minat, masing-masing dengan arah, singkatan, dan keterangan.
 * @type {Array<Object>}
 */
const minat = [
    {
        "arah_minat": "OUTDOOR",
        "singkatan": "OUT",
        "keterangan_minat": "Minat ini melibatkan berbagai aktivitas yang dilakukan di luar ruangan, seperti kegiatan outbound yang meningkatkan keterampilan tim, travelling untuk menjelajahi tempat-tempat baru, dan eksplorasi pertambangan yang memberikan wawasan tentang sumber daya alam serta teknik penambangan."
    },
    {
        "arah_minat": "LITERATURE",
        "singkatan": "LITE",
        "keterangan_minat": "Bidang ini berfokus pada literatur dan berbagai karya tulis, mencakup profesi seperti ahli perpustakaan yang bertanggung jawab untuk mengelola koleksi buku, serta petugas administrasi yang mendukung organisasi dan penyebaran informasi dalam institusi literasi."
    },
    {
        "arah_minat": "MECHANICAL",
        "singkatan": "MECH",
        "keterangan_minat": "Minat ini terkait dengan ilmu mekanik dan teknik, yang mencakup berbagai disiplin seperti teknik mesin yang merancang dan memproduksi mesin, serta teknik sipil yang merencanakan dan membangun infrastruktur seperti jembatan dan gedung."
    },
    {
        "arah_minat": "MUSICAL",
        "singkatan": "MUS",
        "keterangan_minat": "Minat di bidang musik ini mencakup kemampuan untuk menciptakan, memainkan, atau menginterpretasikan karya musik, yang bisa termasuk profesi seperti komposer yang merangkai melodi serta pemain musik yang tampil di berbagai acara dan pertunjukan."
    },
    {
        "arah_minat": "COMPUTATIONAL",
        "singkatan": "COMP",
        "keterangan_minat": "Bidang ini berfokus pada keterampilan analisis dan perhitungan, mencakup profesi seperti akuntan yang bertanggung jawab untuk pencatatan dan pelaporan keuangan, serta ahli pembukuan yang mengelola catatan transaksi untuk bisnis dan organisasi."
    },
    {
        "arah_minat": "SOCIAL SERVICE",
        "singkatan": "SOS. WERV",
        "keterangan_minat": "Minat ini berkaitan dengan pelayanan sosial dan komunitas, mencakup peran sebagai sukarelawan yang memberikan bantuan kepada yang membutuhkan, pekerja sosial yang membantu individu dan keluarga dalam kesulitan, serta psikolog yang memberikan dukungan mental dan emosional."
    },
    {
        "arah_minat": "SCIENTIFIC",
        "singkatan": "ACIE",
        "keterangan_minat": "Minat di bidang scientific ini melibatkan penelitian dan eksperimen untuk mengembangkan pengetahuan baru, mencakup profesi seperti peneliti yang melakukan studi ilmiah dan ahli matematika yang menerapkan teori matematika dalam berbagai aplikasi praktis."
    },
    {
        "arah_minat": "CLERICAL",
        "singkatan": "CLER",
        "keterangan_minat": "Bidang ini berfokus pada keterampilan administratif dan organisasi, mencakup peran sebagai sekretaris yang mengelola jadwal dan dokumen, serta notulen yang mendokumentasikan rapat dan kegiatan penting dalam suatu organisasi."
    },
    {
        "arah_minat": "PERSUASIVE",
        "singkatan": "PERS",
        "keterangan_minat": "Minat ini berhubungan dengan kemampuan berkomunikasi dan mempengaruhi orang lain, mencakup profesi seperti ahli komunikasi yang merancang strategi komunikasi efektif, serta marketing yang mempromosikan produk dan layanan kepada konsumen."
    },
    {
        "arah_minat": "PRACTICAL",
        "singkatan": "PRAC",
        "keterangan_minat": "Minat ini berfokus pada keterampilan praktis dan teknis, mencakup peran sebagai montir yang memperbaiki dan merawat kendaraan, serta ahli perbaikan mesin yang menangani berbagai masalah teknis pada peralatan dan alat-alat industri."
    },
    {
        "arah_minat": "AESTHETIC",
        "singkatan": "AESTH",
        "keterangan_minat": "Minat ini mencakup kemampuan kreatif dalam seni dan desain, termasuk profesi seperti pelukis yang menciptakan karya seni visual, seniman patung yang membuat patung dari berbagai bahan, serta arsitek yang merancang bangunan dengan mempertimbangkan fungsi dan estetika."
    },
    {
        "arah_minat": "MEDICAL",
        "singkatan": "MED",
        "keterangan_minat": "Minat ini berkaitan dengan bidang medis dan kesehatan, mencakup profesi seperti dokter yang mendiagnosis dan merawat penyakit, perawat yang memberikan perawatan langsung kepada pasien, serta ahli kesehatan yang berfokus pada pencegahan penyakit dan promosi kesehatan."
    }
];

/**
 * Array yang berisi objek-objek kekuatan dan kelemahan.
 * @type {Array<Object>}
 */
const kekuatanKelemahan = [
    {
        "teks1": "Kemampuan Umum",
        "teks2": "Mampu menemukan solusi untuk berbagai masalah dengan efektif.",
        "teks3": "Kesulitan menghadapi masalah yang sangat kompleks.",
        "teks4": "Analisis Kebijakan dan Manajemen Proyek, di mana kemampuan untuk mengatasi masalah sangat dihargai.",
        "teks5": "Disarankan untuk melatih kemampuan pemecahan masalah dengan mengikuti simulasi kasus kompleks dan berpartisipasi dalam diskusi kelompok, sehingga dapat meningkatkan ketahanan dalam menghadapi tantangan yang lebih besar."
    },
    {
        "teks1": "Daya Tangkap Visual",
        "teks2": "Cepat mengenali pola dan perbedaan di lingkungan sekitar.",
        "teks3": "Kurang perhatian terhadap detail yang lebih kecil, yang mempengaruhi hasil akhir.",
        "teks4": "Desain Grafis atau Analisis Data, di mana kemampuan visual sangat diperlukan.",
        "teks5": "Sangat dianjurkan untuk mempraktikkan teknik mindfulness yang dapat membantu meningkatkan fokus terhadap detail kecil, sehingga hasil kerja dapat lebih maksimal dan akurat."
    },
    {
        "teks1": "Kemampuan Berpikir Logis",
        "teks2": "Mampu membuat keputusan berdasarkan alasan yang jelas dalam situasi tertentu.",
        "teks3": "Kesulitan membuat keputusan cepat dalam situasi mendesak.",
        "teks4": "Bidang pekerjaan yang tepat adalah Pengembangan Software atau Riset Pasar, yang membutuhkan pemikiran logis yang tajam.",
        "teks5": "Sebaiknya mengikuti pelatihan khusus yang dirancang untuk pengambilan keputusan di bawah tekanan, agar dapat meningkatkan kecepatan dan ketepatan dalam mengambil keputusan ketika situasi mendesak."
    },
    {
        "teks1": "Kemampuan Berpikir Abstrak",
        "teks2": "Mampu melihat hubungan antara berbagai hal dan memahami konsekuensi dari tindakan.",
        "teks3": "Tantangan dalam menerjemahkan ide-ide abstrak ke dalam praktik.",
        "teks4": "Bidang pekerjaan yang relevan adalah Konsultasi Strategis atau Inovasi Produk, yang memanfaatkan pemikiran kreatif.",
        "teks5": "Disarankan untuk melakukan proyek kecil yang akan membantu menerapkan ide-ide abstrak ke dalam praktik nyata, sehingga dapat belajar dari pengalaman dan meningkatkan kemampuan penerapan ide."
    },
    {
        "teks1": "Penalaran Verbal",
        "teks2": "Mampu berkomunikasi dengan jelas dan efektif dalam interaksi.",
        "teks3": "Kurang sabar dalam mendengarkan pandangan orang lain, yang menghambat komunikasi.",
        "teks4": "Pemasaran atau Hubungan Masyarakat, di mana komunikasi yang baik sangat penting.",
        "teks5": "Sangat bermanfaat untuk melatih keterampilan mendengarkan aktif melalui kegiatan role-playing, yang dapat meningkatkan kemampuan untuk menghargai pandangan orang lain dan memperbaiki komunikasi."
    },
    {
        "teks1": "Penalaran Numerik",
        "teks2": "Kemampuan memahami proses hitung dan berpikir teratur.",
        "teks3": "Memerlukan waktu lebih lama untuk memahami konsep matematika yang lebih rumit.",
        "teks4": "Akuntansi atau Analisis Keuangan, yang membutuhkan ketelitian dalam angka.",
        "teks5": "Disarankan untuk berlatih secara rutin dengan soal-soal matematika yang lebih kompleks, agar dapat meningkatkan kecepatan dan pemahaman dalam konsep yang rumit."
    },
    {
        "teks1": "Hasrat Berprestasi",
        "teks2": "Keinginan untuk mencapai dan meningkatkan prestasi.",
        "teks3": "Beban ekspektasi tinggi dapat memengaruhi fokus dan kinerja.",
        "teks4": "Manajemen Proyek atau Pengembangan Bisnis, di mana prestasi diakui dan dihargai.",
        "teks5": "Sangat penting untuk menetapkan tujuan yang realistis dan melakukan evaluasi berkala, agar dapat menjaga motivasi dan fokus pada pencapaian yang lebih terukur."
    },
    {
        "teks1": "Daya Tahan Stress",
        "teks2": "Kemampuan mempertahankan kinerja.",
        "teks3": "Kewalahan saat menghadapi tekanan yang berkepanjangan.",
        "teks4": "Bidang pekerjaan yang tepat adalah Konsultasi atau Manajemen Sumber Daya Manusia, yang sering kali memerlukan ketahanan terhadap stres.",
        "teks5": "Sebaiknya mempraktikkan teknik relaksasi dan manajemen waktu yang efektif, sehingga dapat mengurangi stres dan meningkatkan performa dalam menghadapi tekanan."
    },
    {
        "teks1": "Kepercayaan Diri",
        "teks2": "Adanya keyakinan terhadap kemampuan yang dimiliki.",
        "teks3": "Kurang terbuka terhadap kritik konstruktif, yang menghambat perkembangan.",
        "teks4": "Bidang pekerjaan yang relevan adalah Pelatihan atau Kepemimpinan, di mana kepercayaan diri sangat berpengaruh.",
        "teks5": "Disarankan untuk secara rutin meminta umpan balik dari orang lain, sehingga dapat membangun kepercayaan diri yang lebih solid dan meningkatkan kemampuan untuk menerima kritik."
    },
    {
        "teks1": "Relasi Sosial",
        "teks2": "Kemampuan membina hubungan dengan orang lain.",
        "teks3": "Canggung dalam situasi sosial baru, yang menghambat interaksi.",
        "teks4": "Pengembangan Komunitas atau Pemasaran, yang memerlukan keterampilan membangun hubungan.",
        "teks5": "Sangat dianjurkan untuk bergabung dengan kelompok sosial atau komunitas yang diminati, sehingga dapat berlatih keterampilan interaksi dan membangun hubungan yang lebih baik."
    },
    {
        "teks1": "Kerjasama",
        "teks2": "Kemampuan bekerjasama individu atau berkelompok.",
        "teks3": "Kesulitan beradaptasi dengan dinamika kelompok yang berbeda.",
        "teks4": "Proyek Tim atau Manajemen Operasi, di mana kerjasama sangat penting.",
        "teks5": "Disarankan untuk terlibat dalam berbagai aktivitas kelompok yang memerlukan kolaborasi, agar dapat meningkatkan kemampuan untuk beradaptasi dengan berbagai dinamika kelompok."
    },
    {
        "teks1": "Sistematika Kerja",
        "teks2": "Kemampuan membuat perencanaan & prioritas kerja.",
        "teks3": "Terlalu fokus pada perencanaan, sehingga mengabaikan implementasi.",
        "teks4": "Bidang pekerjaan yang tepat adalah Manajemen Proyek atau Perencanaan Strategis, yang memerlukan keterampilan organisasi.",
        "teks5": "Sebaiknya tentukan batas waktu untuk setiap fase implementasi, agar tidak terjebak dalam perencanaan yang berlarut-larut dan dapat segera memulai eksekusi."
    },
    {
        "teks1": "Inisiatif",
        "teks2": "Kemampuan mengambil tindakan yang diperlukan.",
        "teks3": "Pengambilan keputusan yang terburu-buru berisiko tinggi.",
        "teks4": "Kewirausahaan atau Pengembangan Produk, di mana inisiatif sangat dihargai.",
        "teks5": "Disarankan untuk selalu mempertimbangkan pro dan kontra secara mendalam sebelum mengambil keputusan, agar dapat mengurangi risiko yang mungkin timbul dari keputusan yang terburu-buru."
    },
    {
        "teks1": "Kemandirian",
        "teks2": "Kemampuan mengambil sikap dan bekerja sendiri.",
        "teks3": "Kesulitan dalam berkolaborasi dengan tim, yang dapat memengaruhi hasil kerja.",
        "teks4": "Freelancing atau Penulisan Kreatif, di mana kemandirian adalah keunggulan.",
        "teks5": "Sangat penting untuk terlibat dalam proyek kolaboratif yang dapat membantu meningkatkan keterampilan kerja sama dan beradaptasi dalam lingkungan tim."
    }
];
