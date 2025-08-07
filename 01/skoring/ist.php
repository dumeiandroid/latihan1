<?php

// Usia yang akan dicek
// $usia = 14;

// Array yang berisi batas usia dan file yang harus di-include
$ageFileMap = [
    14 => '14.php',
    15 => '15.php',
    16 => '16.php',
    17 => '17.php',
    18 => '18.php',
    19 => '19.php',
    '19-20' => '1920.php',
    '21-25' => '2125.php',
    '26-30' => '2630.php',
    '31-35' => '3135.php',
    '36-45' => '3640.php',
    '46-50' => '4650.php',
];

// Menentukan file yang harus di-include berdasarkan usia
$fileToInclude = null;
foreach ($ageFileMap as $key => $file) {
    if (is_numeric($key)) {
        if ($usia == $key) {
            $fileToInclude = 'ist/' . $file;
            break;
        }
    } else {
        list($start, $end) = explode('-', $key);
        if ($usia >= $start && $usia <= $end) {
            $fileToInclude = 'ist/' . $file;
            break;
        }
    }
}

// Menyertakan file yang sesuai dengan usia
if ($fileToInclude !== null) {
    include $fileToInclude;
} else {
    echo "Tidak ada file yang sesuai untuk usia $usia.";
}
$jumlah = $RW_SE+$RW_WA+$RW_AN+$RW_GE+$RW_ME+$RW_RA+$RW_ZR+$RW_FA+$RW_WU;

// $usia = 14;
$rw = $jumlah;
include 'ist/gesamt.php';
echo "<br>";echo "Jumlah Nilai = ".$jumlah;echo "<br>";echo "<br>";
echo "Gesamt = ".$sw;echo "<br>";echo "<br>";
include 'ist/iq.php';
echo "IQ = ".getIQ($sw);echo "<br>";echo "<br>";
?>
