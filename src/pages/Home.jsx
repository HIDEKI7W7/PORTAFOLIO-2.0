import Hero from '../components/Hero';
import Services from '../components/Services';
import FAQ from '../components/FAQ';
import { useEffect } from 'react';
import { useLocation, useNavigationType } from 'react-router-dom';

const Home = () => {
  const location = useLocation();
  const navType = useNavigationType();

  useEffect(() => {
    // Si la persona presionó el botón "Atrás" de su navegador y no hay un anclaje específico
    // en la URL, no hacemos scroll artificial y dejamos que el navegador recuerde la posición.
    if (navType === 'POP' && !location.hash) {
      return; 
    }

    if (location.hash) {
      setTimeout(() => {
        const el = document.getElementById(location.hash.slice(1));
        if (el) {
          const yOffset = -80; 
          const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
          window.scrollTo({top: y, behavior: 'smooth'});
        }
      }, 100);
    } else {
      // Solo manda arriba si NO es el botón de regreso
      if (navType !== 'POP') {
        window.scrollTo({top: 0, left: 0, behavior: 'instant'});
      }
    }
  }, [location, navType]);

  return (
    <main>
      <Hero />
      <Services />
      <FAQ />
    </main>
  );
};

export default Home;
