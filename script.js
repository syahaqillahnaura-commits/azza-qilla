// Data Soal Kuis
const quizData = {
    "SD": {
        "MATEMATIKA": [
            {q: "25 + 17 = ....", options: ["40", "41", "42", "43", "44"], a: "C"},
            {q: "50 - 28 = ....", options: ["20", "21", "22", "23", "24"], a: "C"},
            {q: "6 × 7 = ....", options: ["40", "41", "42", "43", "44"], a: "C"},
            {q: "64 ÷ 8 = ....", options: ["6", "7", "8", "9", "10"], a: "C"},
            {q: "Bilangan setelah 99 adalah ....", options: ["100", "101", "98", "97", "102"], a: "A"},
            {q: "45 + 35 = ....", options: ["70", "75", "80", "85", "90"], a: "C"},
            {q: "90 - 45 = ....", options: ["40", "45", "50", "55", "60"], a: "B"},
            {q: "9 × 5 = ....", options: ["40", "45", "50", "55", "60"], a: "B"},
            {q: "72 ÷ 9 = ....", options: ["6", "7", "8", "9", "10"], a: "C"},
            {q: "100 - 65 = ....", options: ["30", "35", "40", "45", "50"], a: "B"},
            {q: "10 lusin sama dengan ....", options: ["100", "110", "120", "130", "140"], a: "C"},
            {q: "Setengah dari 50 adalah ....", options: ["20", "25", "30", "35", "40"], a: "B"},
            {q: "3 x 12 = ....", options: ["24", "30", "36", "40", "42"], a: "C"},
            {q: "81 ÷ 9 = ....", options: ["7", "8", "9", "10", "11"], a: "C"},
            {q: "Bilangan genap berikutnya setelah 26 adalah ....", options: ["27", "28", "29", "30", "31"], a: "B"}
        ],
        "BAHASA INDONESIA": [
            {q: "Lawan kata besar adalah ....", options: ["Tinggi", "Panjang", "Kecil", "Luas", "Berat"], a: "C"},
            {q: "Kata yang sesuai untuk melengkapi kalimat: \"Ibu sedang ___ nasi di dapur.\"", options: ["Membaca", "Memasak", "Menulis", "Bermain", "Menyapu"], a: "B"},
            {q: "Sinonim kata \"rajin\" adalah ....", options: ["Malas", "Tekun", "Lambat", "Bosan", "Lelah"], a: "B"},
            {q: "Kata tanya untuk orang adalah ....", options: ["Apa", "Di mana", "Siapa", "Kapan", "Mengapa"], a: "C"},
            {q: "Kalimat perintah ditandai dengan tanda ....", options: [".", "?", "!", ",", ":"], a: "C"},
            {q: "Ibu pergi ke pasar untuk membeli ....", options: ["Buku", "Sepatu", "Sayur", "Pensil", "Tas"], a: "C"},
            {q: "Lawan kata cepat adalah ....", options: ["Lambat", "Cepat", "Keras", "Halus", "Lembut"], a: "A"},
            {q: "Kata baku dari \"aktip\" adalah ....", options: ["Aktip", "Aktif", "Aktiff", "Akhtif", "Aktipf"], a: "B"},
            {q: "Kalimat tanya diakhiri dengan tanda ....", options: ["!", ".", ";", "?", ","], a: "D"},
            {q: "Cerita yang berisi khayalan disebut ....", options: ["Fakta", "Biografi", "Dongeng", "Laporan", "Surat"], a: "C"},
            {q: "Anton pergi ke sekolah menggunakan ....", options: ["Sendok", "Sepeda", "Kompor", "Kasur", "Lemari"], a: "B"},
            {q: "Kata yang menyatakan kegiatan adalah ....", options: ["Buku", "Meja", "Berlari", "Pensil", "Tas"], a: "C"},
            {q: "Lawan kata panas adalah ....", options: ["Dingin", "Besar", "Terang", "Gelap", "Tinggi"], a: "A"},
            {q: "Cerita singkat disebut ....", options: ["Novel", "Drama", "Cerpen", "Puisi", "Biografi"], a: "C"},
            {q: "Kata \"indah\" termasuk ....", options: ["Kata kerja", "Kata benda", "Kata sifat", "Kata tanya", "Kata keterangan"], a: "C"}
        ],
        "BAHASA INGGRIS": [
            {q: "Cat in Bahasa Indonesia artinya ....", options: ["Anjing", "Kucing", "Burung", "Sapi", "Kambing"], a: "B"},
            {q: "Good morning artinya ....", options: ["Selamat malam", "Selamat siang", "Selamat pagi", "Selamat sore", "Selamat datang"], a: "C"},
            {q: "One artinya ....", options: ["Dua", "Tiga", "Satu", "Empat", "Lima"], a: "C"},
            {q: "I am a student artinya ....", options: ["Saya seorang guru", "Saya seorang murid", "Saya seorang dokter", "Saya seorang petani", "Saya seorang polisi"], a: "B"},
            {q: "Red artinya ....", options: ["Biru", "Kuning", "Hijau", "Merah", "Putih"], a: "D"},
            {q: "Book artinya ....", options: ["Meja", "Kursi", "Buku", "Penghapus", "Pulpen"], a: "C"},
            {q: "Father artinya ....", options: ["Ibu", "Kakak", "Ayah", "Adik", "Nenek"], a: "C"},
            {q: "Two artinya ....", options: ["Satu", "Dua", "Tiga", "Empat", "Lima"], a: "B"},
            {q: "White artinya ....", options: ["Hitam", "Abu-abu", "Putih", "Coklat", "Hijau"], a: "C"},
            {q: "Dog artinya ....", options: ["Kucing", "Anjing", "Burung", "Sapi", "Ikan"], a: "B"},
            {q: "I eat rice artinya ....", options: ["Saya makan nasi", "Saya minum air", "Saya tidur", "Saya belajar", "Saya bermain"], a: "A"},
            {q: "Blue artinya ....", options: ["Biru", "Hijau", "Merah", "Kuning", "Hitam"], a: "A"},
            {q: "Eyes artinya ....", options: ["Hidung", "Mata", "Telinga", "Mulut", "Tangan"], a: "B"},
            {q: "Teacher artinya ....", options: ["Murid", "Guru", "Dokter", "Polisi", "Petani"], a: "B"},
            {q: "Sun artinya ....", options: ["Bulan", "Bintang", "Matahari", "Awan", "Hujan"], a: "C"}
        ],
        "PPKn": [
            {q: "Lambang negara Indonesia adalah ....", options: ["Harimau", "Garuda Pancasila", "Elang", "Rajawali", "Merpati"], a: "B"},
            {q: "Sila pertama Pancasila berbunyi ....", options: ["Kemanusiaan yang adil dan beradab", "Persatuan Indonesia", "Ketuhanan Yang Maha Esa", "Keadilan sosial", "Kerakyatan yang dipimpin hikmat"], a: "C"},
            {q: "Contoh sikap disiplin adalah ....", options: ["Datang terlambat", "Membolos", "Datang tepat waktu", "Bermain saat belajar", "Ribut di kelas"], a: "C"},
            {q: "Menghormati guru merupakan sikap ....", options: ["Sombong", "Sopan", "Malas", "Nakal", "Curang"], a: "B"},
            {q: "Musyawarah bertujuan untuk ....", options: ["Bertengkar", "Menang sendiri", "Mencapai mufakat", "Memaksa", "Menghina"], a: "C"},
            {q: "Contoh hak anak adalah ....", options: ["Belajar", "Memarahi", "Membentak", "Merusak", "Berkelahi"], a: "A"},
            {q: "Contoh kewajiban siswa adalah ....", options: ["Bermain", "Mengerjakan PR", "Tidur", "Menonton TV", "Liburan"], a: "B"},
            {q: "Hidup rukun membuat ....", options: ["Pertengkaran", "Perselisihan", "Kedamaian", "Kekacauan", "Keributan"], a: "C"},
            {q: "Menghormati orang tua adalah sikap ....", options: ["Buruk", "Terpuji", "Tercela", "Jahat", "Curang"], a: "B"},
            {q: "Gotong royong berarti ....", options: ["Bekerja sendiri", "Bekerja bersama", "Bermain bersama", "Bertengkar", "Berteriak"], a: "B"},
            {q: "Mematuhi peraturan sekolah adalah contoh sikap ....", options: ["Malas", "Nakal", "Disiplin", "Sombong", "Egois"], a: "C"},
            {q: "Menyontek saat ujian adalah perbuatan ....", options: ["Baik", "Terpuji", "Terlarang", "Dianjurkan", "Dibolehkan"], a: "C"},
            {q: "Contoh sikap toleransi adalah ....", options: ["Mengejek teman", "Menghargai perbedaan", "Memukul", "Menghina", "Membully"], a: "B"},
            {q: "Cinta tanah air ditunjukkan dengan cara ....", options: ["Merusak fasilitas umum", "Membuang sampah sembarangan", "Menjaga kebersihan lingkungan", "Berkelahi", "Membolos"], a: "C"},
            {q: "Aturan dibuat agar ....", options: ["Semua bebas", "Ada keteraturan", "Semua ribut", "Tidak belajar", "Bisa melanggar"], a: "B"}
        ],
        "BIOLOGI / IPA": [
            {q: "Makhluk hidup memerlukan .... untuk bernapas", options: ["Air", "Api", "Udara", "Tanah", "Batu"], a: "C"},
            {q: "Tumbuhan membuat makanan melalui proses ....", options: ["Respirasi", "Fotosintesis", "Fermentasi", "Evaporasi", "Transpirasi"], a: "B"},
            {q: "Manusia bernapas menggunakan ....", options: ["Jantung", "Paru-paru", "Ginjal", "Hati", "Lambung"], a: "B"},
            {q: "Akar berfungsi untuk ....", options: ["Tempat buah", "Menarik air dari tanah", "Mengangkut makanan", "Menghasilkan bunga", "Menyerap cahaya"], a: "B"},
            {q: "Hewan pemakan tumbuhan disebut ....", options: ["Karnivora", "Omnivora", "Herbivora", "Predator", "Insektivora"], a: "C"},
            {q: "Matahari adalah sumber ....", options: ["Air", "Panas dan cahaya", "Angin", "Oksigen", "Karbon"], a: "B"},
            {q: "Bagian tumbuhan tempat fotosintesis adalah ....", options: ["Akar", "Batang", "Daun", "Bunga", "Buah"], a: "C"},
            {q: "Manusia berkembang biak dengan cara ....", options: ["Bertelur", "Membelah diri", "Melahirkan", "Tunas", "Spora"], a: "C"},
            {q: "Contoh hewan ovipar adalah ....", options: ["Kucing", "Sapi", "Ayam", "Kambing", "Kelinci"], a: "C"},
            {q: "Air berubah menjadi es disebut ....", options: ["Mencair", "Menguap", "Membeku", "Menyublim", "Mengkristal"], a: "C"},
            {q: "Organ peredaran darah adalah ....", options: ["Paru-paru", "Jantung", "Otak", "Lambung", "Hati"], a: "B"},
            {q: "Contoh sumber energi adalah ....", options: ["Batu", "Tanah", "Matahari", "Es", "Kayu"], a: "C"},
            {q: "Tumbuhan berklorofil berwarna ....", options: ["Merah", "Biru", "Hijau", "Putih", "Kuning"], a: "C"},
            {q: "Hewan yang hidup di air disebut ....", options: ["Amfibi", "Reptil", "Akuatik", "Darat", "Udara"], a: "C"},
            {q: "Proses perubahan dari ulat menjadi kupu-kupu disebut ....", options: ["Fotosintesis", "Metamorfosis", "Fermentasi", "Transpirasi", "Respirasi"], a: "B"}
        ]
    },
    "SMP": {
        "MATEMATIKA": [
            {q: "$$3^2 + 4^2 = ....$$", options: ["7", "15", "25", "30", "35"], a: "C"},
            {q: "15% dari 200 adalah ....", options: ["20", "25", "30", "35", "40"], a: "C"},
            {q: "$$2/5$$ dari 50 adalah ....", options: ["15", "20", "25", "30", "35"], a: "B"},
            {q: "$$\\sqrt{144} = ....$$", options: ["10", "11", "12", "13", "14"], a: "C"},
            {q: "$$6^3 = ....$$", options: ["36", "72", "128", "216", "256"], a: "D"},
            {q: "$$(12 + 8) \\times 5 = ....$$", options: ["80", "90", "100", "110", "120"], a: "C"},
            {q: "$$3x = 18$$ , nilai $$x$$ adalah ....", options: ["4", "5", "6", "7", "8"], a: "C"},
            {q: "Sudut siku-siku besarnya ....", options: ["45°", "60°", "90°", "120°", "180°"], a: "C"},
            {q: "Keliling persegi dengan sisi 7 cm adalah ....", options: ["21 cm", "24 cm", "28 cm", "32 cm", "35 cm"], a: "C"},
            {q: "Luas persegi panjang p = 10 cm, l = 6 cm adalah ....", options: ["50", "60", "70", "80", "90"], a: "B"},
            {q: "FPB dari 12 dan 18 adalah ....", options: ["2", "3", "4", "6", "9"], a: "D"},
            {q: "KPK dari 6 dan 8 adalah ....", options: ["12", "18", "24", "36", "48"], a: "C"},
            {q: "0,75 dalam bentuk pecahan adalah ....", options: ["1/2", "2/3", "3/4", "4/5", "5/6"], a: "C"},
            {q: "Sudut tumpul besarnya ....", options: ["< 90°", "= 90°", "> 90° dan < 180°", "= 180°", "> 180°"], a: "C"},
            {q: "$$-5 + 12 = ....$$", options: ["5", "6", "7", "8", "9"], a: "C"}
        ],
        "BAHASA INDONESIA": [
            {q: "Ide pokok paragraf disebut ....", options: ["Kalimat penjelas", "Gagasan utama", "Simpulan", "Judul", "Penutup"], a: "B"},
            {q: "Cerita berdasarkan fakta disebut ....", options: ["Fiksi", "Dongeng", "Nonfiksi", "Legenda", "Mitos"], a: "C"},
            {q: "Kata baku dari “prakteK” adalah ....", options: ["Praktek", "Prakteg", "Praktik", "Prakte", "Praktiek"], a: "C"},
            {q: "Antonim jujur adalah ....", options: ["Setia", "Bohong", "Baik", "Benar", "Adil"], a: "B"},
            {q: "Kalimat efektif adalah kalimat yang ....", options: ["Panjang", "Bermakna ganda", "Jelas dan tepat", "Rumit", "Berlebihan"], a: "C"},
            {q: "Puisi lama yang berima a-a-a-a disebut ....", options: ["Gurindam", "Syair", "Pantun", "Karmina", "Puisi bebas"], a: "B"},
            {q: "Teks yang berisi langkah-langkah disebut ....", options: ["Deskripsi", "Narasi", "Prosedur", "Eksposisi", "Argumentasi"], a: "C"},
            {q: "Sinonim kata “indah” adalah ....", options: ["Cantik", "Buruk", "Gelap", "Keras", "Kasar"], a: "A"},
            {q: "Tanda baca untuk percakapan adalah ....", options: ["( )", "“ ”", ":", ";", ","], a: "B"},
            {q: "Cerita rekaan disebut ....", options: ["Fakta", "Fiksi", "Opini", "Data", "Biografi"], a: "B"},
            {q: "Kalimat tanya diakhiri dengan ....", options: ["!", ".", "?", ";", ":"], a: "C"},
            {q: "Kata hubung sebab adalah ....", options: ["Dan", "Tetapi", "Karena", "Lalu", "Atau"], a: "C"},
            {q: "Lawan kata modern adalah ....", options: ["Praktis", "Kuno", "Canggih", "Maju", "Cepat"], a: "B"},
            {q: "Surat resmi bersifat ....", options: ["Pribadi", "Santai", "Formal", "Lucu", "Bebas"], a: "C"},
            {q: "Kalimat persuasif bertujuan untuk ....", options: ["Menghibur", "Menceritakan", "Mempengaruhi", "Menggambarkan", "Menjelaskan"], a: "C"}
        ],
        "BAHASA INGGRIS": [
            {q: "She ___ a book now. (Present Continuous)", options: ["read", "reads", "is reading", "was read", "has read"], a: "C"},
            {q: "I go to school ___ bus.", options: ["in", "on", "by", "with", "at"], a: "C"},
            {q: "Anton is ___ than Budi. (Comparative)", options: ["tall", "taller", "tallest", "more tall", "most tall"], a: "B"},
            {q: "They ___ football yesterday. (Past Tense)", options: ["play", "plays", "played", "playing", "will play"], a: "C"},
            {q: "I ___ English every day. (Simple Present)", options: ["studies", "studying", "study", "studied", "to study"], a: "C"},
            {q: "What is your hobby? means ....", options: ["Siapa hobimu", "Apa hobimu", "Di mana hobimu", "Kapan hobimu", "Mengapa hobimu"], a: "B"},
            {q: "He is a ___ person. (Adjective)", options: ["kind", "kindly", "kindness", "kinder", "kindest"], a: "A"},
            {q: "We ___ finished our homework. (Present Perfect)", options: ["has", "have", "had", "having", "was"], a: "B"},
            {q: "My mother is a ___. (Noun/Profession)", options: ["teacher", "teach", "teaching", "teaches", "taught"], a: "A"},
            {q: "This is ___ apple. (Article)", options: ["a", "an", "the", "some", "any"], a: "B"},
            {q: "They ___ in Jakarta. (Simple Present)", options: ["lives", "living", "live", "lived", "will lived"], a: "C"},
            {q: "Opposite of “hot” is ....", options: ["warm", "cool", "cold", "fresh", "soft"], a: "C"},
            {q: "He can ___ the guitar. (Modal Verb)", options: ["plays", "playing", "play", "played", "to playing"], a: "C"},
            {q: "I am hungry, I want to ___. (Verb)", options: ["sleep", "eat", "cry", "talk", "study"], a: "B"},
            {q: "Good bye means ....", options: ["Selamat datang", "Selamat pagi", "Sampai jumpa", "Apa kabar", "Terima kasih"], a: "C"}
        ],
        "PPKn": [
            {q: "Nilai utama Pancasila adalah ....", options: ["Agama", "Persatuan", "Kekuasaan", "Kebebasan", "Kekacauan"], a: "B"},
            {q: "Demokrasi berarti ....", options: ["Kekuasaan rakyat", "Kekuasaan raja", "Kekuasaan militer", "Kekuasaan pejabat", "Kekuasaan asing"], a: "A"},
            {q: "Sumber hukum tertinggi di Indonesia adalah ....", options: ["UU", "Perda", "Pancasila", "Tap MPR", "Konstitusi (UUD 1945)"], a: "E"},
            {q: "Sikap menghargai perbedaan disebut ....", options: ["Egois", "Toleransi", "Diskriminasi", "Fanatisme", "Anarkis"], a: "B"},
            {q: "Musyawarah bertujuan untuk ....", options: ["Menang sendiri", "Menimbulkan konflik", "Mencapai mufakat", "Memaksa orang lain", "Menjatuhkan lawan"], a: "C"},
            {q: "Contoh pelanggaran HAM adalah ....", options: ["Menghormati", "Menolong", "Penyiksaan", "Memberi bantuan", "Gotong royong"], a: "C"},
            {q: "Hak utama warga negara adalah ....", options: ["Membayar pajak", "Mematuhi hukum", "Mendapat perlindungan", "Belajar", "Bekerja"], a: "C"},
            {q: "Kewajiban warga negara adalah ....", options: ["Menuntut", "Melanggar aturan", "Mematuhi hukum", "Membolos", "Menghina"], a: "C"},
            {q: "Contoh sikap nasionalisme adalah ....", options: ["Membenci bangsa lain", "Bangga produk luar", "Cinta tanah air", "Merusak bendera", "Mengejek negara"], a: "C"},
            {q: "Perilaku adil berarti ....", options: ["Memihak", "Sama rata", "Berat sebelah", "Memilih teman", "Mengutamakan diri"], a: "B"},
            {q: "Norma yang berasal dari hati nurani disebut ....", options: ["Norma hukum", "Norma agama", "Norma kesopanan", "Norma kesusilaan", "Norma adat"], a: "D"},
            {q: "Bhinneka Tunggal Ika artinya ....", options: ["Satu bahasa", "Bersatu dalam perbedaan", "Sama rata", "Pancasila", "Negara hukum"], a: "B"},
            {q: "Pelaksanaan hak harus disertai ....", options: ["Paksaan", "Kepentingan pribadi", "Kewajiban", "Amarah", "Kebebasan mutlak"], a: "C"},
            {q: "Tujuan hukum adalah ....", options: ["Menimbulkan konflik", "Menciptakan ketertiban", "Memecah persatuan", "Membingungkan rakyat", "Merugikan"], a: "B"},
            {q: "Sikap cinta lingkungan ditunjukkan dengan ....", options: ["Membuang sampah sembarangan", "Menanam pohon", "Merusak taman", "Membakar hutan", "Mencoret fasilitas"], a: "B"}
        ],
        "BIOLOGI / IPA": [
            {q: "Unit terkecil makhluk hidup adalah ....", options: ["Jaringan", "Organ", "Sel", "Sistem", "Atom"], a: "C"},
            {q: "Proses fotosintesis menghasilkan ....", options: ["Karbon dioksida", "Glukosa dan oksigen", "Air", "Nitrogen", "Uap air"], a: "B"},
            {q: "Organ pernapasan manusia adalah ....", options: ["Jantung", "Paru-paru", "Hati", "Lambung", "Ginjal"], a: "B"},
            {q: "Sistem peredaran darah berfungsi untuk ....", options: ["Mencerna makanan", "Mengangkut oksigen", "Menghasilkan hormon", "Mengatur suhu", "Menghapus racun"], a: "B"},
            {q: "Tulang berfungsi untuk ....", options: ["Bernapas", "Melindungi organ", "Menghasilkan darah", "Mengatur emosi", "Mencerna makanan"], a: "B"},
            {q: "Hewan berdarah dingin disebut ....", options: ["Mamalia", "Aves", "Reptil", "Omnivora", "Herbivora"], a: "C"},
            {q: "Organ pencernaan pertama adalah ....", options: ["Lambung", "Kerongkongan", "Mulut", "Usus", "Hati"], a: "C"},
            {q: "Zat hijau daun disebut ....", options: ["Hemoglobin", "Klorofil", "Melanin", "Enzim", "Karoten"], a: "B"},
            {q: "Perubahan wujud cair ke gas disebut ....", options: ["Membeku", "Menguap", "Mengkristal", "Menyublim", "Mencair"], a: "B"},
            {q: "Alat ekskresi manusia adalah ....", options: ["Paru-paru", "Ginjal", "Jantung", "Otot", "Tulang"], a: "B"},
            {q: "Bagian mata untuk melihat cahaya adalah ....", options: ["Retina", "Pupil", "Kornea", "Sklera", "Lensa"], a: "A"},
            {q: "Contoh simbiosis mutualisme adalah ....", options: ["Singa dan zebra", "Kutu dan anjing", "Lebah dan bunga", "Benalu dan pohon", "Ular dan tikus"], a: "C"},
            {q: "Rantai makanan dimulai dari ....", options: ["Konsumen", "Produsen", "Pengurai", "Predator", "Herbivora"], a: "B"},
            {q: "Virus berkembang biak dengan cara ....", options: ["Membelah diri", "Spora", "Replikasi", "Tunas", "Fragmentasi"], a: "C"},
            {q: "Faktor yang dapat menyebabkan pencemaran udara adalah ....", options: ["Pohon", "Oksigen", "Asap kendaraan", "Hujan", "Angin"], a: "C"}
        ]
    },
    "SMA": {
        "MATEMATIKA": [
            {q: "Nilai dari $$\\sqrt{16}$$ adalah...", options: ["3", "4", "5", "6", "7"], a: "B"},
            {q: "Hasil dari $$\\frac{5!}{3!}$$ adalah...", options: ["15", "20", "25", "30", "35"], a: "B"},
            {q: "Akar dari persamaan $$x^2 - 9 = 0$$ adalah...", options: ["1 dan 3", "-3 dan 3", "-9 dan 9", "0 dan 3", "-1 dan 9"], a: "B"},
            {q: "Jika $$\\sin \\theta = 1/2$$, maka $$\\theta = ...$$", options: ["15°", "30°", "45°", "60°", "90°"], a: "B"},
            {q: "Limit dari $$\\lim_{x \\to \\infty} \\frac{x+1}{x}$$ adalah...", options: ["0", "1", "-1", "$\\infty$", "Tidak ada"], a: "B"},
            {q: "Turunan dari $$f(x) = 3x^2$$ adalah...", options: ["3x", "6x", "9x", "$$x^2$$", "$$2x$$"], a: "B"},
            {q: "Integral dari $$2x \\, dx$$ adalah...", options: ["$$x^2 + C$$", "$$2x^2 + C$$", "$$x + C$$", "$$2x + C$$", "$$x^3 + C$$"], a: "A"},
            {q: "Determinan matriks\n$$\\begin{vmatrix} 2 & 3 \\\\ 1 & 4 \\end{vmatrix}$$ adalah...", options: ["5", "8", "11", "2", "1"], a: "A"},
            {q: "Barisan 2, 4, 8, 16,... merupakan barisan...", options: ["Aritmetika", "Harmonik", "Geometri", "Fibonacci", "Campuran"], a: "C"},
            {q: "Rumus luas lingkaran adalah...", options: ["$$2\\pi r$$", "$$\\pi r^2$$", "$$\\pi d$$", "$$2r^2$$", "$$r^2$$"], a: "B"},
            {q: "Nilai $$\\log 100$$ adalah...", options: ["1", "2", "10", "0", "-1"], a: "B"},
            {q: "Nilai $$\\cos 60°$$ adalah ...", options: ["0", "1", "$$1/2$$", "$$\\sqrt{3}/2$$", "$$\\sqrt{2}/2$$"], a: "C"},
            {q: "Persamaan garis melalui (0,2) dan gradien 3 adalah...", options: ["$$y = 3x + 2$$", "$$y = 2x + 3$$", "$$y = 3x - 2$$", "$$y = -3x + 2$$", "$$y = x + 2$$"], a: "A"},
            {q: "Peluang muncul angka 6 pada pelemparan sebuah dadu adalah...", options: ["1/2", "1/3", "1/6", "5/6", "2/3"], a: "C"},
            {q: "Volume bola dengan jari-jari $$r$$ adalah...", options: ["$$\\pi r^2$$", "$$4\\pi r^2$$", "$$4/3 \\pi r^3$$", "$$2\\pi r^3$$", "$$\\pi r^3$$"], a: "C"}
        ],
        "BAHASA INDONESIA": [
            {q: "Kalimat efektif adalah...", options: ["Kalimat bertele-tele", "Kalimat jelas dan tepat", "Kalimat panjang", "Kalimat ambigu", "Kalimat tidak baku"], a: "B"},
            {q: "Majas perbandingan yang membandingkan benda mati seolah hidup disebut...", options: ["Personifikasi", "Metafora", "Hiperbola", "Ironi", "Litotes"], a: "A"},
            {q: "Sinonim kata \"akurat\" adalah...", options: ["Salah", "Tepat", "Lemah", "Kabur", "Cepat"], a: "B"},
            {q: "Antonim \"optimis\" adalah...", options: ["Netral", "Aktif", "Pesimis", "Realis", "Pasif"], a: "C"},
            {q: "Ide pokok paragraf terdapat pada...", options: ["Semua kalimat", "Kalimat utama", "Kalimat penjelas", "Paragraf terakhir", "Judul"], a: "B"},
            {q: "Kata baku dari \"resiko\" adalah...", options: ["Resiko", "Risiko", "Resikoh", "Risikoh", "Resyko"], a: "B"},
            {q: "Teks yang berisi langkah-langkah disebut...", options: ["Narasi", "Eksposisi", "Prosedur", "Deskripsi", "Argumentasi"], a: "C"},
            {q: "Kalimat persuasif bertujuan untuk...", options: ["Menghibur", "Mengajak", "Menjelaskan", "Mendeskripsikan", "Mengkritik"], a: "B"},
            {q: "Kalimat langsung ditandai dengan...", options: ["Tanda seru", "Tanda tanya", "Tanda titik", "Tanda petik", "Tanda koma"], a: "D"},
            {q: "Cerita rekaan disebut...", options: ["Fakta", "Nonfiksi", "Fiksi", "Opini", "Kritik"], a: "C"},
            {q: "Puisi lama yang terdiri 4 baris, 2 baris sampiran dan 2 baris isi disebut...", options: ["Gurindam", "Syair", "Pantun", "Hikayat", "Balada"], a: "C"},
            {q: "Kata hubung sebab akibat adalah...", options: ["Tetapi", "Karena", "Dan", "Atau", "Lalu"], a: "B"},
            {q: "Unsur intrinsik cerpen adalah...", options: ["Biografi", "Penulis", "Alur", "Penerbit", "Tahun"], a: "C"},
            {q: "Sudut pandang orang pertama menggunakan kata...", options: ["Dia", "Mereka", "Kami", "Ia", "Kalian"], a: "C"},
            {q: "Paragraf yang gagasannya di akhir disebut...", options: ["Deduktif", "Induktif", "Campuran", "Naratif", "Deskriptif"], a: "B"}
        ],
        "BAHASA INGGRIS": [
            {q: "She ___ to school every day. (Simple Present)", options: ["go", "goes", "going", "gone", "will go"], a: "B"},
            {q: "Synonym of \"big\" is...", options: ["Small", "Tiny", "Large", "Short", "Weak"], a: "C"},
            {q: "I have lived here ___ 2010. (Time Preposition)", options: ["since", "for", "during", "from", "by"], a: "A"},
            {q: "They ___ finished their homework. (Present Perfect)", options: ["has", "have", "having", "will", "had"], a: "B"},
            {q: "Antonym of \"happy\" is...", options: ["Glad", "Sad", "Joy", "Smile", "Proud"], a: "B"},
            {q: "He is the ___ student in the class. (Superlative)", options: ["smart", "smarter", "smartest", "more smart", "most smart"], a: "C"},
            {q: "We ___ go now. (Modal Auxiliary)", options: ["must", "can’t", "has", "was", "did"], a: "A"},
            {q: "\"Book\" termasuk jenis kata...", options: ["Verb", "Adjective", "Noun", "Adverb", "Pronoun"], a: "C"},
            {q: "She is afraid ___ dogs. (Preposition)", options: ["with", "of", "at", "for", "on"], a: "B"},
            {q: "Past tense of \"eat\" is...", options: ["eated", "eats", "ate", "eaten", "eating"], a: "C"},
            {q: "If I were you, I ___ study harder. (Conditional Type 2)", options: ["will", "would", "shall", "did", "am"], a: "B"},
            {q: "Passive voice of \"She writes a letter\" is...", options: ["A letter is written by her", "A letter was writing", "A letter wrote", "A letter is writing", "A letter writes"], a: "A"},
            {q: "He has ___ his job. (Present Perfect)", options: ["finish", "finished", "finishing", "finishes", "will finish"], a: "B"},
            {q: "Opposite of \"hot\" is...", options: ["Warm", "Cool", "Cold", "Fire", "Dry"], a: "C"},
            {q: "\"Although\" is a...", options: ["Conjunction", "Noun", "Verb", "Adjective", "Pronoun"], a: "A"}
        ],
        "PPKn": [
            {q: "Pancasila sebagai dasar negara tercantum dalam...", options: ["UUD 1945", "Proklamasi", "Piagam Jakarta", "Dekrit Presiden", "Konstitusi RIS"], a: "A"},
            {q: "Sila kedua Pancasila berbunyi...", options: ["Ketuhanan Yang Maha Esa", "Kemanusiaan yang adil dan beradab", "Persatuan Indonesia", "Kerakyatan", "Keadilan sosial"], a: "B"},
            {q: "Bentuk negara Indonesia adalah...", options: ["Monarki", "Federal", "Serikat", "Kesatuan", "Demokrasi"], a: "D"},
            {q: "Hak memilih dan dipilih dalam pemilu disebut...", options: ["Hak asasi", "Hak politik", "Hak sipil", "Hak ekonomi", "Hak sosial"], a: "B"},
            {q: "Presiden memegang kekuasaan...", options: ["Yudikatif", "Legislatif", "Eksekutif", "Federatif", "Kolektif"], a: "C"},
            {q: "Lembaga yang memegang kekuasaan legislatif di tingkat pusat adalah...", options: ["MA", "MK", "DPR", "BPK", "KPU"], a: "C"},
            {q: "Dasar hukum tertinggi di Indonesia adalah...", options: ["Perda", "UU", "Tap MPR", "UUD 1945", "SK"], a: "D"},
            {q: "Contoh pelaksanaan demokrasi langsung adalah...", options: ["Pemilihan umum", "Kerja paksa", "Diktator", "Kudeta", "Sensor"], a: "A"},
            {q: "Hak untuk berpendapat dijamin oleh UUD 1945 Pasal...", options: ["Pasal 27", "Pasal 28", "Pasal 30", "Pasal 33", "Pasal 31"], a: "B"},
            {q: "Bhineka Tunggal Ika berarti...", options: ["Bersatu kita teguh", "Berbeda-beda tetapi tetap satu", "Keadilan sosial", "Gotong royong", "Persatuan kuat"], a: "B"},
            {q: "Norma hukum bersifat...", options: ["Memaksa", "Sukarela", "Bebas", "Pribadi", "Lisan"], a: "A"},
            {q: "Warga negara wajib... (salah satu kewajiban utama)", options: ["Mendapat pekerjaan", "Membayar pajak", "Mendapat perlindungan", "Memperoleh pendidikan", "Mendapat fasilitas"], a: "B"},
            {q: "Sistem pemerintahan Indonesia adalah...", options: ["Parlementer", "Monarki", "Presidensial", "Federal", "Oligarki"], a: "C"},
            {q: "Kewajiban utama pelajar adalah...", options: ["Berpolitik", "Bekerja", "Belajar", "Berdagang", "Mengatur negara"], a: "C"},
            {q: "Globalisasi menuntut sikap...", options: ["Individualis", "Tertutup", "Selektif", "Apatis", "Egois"], a: "C"}
        ],
        "BIOLOGI": [
            {q: "Organel penghasil energi utama dalam sel adalah...", options: ["Nukleus", "Ribosom", "Mitokondria", "Lisosom", "Golgi"], a: "C"},
            {q: "Fotosintesis pada tumbuhan hijau terjadi di...", options: ["Akar", "Batang", "Daun", "Bunga", "Buah"], a: "C"},
            {q: "Zat hijau daun disebut...", options: ["Hemoglobin", "Klorofil", "Melanin", "Enzim", "Karoten"], a: "B"},
            {q: "Sistem pernapasan manusia menggunakan...", options: ["Insang", "Trakea", "Paru-paru", "Kulit", "Bronkus"], a: "C"},
            {q: "Unit terkecil penyusun makhluk hidup adalah...", options: ["Jaringan", "Organ", "Sel", "Sistem organ", "Makhluk"], a: "C"},
            {q: "Pembelahan mitosis menghasilkan...", options: ["4 sel berbeda", "2 sel identik", "1 sel", "Sel gamet", "Sel abnormal"], a: "B"},
            {q: "Alat gerak pasif pada manusia adalah...", options: ["Otot", "Sendi", "Tulang", "Ligamen", "Tendon"], a: "C"},
            {q: "Hormon insulin berfungsi mengatur kadar...", options: ["Lemak", "Protein", "Gula darah", "Oksigen", "Air"], a: "C"},
            {q: "Enzim bekerja pada suhu optimum sekitar...", options: ["0°C", "10°C", "25°C", "37°C", "100°C"], a: "D"},
            {q: "Sistem ekskresi berfungsi untuk...", options: ["Mencerna makanan", "Mengeluarkan zat sisa", "Mengedarkan darah", "Menghasilkan energi", "Menyerap nutrisi"], a: "B"},
            {q: "Alat ekskresi utama manusia adalah...", options: ["Hati", "Paru-paru", "Ginjal", "Usus", "Jantung"], a: "C"},
            {q: "Darah berfungsi untuk...", options: ["Melindungi", "Mengangkut", "Mengatur", "Menyaring", "Membentuk"], a: "B"},
            {q: "DNA berfungsi sebagai...", options: ["Cadangan makanan", "Pengatur suhu", "Pewaris sifat", "Pelindung kulit", "Pembeku darah"], a: "C"},
            {q: "Proses pembentukan sperma disebut...", options: ["Oogenesis", "Spermatogenesis", "Ovulasi", "Fertilisasi", "Implantasi"], a: "B"},
            {q: "Jaringan pengangkut air dan unsur hara pada tumbuhan adalah...", options: ["Epidermis", "Xilem dan floem", "Kambium", "Parenkim", "Kolenkim"], a: "B"}
        ]
    }
};

let currentLevel = null;
let currentSubject = null;
let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let selectedAnswer = null;

// Elemen DOM
const selectionScreen = document.getElementById('selection-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');
const levelSelection = document.getElementById('level-selection');
const subjectSelection = document.getElementById('subject-selection');
const subjectTitle = document.getElementById('subject-title');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const nextButton = document.getElementById('next-button');
const questionCounter = document.getElementById('question-counter');
const restartButton = document.getElementById('restart-button');

// Mengubah dari A, B, C, D, E menjadi index 0-4
const answerMap = {'A': 0, 'B': 1, 'C': 2, 'D': 3, 'E': 4};
const indexToLetter = ['A', 'B', 'C', 'D', 'E'];

// Fungsi untuk menampilkan layar
function showScreen(screenId) {
    const screens = [selectionScreen, quizScreen, resultScreen];
    screens.forEach(screen => {
        screen.classList.remove('active');
        if (screen.id === screenId) {
            screen.classList.add('active');
        }
    });
}

// --------------------------------------------------------
// LOGIKA SELEKSI JENJANG DAN MAPEL
// --------------------------------------------------------

// Event Listener untuk Jenjang (SD, SMP, SMA)
levelSelection.addEventListener('click', (event) => {
    if (event.target.tagName === 'BUTTON') {
        // Reset tampilan tombol level
        levelSelection.querySelectorAll('button').forEach(btn => btn.classList.remove('selected'));
        
        // Atur level baru
        currentLevel = event.target.dataset.level;
        event.target.classList.add('selected');
        
        // Tampilkan pilihan mapel
        loadSubjects(currentLevel);
        subjectTitle.style.display = 'block';
    }
});

// Memuat Mata Pelajaran berdasarkan Jenjang
function loadSubjects(level) {
    subjectSelection.innerHTML = '';
    const subjects = Object.keys(quizData[level]);
    
    subjects.forEach(subject => {
        const button = document.createElement('button');
        button.textContent = subject;
        button.dataset.subject = subject;
        subjectSelection.appendChild(button);
    });
}

// Event Listener untuk Mata Pelajaran
subjectSelection.addEventListener('click', (event) => {
    if (event.target.tagName === 'BUTTON') {
        // Reset tampilan tombol mapel
        subjectSelection.querySelectorAll('button').forEach(btn => btn.classList.remove('selected'));
        
        // Atur mapel baru dan mulai kuis
        currentSubject = event.target.dataset.subject;
        event.target.classList.add('selected');
        startQuiz();
    }
});

// --------------------------------------------------------
// LOGIKA KUIS
// --------------------------------------------------------

function startQuiz() {
    currentQuestions = quizData[currentLevel][currentSubject];
    currentQuestionIndex = 0;
    score = 0;
    
    document.getElementById('quiz-title').textContent = `${currentSubject} - ${currentLevel}`;
    showScreen('quiz-screen');
    displayQuestion();
}

function displayQuestion() {
    const questionData = currentQuestions[currentQuestionIndex];
    
    questionCounter.textContent = `Soal ${currentQuestionIndex + 1} dari ${currentQuestions.length}`;
    questionText.textContent = questionData.q;
    optionsContainer.innerHTML = '';
    
    // Reset status
    selectedAnswer = null;
    nextButton.disabled = true;
    nextButton.textContent = "Soal Selanjutnya";

    // Loop untuk membuat tombol opsi jawaban
    questionData.options.forEach((optionText, index) => {
        const optionButton = document.createElement('button');
        optionButton.textContent = `${indexToLetter[index]}. ${optionText}`;
        optionButton.dataset.index = indexToLetter[index]; // A, B, C, D, E
        optionButton.addEventListener('click', handleOptionClick);
        optionsContainer.appendChild(optionButton);
    });
    
    // Khusus untuk soal terakhir, ganti tombol
    if (currentQuestionIndex === currentQuestions.length - 1) {
        nextButton.textContent = "Selesai & Lihat Hasil";
    }
    
    // Render LaTeX (untuk soal matematika/biologi SMA/SMP)
    if (window.MathJax) {
        MathJax.typesetPromise([questionText]);
    }
}

function handleOptionClick(event) {
    // Hilangkan highlight dari semua opsi
    optionsContainer.querySelectorAll('button').forEach(btn => btn.classList.remove('selected'));

    // Highlight opsi yang dipilih
    event.target.classList.add('selected');
    
    // Simpan jawaban yang dipilih
    selectedAnswer = event.target.dataset.index;
    
    // Aktifkan tombol next
    nextButton.disabled = false;
}

function checkAnswer() {
    const questionData = currentQuestions[currentQuestionIndex];
    const correctAnswer = questionData.a;

    if (selectedAnswer === correctAnswer) {
        score++;
    }
}

// Event Listener untuk Tombol Selanjutnya/Selesai
nextButton.addEventListener('click', () => {
    if (selectedAnswer !== null) {
        checkAnswer();
        
        currentQuestionIndex++;
        
        if (currentQuestionIndex < currentQuestions.length) {
            displayQuestion();
        } else {
            showResult();
        }
    }
});

// --------------------------------------------------------
// LOGIKA HASIL
// --------------------------------------------------------

function showResult() {
    document.getElementById('result-level').textContent = currentLevel;
    document.getElementById('result-subject').textContent = currentSubject;
    document.getElementById('result-correct').textContent = score;

    const totalQuestions = currentQuestions.length;
    const finalScore = (score / totalQuestions) * 100;
    
    let message = '';
    if (finalScore >= 90) {
        message = `Skor Akhir: ${finalScore.toFixed(0)}% (Sangat Baik! 🌟)`;
    } else if (finalScore >= 70) {
        message = `Skor Akhir: ${finalScore.toFixed(0)}% (Baik! 👍)`;
    } else if (finalScore >= 50) {
        message = `Skor Akhir: ${finalScore.toFixed(0)}% (Cukup. Perlu Belajar Lagi! 📖)`;
    } else {
        message = `Skor Akhir: ${finalScore.toFixed(0)}% (Tingkatkan Belajar! 🙏)`;
    }
    
    document.getElementById('final-score').textContent = message;
    
    showScreen('result-screen');
}

// Event Listener untuk Tombol Coba Lagi
restartButton.addEventListener('click', () => {
    // Reset semua tampilan tombol level dan mapel
    levelSelection.querySelectorAll('button').forEach(btn => btn.classList.remove('selected'));
    subjectSelection.innerHTML = '';
    subjectTitle.style.display = 'none';
    currentLevel = null;
    currentSubject = null;

    showScreen('selection-screen');
});


// Inisialisasi MathJax untuk rendering simbol matematika
// Masukkan script ini di akhir file JS atau sebelum tag penutup </body> di HTML
// Catatan: Saya akan memasukkannya di sini agar Anda mudah mengkopi kodenya.
(function () {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js';
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
        if (window.MathJax) {
            MathJax.startup.promise.then(() => {
                // Konfigurasi MathJax jika perlu, atau panggil typeset untuk memastikan semua sudah di-render
            }).catch(err => console.error("MathJax error:", err));
        }
    };
})();

// Tampilkan layar awal saat halaman dimuat
document.addEventListener('DOMContentLoaded', () => {
    showScreen('selection-screen');
});