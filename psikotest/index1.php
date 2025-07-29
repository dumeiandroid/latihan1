<?php
ini_set('display_errors', 1); // Aktifkan tampilan error
ini_set('display_startup_errors', 1); // Aktifkan tampilan error saat startup
error_reporting(E_ALL); // Laporkan semua jenis error

$currentDir = __DIR__; // Dapatkan direktori tempat skrip PHP ini berada

// Dapatkan semua file .txt di direktori saat ini
$txtFiles = glob($currentDir . '/*.txt');

if (empty($txtFiles)) {
    echo "Tidak ada file .txt yang ditemukan di folder ini.\n";
} else {
    echo "Memproses file .txt...\n";
    foreach ($txtFiles as $filePath) {
        $fileName = basename($filePath);
        $newFileName = pathinfo($fileName, PATHINFO_FILENAME) . '.js';
        $newFilePath = $currentDir . '/' . $newFileName;

        echo "Memproses: " . $fileName . "\n";

        // Baca isi file .txt
        $content = file_get_contents($filePath);

        if ($content === false) {
            echo "Gagal membaca file: " . $fileName . "\n";
            continue;
        }

        // Tambahkan 'const questionsData = ' di awal dan '];' di akhir
        // Perbaikan: Tambahkan titik koma di akhir variabel JavaScript statement
        $newContent = "const questionsData = " . $content . ";"; 

        // Tulis konten baru ke file .js
        $writeResult = file_put_contents($newFilePath, $newContent);

        if ($writeResult === false) {
            echo "Gagal menulis ke file baru: " . $newFileName . "\n";
            continue;
        }

        // Hapus file .txt lama
        $deleteResult = unlink($filePath);

        if ($deleteResult) {
            echo "Berhasil memproses '" . $fileName . "' dan menyimpannya sebagai '" . $newFileName . "'. File lama dihapus.\n";
        } else {
            echo "Berhasil menulis ke '" . $newFileName . "', tetapi gagal menghapus file asli '" . $fileName . "'.\n";
        }
    }
    echo "Selesai memproses semua file .txt.\n";
}

?>