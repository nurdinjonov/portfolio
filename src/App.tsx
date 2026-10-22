import { FullScreenCosmos } from './components/3d/FullScreenCosmos';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export function App() {
  return (
    <div className="min-h-screen bg-[#030712] text-gray-100 relative selection:bg-indigo-500/30 selection:text-white bg-grid-pattern">
      {/* Full Screen 3D Interactive Cosmos Scene */}
      <FullScreenCosmos />

      {/* Main UI Layer */}
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Projects />
        <Skills />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
