# Ta'allum Arabic

Aplikasi pembelajaran Bahasa Arab berbasis Next.js + TypeScript + Supabase.

## Fitur awal
- Katalog mufrodat dengan gambar, harakat, transliterasi, arti, dan kategori.
- Filter kategori dan pencarian kosakata.
- Materi dan latihan susun kalimat jumlah ismiyah dan fi'liyah.
- Kuis kosakata interaktif dengan skor.
- Database Supabase dengan Row Level Security untuk tabel inti.

## Menjalankan lokal
1. Install Node.js versi LTS.
2. Jalankan `npm install`.
3. Salin `.env.example` menjadi `.env.local`.
4. Isi URL dan anon key dari Supabase (opsional untuk mencoba tampilan awal; aplikasi memakai data contoh jika belum tersambung).
5. Jalankan `npm run dev`, lalu buka http://localhost:3000.

## Menyiapkan Supabase
1. Buat project di https://supabase.com.
2. Buka SQL Editor dan jalankan isi `supabase/schema.sql`.
3. Ambil Project URL dan anon/public key dari Project Settings > API.
4. Isi ke `.env.local`.
5. Tambahkan gambar kosakata ke Supabase Storage bucket `vocabulary-images` (buat bucket public), lalu isi kolom `image_url` dengan URL publiknya.

Aplikasi otomatis membaca kosakata dari Supabase jika kredensial tersedia. Jika tidak, data contoh lokal digunakan.

## Deploy ke Vercel
1. Push folder project ini ke repository GitHub.
2. Import repository tersebut di https://vercel.com/new.
3. Tambahkan `NEXT_PUBLIC_SUPABASE_URL` dan `NEXT_PUBLIC_SUPABASE_ANON_KEY` pada Environment Variables Vercel.
4. Deploy.

## Catatan pengembangan
- Validasi susunan kalimat pada versi awal menggunakan pola jawaban yang ditentukan pengajar, bukan mesin analisis nahwu umum.
- Jangan pernah memasukkan `service_role` key ke browser atau repository.
- Sebelum aplikasi dipakai publik, tambahkan autentikasi, role admin, pembatasan akses tabel, dan pengelolaan konten admin.
