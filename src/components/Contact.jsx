import React from 'react';
import Reveal from './Reveal';

const Contact = () => {
  const contacts = [
    {
      name: "WhatsApp",
      link: "https://wa.me/6289502391355",
      icon: (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>),
      color: "hover:bg-green-500 hover:text-white"
    },
    {
      name: "Instagram",
      link: "https://instagram.com/aku.hapizzz",
      icon: (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>),
      color: "hover:bg-pink-600 hover:text-white"
    },
    {
      name: "TikTok",
      link: "https://tiktok.com/@aku.hapizz",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path></svg>
      ),
      color: "hover:bg-white-100 hover:text-white"
    },
    {
      name: "GitHub",
      link: "https://github.com/AkuHapizzz", // Ganti link GitHub
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
      ),
      color: "hover:bg-gray-700 hover:text-white"
    },
    {
      name: "LinkedIn",
      link: "https://linkedin.com/in/aku-hapizz",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
      ),
      color: "hover:bg-blue-600 hover:text-white"
    },
    {
      name: "Email",
      link: "akuhapizz@gmail.com",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
      ),
      color: "hover:bg-red-500 hover:text-white"
    }
  ];

  return (
    <section id="kontak" className="py-24 w-full">
      <div className="max-w-4xl mx-auto px-6 text-center">
        
        {/* Reveal untuk Judul */}
        <Reveal>
          <h3 className="text-teal-400 tracking-widest text-sm font-semibold uppercase mb-4">
            Hubungi Saya
          </h3>
          <h2 className="text-4xl font-bold text-white mb-8">
            Mari Bekerja Sama
          </h2>
          <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
            Saya selalu terbuka bagi anda yang tertarik bekerja sama dengan saya untuk membuat project baru atau hanya sekedar
            bebincang santai. Hubungi saya dibawah ini.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {contacts.map((item, index) => (
              <a 
                key={index} 
                href={item.link}
                target="_blank" 
                rel="noopener noreferrer"
                className={`flex flex-col items-center justify-center p-8 bg-gray-900 border border-gray-800 rounded-2xl transition-all duration-300 group ${item.color}`}
              >
                <div className="bg-gray-800 p-4 rounded-full mb-4 group-hover:bg-white/20 transition-colors text-white">
                  {item.icon}
                </div>
                <span className="font-medium text-gray-300 group-hover:text-white">
                  {item.name}
                </span>
              </a>
            ))}
          </div>
        </Reveal>

      </div>
    </section>
  );
};

export default Contact;