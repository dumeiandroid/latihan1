<?php
// Misalkan score total adalah sebagai berikut (ubah sesuai kebutuhan)
$score_total_wwq = 150;

// Menentukan kategori berdasarkan nilai score total
if ($score_total_wwq < 120) {
    $kategori = "Normal";
} elseif ($score_total_wwq <= 180) {
    $kategori = "Kecenderungan Gangguan";
} else {
    $kategori = "Gangguan";
}

// Tampilkan hasil kategori
echo "Score Total: " . $score_total_wwq . "\n";echo "<br>";
echo "Kategori: " . $kategori . "\n";
?>
