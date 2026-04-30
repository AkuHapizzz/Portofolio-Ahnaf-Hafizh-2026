import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menus = ['Beranda', 'Tentang', 'Portofolio', 'Kontak'];

  // Fungsi scroll anti-macet untuk HP
  const handleMobileClick = (e, targetId) => {
    e.preventDefault(); 
    setIsOpen(false);

    setTimeout(() => {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    }, 300);
  };

  return (
    // WRAPPER UTAMA: Membuatnya mengambang di tengah (top-4 dan px-4)
    <div className="fixed top-4 left-0 w-full z-50 flex justify-center px-4 md:px-8">
      
      {/* NAVBAR CONTAINER: Efek Kaca (Glassmorphism), Rounded, Shadow */}
      <nav className="w-full max-w-6xl bg-neutral-900/40 backdrop-blur-md border border-white/10 rounded-full shadow-2xl relative transition-all duration-300">
        <div className="px-6 md:px-10 flex justify-between items-center py-4">
          
          {/* LOGO */}
          <a href="#beranda" className="text-2xl font-bold text-white tracking-tighter cursor-pointer z-50">
            Hapizz <span className="text-teal-400">.</span>
          </a>

          {/* MENU DESKTOP */}
          <ul className="hidden md:flex gap-10 text-gray-300 font-medium text-sm">
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


          {/* TOMBOL HAMBURGER (Mobile) */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white z-50 focus:outline-none p-1 rounded-full bg-white/5 border border-white/10"
          >
            {isOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
            )}
          </button>

        </div>

        {/* --- MOBILE MENU DROPDOWN (Mengambang di bawah Navbar) --- */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              // Tampilan kotak menu mobile dibikin memisah sedikit (top-[110%]) dan rounded
              className="md:hidden absolute top-[110%] left-0 w-full bg-neutral-900/80 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl"
            >
              <ul className="flex flex-col gap-0 text-center text-gray-300 font-medium p-4">
                {menus.map((item) => (
                  <li key={item}>
                    <a 
                      href={`#${item.toLowerCase()}`} 
                      onClick={(e) => handleMobileClick(e, item.toLowerCase())} 
                      className="block py-4 hover:text-teal-400 hover:bg-white/5 rounded-xl transition-all text-base"
                    >
                      {item}
                    </a>
                  </li>
                ))}
                
              </ul>
            </motion.div>
          )}
        </AnimatePresence>

      </nav>
    </div>
  );
};

export default Navbar;