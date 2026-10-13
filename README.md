# UTS-Pemweb
Untuk pemenuhan UTS mata kuliah pemrograman web

# 🐟 Kolam Pak Rizky

Website *company profile* statis untuk **Kolam Pak Rizky**, peternakan ikan rumahan di Surabaya yang menjual ikan lele, nila, dan gabus, mulai dari bibit hingga ukuran siap panen.

> Dibangun dengan HTML, CSS, dan JavaScript murni (tanpa framework dan tanpa *build tool*).

---

## 📑 Daftar Isi

1. [Gambaran Umum](#-gambaran-umum)
2. [Fitur](#-fitur)
3. [Teknologi](#-teknologi)
4. [Struktur Proyek](#-struktur-proyek)
5. [Cara Menjalankan](#-cara-menjalankan)
6. [Dokumentasi Teknis](#-dokumentasi-teknis)
7. [SRS (Software Requirements Specification)](#-srs-software-requirements-specification)
8. [Keterbatasan dan Rencana Pengembangan](#-keterbatasan-dan-rencana-pengembangan)
9. [Lisensi](#-lisensi)

---

## 📌 Gambaran Umum

| Item | Keterangan |
|---|---|
| Nama proyek | Kolam Pak Rizky |
| Jenis | Website *company profile* dan katalog produk (statis) |
| Bahasa konten | Indonesia (`lang="id"`) |
| Target pengguna | Calon pembeli ikan konsumsi dan peternak pemula yang mencari bibit |
| Wilayah layanan | Surabaya |

Website ini terdiri dari tiga halaman: **Beranda**, **Produk**, dan **Tentang**. Pengunjung dapat melihat profil usaha, daftar produk, dan mengisi formulir pemesanan melalui *modal pop-up*.

---

## ✨ Fitur

- **Halaman Beranda**: *hero banner*, 5 keunggulan usaha, galeri kolam, dan tombol ajakan memesan.
- **Halaman Produk**: 5 kartu produk (Lele Besar, Lele Bibit, Nila Besar, Nila Sedang, Gabus Besar).
- **Halaman Tentang**: profil pemilik dan sejarah usaha.
- **Formulir pesanan (modal)**: dibuka lewat tombol "Pesan Sekarang!" dan menampilkan validasi sederhana.
- **Navigasi** konsisten di semua halaman.
- **Responsif**: tampilan menyesuaikan layar mobile (≤ 600px).

---

## 🛠 Teknologi

| Teknologi | Kegunaan |
|---|---|
| HTML5 | Struktur halaman |
| CSS3 (Flexbox, Grid, Media Query) | Tata letak dan gaya |
| JavaScript (Vanilla, DOM API) | Interaksi modal dan validasi formulir |
| WebP | Format gambar |

---

## 📂 Struktur Proyek

```
.
├── index.html          # Halaman Beranda
├── product.html        # Halaman Produk
├── about.html          # Halaman Tentang
├── style.css           # Seluruh gaya (dipakai bersama oleh semua halaman)
├── script.js           # Logika modal dan validasi formulir
└── *.webp              # Aset gambar (lihat daftar di bawah)
```

### Aset Gambar yang Dibutuhkan

Pastikan file berikut berada **satu folder** dengan file HTML:

| File | Dipakai di |
|---|---|
| `logousaha.webp` | Navbar (semua halaman) |
| `peternakanikan.webp` | Latar *hero* (Beranda) dan foto kolam (Tentang) |
| `galeri1.webp` – `galeri5.webp` | Galeri (Beranda) |
| `lelebesar.webp` | Produk Lele Besar |
| `bibitlele.webp` | Produk Lele Bibit |
| `nilabesar.webp` | Produk Nila Besar |
| `nilasedangwebp.webp` | Produk Nila Sedang |
| `gabusbesar.webp` | Produk Gabus Besar |
| `sutris.webp` | Foto pemilik (Tentang) |

---

## 🚀 Cara Menjalankan

Tidak ada dependensi yang perlu diinstal.

**Opsi 1: Buka langsung**
1. Clone atau unduh repositori ini.
2. Buka `index.html` di browser.

**Opsi 2: Lewat server lokal** (disarankan)
```bash
# Python
python -m http.server 8000

# atau Node.js
npx serve .
```
Lalu buka `http://localhost:8000`.

---

## 📖 Dokumentasi Teknis

### Struktur Halaman

Setiap halaman memakai kerangka yang sama:

```
<nav>      → navigasi + tombol "Pesan Sekarang!"
<main>     → konten khusus halaman
<footer>   → hak cipta
.modal-overlay → modal formulir pesanan (tersembunyi secara default)
<script>   → script.js
```

### Komponen CSS Utama (`style.css`)

| Kelas | Fungsi |
|---|---|
| `.nav-container`, `.nav-link` | Bilah navigasi |
| `.order-button` | Tombol aksi hijau (dipakai di navbar, kartu produk, dan formulir) |
| `.modal-overlay` / `.modal-overlay.show` | Latar gelap modal; tampil saat kelas `show` ditambahkan |
| `.order-modal`, `.order-form` | Kotak dan isian formulir |
| `.form-notice.success` / `.error` | Pesan hasil validasi (hijau / merah) |
| `.hero-section`, `.hero-overlay` | Banner utama dengan lapisan gelap |
| `.advantage-list`, `.advantage-item` | Daftar keunggulan (grid 2 kolom) |
| `.gallery-grid`, `.gallery-large` | Galeri (grid 2fr:1fr, foto pertama memanjang 2 baris) |
| `.product-list`, `.product-card` | Katalog produk (grid 3 kolom) |
| `.about-section`, `.about-content`, `.owner-photo` | Halaman Tentang |

**Breakpoint responsif:** `@media (max-width: 600px)`. Navbar berubah menjadi kolom, grid menjadi 1 kolom, dan ukuran font dikecilkan.

### Logika JavaScript (`script.js`)

| Elemen | Perilaku |
|---|---|
| `.order-button` (semua) | Klik → menambahkan kelas `show` ke `.modal-overlay` sehingga modal muncul |
| `.modal-close` | Klik → menghapus kelas `show` sehingga modal tertutup |
| Tombol "Kirim" | Klik → memeriksa semua `<input>`: bila ada yang kosong, tampil pesan error; bila semua terisi, tampil pesan sukses |

---

## 📋 SRS (Software Requirements Specification)

### 1. Pendahuluan

**1.1 Tujuan**
Dokumen ini menjelaskan kebutuhan fungsional dan non-fungsional website Kolam Pak Rizky sebagai acuan pengembangan dan pemeliharaan.

**1.2 Ruang Lingkup**
Website statis yang memperkenalkan usaha, menampilkan katalog produk, dan menyediakan formulir pemesanan. Versi saat ini belum terhubung ke *backend* atau basis data.

### 2. Deskripsi Umum

**2.1 Perspektif Produk**
Aplikasi web statis mandiri yang berjalan sepenuhnya di sisi klien (*browser*).

**2.2 Karakteristik Pengguna**

| Pengguna | Deskripsi | Kebutuhan Utama |
|---|---|---|
| Pengunjung / calon pembeli | Masyarakat umum di Surabaya dan sekitarnya | Melihat produk dan memesan |
| Pemilik usaha | Pak Rizky | Menampilkan profil dan produk usaha |

**2.3 Batasan**
- Tanpa *backend*: data formulir tidak dikirim atau disimpan.
- Konten (teks, produk, gambar) diubah manual dengan menyunting file HTML.
- Aset gambar harus tersedia di folder yang sama dengan file HTML.

**2.4 Asumsi dan Ketergantungan**
- Pengguna memakai browser modern dengan JavaScript aktif.
- Aset gambar format WebP didukung browser pengguna.

### 3. Kebutuhan Fungsional

| ID | Kebutuhan | Halaman | Status |
|---|---|---|---|
| FR-01 | Sistem menampilkan navigasi (Beranda, Produk, Tentang) di semua halaman | Semua | ✅ |
| FR-02 | Sistem menampilkan *hero banner* berisi nama dan deskripsi singkat usaha | Beranda | ✅ |
| FR-03 | Sistem menampilkan 5 keunggulan usaha | Beranda | ✅ |
| FR-04 | Sistem menampilkan galeri 5 foto kolam | Beranda | ✅ |
| FR-05 | Sistem menampilkan daftar produk beserta gambar, nama, dan deskripsi | Produk | ✅ |
| FR-06 | Sistem menampilkan profil, foto, dan sejarah pemilik usaha | Tentang | ✅ |
| FR-07 | Pengguna dapat membuka formulir pesanan dari tombol "Pesan Sekarang!" | Semua | ✅ |
| FR-08 | Pengguna dapat menutup formulir pesanan dengan tombol silang | Semua | ✅ |
| FR-09 | Formulir memiliki isian: Nama, Nomor telepon, Alamat email, Produk yang ingin dipesan | Semua | ✅ |
| FR-10 | Sistem memvalidasi bahwa semua isian terisi sebelum menampilkan pesan sukses | Semua | ✅ |
| FR-11 | Sistem menampilkan pesan error bila ada isian kosong | Semua | ✅ |

### 4. Kebutuhan Non-Fungsional

| ID | Kategori | Kebutuhan |
|---|---|---|
| NFR-01 | Responsif | Tampilan harus dapat digunakan pada layar ≤ 600px dan desktop |
| NFR-02 | Kompatibilitas | Berjalan di browser modern (Chrome, Firefox, Edge, Safari) |
| NFR-03 | Kinerja | Menggunakan gambar WebP dan tanpa pustaka eksternal untuk memperkecil waktu muat |
| NFR-04 | Kemudahan pemeliharaan | Satu file CSS dan satu file JS dipakai bersama oleh seluruh halaman |
| NFR-05 | SEO dasar | Setiap halaman memiliki `<title>`, `meta description`, dan `lang="id"` |
| NFR-06 | Kegunaan | Tombol dan teks konsisten; pesan validasi berwarna (hijau/merah) |
| NFR-07 | Deploy | Dapat di-*host* di layanan statis tanpa konfigurasi server (mis. GitHub Pages) |

### 5. Antarmuka

**5.1 Antarmuka Pengguna**
Palet warna dominan hijau tua (`rgb(35, 75, 47)`, `rgb(57, 105, 66)`) dengan latar krem (`rgb(247, 248, 222)`).

### 6. Use Case Utama

**UC-01: Memesan Produk**

| | |
|---|---|
| Aktor | Pengunjung |
| Prasyarat | Halaman situs terbuka |
| Alur utama | 1. Pengunjung menekan "Pesan Sekarang!" <br> 2. Modal formulir muncul <br> 3. Pengunjung mengisi nama, telepon, email, dan produk <br> 4. Pengunjung menekan "Kirim" <br> 5. Sistem menampilkan "Pesanmu berhasil dikirim!" |
| Alur alternatif | Pada langkah 4, bila ada isian kosong, sistem menampilkan "Pastikan semua kolom sudah diisi." |
| Pascakondisi | Pesan ditampilkan di layar (data belum dikirim ke server) |

**UC-02: Melihat Produk**

| | |
|---|---|
| Aktor | Pengunjung |
| Alur utama | Pengunjung membuka halaman Produk → melihat daftar kartu produk beserta deskripsinya |

---

