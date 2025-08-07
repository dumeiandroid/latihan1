<?php

// // Fungsi untuk menghasilkan angka acak dari 1 hingga 12 tanpa pengulangan
// function generateUniqueRandomNumbers() {
//     $numbers = range(1, 12);
//     shuffle($numbers);
//     return $numbers;
// }

// // Inisialisasi array soal
// $soal_rmib = [];

// // Mengisi soal 1-96 dengan angka acak tanpa pengulangan dalam setiap kelompok 12 soal
// for ($i = 0; $i < 8; $i++) {
//     $randomNumbers = generateUniqueRandomNumbers();
//     for ($j = 0; $j < 12; $j++) {
//         $soal_rmib[$i * 12 + $j + 1] = $randomNumbers[$j];
//     }
// }

// // Menampilkan nilai soal untuk pengecekan
// for ($i = 1; $i <= 96; $i++) {
//     echo "soal" . $i . " = " . $soal_rmib[$i] . "\n";
// }
// echo "<br><br>";

// OUT: 1, 24, 35, 46, 57, 68, 79, 90
$out = $soal_rmib[1] + $soal_rmib[24] + $soal_rmib[35] + $soal_rmib[46] + $soal_rmib[57] + $soal_rmib[68] + $soal_rmib[79] + $soal_rmib[90];

// MECH: 2, 13, 36, 47, 58, 69, 80, 91
$mech = $soal_rmib[2] + $soal_rmib[13] + $soal_rmib[36] + $soal_rmib[47] + $soal_rmib[58] + $soal_rmib[69] + $soal_rmib[80] + $soal_rmib[91];

// COMP: 3, 14, 25, 48, 59, 70, 81, 92
$comp = $soal_rmib[3] + $soal_rmib[14] + $soal_rmib[25] + $soal_rmib[48] + $soal_rmib[59] + $soal_rmib[70] + $soal_rmib[81] + $soal_rmib[92];

// ACIE: 4, 15, 26, 37, 60, 71, 82, 93
$acie = $soal_rmib[4] + $soal_rmib[15] + $soal_rmib[26] + $soal_rmib[37] + $soal_rmib[60] + $soal_rmib[71] + $soal_rmib[82] + $soal_rmib[93];

// PERS: 5, 16, 27, 38, 49, 72, 83, 94
$pers = $soal_rmib[5] + $soal_rmib[16] + $soal_rmib[27] + $soal_rmib[38] + $soal_rmib[49] + $soal_rmib[72] + $soal_rmib[83] + $soal_rmib[94];

// AESTH: 6, 17, 28, 39, 50, 61, 84, 95
$aesth = $soal_rmib[6] + $soal_rmib[17] + $soal_rmib[28] + $soal_rmib[39] + $soal_rmib[50] + $soal_rmib[61] + $soal_rmib[84] + $soal_rmib[95];

// LITE: 7, 18, 29, 40, 51, 62, 73, 96
$lite = $soal_rmib[7] + $soal_rmib[18] + $soal_rmib[29] + $soal_rmib[40] + $soal_rmib[51] + $soal_rmib[62] + $soal_rmib[73] + $soal_rmib[96];

// MUS: 8, 19, 30, 41, 52, 63, 74, 85
$mus = $soal_rmib[8] + $soal_rmib[19] + $soal_rmib[30] + $soal_rmib[41] + $soal_rmib[52] + $soal_rmib[63] + $soal_rmib[74] + $soal_rmib[85];

// SOS. WERV: 9, 20, 31, 42, 53, 64, 75, 86
$sos_wer = $soal_rmib[9] + $soal_rmib[20] + $soal_rmib[31] + $soal_rmib[42] + $soal_rmib[53] + $soal_rmib[64] + $soal_rmib[75] + $soal_rmib[86];

// CLER: 10, 21, 32, 43, 54, 65, 76, 87
$cler = $soal_rmib[10] + $soal_rmib[21] + $soal_rmib[32] + $soal_rmib[43] + $soal_rmib[54] + $soal_rmib[65] + $soal_rmib[76] + $soal_rmib[87];

// PRAC: 11, 22, 33, 44, 55, 66, 77, 88
$prac = $soal_rmib[11] + $soal_rmib[22] + $soal_rmib[33] + $soal_rmib[44] + $soal_rmib[55] + $soal_rmib[66] + $soal_rmib[77] + $soal_rmib[88];

// MED: 12, 23, 34, 45, 56, 67, 78, 89
$med = $soal_rmib[12] + $soal_rmib[23] + $soal_rmib[34] + $soal_rmib[45] + $soal_rmib[56] + $soal_rmib[67] + $soal_rmib[78] + $soal_rmib[89];

// Menghitung grand total
$grand_total = $out + $mech + $comp + $acie + $pers + $aesth + $lite + $mus + $sos_wer + $cler + $prac + $med;

// Menampilkan hasil perhitungan
echo "OUT = $out\n";echo "<br>";
echo "MECH = $mech\n";echo "<br>";
echo "COMP = $comp\n";echo "<br>";
echo "ACIE = $acie\n";echo "<br>";
echo "PERS = $pers\n";echo "<br>";
echo "AESTH = $aesth\n";echo "<br>";
echo "LITE = $lite\n";echo "<br>";
echo "MUS = $mus\n";echo "<br>";
echo "SOS. WERV = $sos_wer\n";echo "<br>";
echo "CLER = $cler\n";echo "<br>";
echo "PRAC = $prac\n";echo "<br>";
echo "MED = $med\n";echo "<br>";
echo "Grand Total = $grand_total\n";echo "<br>";echo "<br>";

// Array untuk menyimpan jumlah masing-masing kategori
$totals = [
    "OUT" => $out,
    "MECH" => $mech,
    "COMP" => $comp,
    "ACIE" => $acie,
    "PERS" => $pers,
    "AESTH" => $aesth,
    "LITE" => $lite,
    "MUS" => $mus,
    "SOS. WERV" => $sos_wer,
    "CLER" => $cler,
    "PRAC" => $prac,
    "MED" => $med
];

// Mengurutkan array berdasarkan nilai
asort($totals);

// Mengambil tiga jumlah terkecil
$smallest_totals = array_slice($totals, 0, 3);

// Menampilkan tiga jumlah terkecil
echo "Tiga jumlah terkecil:\n";echo "<br>";
foreach ($smallest_totals as $key => $value) {
    echo "$key = $value\n";echo "<br>";
}

?>
