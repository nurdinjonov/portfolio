import { AppProvider, useApp } from './context/AppContext';
import { FullScreenCosmos } from './components/3d/FullScreenCosmos';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function PortfolioMain() {
  const { theme } = useApp();

  return (
    <div
      className={`min-h-screen relative transition-colors duration-300 selection:bg-emerald-500/30 selection:text-emerald-300 ${
        theme === 'dark'
          ? 'bg-[#030712] text-slate-100'
          : 'bg-[#f8fafc] text-slate-900'
      }`}
    >
      {/* Full Screen 3D Interactive Cosmos Scene */}
      <FullScreenCosmos />

      {/* Main UI Layer */}
      <Navbar />
      
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export function App() {
  return (
    <AppProvider>
      <PortfolioMain />
    </AppProvider>
  );
}

export default App;
