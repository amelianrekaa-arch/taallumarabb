export type Vocabulary = {
  id: string;
  arabic_word: string;
  transliteration: string;
  meaning: string;
  image_url: string;
  category: string;
  example_sentence?: string;
};

export const sampleVocabulary: Vocabulary[] = [
  { id: "1", arabic_word: "كِتَابٌ", transliteration: "kitābun", meaning: "Buku", image_url: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=700", category: "Sekolah", example_sentence: "هٰذَا كِتَابٌ" },
  { id: "2", arabic_word: "قَلَمٌ", transliteration: "qalamun", meaning: "Pena", image_url: "https://images.unsplash.com/photo-1455390582262-044c65267c8d?w=700", category: "Sekolah", example_sentence: "هٰذَا قَلَمٌ" },
  { id: "3", arabic_word: "مَدْرَسَةٌ", transliteration: "madrasatun", meaning: "Sekolah", image_url: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=700", category: "Sekolah" },
  { id: "4", arabic_word: "بَيْتٌ", transliteration: "baitun", meaning: "Rumah", image_url: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=700", category: "Rumah" },
  { id: "5", arabic_word: "قِطَّةٌ", transliteration: "qiṭṭatun", meaning: "Kucing", image_url: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=700", category: "Hewan" },
  { id: "6", arabic_word: "تُفَّاحَةٌ", transliteration: "tuffāḥatun", meaning: "Apel", image_url: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=700", category: "Makanan" },
  { id: "7", arabic_word: "مَاءٌ", transliteration: "mā'un", meaning: "Air", image_url: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=700", category: "Makanan" },
  { id: "8", arabic_word: "كُرْسِيٌّ", transliteration: "kursiyyun", meaning: "Kursi", image_url: "https://images.unsplash.com/photo-1503602642458-232111445657?w=700", category: "Rumah" }
];

export const sentenceExercises = [
  { id: "ism-1", type: "ismiyah" as const, title: "Buku itu baru", instruction: "Susun kata menjadi jumlah ismiyah yang benar.", words: ["جَدِيدٌ", "الْكِتَابُ"], answer: ["الْكِتَابُ", "جَدِيدٌ"], translation: "Buku itu baru.", explanation: "الْكِتَابُ adalah mubtada' dan جَدِيدٌ adalah khabar." },
  { id: "ism-2", type: "ismiyah" as const, title: "Rumah itu besar", instruction: "Susun kata menjadi jumlah ismiyah yang benar.", words: ["كَبِيرٌ", "الْبَيْتُ"], answer: ["الْبَيْتُ", "كَبِيرٌ"], translation: "Rumah itu besar.", explanation: "الْبَيْتُ menjadi mubtada' dan كَبِيرٌ menjadi khabar." },
  { id: "fil-1", type: "filiyah" as const, title: "Siswa membaca buku", instruction: "Susun kata menjadi jumlah fi'liyah yang benar.", words: ["الْكِتَابَ", "يَقْرَأُ", "الطَّالِبُ"], answer: ["يَقْرَأُ", "الطَّالِبُ", "الْكِتَابَ"], translation: "Siswa membaca buku.", explanation: "يَقْرَأُ adalah fi'il, الطَّالِبُ adalah fa'il, dan الْكِتَابَ adalah maf'ul bih." },
  { id: "fil-2", type: "filiyah" as const, title: "Anak bermain", instruction: "Susun kata menjadi jumlah fi'liyah yang benar.", words: ["اللَّعِبَ", "يَلْعَبُ", "الْوَلَدُ"], answer: ["يَلْعَبُ", "الْوَلَدُ"], translation: "Anak laki-laki bermain.", explanation: "يَلْعَبُ adalah fi'il dan الْوَلَدُ adalah fa'il. اللَّعِبَ merupakan kata pengalih." }
];

export const sampleQuestions = [
  { id: "q1", question: "Apa arti كِتَابٌ?", options: ["Buku", "Pena", "Rumah", "Kursi"], answer: "Buku", explanation: "كِتَابٌ berarti buku." },
  { id: "q2", question: "Bahasa Arab dari 'rumah' adalah ...", options: ["مَدْرَسَةٌ", "بَيْتٌ", "قِطَّةٌ", "مَاءٌ"], answer: "بَيْتٌ", explanation: "بَيْتٌ berarti rumah." },
  { id: "q3", question: "Kata قَلَمٌ berarti ...", options: ["Apel", "Air", "Pena", "Kucing"], answer: "Pena", explanation: "قَلَمٌ berarti pena." },
  { id: "q4", question: "Manakah contoh jumlah ismiyah?", options: ["يَقْرَأُ الطَّالِبُ", "الْكِتَابُ جَدِيدٌ", "ذَهَبَ عَلِيٌّ", "يَكْتُبُ"], answer: "الْكِتَابُ جَدِيدٌ", explanation: "Jumlah ismiyah diawali isim, seperti الْكِتَابُ جَدِيدٌ." }
];