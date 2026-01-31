import React from 'react';
import Reveal from './Reveal';

const About = () => {
  return (
    <section id="tentang" className="py-20 w-full relative">

      <div className="w-full flex flex-col md:flex-row gap-16 items-center justify-between">

        <div className="flex-1 space-y-6 text-center md:text-left">
          <Reveal>
            <h3 className="text-teal-400 tracking-widest text-sm font-semibold uppercase">
              Tentang Saya
            </h3>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Developer & Designer yang Mengutamakan <br />
              <span className="text-gray-500">Kualitas & Estetika dalam website dan design.</span>
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="text-gray-400 leading-relaxed text-lg max-w-2xl mx-auto md:mx-0">
              Saya adalah mahasiswa IT Politeknik Elektronika Negeri Surabaya (PENS). 
              Saat ini saya sedang mengikuti pendidikan di D3 Teknik Informatika PENS dan sudah berjalan selama hampir 2 tahun.
            </p>
          </Reveal>
          
          <Reveal delay={0.4}>
            <p className="text-gray-400 leading-relaxed text-lg max-w-2xl mx-auto md:mx-0">
              Selain menjadi Front-end web developer, saya juga suka dalam mengeksplorasi dunia desain UI/UX dan video / foto editing 
              untuk memperdalam ilmu editing yang telah saya pelajari sebelumnya yang dimana saya memulai editing sejak bangku SMP.
            </p>
            
            <div className="flex justify-center md:justify-start gap-10 pt-6 border-t border-gray-800 mt-8">
              <div>
                <h4 className="text-4xl font-bold text-white">5+</h4>
                <p className="text-sm text-gray-500 mt-1">Tahun Pengalaman Editing</p>
              </div>
              <div>
                <h4 className="text-4xl font-bold text-white">10+</h4>
                <p className="text-sm text-gray-500 mt-1">Proyek Selesai Editing</p>
              </div>
              <div>
                <h4 className="text-4xl font-bold text-white">2+</h4>
                <p className="text-sm text-gray-500 mt-1">Tahun Pengalaman Web & Ui/Ux</p>
              </div>
              <div>
                <h4 className="text-4xl font-bold text-white">5+</h4>
                <p className="text-sm text-gray-500 mt-1">Proyek Selesai Web & Ui/Ux</p>
              </div>
            </div>
          </Reveal>
        </div>

      </div>
    </section>
  );
};

export default About;