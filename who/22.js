const questionsData = [
    {
        "question": "1. Saya sering tertawa atau mengekspresikan kegembiraan tanpa alasan jelas.",
        "options": {
            "A": "Tidak Pernah",
            "B": "Jarang",
            "C": "Kadang-kadang",
            "D": "Sering",
            "E": "Sangat Sering"
        }
    },
    {
        "question": "2. Saya merasa bebas untuk menunjukkan emosi saya, termasuk menangis atau marah.",
        "options": {
            "A": "Tidak Pernah",
            "B": "Jarang",
            "C": "Kadang-kadang",
            "D": "Sering",
            "E": "Sangat Sering"
        }
    },
    {
        "question": "3. Saya menikmati bermain atau melakukan hal-hal yang menyenangkan hanya karena saya menyukainya.",
        "options": {
            "A": "Tidak Pernah",
            "B": "Jarang",
            "C": "Kadang-kadang",
            "D": "Sering",
            "E": "Sangat Sering"
        }
    },
    {
        "question": "4. Saya merasa nyaman menjadi diri sendiri, tanpa peduli apa kata orang.",
        "options": {
            "A": "Tidak Pernah",
            "B": "Jarang",
            "C": "Kadang-kadang",
            "D": "Sering",
            "E": "Sangat Sering"
        }
    },
    {
        "question": "5. Saya sering merasa penasaran dan ingin mencoba hal-hal baru.",
        "options": {
            "A": "Tidak Pernah",
            "B": "Jarang",
            "C": "Kadang-kadang",
            "D": "Sering",
            "E": "Sangat Sering"
        }
    },
    {
        "question": "6. Saya sering menyesuaikan diri agar orang lain tidak kecewa.",
        "options": {
            "A": "Tidak Pernah",
            "B": "Jarang",
            "C": "Kadang-kadang",
            "D": "Sering",
            "E": "Sangat Sering"
        }
    },
    {
        "question": "7. Saya menghindari konflik bahkan jika saya merasa tidak setuju.",
        "options": {
            "A": "Tidak Pernah",
            "B": "Jarang",
            "C": "Kadang-kadang",
            "D": "Sering",
            "E": "Sangat Sering"
        }
    },
    {
        "question": "8. Saya cenderung meminta persetujuan sebelum membuat keputusan.",
        "options": {
            "A": "Tidak Pernah",
            "B": "Jarang",
            "C": "Kadang-kadang",
            "D": "Sering",
            "E": "Sangat Sering"
        }
    },
    {
        "question": "9. Saya merasa tidak nyaman jika ada orang yang marah kepada saya.",
        "options": {
            "A": "Tidak Pernah",
            "B": "Jarang",
            "C": "Kadang-kadang",
            "D": "Sering",
            "E": "Sangat Sering"
        }
    },
    {
        "question": "10. Saya suka jika ada aturan yang jelas agar saya tahu apa yang boleh dan tidak boleh dilakukan.",
        "options": {
            "A": "Tidak Pernah",
            "B": "Jarang",
            "C": "Kadang-kadang",
            "D": "Sering",
            "E": "Sangat Sering"
        }
    },
    {
        "question": "11. Saya merasa terganggu ketika orang memberi tahu saya apa yang harus saya lakukan.",
        "options": {
            "A": "Tidak Pernah",
            "B": "Jarang",
            "C": "Kadang-kadang",
            "D": "Sering",
            "E": "Sangat Sering"
        }
    },
    {
        "question": "12. Saya sering mempertanyakan aturan yang menurut saya tidak masuk akal.",
        "options": {
            "A": "Tidak Pernah",
            "B": "Jarang",
            "C": "Kadang-kadang",
            "D": "Sering",
            "E": "Sangat Sering"
        }
    },
    {
        "question": "13. Saya merasa puas saat saya bisa “melawan arus”.",
        "options": {
            "A": "Tidak Pernah",
            "B": "Jarang",
            "C": "Kadang-kadang",
            "D": "Sering",
            "E": "Sangat Sering"
        }
    },
    {
        "question": "14. Saya sengaja tidak mematuhi aturan jika saya merasa itu mengekang kebebasan saya.",
        "options": {
            "A": "Tidak Pernah",
            "B": "Jarang",
            "C": "Kadang-kadang",
            "D": "Sering",
            "E": "Sangat Sering"
        }
    },
    {
        "question": "15. Saya merasa senang jika bisa menunjukkan bahwa saya tidak seperti orang lain.",
        "options": {
            "A": "Tidak Pernah",
            "B": "Jarang",
            "C": "Kadang-kadang",
            "D": "Sering",
            "E": "Sangat Sering"
        }
    },
    {
        "question": "16. Saya sering bisa “merasakan” sesuatu yang benar tanpa tahu alasannya.",
        "options": {
            "A": "Tidak Pernah",
            "B": "Jarang",
            "C": "Kadang-kadang",
            "D": "Sering",
            "E": "Sangat Sering"
        }
    },
    {
        "question": "17. Saya suka mencari tahu bagaimana sesuatu bekerja sejak kecil.",
        "options": {
            "A": "Tidak Pernah",
            "B": "Jarang",
            "C": "Kadang-kadang",
            "D": "Sering",
            "E": "Sangat Sering"
        }
    },
    {
        "question": "18. Saya merasa bisa memahami emosi orang lain meskipun mereka tidak mengatakannya.",
        "options": {
            "A": "Tidak Pernah",
            "B": "Jarang",
            "C": "Kadang-kadang",
            "D": "Sering",
            "E": "Sangat Sering"
        }
    },
    {
        "question": "19. Saya sering berpikir kreatif atau menemukan solusi unik untuk masalah.",
        "options": {
            "A": "Tidak Pernah",
            "B": "Jarang",
            "C": "Kadang-kadang",
            "D": "Sering",
            "E": "Sangat Sering"
        }
    },
    {
        "question": "20. Orang sering bilang saya terlihat 'terlalu dewasa untuk usia saya'.",
        "options": {
            "A": "Tidak Pernah",
            "B": "Jarang",
            "C": "Kadang-kadang",
            "D": "Sering",
            "E": "Sangat Sering"
        }
    }
];