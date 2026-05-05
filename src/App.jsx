import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ParticleBackground from './components/ParticleBackground';
import Home from './pages/Home';
import ServiceDetail from './pages/ServiceDetail';
import Projects from './components/Projects';
import Courses from './components/Courses';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import CTASection from './components/CTASection';
import About from './components/About';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';

function App() {
  return (
    <BrowserRouter>
      <div className="bg-dark-950 text-gray-100 min-h-screen font-sans relative">
        {/* Noise texture overlay for film grain effect */}
        <div className="noise-overlay" />

        {/* Animated particle canvas */}
        <ParticleBackground />

        {/* Navigation */}
        <Navbar />

        {/* Rutas Principales */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servicio/:id" element={<ServiceDetail />} />
          <Route path="/proyectos" element={<Projects />} />
          <Route path="/cursos" element={<Courses />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/sobre" element={<About />} />
        </Routes>

        {/* Global Pre-Footer CTA */}
        <CTASection />

        {/* Footer Global */}
        <Footer />
        
        {/* Widget Whatsapp Global Flotante */}
        <WhatsAppButton />
      </div>
    </BrowserRouter>
  );
}

export default App;
