import React, { useState } from "react";
import Reveal from "./Reveal";
// Pastikan framer-motion sudah diinstall: npm install framer-motion
import { motion, AnimatePresence } from "framer-motion";

import {
  SiReact, SiLaravel, SiTailwindcss, SiBootstrap, SiHtml5,
  SiGit, SiApache, SiFigma, SiCanva, SiObsstudio,
  SiMysql, SiNextdotjs, SiGooglegemini 
} from "react-icons/si";

// 2. Import VscVscode (Pengganti SiVisualstudiocode yang error tadi)
import { VscVscode } from "react-icons/vsc"; 

import { FaVideo, FaImage, FaPaintBrush, FaCut } from "react-icons/fa";

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("projects");
  const [projectFilter, setProjectFilter] = useState("all");

  const projectsData = [
    {
      id: 1,
      category: "project",
      title: "Website Bimbel Sederhana",
      image: "/web bimbel.png",
      desc: "Tailwind CSS",
      link: "https://contoh-website-bimbel-sederhana.vercel.app/",
    },
    {
      id: 2,
      category: "design",
      title: "Desain App Makanan Indo",
      image: "/apk makanan.png",
      desc: "Figma",
      link: "https://www.figma.com/design/Rp0QuA4zjqsNEaxXyO8vif/Untitled?node-id=0-1&t=lezvj9pe1kUiz6HC-1",
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
      title: "Desain App Data Barang",
      image: "/Desktop Analyst Admin Finance.png",
      desc: "Figma",
      link: null, 
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
      link: null, 
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

  const certificatesData = [
    {
      id: 1,
      title: "-",
      issuer: "",
      year: "",
    },
    {
      id: 2,
      title: "-",
      issuer: "",
      year: "",
    },
    {
      id: 3,
      title: "-",
      issuer: "",
      year: "",
    },
  ];

  const techStack = [
    // Frameworks & Libs
    { name: 'React', icon: <SiReact />, color: 'text-blue-400', category: 'Frontend Lib' },
    { name: 'Next.js', icon: <SiNextdotjs />, color: 'text-white', category: 'Web Framework' }, // BARU
    { name: 'Laravel', icon: <SiLaravel />, color: 'text-red-500', category: 'PHP Framework' },
    { name: 'Tailwind', icon: <SiTailwindcss />, color: 'text-cyan-400', category: 'CSS Framework' },
    { name: 'Bootstrap', icon: <SiBootstrap />, color: 'text-purple-500', category: 'CSS Framework' },
    
    // Languages & Database
    { name: 'HTML5', icon: <SiHtml5 />, color: 'text-orange-500', category: 'Markup Language' },
    { name: 'MySQL', icon: <SiMysql />, color: 'text-blue-500', category: 'Database' }, // BARU
    
    // Tools & AI
    { name: 'VS Code', icon: <VscVscode />, color: 'text-blue-500', category: 'Code Editor' },
    { name: 'Git', icon: <SiGit />, color: 'text-orange-600', category: 'Version Control' },
    { name: 'Gemini AI', icon: <SiGooglegemini />, color: 'text-blue-300', category: 'Artificial Intelligence' }, // BARU
    { name: 'NetBeans', icon: <SiApache />, color: 'text-blue-300', category: 'Java IDE' },
    
    // Design & Creative
    { name: 'Figma', icon: <SiFigma />, color: 'text-pink-400', category: 'UI/UX Design' },
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
                // LOGIKA BARU: Tentukan apakah pakai Link (a) atau Div biasa
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
                        {/* Overlay hanya muncul jika ada link */}
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
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
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
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {techStack.map((item, index) => (
              <div
                key={index}
                className="group bg-gray-900 border border-gray-800 p-6 rounded-xl flex flex-col items-center justify-center gap-4 hover:border-teal-500/50 hover:bg-gray-800 transition-all duration-300"
              >
                <div className={`text-3xl ${item.color} group-hover:scale-110 transition-transform duration-300 drop-shadow-lg`}>
                  {item.icon}
                </div>
                <div className="text-center">
                  <h4 className="text-white font-bold text-lg">{item.name}</h4>
                  <p className="text-gray-500 text-xs uppercase tracking-wider mt-1 font-semibold">
                    {item.category}
                  </p>
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