import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menus = ['Beranda', 'Tentang', 'Portofolio', 'Kontak'];

  // --- FUNGSI SCROLL DENGAN PENUNDAAN (TIMEOUT) ---
  const handleMobileClick = (e, targetId) => {
    e.preventDefault(); // Matikan link standar biar gak bentrok
    
    // 1. Tutup Menu dulu
    setIsOpen(false);

    // 2. Tunggu 300ms (sesuai durasi animasi menu), baru scroll
    setTimeout(() => {
      const element = document.getElementById(targetId);
      if (element) {
        // Scroll ke elemen tersebut
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    }, 300);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-neutral-950/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center py-4">
        
        {/* LOGO */}
        <a href="#beranda" className="text-2xl font-bold text-white tracking-tighter cursor-pointer z-50">
          Hapizzz.
        </a>

        {/* MENU DESKTOP (Normal Href) */}
        <ul className="hidden md:flex gap-10 text-gray-400 font-medium text-sm">
          {menus.map((item) => (
            <li key={item}>
              <a 
                href={`#${item.toLowerCase()}`}
                className="hover:text-teal-400 transition-colors duration-300"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* TOMBOL HAMBURGER */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white z-50 focus:outline-none p-2"
        >
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
          )}
        </button>

      </div>

      {/* --- MOBILE MENU DROPDOWN --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-neutral-950 border-b border-gray-800 overflow-hidden absolute w-full left-0 top-full shadow-2xl"
          >
            <ul className="flex flex-col gap-0 text-center text-gray-300 font-medium">
              {menus.map((item) => (
                <li key={item} className="border-b border-gray-800/50 last:border-0">
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    // PANGGIL FUNGSI SAKTI DI SINI:
                    onClick={(e) => handleMobileClick(e, item.toLowerCase())} 
                    className="block py-6 hover:text-teal-400 hover:bg-gray-900/50 transition-all text-lg"
                  >
                    {item}
                  </a>
                </li>
              ))}
              <li className="py-6 text-sm text-gray-500">
                ID | EN
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;