import { useState } from 'react';
import { ChevronDown, MessageCircleQuestion } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const globalFaqs = [
  {
    q: '¿Tiempo de entrega promedio para un proyecto web o app?',
    a: 'Depende de la complejidad. Las Landing Pages corporativas pueden estar listas en 1-2 semanas. Las apps móviles y sistemas e-commerce automatizados pueden tomar de 4 a 12 semanas. Siempre establezco un cronograma claro desde la primera consultoría.'
  },
  {
    q: '¿Ofreces soporte o mantenimiento después del lanzamiento?',
    a: 'Sí, absolutamente. Todos mis proyectos incluyen una garantía técnica post-lanzamiento. Además, ofrezco planes de mantenimiento mensual (Hosting, actualizaciones, seguridad) para que te enfoques en tu negocio sin preocuparte por la técnica.'
  },
  {
    q: '¿Cómo funciona la forma de pago?',
    a: 'Para empezar un proyecto estructurado, suelo trabajar con un anticipo del 50% al aprobar la ruta de trabajo y el 50% restante al entregar el proyecto final y haber realizado las pruebas satisfactorias. Acepto múltiples pasarelas digitales.'
  },
  {
    q: '¿Puedes integrarte con mi equipo si ya tengo un sistema?',
    a: 'Por supuesto. Ya sea como auditor de Ciberseguridad (Pentesting) o implementando Bots de IA a tu embudo en un backend existente, puedo trabajar en código heredado y colaborar con tus desarrolladores para asegurar un ecosistema fluido.'
  },
  {
    q: '¿Asesoras para comprar dominios y servidores?',
    a: 'Todo está cubierto. Yo me encargo de recomendarte, configurar y desplegar tu sistema en la nube (AWS, Vercel, o VPS personalizado) integrando los certificados SSL correspondientes.'
  }
];

const FAQ = () => {
  const [sectionRef, isSectionVisible] = useScrollReveal(0.1);
  const [openIndex, setOpenIndex] = useState(0); // Primera abierta por defecto

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="py-24 md:py-32 px-4 relative overflow-hidden bg-dark-950">
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-cyan-600/3 rounded-full blur-[120px] pointer-events-none" />
      
      <div ref={sectionRef} className="max-w-4xl mx-auto relative z-10">
        
        {/* Header */}
        <div className={`mb-16 text-center ${isSectionVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-gray-900/50 border border-gray-800/80 mb-6 shadow-xl">
            <MessageCircleQuestion className="w-8 h-8 text-cyan-400" />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-white mb-5">
            Preguntas <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">Frecuentes</span>
          </h2>
          <div className="section-divider mx-auto" />
          <p className="mt-5 text-gray-400 text-lg">
            Respuestas directas a las dudas comunes sobre mis servicios y método de trabajo.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className={`space-y-4 ${isSectionVisible ? 'animate-fade-in-up animate-delay-200' : 'opacity-0'}`}>
          {globalFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx} 
                className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                  isOpen 
                    ? 'bg-gray-800/60 border-cyan-500/30 shadow-lg shadow-cyan-900/10' 
                    : 'bg-gray-900/40 border-gray-800 hover:border-gray-700'
                }`}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 focus:outline-none"
                >
                  <h4 className={`text-lg font-bold transition-colors ${isOpen ? 'text-white' : 'text-gray-300'}`}>
                    {faq.q}
                  </h4>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 bg-gray-800 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-cyan-500/20 text-cyan-400' : 'text-gray-400'}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>
                
                <div 
                  className={`transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-6 pt-2">
                    <p className="text-gray-400 leading-relaxed text-[0.95rem]">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FAQ;
