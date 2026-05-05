import { ArrowRight, Globe2 } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const CTASection = () => {
  const [sectionRef, isSectionVisible] = useScrollReveal(0.1);

  return (
    <section className="w-full">
      {/* Top Part: Dark Background */}
      <div className="bg-[#050B14] py-20 px-4 border-t border-gray-900/50">
        <div ref={sectionRef} className={`max-w-4xl mx-auto text-center ${isSectionVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Desarrollo Web de Alto Impacto
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            Mi enfoque estratégico es impulsar tu presencia digital sin fronteras. 
            Construyo tecnología moderna, escalable y optimizada que realmente ayuda a las empresas pequeñas y grandes a crecer de forma automatizada.
          </p>
          
          <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-xl bg-gray-900/50 border border-gray-800 backdrop-blur-sm self-center shadow-lg">
             <Globe2 className="w-5 h-5 text-cyan-400" />
             <span className="text-sm font-mono font-semibold text-gray-300">Cobertura Global & Remota</span>
          </div>
        </div>
      </div>

      {/* Bottom Part: Bright Blue Background */}
      <div className="relative py-20 md:py-32 px-4 bg-blue-600 overflow-hidden">
        {/* Subtle patterned background */}
        <div className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l25.98 15v30L30 60 4.02 45V15z' fill-opacity='0' stroke='%23ffffff' stroke-width='1.5'/%3E%3C/svg%3E")`,
            backgroundSize: '48px 48px'
          }}
        />
        
        {/* Glowing accents for the blue section */}
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-blue-400/40 rounded-full blur-[150px] pointer-events-none -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-400/30 rounded-full blur-[130px] pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 drop-shadow-lg tracking-tight leading-tight">
            ¿Quieres vender más con una página web profesional?
          </h2>
          <p className="text-blue-100/90 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-medium drop-shadow-sm">
            No busques más "quién crea páginas web". Empieza hoy mismo con el mejor servicio de desarrollo web enfocado en resultados.
          </p>
          
          <a
            href="https://wa.me/59178680723"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 md:px-10 md:py-5 bg-white text-blue-700 hover:text-blue-800 hover:bg-gray-50 font-black text-lg md:text-xl rounded-xl transition-all duration-300 shadow-[0_10_40px_rgba(255,255,255,0.2)] hover:shadow-[0_15_50px_rgba(255,255,255,0.4)] hover:-translate-y-1.5 group"
          >
            Quiero mi Página Web Ahora
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1.5 transition-transform" strokeWidth={3} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
