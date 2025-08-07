<?php

function getSSandKeteranganIQ_tkd3($skorTotal_tkd3) {
    // Define the SS and Keterangan IQ table
    $iqTable = [
        44 => [20, 'Baik Sekali'],
        43 => [19, 'Baik Sekali'],
        42 => [18, 'Baik Sekali'],
        41 => [17, 'Baik Sekali'],
        '39-40' => [16, 'Baik'],
        38 => [15, 'Baik'],
        '36-37' => [14, 'Baik'],
        '34-35' => [13, 'Baik'],
        '32-33' => [12, 'Cukup'],
        '30-31' => [11, 'Cukup'],
        '28-29' => [10, 'Cukup'],
        '26-27' => [9, 'Cukup'],
        '24-25' => [8, 'Kurang'],
        23 => [7, 'Kurang'],
        '21-22' => [6, 'Kurang'],
        '19-20' => [5, 'Kurang'],
        '17-18' => [4, 'Kurang sekali'],
        '15-16' => [3, 'Kurang sekali'],
        '13-14' => [2, 'Kurang sekali'],
        '11-12' => [1, 'Kurang sekali'],
        '0-10' => [0, 'Kurang sekali'],
    ];

    // Determine the SS and Keterangan IQ based on the score total
    if (isset($iqTable[$skorTotal_tkd3])) {
        return $iqTable[$skorTotal_tkd3];
    } else {
        foreach ($iqTable as $range => $values) {
            if (strpos($range, '-') !== false) {
                list($min, $max) = explode('-', $range);
                if ($skorTotal_tkd3 >= $min && $skorTotal_tkd3 <= $max) {
                    return $values;
                }
            }
        }
    }
    return "Invalid score total";
}

// Example usage
// $skorTotal_tkd3 = 36;
list($ss, $keteranganIQ) = getSSandKeteranganIQ_tkd3($skorTotal_tkd3);
echo "The SS is: " . $ss . " and the Keterangan IQ is: " . $keteranganIQ;

?>
