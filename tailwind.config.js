/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      // --- TAMBAHAN BARU MULAI DI SINI ---
      animation: {
        // Nama animasinya 'blob', durasi 20 detik, looping selamanya
        blob: "blob 7s infinite", 
      },
      keyframes: {
        // Rumus gerakan 'blob'
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(50px, -80px) scale(1.2)", // Gerak ke kanan atas, membesar
          },
          "66%": {
            transform: "translate(-30px, 50px) scale(0.8)", // Gerak ke kiri bawah, mengecil
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)", // Kembali ke posisi awal
          },
        },
      },
      // --- AKHIR TAMBAHAN ---
    },
  },
  plugins: [],
}