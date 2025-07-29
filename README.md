# 🎯 Roulette Wheel App

Aplikasi web roulette interaktif yang dibangun dengan Next.js dan TypeScript. Aplikasi ini memungkinkan pengguna untuk menambahkan item ke dalam roulette, memutar roda, dan secara otomatis menghapus item yang terpilih.

## ✨ Fitur

- **Input Item**: Menambahkan string/teks sebagai item roulette
- **Roulette Wheel Visual**: Roda roulette dengan segmen berwarna yang proporsional
- **Animasi Spin**: Animasi putaran roulette selama 3-5 detik
- **Hasil Acak**: Pemilihan item secara acak dengan tampilan hasil
- **Auto Remove**: Item yang terpilih otomatis dihapus dari roulette
- **Responsive Design**: Tampilan yang responsif untuk berbagai ukuran layar
- **Modern UI**: Antarmuka yang menarik dengan gradient dan animasi

## 🚀 Getting Started

### Prerequisites

Pastikan Anda memiliki Node.js terinstall di sistem Anda.

### Installation

1. Clone repository ini atau download source code
2. Buka terminal di direktori proyek
3. Install dependencies:

```bash
npm install
```

### Running the Development Server

Jalankan server development:

```bash
npm run dev
# atau
yarn dev
# atau
pnpm dev
# atau
bun dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser untuk melihat aplikasi.

## 🎮 Cara Penggunaan

1. **Menambah Item**:

   - Ketik nama item di input field
   - Klik tombol "Tambah" atau tekan Enter
   - Item akan muncul sebagai chip di bawah input

2. **Menghapus Item**:

   - Klik tombol "×" pada chip item yang ingin dihapus

3. **Memutar Roulette**:

   - Pastikan sudah ada minimal 1 item
   - Klik tombol "🎯 PUTAR!"
   - Roulette akan berputar selama 3-5 detik
   - Hasil akan ditampilkan dalam modal popup

4. **Hasil**:
   - Item yang terpilih akan ditampilkan
   - Item tersebut otomatis dihapus dari roulette setelah 2 detik

## 🛠️ Teknologi yang Digunakan

- **Next.js 15** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **React Hooks** - State management
- **SVG** - Roulette wheel rendering

## 📁 Struktur Proyek

```
roulette/
├── src/
│   └── app/
│       ├── globals.css
│       ├── layout.tsx
│       └── page.tsx          # Main roulette component
├── public/
├── package.json
└── README.md
```

## 🎨 Fitur Visual

- **Warna Dinamis**: 10 warna berbeda untuk segmen roulette
- **Animasi Smooth**: Transisi CSS untuk efek putaran yang halus
- **Text Handling**: Teks panjang dipotong otomatis dengan "..."
- **Responsive Layout**: Menyesuaikan dengan ukuran layar
- **Modal Result**: Popup hasil yang menarik

## 🔧 Customization

Anda dapat mengkustomisasi:

- **Warna Segmen**: Edit array `colors` di `page.tsx`
- **Durasi Spin**: Ubah nilai `spinDuration` (default: 3000-5000ms)
- **Ukuran Roulette**: Sesuaikan `width`, `height`, dan `radius` SVG
- **Styling**: Modifikasi kelas Tailwind CSS

## 📝 Build untuk Production

```bash
npm run build
npm start
```

## 🚀 Deploy

Aplikasi ini dapat di-deploy ke berbagai platform:

- **Vercel** (Recommended)
- **Netlify**
- **Railway**
- **Heroku**

Untuk deploy ke Vercel:

```bash
npx vercel
```

## 📄 License

Proyek ini adalah open source dan tersedia di bawah lisensi MIT.

## 🤝 Contributing

Kontribusi sangat diterima! Silakan:

1. Fork proyek ini
2. Buat feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit perubahan (`git commit -m 'Add some AmazingFeature'`)
4. Push ke branch (`git push origin feature/AmazingFeature`)
5. Buka Pull Request

## 📞 Support

Jika Anda mengalami masalah atau memiliki pertanyaan, silakan buat issue di repository ini.

---

**Dibuat dengan ❤️ menggunakan Next.js**
