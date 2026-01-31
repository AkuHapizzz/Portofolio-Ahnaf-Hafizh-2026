import React from "react";
import Reveal from "./Reveal";

const Hero = () => {
  const handleMouseMove = (e) => {};

  return (
    <section
      id="beranda"
      className="flex flex-col-reverse md:flex-row items-center justify-between w-full min-h-[80vh] gap-10 md:gap-0 py-10 md:py-0"
    >
      <div className="flex-1 text-center md:text-left space-y-6 z-10">
        <Reveal>
          <h3 className="text-teal-400 tracking-[0.2em] text-sm md:text-base font-semibold uppercase">
            Halo, Saya
          </h3>
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            Ahnaf Hafizh <br className="hidden md:block" /> Putra Efendi
          </h1>
        </Reveal>

        <Reveal delay={0.2}>
          <h2 className="text-2xl md:text-3xl text-gray-300 font-medium">
            Seorang
            <p>
              <span className="text-teal-400 underline decoration-teal-400/30 decoration-4 underline-offset-4">
                Front-end Web Developer | UI/UX Designer | Editor
              </span>
            </p>
          </h2>
        </Reveal>

        <Reveal delay={0.4}>
          <p className="text-gray-400 max-w-lg mx-auto md:mx-0 leading-relaxed text-sm md:text-base">
            Saya ingin membantu anda dalam pengembangan tampilan web beserta
            ui/ux dengan membuat solusi digital yang kreatif.
          </p>
        </Reveal>

        <Reveal delay={0.6}>
          <div className="flex items-center justify-center md:justify-start gap-4 text-gray-500 text-sm font-medium pt-2">
            <a href="https://github.com/AkuHapizzz">GitHub</a> • <a href="https://linkedin.com/in/aku-hapizz">LinkedIn</a> • <a href="https://instagram.com/aku.hapizzz">Instagram</a>
          </div>

          <div className="flex gap-4 justify-center md:justify-start pt-4">
            <a
              href="#portofolio"
              className="bg-teal-500 hover:bg-teal-400 text-black font-bold py-3 px-8 rounded-full transition-transform hover:-translate-y-1 shadow-lg shadow-teal-500/20"
            >
              Lihat Proyek ↗
            </a>
            <a
              href="#kontak"
              className="border border-gray-600 hover:border-white text-white font-medium py-3 px-8 rounded-full transition-colors bg-transparent"
            >
              Kontak Saya
            </a>
          </div>
        </Reveal>
      </div>

      <div className="flex-1 flex justify-center md:justify-end relative w-full md:w-auto">
        <Reveal delay={0.8}>
          <div
            onMouseMove={handleMouseMove}
            style={{ "--mouse-x": "0px", "--mouse-y": "0px" }}
            className="relative w-[300px] h-[400px] md:w-[400px] md:h-[550px] bg-gray-900 rounded-[40px] overflow-hidden border border-gray-800 shadow-2xl group"
          >
            <img
              src="/bromo1.jpg"
              alt="Profile"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-105 group-hover:scale-110"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Hero;
