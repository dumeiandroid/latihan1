const questionsData = [
  {
    "question": "4, 8, 12, 16, 20, 24, ... ...",
    "options": {
      "A": "28 32",
      "B": "32 28",
      "C": "30 24",
      "D": "26 20",
      "E": "34 16"
    },
    "answer": "A",
    "explanation": "Deret aritmetika dengan beda 4."
  },
  {
    "question": "17, 22, 27, 32, 37, 42, ... ...",
    "options": {
      "A": "47 52",
      "B": "45 37",
      "C": "50 32",
      "D": "48 17",
      "E": "42 22"
    },
    "answer": "A",
    "explanation": "Deret aritmetika dengan beda 5."
  },
  {
    "question": "1, 2, 4, 8, 16, 32, ... ...",
    "options": {
      "A": "64 128",
      "B": "70 32",
      "C": "60 16",
      "D": "50 8",
      "E": "56 4"
    },
    "answer": "A",
    "explanation": "Deret geometri dengan rasio 2."
  },
  {
    "question": "21, 19, 17, 15, 13, 11, ... ...",
    "options": {
      "A": "9 10",
      "B": "10 11",
      "C": "8 15",
      "D": "7 19",
      "E": "11 21"
    },
    "answer": "A",
    "explanation": "Deret aritmetika dengan beda -2."
  },
  {
    "question": "12, 1, 9, 1, 6, 1, ... ...",
    "options": {
      "A": "3 5",
      "B": "4 12",
      "C": "5 1",
      "D": "7 6",
      "E": "2 9"
    },
    "answer": "A",
    "explanation": "Deret bergantian: 12, 9, 6, 3 (mengurangi 3) dan 1 berulang."
  },
  {
    "question": "10, 10, 7, 7, 4, 4, ... ...",
    "options": {
      "A": "1 0",
      "B": "0 4",
      "C": "2 10",
      "D": "3 7",
      "E": "5 10"
    },
    "answer": "A",
    "explanation": "Setiap dua angka sama, kemudian menurun 3."
  },
  {
    "question": "16, 8, 4, 2, 1, 1/2, ... ...",
    "options": {
      "A": "1/4 1/3",
      "B": "1/3 8",
      "C": "1/2 4",
      "D": "1/5 2",
      "E": "1/6 1"
    },
    "answer": "A",
    "explanation": "Deret geometri dengan rasio 1/2."
  },
  {
    "question": "1/3, 1, 3, 9, 27, 81, ... ...",
    "options": {
      "A": "243 720",
      "B": "240 27",
      "C": "250 9",
      "D": "230 3",
      "E": "200 1"
    },
    "answer": "A",
    "explanation": "Deret geometri dengan rasio 3."
  },
  {
    "question": "65, 58, 51, 44, 37, 30, ... ...",
    "options": {
      "A": "23 28",
      "B": "28 65",
      "C": "25 58",
      "D": "20 51",
      "E": "22 37"
    },
    "answer": "A",
    "explanation": "Deret aritmetika dengan beda -7."
  },
  {
    "question": "10, 12, 11, 13, 12, 14, ... ...",
    "options": {
      "A": "13 14",
      "B": "15 10",
      "C": "14 12",
      "D": "12 11",
      "E": "10 9"
    },
    "answer": "A",
    "explanation": "Deret bergantian: naik 2, turun 1."
  },
  {
    "question": "5, 6, 8, 11, 15, 20, ... ...",
    "options": {
      "A": "26 30",
      "B": "24 15",
      "C": "22 20",
      "D": "30 11",
      "E": "20 5"
    },
    "answer": "A",
    "explanation": "Deret dengan penambahan bertingkat: +1, +2, +3, +4, +5."
  },
  {
    "question": "2, 5, 4, 7, 6, 9, ... ...",
    "options": {
      "A": "8 10",
      "B": "7 4",
      "C": "6 5",
      "D": "10 2",
      "E": "9 8"
    },
    "answer": "A",
    "explanation": "Deret bergantian: +3, -1."
  },
  {
    "question": "31, 30, 28, 25, 21, 16, ... ...",
    "options": {
      "A": "10 12",
      "B": "11 28",
      "C": "12 21",
      "D": "9 19",
      "E": "8 25"
    },
    "answer": "A",
    "explanation": "Deret dengan penurunan bertingkat: -1, -2, -3, -4, -5."
  },
  {
    "question": "7, 6, 12, 11, 17, 18, ... ...",
    "options": {
      "A": "24 25",
      "B": "25 11",
      "C": "23 17",
      "D": "22 12",
      "E": "21 18"
    },
    "answer": "A",
    "explanation": "Deret bergantian: -1, +6."
  },
  {
    "question": "14, 16, 11, 13, 8, 10, ... ...",
    "options": {
      "A": "5 6",
      "B": "4 14",
      "C": "6 8",
      "D": "7 11",
      "E": "3 10"
    },
    "answer": "A",
    "explanation": "Deret bergantian: +2, -5."
  },
  {
    "question": "12, 18, 30, 36, 48, 54, ... ...",
    "options": {
      "A": "66 60",
      "B": "60 36",
      "C": "58 54",
      "D": "70 48",
      "E": "65 12"
    },
    "answer": "A",
    "explanation": "Deret dengan penambahan 6, 12."
  },
  {
    "question": "19, 15, 18, 14, 17, 13, ... ...",
    "options": {
      "A": "18 16",
      "B": "16 19",
      "C": "19 14",
      "D": "15 18",
      "E": "20 17"
    },
    "answer": "A",
    "explanation": "Deret bergantian: -4, +3."
  },
  {
    "question": "4, 8, 11, 22, 25, 50, ... ...",
    "options": {
      "A": "55 53",
      "B": "52 25",
      "C": "51 22",
      "D": "53 4",
      "E": "54 11"
    },
    "answer": "A",
    "explanation": "Deret bergantian: x2, +3."
  },
  {
    "question": "45, 15, 18, 6, 9, 3, ... ...",
    "options": {
      "A": "0 1",
      "B": "1 3",
      "C": "2 6",
      "D": "3 9",
      "E": "4 18"
    },
    "answer": "A",
    "explanation": "Setiap angka dibagi 3."
  },
  {
    "question": "22, 28, 14, 20, 10, 16, ... ...",
    "options": {
      "A": "8 10",
      "B": "6 22",
      "C": "10 16",
      "D": "12 28",
      "E": "5 14"
    },
    "answer": "A",
    "explanation": "Deret bergantian: +6, -14."
  },
  {
    "question": "4, 8, 6, 12, 10, 20, ... ...",
    "options": {
      "A": "18 16",
      "B": "16 4",
      "C": "14 12",
      "D": "12 10",
      "E": "20 8"
    },
    "answer": "A",
    "explanation": "Deret bergantian: x2, -2."
  },
  {
    "question": "3, 5, 7, 4, 6, 8, ... ...",
    "options": {
      "A": "10 9",
      "B": "11 3",
      "C": "9 5",
      "D": "12 7",
      "E": "8 6"
    },
    "answer": "A",
    "explanation": "Deret bergantian: +2, -3."
  },
  {
    "question": "1, 2, 6, 24, 120, 720, ... ...",
    "options": {
      "A": "5040 4030",
      "B": "4030 720",
      "C": "6000 120",
      "D": "5000 6",
      "E": "4000 2"
    },
    "answer": "A",
    "explanation": "Deret faktorial: n!."
  },
  {
    "question": "1, 9, 2, 8, 3, 7, ... ...",
    "options": {
      "A": "4 5",
      "B": "5 3",
      "C": "6 2",
      "D": "3 9",
      "E": "2 1"
    },
    "answer": "A",
    "explanation": "Deret bergantian: naik 1, turun 1."
  },
  {
    "question": "37, 44, 27, 34, 17, 24, ... ...",
    "options": {
      "A": "11 12",
      "B": "12 37",
      "C": "10 27",
      "D": "14 34",
      "E": "9 44"
    },
    "answer": "A",
    "explanation": "Deret bergantian: +7, -17."
  },
  {
    "question": "8, 3, 4, 6, 2, 12, ... ...",
    "options": {
      "A": "5 7",
      "B": "6 8",
      "C": "7 12",
      "D": "8 4",
      "E": "4 6"
    },
    "answer": "A",
    "explanation": "Deret bergantian: -5, +1, -2, +10."
  },
  {
    "question": "276, 272, 68, 64, 16, 12, ... ...",
    "options": {
      "A": "3 2",
      "B": "2 12",
      "C": "0 16",
      "D": "1 64",
      "E": "4 68"
    },
    "answer": "A",
    "explanation": "Penurunan bertingkat: -4, -204, -4, -48."
  },
  {
    "question": "96, 7, 24, 14, 6, 28, ... ...",
    "options": {
      "A": "3 5",
      "B": "4 14",
      "C": "5 6",
      "D": "6 24",
      "E": "2 28"
    },
    "answer": "A",
    "explanation": "Deret bergantian: /14, +17, -10."
  },
  {
    "question": "180, 171, 153, 128, 90, 45, ... ...",
    "options": {
      "A": "22 20",
      "B": "20 180",
      "C": "24 171",
      "D": "21 153",
      "E": "25 128"
    },
    "answer": "A",
    "explanation": "Deret dengan penurunan bertingkat."
  },
  {
    "question": "24, 16, 12, 48/5, 8, 48/7, ... ...",
    "options": {
      "A": "6 5",
      "B": "5 8",
      "C": "7 12",
      "D": "8 16",
      "E": "4 24"
    },
    "answer": "A",
    "explanation": "Deret dengan pembagian dan penurunan."
  }
];