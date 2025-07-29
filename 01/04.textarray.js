// Data array yang akan kita tampilkan
const daftarProduk = [
    { id: 101, nama: "Keyboard Gaming", harga: 750000, stok: 15, kategori: "Aksesoris" },
    { id: 102, nama: "Mouse Wireless", harga: 250000, stok: 30, kategori: "Aksesoris" },
    { id: 103, nama: "Monitor Ultrawide", harga: 4500000, stok: 8, kategori: "Komponen" },
    { id: 104, nama: "RAM 16GB DDR4", harga: 800000, stok: 20, kategori: "Komponen" },
    { id: 105, nama: "SSD 1TB NVMe", harga: 1200000, stok: 12, kategori: "Penyimpanan" }
];

// Dapatkan elemen HTML tempat kita ingin menampilkan output
const outputArrayElement = document.getElementById("outputArray");

// Pastikan elemen ditemukan sebelum memanipulasinya
if (outputArrayElement) {
    const formattedArrayString = JSON.stringify(daftarProduk, null, 2);
    console.log(formattedArrayString);
    outputArrayElement.textContent = formattedArrayString;
} else {
    console.error("Elemen dengan ID 'outputArray' tidak ditemukan di HTML.");
}