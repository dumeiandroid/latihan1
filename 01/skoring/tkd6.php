<?php

function getSSandKeteranganIQ_tkd6($skorTotal_tkd6) {
    // Define the SS and Keterangan IQ table
    $iqTable = [
        30 => [20, 'Baik Sekali'],
        29 => [19, 'Baik Sekali'],
        '27-28' => [18, 'Baik Sekali'],
        '25-26' => [17, 'Baik Sekali'],
        24 => [16, 'Baik'],
        '22-23' => [15, 'Baik'],
        '20-21' => [14, 'Baik'],
        '18-19' => [13, 'Baik'],
        17 => [12, 'Cukup'],
        '15-16' => [11, 'Cukup'],
        '13-14' => [10, 'Cukup'],
        12 => [9, 'Cukup'],
        '10-11' => [8, 'Kurang'],
        '8-9' => [7, 'Kurang'],
        '6-7' => [6, 'Kurang'],
        5 => [5, 'Kurang'],
        '3-4' => [4, 'Kurang sekali'],
        '1-2' => [3, 'Kurang sekali'],
        0 => [2, 'Kurang sekali'],
        '0_1' => [1, 'Kurang sekali'],
        '0_0' => [0, 'Kurang sekali']
    ];

    // Determine the SS and Keterangan IQ based on the score total
    if (isset($iqTable[$skorTotal_tkd6])) {
        return $iqTable[$skorTotal_tkd6];
    } else {
        foreach ($iqTable as $range => $values) {
            if (strpos($range, '-') !== false) {
                list($min, $max) = explode('-', $range);
                if ($skorTotal_tkd6 >= $min && $skorTotal_tkd6 <= $max) {
                    return $values;
                }
            }
        }
    }
    return "Invalid score total";
}

// Example usage
// $skorTotal_tkd6 = 8;
list($ss, $keteranganIQ) = getSSandKeteranganIQ_tkd6($skorTotal_tkd6);
echo "The SS is: " . $ss . " and the Keterangan IQ is: " . $keteranganIQ;

?>
