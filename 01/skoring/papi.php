<?php
// Membuat array untuk menyimpan hasil soal
// $soal_papi = [];

// // Mengisi soal1 sampai soal90 dengan nilai acak antara 'A' atau 'B'
// for ($i = 1; $i <= 90; $i++) {
//     $soal_papi[$i] = (rand(0, 1) == 0) ? 'A' : 'B';
// }

// Definisi array sesuai dengan soal yang telah diisi
$nb = [$soal_papi[90], $soal_papi[79], $soal_papi[68], $soal_papi[57], $soal_papi[46], $soal_papi[35], $soal_papi[24], $soal_papi[13], $soal_papi[2]];
$na = [];

$ab = [$soal_papi[80], $soal_papi[69], $soal_papi[58], $soal_papi[47], $soal_papi[36], $soal_papi[25], $soal_papi[14], $soal_papi[3]];
$aa = [$soal_papi[2]];

$pb = [$soal_papi[70], $soal_papi[59], $soal_papi[48], $soal_papi[37], $soal_papi[26], $soal_papi[15], $soal_papi[4]];
$pa = [$soal_papi[13], $soal_papi[3]];

$xb = [$soal_papi[60], $soal_papi[49], $soal_papi[38], $soal_papi[27], $soal_papi[16], $soal_papi[5]];
$xa = [$soal_papi[24], $soal_papi[14], $soal_papi[4]];

$bb = [$soal_papi[50], $soal_papi[39], $soal_papi[28], $soal_papi[17], $soal_papi[6]];
$ba = [$soal_papi[35], $soal_papi[25], $soal_papi[15], $soal_papi[5]];

$ob = [$soal_papi[40], $soal_papi[29], $soal_papi[18], $soal_papi[7]];
$oa = [$soal_papi[46], $soal_papi[36], $soal_papi[26], $soal_papi[16], $soal_papi[6]];

$zb = [$soal_papi[30], $soal_papi[19], $soal_papi[8]];
$za = [$soal_papi[57], $soal_papi[47], $soal_papi[37], $soal_papi[27], $soal_papi[17], $soal_papi[7]];

$kb = [$soal_papi[20], $soal_papi[9]];
$ka = [$soal_papi[68], $soal_papi[58], $soal_papi[48], $soal_papi[38], $soal_papi[28], $soal_papi[18], $soal_papi[8]];

$fb = [$soal_papi[10]];
$fa = [$soal_papi[79], $soal_papi[69], $soal_papi[59], $soal_papi[49], $soal_papi[39], $soal_papi[29], $soal_papi[19], $soal_papi[9]];

$wb = [];
$wa = [$soal_papi[90], $soal_papi[80], $soal_papi[70], $soal_papi[60], $soal_papi[50], $soal_papi[40], $soal_papi[30], $soal_papi[20], $soal_papi[10]];

$gb = [];
$ga = [$soal_papi[81], $soal_papi[71], $soal_papi[61], $soal_papi[51], $soal_papi[41], $soal_papi[31], $soal_papi[21], $soal_papi[11], $soal_papi[1]];

$lb = [$soal_papi[81]];
$la = [$soal_papi[82], $soal_papi[72], $soal_papi[62], $soal_papi[52], $soal_papi[42], $soal_papi[32], $soal_papi[22], $soal_papi[12]];

$ib = [$soal_papi[82], $soal_papi[71]];
$ia = [$soal_papi[83], $soal_papi[73], $soal_papi[63], $soal_papi[53], $soal_papi[43], $soal_papi[33], $soal_papi[23]];

$tb = [$soal_papi[83], $soal_papi[72], $soal_papi[61]];
$ta = [$soal_papi[84], $soal_papi[74], $soal_papi[64], $soal_papi[54], $soal_papi[44], $soal_papi[34]];

$vb = [$soal_papi[84], $soal_papi[73], $soal_papi[62], $soal_papi[51]];
$va = [$soal_papi[85], $soal_papi[75], $soal_papi[65], $soal_papi[55], $soal_papi[45]];

$sb = [$soal_papi[85], $soal_papi[74], $soal_papi[63], $soal_papi[52], $soal_papi[41]];
$sa = [$soal_papi[86], $soal_papi[76], $soal_papi[66], $soal_papi[56]];

$rb = [$soal_papi[86], $soal_papi[75], $soal_papi[64], $soal_papi[53], $soal_papi[42], $soal_papi[31]];
$ra = [$soal_papi[87], $soal_papi[77], $soal_papi[67]];

$db = [$soal_papi[87], $soal_papi[76], $soal_papi[65], $soal_papi[54], $soal_papi[43], $soal_papi[32], $soal_papi[21]];
$da = [$soal_papi[88], $soal_papi[78]];

$cb = [$soal_papi[88], $soal_papi[77], $soal_papi[66], $soal_papi[55], $soal_papi[44], $soal_papi[33], $soal_papi[22], $soal_papi[11]];
$ca = [$soal_papi[89]];

$eb = [$soal_papi[89], $soal_papi[78], $soal_papi[67], $soal_papi[56], $soal_papi[45], $soal_papi[34], $soal_papi[23], $soal_papi[12], $soal_papi[1]];
$ea = [];

// Fungsi untuk menghitung total 'A' dan 'B'
function hitungTotal($array, $jenis) {
    $total = 0;
    foreach ($array as $nilai) {
        if ($nilai == $jenis) {
            $total++;
        }
    }
    return $total;
}

// Menghitung total 'A' dan 'B' untuk semua array yang didefinisikan
$totalA_na = hitungTotal($na, 'A');
$totalB_nb = hitungTotal($nb, 'B');

$totalA_aa = hitungTotal($aa, 'A');
$totalB_ab = hitungTotal($ab, 'B');

$totalA_pa = hitungTotal($pa, 'A');
$totalB_pb = hitungTotal($pb, 'B');

$totalA_xa = hitungTotal($xa, 'A');
$totalB_xb = hitungTotal($xb, 'B');

$totalA_ba = hitungTotal($ba, 'A');
$totalB_bb = hitungTotal($bb, 'B');

$totalA_oa = hitungTotal($oa, 'A');
$totalB_ob = hitungTotal($ob, 'B');

$totalA_za = hitungTotal($za, 'A');
$totalB_zb = hitungTotal($zb, 'B');

$totalA_ka = hitungTotal($ka, 'A');
$totalB_kb = hitungTotal($kb, 'B');

$totalA_fa = hitungTotal($fa, 'A');
$totalB_fb = hitungTotal($fb, 'B');

$totalA_wa = hitungTotal($wa, 'A');
$totalB_wb = hitungTotal($wb, 'B');

$totalA_ga = hitungTotal($ga, 'A');
$totalB_gb = hitungTotal($gb, 'B');

$totalA_la = hitungTotal($la, 'A');
$totalB_lb = hitungTotal($lb, 'B');

$totalA_ia = hitungTotal($ia, 'A');
$totalB_ib = hitungTotal($ib, 'B');

$totalA_ta = hitungTotal($ta, 'A');
$totalB_tb = hitungTotal($tb, 'B');

$totalA_va = hitungTotal($va, 'A');
$totalB_vb = hitungTotal($vb, 'B');

$totalA_sa = hitungTotal($sa, 'A');
$totalB_sb = hitungTotal($sb, 'B');

$totalA_ra = hitungTotal($ra, 'A');
$totalB_rb = hitungTotal($rb, 'B');

$totalA_da = hitungTotal($da, 'A');
$totalB_db = hitungTotal($db, 'B');

$totalA_ca = hitungTotal($ca, 'A');
$totalB_cb = hitungTotal($cb, 'B');

$totalA_ea = hitungTotal($ea, 'A');
$totalB_eb = hitungTotal($eb, 'B');



// Menghitung total x sebagai jumlah dari totalA dan totalB
$total_n = $totalA_na + $totalB_nb;
$total_a = $totalA_aa + $totalB_ab;
$total_p = $totalA_pa + $totalB_pb;
$total_x = $totalA_xa + $totalB_xb;
$total_b = $totalA_ba + $totalB_bb;
$total_o = $totalA_oa + $totalB_ob;
$total_z = $totalA_za + $totalB_zb;
$total_k = $totalA_ka + $totalB_kb;
$total_f = $totalA_fa + $totalB_fb;
$total_w = $totalA_wa + $totalB_wb;
$total_g = $totalA_ga + $totalB_gb;
$total_l = $totalA_la + $totalB_lb;
$total_i = $totalA_ia + $totalB_ib;
$total_t = $totalA_ta + $totalB_tb;
$total_v = $totalA_va + $totalB_vb;
$total_s = $totalA_sa + $totalB_sb;
$total_r = $totalA_ra + $totalB_rb;
$total_d = $totalA_da + $totalB_db;
$total_c = $totalA_ca + $totalB_cb;
$total_e = $totalA_ea + $totalB_eb;

$Atotal = $total_n+$total_a+$total_p+$total_x+$total_b+$total_o+$total_z+$total_k+$total_f+$total_w;


$Btotal = $total_g+$total_l+$total_i+$total_t+$total_v+$total_s+$total_r+$total_d+$total_c+$total_e;
// Membuat array untuk menyimpan total x dan kunci array
$hasil = [
    "N (Need to Finish Task)" => $total_n,
    "A (Need to Achieve)" => $total_a,
    "P (Need to Control Others)" => $total_p,
    "X (Need to be Noticed)" => $total_x,
    "B (Need to Belong to Groups)" => $total_b,
    "O (Need for Closeness and Affection)" => $total_o,
    "Z (Need for Change)" => $total_z,  // Perbaikan
    "K (Need to be Forceful)" => $total_k,  // Perbaikan
    "F (Need to Support Authority)" => $total_f,  // Perbaikan
    "W (Need for Rules and Supervision)" => $total_w,
    "G (Hard Intense Worked)" => $total_g,  // Perbaikan
    "L (Leadership Role)" => $total_l,
    "I (Ease in Decision Making)" => $total_i,
    "T (Pace)" => $total_t,
    "V (Vigorous Type)" => $total_v,
    "S (Social Extension)" => $total_s,
    "R (Theoretical Type)" => $total_r,
    "D (Interest in Working With Details)" => $total_d,
    "C (Organized Type)" => $total_c,
    "E (Emotional Resistant)" => $total_e
];

// Mengurutkan array berdasarkan nilai total x dari yang terbesar ke yang terkecil
// arsort($total_a);
echo "Total A total: $Atotal<br>";
echo "Total B total: $Btotal<br>";
echo "<br><br>";

echo "<style>
    .indent {
        margin-left: 20px;
    }
</style>";

// Menampilkan hasil
foreach ($hasil as $kunci => $total_x) {
    echo "$kunci: $total_x<br>";
    echo "<div class='indent'>";
    switch ($kunci) {
        case "L (Leadership Role)":
            if ($total_x >= 5) {
                echo "• Skor 5-9: yaitu tingkat dimana seseorang memproyeksikan dirinya sebagai pemimpin, ia mencoba menggunakan orang lain untuk mencapai tujuannya.<br><br>";
            } else {
                echo "• Skor 0-4: cenderung tidak secara aktif menggunakan orang lain dalam bekerja.<br><br>";
            }
            break;
        case "P (Need to Control Others)":
            if ($total_x >= 5) {
                echo "• Skor 5-9: tingkat kebutuhan untuk menerima tanggung jawab orang lain, menjadi orang yang bertanggung jawab.<br><br>";
            } else {
                echo "• Skor 0-4: menurunnya keinginan untuk bertanggung jawab pada pekerjaan dan tindakan orang lain.<br><br>";
            }
            break;
        case "I (Ease in Decision Making)":
            if ($total_x <= 2) {
                echo "• Skor 0-2: ragu - menolak mengambil keputusan.<br><br>";
            } elseif ($total_x <= 4) {
                echo "• Skor 3-4: berhati-hati membuat keputusan.<br><br>";
            } elseif ($total_x <= 7) {
                echo "• Skor 5-7: lancar dan mudah mengambil keputusan.<br><br>";
            } else {
                echo "• Skor 8-9: tidak ragu dalam mengambil keputusan, cenderung terburu-buru.<br><br>";
            }
            break;
        case "F (Need to Support Authority)":
            if ($total_x >= 6) {
                echo "• Skor 6-9: bersikap setia dan membantu, kemungkinan bantuannya bersifat politis.<br><br>";
            } elseif ($total_x >= 4) {
                echo "• Skor 4-5: setia terhadap otoritas.<br><br>";
            } elseif ($total_x >= 2) {
                echo "• Skor 2-3: mandiri.<br><br>";
            } else {
                echo "• Skor < 2: cenderung egois, kemungkinan bisa memberontak.<br><br>";
            }
            break;
        case "W (Need for Rules and Supervision)":
            if ($total_x < 4) {
                echo "• Skor <4: berorientasi pada tujuan, mandiri.<br><br>";
            } elseif ($total_x <= 5) {
                echo "• Skor 4-5: kebutuhan akan pengarahan dan harapan yang dirumuskan untuknya.<br><br>";
            } else {
                echo "• Skor 6-9: meningkatnya orientasi terhadap tugas dan membutuhkan instruksi yang jelas.<br><br>";
            }
            break;
        case "T (Pace)":
            if ($total_x < 4) {
                echo "• Skor <4: melakukan segala sesuatu menurut kemauan dan kecepatannya sendiri.<br><br>";
            } else {
                echo "• Skor 4-6: tergolong aktif secara internal dan mental.<br><br>";
            }
            break;
        case "V (Vigorous Type)":
            if ($total_x < 5) {
                echo "• Skor <5: cenderung pasif.<br><br>";
            } else {
                echo "• Skor 5-7: aktif secara fisik, cenderung sportif.<br><br>";
            }
            break;
        case "R (Theoretical Type)":
            if ($total_x <= 4) {
                echo "• Skor 0-4: bersifat praktis.<br><br>";
            } else {
                echo "• Skor 5-9: nilai penalaran tergolong tinggi.<br><br>";
            }
            break;
        case "D (Interest in Working With Details)":
            if ($total_x <= 3) {
                echo "• Skor 0-3: menyadari kebutuhan akan kecermatan, tetapi tidak berminat bekerja detail.<br><br>";
            } else {
                echo "• Skor 4-9: minat tinggi untuk bekerja secara detail.<br><br>";
            }
            break;
        case "C (Organized Type)":
            if ($total_x <= 2) {
                echo "• Skor 0-2: tidak teratur.<br><br>";
            } elseif ($total_x <= 5) {
                echo "• Skor 3-5: teratur tetapi tergolong fleksibel.<br><br>";
            } else {
                echo "• Skor 6-9: keteraturan tinggi cenderung kaku.<br><br>";
            }
            break;
        case "X (Need to be Noticed)":
            if ($total_x < 2) {
                echo "• Skor <2: cenderung pemalu.<br><br>";
            } elseif ($total_x <= 3) {
                echo "• Skor 2-3: rendah hati, tulus.<br><br>";
            } elseif ($total_x <= 5) {
                echo "• Skor 4-5: memiliki pola perilaku yang unik.<br><br>";
            } else {
                echo "• Skor 6-9: benar-benar membutuhkan perhatian.<br><br>";
            }
            break;
        case "B (Need to Belong to Groups)":
            if ($total_x <= 3) {
                echo "• Skor 0-3: selektif.<br><br>";
            } elseif ($total_x <= 5) {
                echo "• Skor 4-5: butuh diterima, tapi tidak mudah dipengaruhi kelompok.<br><br>";
            } else {
                echo "• Skor 6-9: butuh disukai dan diakui, mudah dipengaruhi.<br><br>";
            }
            break;
        case "O (Need for Closeness and Affection)":
            if ($total_x < 3) {
                echo "• Skor <3: tidak suka hubungan perorangan.<br><br>";
            } elseif ($total_x <= 4) {
                echo "• Skor 3-4: sadar akan hubungan perorangan, tapi tidak terlalu tergantung.<br><br>";
            } else {
                echo "• Skor 5-9: sangat tergantung, butuh penerimaan diri.<br><br>";
            }
            break;
        case "S (Social Extension)":
            if ($total_x < 6) {
                echo "• Skor <6: perhatian rendah terhadap hubungan sosial, kurang percaya pada orang lain.<br><br>";
            } else {
                echo "• Skor 6-9: kepercayaan tinggi dalam berhubungan sosial, suka interaksi sosial.<br><br>";
            }
            break;
        case "N (Need to Finish Task)":
            if ($total_x < 3) {
                echo "• Skor <3: komitmen rendah, tapi ada kemungkinan dapat memegang banyak pekerjaan dalam satu waktu.<br><br>";
            } elseif ($total_x <= 4) {
                echo "• Skor 3-4: delegator.<br><br>";
            } elseif ($total_x <= 6) {
                echo "• Skor 4-6: cukup bertanggung jawab pada pekerjaan.<br><br>";
            } else {
                echo "• Skor 6-9: tekun, tanggung jawab tinggi.<br><br>";
            }
            break;
        case "A (Need to Achieve)":
            if ($total_x <= 5) {
                echo "• Skor 0-5: ketidakpastian tujuan, tidak ada usaha lebih.<br><br>";
            } else {
                echo "• Skor 6-9: tujuan jelas, kebutuhan sukses dan ambisi tinggi.<br><br>";
            }
            break;
        case "G (Hard Intense Worked)":
            if ($total_x <= 4) {
                echo "• Skor 3-4: bekerja untuk kesenangan saja, bukan hasil optimal.<br><br>";
            } else {
                echo "• Skor 4-7: kemauan bekerja keras tinggi.<br><br>";
            }
            break;
        case "Z (Need for Change)":
            if ($total_x <= 2) {
                echo "• Skor 0-2: tidak suka berubah, tradisional.<br><br>";
            } elseif ($total_x <= 4) {
                echo "• Skor 3-4: meremehkan atau mengacuhkan apabila dipaksa berubah.<br><br>";
            } elseif ($total_x <= 6) {
                echo "• Skor 5-6: mudah menyesuaikan diri.<br><br>";
            } elseif ($total_x <= 7) {
                echo "• Skor 6-7: membuat perubahan tertentu, berfikir jauh ke depan.<br><br>";
            } else {
                echo "• Skor 8-9: mudah gelisah, frustasi, karena segala sesuatu tidak berjalan dengan cepat, mudah berubah-ubah.<br><br>";
            }
            break;
        case "K (Need to be Forceful)":
            if ($total_x <= 2) {
                echo "• Skor 0-2: menghindari masalah, menolak, mengelak adanya masalah.<br><br>";
            } elseif ($total_x <= 4) {
                echo "• Skor 3-4: suka lingkungan yang tenang, menghindari konflik, biasanya menunda penyelesaian konflik.<br><br>";
            } elseif ($total_x == 5) {
                echo "• Skor 5: keras kepala.<br><br>";
            } elseif ($total_x <= 7) {
                echo "• Skor 6-7: menyalurkan agresi personal ke dalam pekerjaan, drive dan persaingan.<br><br>";
            } else {
                echo "• Skor 8-9: agresif yang cenderung defensif.<br><br>";
            }
            break;
        case "E (Emotional Resistant)":
            if ($total_x < 2) {
                echo "• Skor <2: terlalu cepat bereaksi, tidak normatif, ekspresi berlebihan.<br><br>";
            } elseif ($total_x <= 3) {
                echo "• Skor 2-3: open book, terbuka.<br><br>";
            } elseif ($total_x <= 6) {
                echo "• Skor 4-6: punya pendekatan emosional seimbang, mampu mengendalikan.<br><br>";
            } else {
                echo "• Skor >6: sangat normatif, kebutuhan pengendalian diri yang berlebihan, kecenderungan defensif.<br><br>";
            }
            break;
    }
    echo "</div>";
}
?>
