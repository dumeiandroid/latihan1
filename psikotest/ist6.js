const questionsData = [
    {
        "question": " 6, 9, 12, 15, 18, 21, 24, ?",
        "options": {
            "A": "27",
            "B": "30"
        },
        "answer": "A",
        "explanation": "Selisihnya adalah 3, jadi 24 + 3 = 27."
    },
    {
        "question": " 15, 16, 18, 19, 21, 22, 24, ?",
        "options": {
            "A": "25",
            "B": "26"
        },
        "answer": "A",
        "explanation": "Pola: +1, +2, +1, +2, +1, +2, jadi 24 + 2 = 26."
    },
    {
        "question": " 19, 18, 22, 21, 25, 24, 28, ?",
        "options": {
            "A": "27",
            "B": "32"
        },
        "answer": "A",
        "explanation": "Pola: -1, +4, -1, +4, -1, +4, jadi 28 - 1 = 27."
    },
    {
        "question": " 16, 12, 17, 13, 18, 14, 19, ?",
        "options": {
            "A": "15",
            "B": "20"
        },
        "answer": "A",
        "explanation": "Pola: -4, +5, -4, +5, -4, +5, jadi 19 - 4 = 15."
    },
    {
        "question": " 2, 4, 8, 10, 20, 22, 44, ?",
        "options": {
            "A": "46",
            "B": "48"
        },
        "answer": "A",
        "explanation": "Pola: x2, +2, x2, +2, x2, +2, jadi 44 + 2 = 46."
    },
    {
        "question": " 15, 13, 16, 12, 17, 11, 18, ?",
        "options": {
            "A": "10",
            "B": "19"
        },
        "answer": "A",
        "explanation": "Pola: -2, +3, -4, +5, -6, +7, jadi 18 + 1 = 19."
    },
    {
        "question": " 25, 22, 11, 33, 30, 15, 45, ?",
        "options": {
            "A": "12",
            "B": "60"
        },
        "answer": "A",
        "explanation": "Pola: -3, -11, +22, -3, -15, +30, jadi 45 + 15 = 60."
    },
    {
        "question": " 49, 51, 54, 27, 9, 11, 14, ?",
        "options": {
            "A": "12",
            "B": "10"
        },
        "answer": "A",
        "explanation": "Pola: +2, +3, -27, +2, +3, jadi 14 + 2 = 16."
    },
    {
        "question": " 2, 3, 1, 3, 4, 2, 4, ?",
        "options": {
            "A": "5",
            "B": "6"
        },
        "answer": "A",
        "explanation": "Pola: +1, -2, +2, +1, -2, +2, jadi 4 + 1 = 5."
    },
    {
        "question": " 19, 17, 20, 16, 21, 15, 22, ?",
        "options": {
            "A": "14",
            "B": "23"
        },
        "answer": "A",
        "explanation": "Pola: -2, +3, -4, +5, -6, +7, jadi 22 - 8 = 14."
    },
    {
        "question": " 94, 92, 46, 44, 22, 20, 10, ?",
        "options": {
            "A": "8",
            "B": "9"
        },
        "answer": "A",
        "explanation": "Pola: -2, -46, -2, -22, -2, -10, jadi 10 - 2 = 8."
    },
    {
        "question": " 5, 8, 9, 8, 11, 12, 11, ?",
        "options": {
            "A": "14",
            "B": "10"
        },
        "answer": "A",
        "explanation": "Pola: +3, +1, -1, +3, +1, -1, jadi 11 + 3 = 14."
    },
    {
        "question": " 12, 15, 19, 23, 28, 33, 39, ?",
        "options": {
            "A": "50",
            "B": "42"
        },
        "answer": "A",
        "explanation": "Pola: +3, +4, +4, +5, +5, +6, jadi 39 + 3 = 42."
    },
    {
        "question": " 7, 5, 10, 7, 21, 17, 68, ?",
        "options": {
            "A": "72",
            "B": "70"
        },
        "answer": "A",
        "explanation": "Pola: -2, +5, -3, +14, -4, +51, jadi 68 + 2 = 70."
    },
    {
        "question": " 11, 15, 18, 9, 13, 16, 8, ?",
        "options": {
            "A": "10",
            "B": "12"
        },
        "answer": "A",
        "explanation": "Pola: +4, +3, -9, +4, +3, -8, jadi 8 + 2 = 10."
    },
    {
        "question": " 3, 8, 15, 24, 35, 48, 63, ?",
        "options": {
            "A": "80",
            "B": "78"
        },
        "answer": "A",
        "explanation": "Pola: +5, +7, +9, +11, +13, +15, jadi 63 + 17 = 80."
    },
    {
        "question": " 4, 5, 7, 4, 8, 13, 7, ?",
        "options": {
            "A": "10",
            "B": "12"
        },
        "answer": "A",
        "explanation": "Pola: +1, +2, -3, +4, +5, -6, jadi 7 + 5 = 12."
    },
    {
        "question": " 8, 5, 15, 18, 6, 3, 9, ?",
        "options": {
            "A": "12",
            "B": "14"
        },
        "answer": "A",
        "explanation": "Pola: -3, +10, +3, -12, +6, jadi 9 + 3 = 12."
    },
    {
        "question": " 15, 6, 18, 10, 30, 23, 69, ?",
        "options": {
            "A": "12",
            "B": "70"
        },
        "answer": "A",
        "explanation": "Pola: -9, +12, -8, +20, -7, +46, jadi 69 + 1 = 70."
    },
    {
        "question": " 5, 35, 28, 4, 11, 77, 70, ?",
        "options": {
            "A": "80",
            "B": "90"
        },
        "answer": "A",
        "explanation": "Pola: +30, -7, -24, +7, +66, -7, jadi 70 + 10 = 80."
    }
];