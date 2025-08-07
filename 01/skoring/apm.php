<?php

function getSSandKeteranganIQ($skorTotal_apm) {
    // Define the SS and Keterangan IQ table
    $iqTable = [
        '>36' => [20, 'Baik Sekali'],
        '35-36' => [19, 'Baik Sekali'],
        '33-34' => [18, 'Baik Sekali'],
        '31-32' => [17, 'Baik Sekali'],
        '29-30' => [16, 'Baik'],
        '26-28' => [15, 'Baik'],
        '24-25' => [14, 'Baik'],
        '22-23' => [13, 'Baik'],
        '19-21' => [12, 'Cukup'],
        '17-18' => [11, 'Cukup'],
        '15-16' => [10, 'Cukup'],
        '13-14' => [9, 'Cukup'],
        '10-12' => [8, 'Kurang'],
        '8-9' => [7, 'Kurang'],
        '6-7' => [6, 'Kurang'],
        '4-5' => [5, 'Kurang'],
        '1-3' => [4, 'Kurang Sekali'],
        '0' => [3, 'Kurang Sekali'],
        '0_1' => [2, 'Kurang Sekali'],
        '0_2' => [1, 'Kurang Sekali'],
        '0_3' => [0, 'Kurang Sekali']
    ];

    // Determine the SS and Keterangan IQ based on the score total
    if ($skorTotal_apm > 36) {
        return $iqTable['>36'];
    } elseif ($skorTotal_apm >= 35 && $skorTotal_apm <= 36) {
        return $iqTable['35-36'];
    } elseif ($skorTotal_apm >= 33 && $skorTotal_apm <= 34) {
        return $iqTable['33-34'];
    } elseif ($skorTotal_apm >= 31 && $skorTotal_apm <= 32) {
        return $iqTable['31-32'];
    } elseif ($skorTotal_apm >= 29 && $skorTotal_apm <= 30) {
        return $iqTable['29-30'];
    } elseif ($skorTotal_apm >= 26 && $skorTotal_apm <= 28) {
        return $iqTable['26-28'];
    } elseif ($skorTotal_apm >= 24 && $skorTotal_apm <= 25) {
        return $iqTable['24-25'];
    } elseif ($skorTotal_apm >= 22 && $skorTotal_apm <= 23) {
        return $iqTable['22-23'];
    } elseif ($skorTotal_apm >= 19 && $skorTotal_apm <= 21) {
        return $iqTable['19-21'];
    } elseif ($skorTotal_apm >= 17 && $skorTotal_apm <= 18) {
        return $iqTable['17-18'];
    } elseif ($skorTotal_apm >= 15 && $skorTotal_apm <= 16) {
        return $iqTable['15-16'];
    } elseif ($skorTotal_apm >= 13 && $skorTotal_apm <= 14) {
        return $iqTable['13-14'];
    } elseif ($skorTotal_apm >= 10 && $skorTotal_apm <= 12) {
        return $iqTable['10-12'];
    } elseif ($skorTotal_apm >= 8 && $skorTotal_apm <= 9) {
        return $iqTable['8-9'];
    } elseif ($skorTotal_apm >= 6 && $skorTotal_apm <= 7) {
        return $iqTable['6-7'];
    } elseif ($skorTotal_apm >= 4 && $skorTotal_apm <= 5) {
        return $iqTable['4-5'];
    } elseif ($skorTotal_apm >= 1 && $skorTotal_apm <= 3) {
        return $iqTable['1-3'];
    } else {
        return $iqTable['0'];
    }
}

// Example usage
// $skorTotal_apm = 31;
list($ss, $keteranganIQ) = getSSandKeteranganIQ($skorTotal_apm);
echo "Skor total : ".$skorTotal_apm;echo "<br>";
echo "The SS is: " . $ss . " and the Keterangan IQ is: " . $keteranganIQ;

?>
