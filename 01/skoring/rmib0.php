<?php

$out = intval(trim($soal_rmib[1-1])) + intval(trim($soal_rmib[24-1])) + intval(trim($soal_rmib[35-1])) + intval(trim($soal_rmib[46-1])) + intval(trim($soal_rmib[57-1])) + intval(trim($soal_rmib[68-1])) + intval(trim($soal_rmib[79-1])) + intval(trim($soal_rmib[90-1]));

// MECH: 2, 13, 36, 47, 58, 69, 80, 91
$mech = intval(trim($soal_rmib[2-1])) + intval(trim($soal_rmib[13-1])) + intval(trim($soal_rmib[36-1])) + intval(trim($soal_rmib[47-1])) + intval(trim($soal_rmib[58-1])) + intval(trim($soal_rmib[69-1])) + intval(trim($soal_rmib[80-1])) + intval(trim($soal_rmib[91-1]));

// COMP: 3, 14, 25, 48, 59, 70, 81, 92
$comp = intval(trim($soal_rmib[3-1])) + intval(trim($soal_rmib[14-1])) + intval(trim($soal_rmib[25-1])) + intval(trim($soal_rmib[48-1])) + intval(trim($soal_rmib[59-1])) + intval(trim($soal_rmib[70-1])) + intval(trim($soal_rmib[81-1])) + intval(trim($soal_rmib[92-1]));

// ACIE: 4, 15, 26, 37, 60, 71, 82, 93
$acie = intval(trim($soal_rmib[4-1])) + intval(trim($soal_rmib[15-1])) + intval(trim($soal_rmib[26-1])) + intval(trim($soal_rmib[37-1])) + intval(trim($soal_rmib[60-1])) + intval(trim($soal_rmib[71-1])) + intval(trim($soal_rmib[82-1])) + intval(trim($soal_rmib[93-1]));

// PERS: 5, 16, 27, 38, 49, 72, 83, 94
$pers = intval(trim($soal_rmib[5-1])) + intval(trim($soal_rmib[16-1])) + intval(trim($soal_rmib[27-1])) + intval(trim($soal_rmib[38-1])) + intval(trim($soal_rmib[49-1])) + intval(trim($soal_rmib[72-1])) + intval(trim($soal_rmib[83-1])) + intval(trim($soal_rmib[94-1]));

// AESTH: 6, 17, 28, 39, 50, 61, 84, 95
$aesth = intval(trim($soal_rmib[6-1])) + intval(trim($soal_rmib[17-1])) + intval(trim($soal_rmib[28-1])) + intval(trim($soal_rmib[39-1])) + intval(trim($soal_rmib[50-1])) + intval(trim($soal_rmib[61-1])) + intval(trim($soal_rmib[84-1])) + intval(trim($soal_rmib[95-1]));

// LITE: 7, 18, 29, 40, 51, 62, 73, 96
$lite = intval(trim($soal_rmib[7-1])) + intval(trim($soal_rmib[18-1])) + intval(trim($soal_rmib[29-1])) + intval(trim($soal_rmib[40-1])) + intval(trim($soal_rmib[51-1])) + intval(trim($soal_rmib[62-1])) + intval(trim($soal_rmib[73-1])) + intval(trim($soal_rmib[96-1]));

// MUS: 8, 19, 30, 41, 52, 63, 74, 85
$mus = intval(trim($soal_rmib[8-1])) + intval(trim($soal_rmib[19-1])) + intval(trim($soal_rmib[30-1])) + intval(trim($soal_rmib[41-1])) + intval(trim($soal_rmib[52-1])) + intval(trim($soal_rmib[63-1])) + intval(trim($soal_rmib[74-1])) + intval(trim($soal_rmib[85-1]));

// SOS. WERV: 9, 20, 31, 42, 53, 64, 75, 86
$sos_wer = intval(trim($soal_rmib[9-1])) + intval(trim($soal_rmib[20-1])) + intval(trim($soal_rmib[31-1])) + intval(trim($soal_rmib[42-1])) + intval(trim($soal_rmib[53-1])) + intval(trim($soal_rmib[64-1])) + intval(trim($soal_rmib[75-1])) + intval(trim($soal_rmib[86-1]));

// CLER: 10, 21, 32, 43, 54, 65, 76, 87
$cler = intval(trim($soal_rmib[10-1])) + intval(trim($soal_rmib[21-1])) + intval(trim($soal_rmib[32-1])) + intval(trim($soal_rmib[43-1])) + intval(trim($soal_rmib[54-1])) + intval(trim($soal_rmib[65-1])) + intval(trim($soal_rmib[76-1])) + intval(trim($soal_rmib[87-1]));

// PRAC: 11, 22, 33, 44, 55, 66, 77, 88
$prac = intval(trim($soal_rmib[11-1])) + intval(trim($soal_rmib[22-1])) + intval(trim($soal_rmib[33-1])) + intval(trim($soal_rmib[44-1])) + intval(trim($soal_rmib[55-1])) + intval(trim($soal_rmib[66-1])) + intval(trim($soal_rmib[77-1])) + intval(trim($soal_rmib[88-1]));

// MED: 12, 23, 34, 45, 56, 67, 78, 89
$med = intval(trim($soal_rmib[12-1])) + intval(trim($soal_rmib[23-1])) + intval(trim($soal_rmib[34-1])) + intval(trim($soal_rmib[45-1])) + intval(trim($soal_rmib[56-1])) + intval(trim($soal_rmib[67-1])) + intval(trim($soal_rmib[78-1])) + intval(trim($soal_rmib[89-1]));

// Menghitung grand total
$grand_total = $out + $mech + $comp + $acie + $pers + $aesth + $lite + $mus + $sos_wer + $cler + $prac + $med;

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

?>
