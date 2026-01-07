import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Portofolio from './components/Portofolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-neutral-950 min-h-screen text-white font-sans selection:bg-teal-500 selection:text-black overflow-x-hidden relative">

      <div className="fixed top-[-10%] right-[-5%] w-[500px] h-[500px] bg-teal-500/40 rounded-full blur-[120px] pointer-events-none animate-blob opacity-70" />
      <div 
        className="fixed bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-600/40 rounded-full blur-[120px] pointer-events-none animate-blob opacity-70"
        style={{ animationDelay: '3s' }} 
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 flex flex-col min-h-screen pt-24">
        
        <Navbar />
        <Hero />
        <About />
        <Portofolio />
        <Contact/>
        <Footer />
        
      </div>

    </div>
  );
}

export default App;