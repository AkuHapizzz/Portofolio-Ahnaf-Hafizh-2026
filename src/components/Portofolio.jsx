import React, { useState } from "react";
import Reveal from "./Reveal";
// 1. Import tambahan: AnimatePresence dan motion
import { motion, AnimatePresence } from "framer-motion";

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("projects");
  const [projectFilter, setProjectFilter] = useState("all");

  const projectsData = [
    {
      id: 1,
      category: "project",
      title: "Website Bimbel Sederhana",
      image: "/public/web bimbel.png",
      desc: "Tailwind CSS",
      link : "https://contoh-website-bimbel-sederhana.vercel.app/",
    },
    {
      id: 2,
      category: "design",
      title: "Pembuatan Desain Aplikasi Mengenai Makanan Makanan Indonesia",
      image: "/public/apk makanan.png",
      desc: "Figma",
      link: "https://www.figma.com/design/Rp0QuA4zjqsNEaxXyO8vif/Untitled?node-id=0-1&t=lezvj9pe1kUiz6HC-1",
    },
    {
      id: 4,
      category: "project",
      title: "Website Cafe Sederhana",
      image: "/public/webcafe.png",
      desc: "Tailwind CSS",
      link : "https://contoh-website-cafe-sederhana.vercel.app/",
    },
    {
      id: 5,
      category: "design",
      title: "Pembuatan Desain Aplikasi Penyimpanan Data Barang",
      image: "/public/Desktop Analyst Admin Finance.png",
      desc: "Figma",
    },
    {
      id: 7,
      category: "project",
      title: "Website Pribadi Sederhana",
      image: "/public/web hapizz.png",
      desc: "Tailwind CSS, Vanilla Java Script",
      link : "https://portofolio-hapizzz-2025.vercel.app/",
    },
    {
      id: 8,
      category: "project",
      title: "CRUD Karyawan",
      image: "/public/Crud.png",
      desc: "Tailwind CSS, PHP, MySQL",
    },
  ];

  const certificatesData = [
    {
      id: 1,
      title: "Sertifikat Kompetensi React",
      issuer: "Dicoding Indonesia",
      year: "2024",
    },
    {
      id: 2,
      title: "UI/UX Design Masterclass",
      issuer: "BuildWithAngga",
      year: "2023",
    },
    {
      id: 3,
      title: "Dasar Pemrograman Web",
      issuer: "FreeCodeCamp",
      year: "2023",
    },
  ];

  const techStackData = [
    {
      category: "Frameworks",
      items: ["React", "Laravel", "Tailwind CSS", "Next.js"],
    },
    {
      category: "Tools",
      items: ["Git & GitHub", "VS Code", "Postman", "Docker"],
    },
    {
      category: "Design & Editing",
      items: ["Figma", "Adobe Premiere", "Photoshop", "Canva"],
    },
  ];

  const filteredProjects =
    projectFilter === "all"
      ? projectsData
      : projectsData.filter((item) => item.category === projectFilter);

  return (
    <section id="portofolio" className="py-24 w-full min-h-screen">
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
          {" "}
          {/* Wrapper biar gak mepet di HP */}
          {/* Sub-Filter */}
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
              {filteredProjects.map((item) => (
                <motion.div
                  layout
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                  // Hapus class styling dari sini, pindahkan ke tag <a> di bawah
                  className="rounded-2xl"
                >
                  {/* BUNGKUS DENGAN TAG <A> SUPAYA BISA DIKLIK */}
                  <a
                    href={item.link}
                    target="_blank" // Membuka di tab baru
                    rel="noopener noreferrer" // Wajib untuk keamanan
                    className="block w-full h-full group relative bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 hover:border-teal-500/50 transition-all cursor-pointer"
                  >
                    {/* Gambar */}
                    <div className="h-48 overflow-hidden relative">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />

                      {/* Opsi Tambahan: Ikon 'Visit' muncul saat hover biar user tau bisa diklik */}
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="text-white font-medium flex items-center gap-2 border border-white/30 bg-black/30 px-4 py-2 rounded-full backdrop-blur-sm">
                          Lihat Detail ↗
                        </span>
                      </div>
                    </div>

                    {/* Deskripsi */}
                    <div className="p-6">
                      <span className="text-xs font-bold text-teal-400 uppercase tracking-wider">
                        {item.category}
                      </span>
                      <h3 className="text-xl font-bold text-white mt-2 mb-2 group-hover:text-teal-400 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-gray-400 text-sm">{item.desc}</p>
                    </div>
                  </a>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      )}

      {/* B. VIEW CERTIFICATES */}
      {activeTab === "certificates" && (
        <Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certificatesData.map((cert) => (
              <div
                key={cert.id}
                className="bg-gray-900/50 p-8 rounded-2xl border border-gray-800 hover:bg-gray-800 transition-colors flex flex-col justify-between min-h-[200px]"
              >
                <div>
                  <div className="w-12 h-12 bg-teal-500/10 rounded-full flex items-center justify-center mb-4 text-teal-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-white">{cert.title}</h3>
                  <p className="text-gray-400 text-sm mt-1">{cert.issuer}</p>
                </div>
                <p className="text-teal-400 text-sm font-mono mt-6">
                  {cert.year}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      )}

      {/* C. VIEW TECH STACK */}
      {activeTab === "tech stack" && (
        <Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {techStackData.map((stack, index) => (
              <div
                key={index}
                className="bg-neutral-900 p-6 rounded-2xl border border-gray-800"
              >
                <h3 className="text-xl font-bold text-white mb-6 border-b border-gray-800 pb-2">
                  {stack.category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {stack.items.map((item, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-lg border border-gray-700 hover:border-teal-500 hover:text-teal-400 transition-colors cursor-default"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      )}
    </section>
  );
};

export default Portfolio;
