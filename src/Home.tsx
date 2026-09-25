import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { About } from './components/sections/About';
import {Testimonials} from './components/sections/Testimonials';
import {Hero} from './components/sections/Hero';
// Importez ici Features.tsx, Testimonials.tsx, Contact.tsx selon le même modèle

function App() {
  return (
    <div className="min-h-screen bg-white selection:bg-cfpmc-red selection:text-white font-sans text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <About/>
        {/* <Features /> */}
        <Testimonials />
        {/* <Contact /> */}
      </main>

      <Footer />
    </div>
  );
}

export default App;