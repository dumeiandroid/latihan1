
        // Global flag to prevent multiple automatic popups
        let whatsappPopupAutoShown = false;

        // Function to show the WhatsApp popup
        function showWhatsappPopup() {
            const whatsappPopup = document.getElementById('whatsappPopup');
            if (whatsappPopup && !whatsappPopup.classList.contains('show') && !whatsappPopupAutoShown) {
                whatsappPopup.classList.add('show');
                whatsappPopupAutoShown = true; // Set flag to true after showing
            }
        }

        document.addEventListener('DOMContentLoaded', () => {
            // Trigger WhatsApp popup after 5 seconds
            setTimeout(showWhatsappPopup, 15000); // 5000 milliseconds = 5 seconds

            // --- Fungsionalitas Pop-up WhatsApp (manual trigger dan close) ---
            const whatsappFloatButton = document.querySelector('.whatsapp-float');
            const whatsappPopup = document.getElementById('whatsappPopup');
            const closeWhatsappPopup = document.getElementById('closeWhatsappPopup');

            if (whatsappFloatButton && whatsappPopup && closeWhatsappPopup) {
                whatsappFloatButton.addEventListener('click', function(e) {
                    e.preventDefault(); // Mencegah perilaku tautan default
                    whatsappPopup.classList.toggle('show'); // Mengubah visibilitas
                    whatsappPopupAutoShown = true; // Mengatur flag agar tidak muncul otomatis lagi jika ditutup manual lalu dibuka lagi
                });

                closeWhatsappPopup.addEventListener('click', function() {
                    whatsappPopup.classList.remove('show');
                });

                // Tutup pop-up saat mengklik di luar area pop-up
                document.addEventListener('click', function(e) {
                    // Periksa apakah klik berada di luar pop-up dan juga bukan pada tombol float itu sendiri
                    if (!whatsappPopup.contains(e.target) && !whatsappFloatButton.contains(e.target)) {
                        whatsappPopup.classList.remove('show');
                    }
                });

                // Mencegah pop-up tertutup saat mengklik di dalamnya
                whatsappPopup.addEventListener('click', function(e) {
                    e.stopPropagation();
                });
            }
        });
    