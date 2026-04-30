import React, { useState } from "react";
import Reveal from "./Reveal";
import { motion, AnimatePresence } from "framer-motion";

// IMPORT IKON
import {
  SiReact, SiLaravel, SiTailwindcss, SiBootstrap, SiHtml5,
  SiGit, SiApache, SiFigma, SiCanva, SiObsstudio,
  SiMysql, SiNextdotjs, SiGooglegemini 
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc"; 
import { FaVideo, FaImage, FaPaintBrush, FaCut } from "react-icons/fa";

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("projects");
  const [projectFilter, setProjectFilter] = useState("all");
  
  // STATE BARU: Untuk menyimpan data sertifikat yang sedang di-klik (Popup)
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  // --- DATA PROJECTS ---
  const projectsData = [
    {
      id: 1,
      category: "project",
      title: "Developer Aplikasi Wudi",
      image: "/Promosi Wudi.png",
      desc: "Flutter",
      link: " https://play.google.com/store/apps/details?id=com.pdbl.wudi", 
    },
        {
      id: 2,
      category: "design",
      title: "Design Aplikasi Wudi",
      image: "/Group 46.png",
      desc: "Figma",
      link: "https://www.figma.com/design/4CauWX6y3ClFIxrpjJq2k9/Design-Wudi.?node-id=619-654&t=nKDcuUq56uWylobS-1", 
    },
    {
      id: 3,
      category: "project",
      title: "Website Bimbel Sederhana",
      image: "/web bimbel.png",
      desc: "Tailwind CSS",
      link: "https://contoh-website-bimbel-sederhana.vercel.app/",
    },
    {
      id: 4,
      category: "project",
      title: "Website Cafe Sederhana",
      image: "/webcafe.png",
      desc: "Tailwind CSS",
      link: "https://contoh-website-cafe-sederhana.vercel.app/",
    },
    {
      id: 5,
      category: "design",
      title: "Desain App Makanan Indo",
      image: "/apk makanan.png",
      desc: "Figma",
      link: "https://www.figma.com/design/Rp0QuA4zjqsNEaxXyO8vif/Untitled?node-id=0-1&t=lezvj9pe1kUiz6HC-1",
    },
    {
      id: 6,
      category: "design",
      title: "Desain App Data Barang",
      image: "/Desktop Analyst Admin Finance.png",
      desc: "Figma",
      link: "", 
    },
    {
      id: 7,
      category: "project",
      title: "Website Pribadi Sederhana",
      image: "/web hapizz.png",
      desc: "Tailwind CSS, JS",
      link: "https://portofolio-hapizzz-2025.vercel.app/",
    },
    {
      id: 8,
      category: "project",
      title: "CRUD Karyawan",
      image: "/Crud.png",
      desc: "Tailwind CSS, PHP, MySQL",
      link: "nothing", 
    },
    {
      id: 9,
      category: "editing",
      title: "Design Jersey Running",
      image: "/SUKARUN.png",
      desc: "Gemini Ai, Canva, Pixellab",
      link: "https://drive.google.com/file/d/1c1ST2juClgN2oyy5ug7Tvg3bGlcDaTwf/view?usp=sharing", 
    },
  ];

  // --- DATA CERTIFICATES (UPDATE: Tambahkan properti 'image') ---
  const certificatesData = [
    {
      id: 1,
      title: "Sertifikat LKMM 2025",
      issuer: "Politeknik Elektronika Negeri Surabaya",
      year: "2025",
      image: "/sertif/LKMM Pens.jpg.jpeg", 
    },
    {
      id: 2,
      title: "Sertifikat Ella Bahasa Inggris Class 3",
      issuer: "Ella Course",
      year: "2025",
      image: "/sertif/Ella 3.jpg.jpeg",
    },
    {
      id: 3,
      title: "Sertifikat Ella Bahasa Inggris Class 2",
      issuer: "Ella Course",
      year: "2025",
      image: "/sertif/Ella 2.jpg.jpeg",
    },
    {
      id: 4,
      title: "Sertifikat Ella Bahasa Inggris Class 1",
      issuer: "Ella Course",
      year: "2022",
      image: "/sertif/Ella 1.jpg.jpeg",
    },
    {
      id: 5,
      title: "Sertifikat Ketua Umum EkstraKulikuler Jurnalistik",
      issuer: "MAN 1 Nganjuk",
      year: "2023",
      image: "/sertif/Ketum Jurnal.jpg.jpeg",
    },
    {
      id: 6,
      title: "Sertifikat Kursus Bahasa Inggris Dasar",
      issuer: "Home Of Language",
      year: "2022",
      image: "/sertif/Sertif Hol.jpg.jpeg",
    },
    {
      id: 7,
      title: "Sertifikat Bahasa Inggris",
      issuer: "MTsN 4 Nganjuk",
      year: "2019",
      image: "/sertif/Bing.jpg.jpeg",
    },
    {
      id: 8,
      title: "Sertifikat Semifinal Kompetisi Matematika Nalaria Realistik",
      issuer: "MTsN 4 Nganjuk",
      year: "2019",
      image: "/sertif/Semifinal KMNR.jpg.jpeg",
    },
    {
      id: 9,
      title: "Sertifikat Semifinal Kompetisi Matematika Nalaria Realistik",
      issuer: "MTsN 4 Nganjuk",
      year: "2019",
      image: "/sertif/Penyisihan KMNR.jpg.jpeg",
    },
  ];

  // --- DATA TECH STACK ---
  const techStack = [
    // Baris 1
    { name: 'React', icon: <SiReact />, color: 'text-blue-400', category: 'Frontend Lib' },
    { name: 'Next.js', icon: <SiNextdotjs />, color: 'text-white', category: 'Web Framework' }, 
    { name: 'Laravel', icon: <SiLaravel />, color: 'text-red-500', category: 'PHP Framework' },
    { name: 'Tailwind', icon: <SiTailwindcss />, color: 'text-cyan-400', category: 'CSS Framework' },
    { name: 'Bootstrap', icon: <SiBootstrap />, color: 'text-purple-500', category: 'CSS Framework' },
    { name: 'HTML5', icon: <SiHtml5 />, color: 'text-orange-500', category: 'Markup Language' },
    
    // Baris 2
    { name: 'MySQL', icon: <SiMysql />, color: 'text-blue-500', category: 'Database' }, 
    { name: 'VS Code', icon: <VscVscode />, color: 'text-blue-500', category: 'Code Editor' },
    { name: 'Git', icon: <SiGit />, color: 'text-orange-600', category: 'Version Control' },
    { name: 'Gemini AI', icon: <SiGooglegemini />, color: 'text-blue-300', category: 'Artificial Intelligence' }, 
    { name: 'NetBeans', icon: <SiApache />, color: 'text-blue-300', category: 'Java IDE' },
    { name: 'Figma', icon: <SiFigma />, color: 'text-pink-400', category: 'UI/UX Design' },
    
    // Baris 3
    { name: 'Canva', icon: <SiCanva />, color: 'text-cyan-500', category: 'Graphic Design' },
    { name: 'CapCut', icon: <FaCut />, color: 'text-white', category: 'Mobile Editing' },
    { name: 'OBS Studio', icon: <SiObsstudio />, color: 'text-white', category: 'Streaming' },
    { name: 'PixelLab', icon: <FaImage />, color: 'text-blue-400', category: 'Graphic Editor' },
    { name: 'PicsArt', icon: <FaPaintBrush />, color: 'text-pink-500', category: 'Photo Editor' },
    { name: 'Wink', icon: <FaVideo />, color: 'text-yellow-400', category: 'Video Enhancer' },
  ];

  const filteredProjects =
    projectFilter === "all"
      ? projectsData
      : projectsData.filter((item) => item.category === projectFilter);

  return (
    <section id="portofolio" className="py-24 w-full min-h-screen relative">
      
      {/* Header & Tab */}
      <Reveal>
        <div className="text-center mb-12">
          <h3 className="text-teal-400 tracking-widest text-sm font-semibold uppercase mb-4">
            Portofolio Saya
          </h3>
          <div className="inline-flex bg-gray-900 p-2 rounded-full border border-gray-800">
            {["projects", "certificates", "tech stack"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeTab === tab
                    ? "bg-teal-500 text-black shadow-lg shadow-teal-500/25"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </Reveal>

      {/* A. VIEW PROJECTS */}
      {activeTab === "projects" && (
        <div className="px-4 md:px-0">
          <Reveal>
            <div className="flex flex-wrap justify-center gap-4 mb-10">
              {["all", "project", "design", "editing"].map((filter) => (
                <button
                  key={filter}
                  onClick={() => setProjectFilter(filter)}
                  className={`text-sm pb-1 border-b-2 transition-colors ${
                    projectFilter === filter
                      ? "border-teal-400 text-white"
                      : "border-transparent text-gray-500 hover:text-gray-300"
                  }`}
                >
                  {filter === "all"
                    ? "Semua"
                    : filter.charAt(0).toUpperCase() + filter.slice(1)}
                </button>
              ))}
            </div>
          </Reveal>

          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((item) => {
                const isLink = item.link !== null && item.link !== undefined;
                const CardWrapper = isLink ? 'a' : 'div';
                const wrapperProps = isLink 
                  ? { href: item.link, target: "_blank", rel: "noopener noreferrer", className: "cursor-pointer" }
                  : { className: "cursor-default" };

                return (
                  <motion.div
                    layout
                    key={item.id}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3 }}
                    className="rounded-2xl"
                  >
                    <CardWrapper
                      {...wrapperProps}
                      className={`block w-full h-full group relative bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 hover:border-teal-500/50 transition-all ${wrapperProps.className}`}
                    >
                      <div className="h-48 overflow-hidden relative">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        {isLink && (
                          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <span className="text-white font-medium flex items-center gap-2 border border-white/30 bg-black/30 px-4 py-2 rounded-full backdrop-blur-sm">
                              Lihat Detail ↗
                            </span>
                          </div>
                        )}
                      </div>
                      <div className="p-6">
                        <span className="text-xs font-bold text-teal-400 uppercase tracking-wider">
                          {item.category}
                        </span>
                        <h3 className="text-xl font-bold text-white mt-2 mb-2 group-hover:text-teal-400 transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-gray-400 text-sm">{item.desc}</p>
                      </div>
                    </CardWrapper>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </div>
      )}

      {/* B. VIEW CERTIFICATES (UPDATE: Tambah onClick) */}
      {activeTab === "certificates" && (
        <Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 md:px-0">
            {certificatesData.map((cert) => (
              <div
                key={cert.id}
                onClick={() => setSelectedCertificate(cert)} // Buka Popup saat diklik
                className="group relative bg-gray-900/50 p-8 rounded-2xl border border-gray-800 hover:bg-gray-800 hover:border-teal-500/50 transition-all cursor-pointer flex flex-col justify-between min-h-[200px]"
              >
                <div>
                  <div className="w-12 h-12 bg-teal-500/10 rounded-full flex items-center justify-center mb-4 text-teal-400 group-hover:scale-110 transition-transform">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-teal-400 transition-colors">{cert.title}</h3>
                  <p className="text-gray-400 text-sm mt-1">{cert.issuer}</p>
                </div>
                
                <div className="flex justify-between items-end mt-6">
                  <p className="text-teal-400 text-sm font-mono">{cert.year}</p>
                  
                  {/* Indikator "Klik untuk lihat" */}
                  <span className="text-xs text-gray-500 group-hover:text-teal-400 transition-colors opacity-0 group-hover:opacity-100 flex items-center gap-1">
                    Lihat 
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3 h-3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607ZM10.5 7.5v6m3-3h-6" />
                    </svg>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      )}

      {/* C. VIEW TECH STACK */}
      {activeTab === "tech stack" && (
        <Reveal>
          {/* UBAH DI SINI: lg:grid-cols-6 untuk membuat 6 kolom pas */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 px-4 md:px-0">
            {techStack.map((item, index) => (
              <div 
                key={index} 
                className="group bg-gray-900 border border-gray-800 p-4 md:p-6 rounded-2xl flex flex-col items-center justify-center gap-3 hover:border-teal-500/50 hover:bg-gray-800 transition-all duration-300"
              >
                <div className={`text-4xl md:text-5xl ${item.color} group-hover:scale-110 transition-transform duration-300 drop-shadow-lg`}>
                  {item.icon}
                </div>
                <div className="text-center">
                  <h4 className="text-white font-bold text-sm md:text-base">{item.name}</h4>
                  <p className="text-gray-500 text-[10px] md:text-xs uppercase tracking-wider mt-1 font-semibold">{item.category}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      )}

      {/* POPUP (MODAL) GAMBAR SERTIFIKAT - DIPERBESAR */}
      <AnimatePresence>
        {selectedCertificate && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-2 md:p-6 bg-black/90 backdrop-blur-md"
            onClick={() => setSelectedCertificate(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              // UKURAN DIBUAT SUPER BESAR: w-[95vw] dan max-w-7xl
              className="relative w-[95vw] md:w-[90vw] max-w-7xl bg-neutral-900 rounded-3xl overflow-hidden border border-gray-700 shadow-2xl flex flex-col"
              onClick={(e) => e.stopPropagation()} 
            >
              
              {/* Tombol Close */}
              <button
                onClick={() => setSelectedCertificate(null)}
                className="absolute top-4 right-4 bg-black/50 hover:bg-red-500 text-white p-2 rounded-full transition-colors z-10 backdrop-blur-sm"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Area Gambar - Dibikin setinggi mungkin (75vh) */}
              <div className="w-full h-[65vh] md:h-[75vh] bg-black/50 p-2 md:p-6 flex items-center justify-center">
                <img 
                  src={selectedCertificate.image} 
                  alt={selectedCertificate.title} 
                  // object-contain bikin gambar selalu pas tanpa kepotong
                  className="w-full h-full object-contain rounded-xl drop-shadow-2xl"
                />
              </div>

              {/* Area Teks & Tombol Resolusi Penuh */}
              <div className="p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 bg-neutral-900 border-t border-gray-800">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white">{selectedCertificate.title}</h3>
                  <p className="text-gray-400 mt-2 text-sm md:text-base">
                    {selectedCertificate.issuer} <span className="mx-2">•</span> 
                    <span className="text-teal-400 font-mono">{selectedCertificate.year}</span>
                  </p>
                </div>
                
                {/* Tombol buka tab baru */}
                <a 
                  href={selectedCertificate.image} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-teal-500 hover:bg-teal-400 text-black px-6 py-3 rounded-xl font-bold text-sm transition-transform hover:-translate-y-1"
                >
                  Buka Resolusi Penuh
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                </a>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default Portfolio;