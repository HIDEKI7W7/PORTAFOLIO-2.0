import { useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { servicesData } from '../data/servicesData';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServiceDetail = () => {
  const { id } = useParams();
  const service = servicesData[id];

  // Scroll to top when opening the page (Instant)
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    const timer = setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }, 50);
    return () => clearTimeout(timer);
  }, [id]);

  if (!service) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="pt-24 pb-20 min-h-screen px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* Back navigation */}
        <Link 
          to="/#servicios" 
          className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors mb-10 text-sm font-medium"
        >
          <ArrowLeft className="w-4 h-4" />
          Volver a Servicios
        </Link>

        {/* Header */}
        <div className="mb-16 max-w-4xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6 tracking-tight leading-[1.1]">
            {service.title}
          </h1>
          <p className="text-xl md:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400 font-medium">
            {service.subtitle}
          </p>
        </div>

        {/* Layout 2 Columns (Content | Sticky CTA) */}
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          
          {/* Left Column: Content */}
          <div className="flex-1 w-full text-gray-300">
            {/* Description Pars */}
            <div className="space-y-6 text-lg leading-relaxed mb-16">
              <p>{service.description1}</p>
              <p>{service.description2}</p>
            </div>

            {/* Types Section */}
            {service.types && service.types.length > 0 && (
              <div className="mb-16">
                <h3 className="text-2xl font-bold text-white mb-6">{service.typesTitle}</h3>
                <ul className="space-y-4">
                  {service.types.map((type, idx) => (
                    <li key={idx} className="flex gap-3">
                      <div className="mt-1 w-1.5 h-1.5 rounded-full bg-cyan-500 flex-shrink-0" />
                      <div>
                        <strong className="text-white font-semibold">{type.name}</strong> — <span className="text-gray-400">{type.desc}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Closing / Mid Text */}
            {service.closingText && (
              <p className="text-gray-400 border-l-2 border-emerald-500 pl-4 py-1 italic font-medium mb-16">
                {service.closingText}
              </p>
            )}

            {/* Included Features */}
            {service.features && service.features.length > 0 && (
              <div className="mb-16">
                <h3 className="text-2xl font-bold text-white mb-8">Características Incluidas</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-4 rounded-xl bg-gray-900/50 border border-gray-800/50 hover:border-cyan-500/30 transition-colors">
                      <CheckCircle2 className="w-5 h-5 text-cyan-500 flex-shrink-0" />
                      <span className="text-sm font-medium">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Benefits Row */}
            {service.benefits && service.benefits.length > 0 && (
              <div className="mb-10">
                <h3 className="text-3xl font-bold text-white mb-10 text-center">Beneficios Reales para tu Negocio</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {service.benefits.map((ben, idx) => (
                    <div key={idx} className="p-6 rounded-2xl bg-gray-900/40 border border-gray-800 hover:bg-gray-800/60 transition-all group">
                      <div className="text-4xl font-black text-gray-800 group-hover:text-cyan-900/40 transition-colors mb-4">
                        {ben.id}
                      </div>
                      <h4 className="text-lg font-bold text-white mb-2">{ben.title}</h4>
                      <p className="text-sm text-gray-400 leading-relaxed">{ben.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* FAQs */}
            {service.faqs && (
              <div className="mb-10 mt-16 pt-10 border-t border-gray-800/50">
                <h3 className="text-3xl font-bold text-white mb-3 text-center">{service.faqs.title}</h3>
                <p className="text-gray-400 text-center mb-10">{service.faqs.subtitle}</p>
                <div className="space-y-4">
                  {service.faqs.items.map((faq, idx) => (
                    <div key={idx} className="p-6 rounded-2xl bg-gray-900/40 border border-gray-800 hover:border-gray-700 transition-colors">
                      <h4 className="text-lg font-bold text-white mb-3">{faq.q}</h4>
                      <p className="text-gray-400 leading-relaxed text-sm md:text-base">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Sticky CTA */}
          <div className="w-full lg:w-[350px] flex-shrink-0 lg:sticky lg:top-28">
            <div className="p-8 rounded-3xl bg-gradient-to-b from-[#0f172a] to-[#020617] border border-gray-800/80 shadow-2xl shadow-cyan-900/10">
              <h3 className="text-2xl font-black text-white mb-4 line-clamp-2 leading-tight">
                ¿Preparado para empezar?
              </h3>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                Escríbeme para agendar una consultoría de 15 minutos sin costo. Evaluaremos tu negocio y te daré un presupuesto detallado.
              </p>
              <a 
                href="https://wa.me/59178680723" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full block text-center py-3 px-6 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-lg shadow-lg shadow-emerald-500/20 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                Contactar por WhatsApp
              </a>
              <p className="text-center text-xs tracking-wide text-gray-500 mt-4 font-mono">
                Respondo normalmente en menos de 1 hora.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
