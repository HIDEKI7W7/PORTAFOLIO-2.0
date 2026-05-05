import { Globe, Bot, Zap, Smartphone, ArrowRight, Shield, BookOpen, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';

const services = [
  {
    title: 'Desarrollo de Páginas Web Profesionales',
    description: 'Creo páginas web rápidas, modernas y optimizadas para que tu negocio venda más en internet. Diseño responsivo, SEO incluido y enfocado en resultados reales.',
    Icon: Globe,
    color: 'cyan',
    gradient: 'from-cyan-500/20 to-cyan-900/10',
    iconColor: 'text-cyan-400',
    borderHover: 'hover:border-cyan-500/40',
    linkText: 'Ver detalles y precios',
    linkHref: '/servicio/web'
  },
  {
    title: 'Bots para WhatsApp y Telegram',
    description: 'Automatiza la atención al cliente de tu negocio con bots inteligentes. Respuestas 24/7, gestión de pedidos e integración avanzada con IA (ChatGPT/Gemini).',
    Icon: Bot,
    color: 'emerald',
    gradient: 'from-emerald-500/20 to-emerald-900/10',
    iconColor: 'text-emerald-400',
    borderHover: 'hover:border-emerald-500/40',
    linkText: 'Solicitar desarrollo de Bot',
    linkHref: '/servicio/bots'
  },
  {
    title: 'Automatización de Negocios',
    description: 'Elimina tareas repetitivas y optimiza los procesos de tu empresa con automatización a medida. Ahorra tiempo, reduce errores humanos y enfócate en crecer.',
    Icon: Zap,
    color: 'purple',
    gradient: 'from-purple-500/20 to-purple-900/10',
    iconColor: 'text-purple-400',
    borderHover: 'hover:border-purple-500/40',
    linkText: 'Consultar automatización',
    linkHref: '/servicio/automation'
  },
  {
    title: 'Creación de Apps Móviles',
    description: 'Lleva tu negocio al bolsillo de tus clientes. Desarrollo de aplicaciones móviles multiplataforma innovadoras con un rendimiento excepcional y estética cuidada.',
    Icon: Smartphone,
    color: 'cyan',
    gradient: 'from-cyan-500/20 to-cyan-900/10',
    iconColor: 'text-cyan-400',
    borderHover: 'hover:border-cyan-500/40',
    linkText: 'Desarrollar mi App',
    linkHref: '/servicio/apps'
  },
  {
    title: 'Ciberseguridad y Auditoría',
    description: 'Protege la información crítica de tu empresa. Realizo auditorías de seguridad, pruebas de penetración (pentesting) y blindaje de servidores en producción.',
    Icon: Shield,
    color: 'red',
    gradient: 'from-red-500/20 to-red-900/10',
    iconColor: 'text-red-400',
    borderHover: 'hover:border-red-500/40',
    linkText: 'Asegurar infraestructura',
    linkHref: '/servicio/security'
  },
  {
    title: 'Vibe Coding (IA)',
    description: 'Desarrollo acelerado impulsado por IA. Transformo tus ideas en código funcional en tiempo récord utilizando herramientas de última generación.',
    Icon: Sparkles,
    color: 'purple',
    gradient: 'from-purple-500/20 to-purple-900/10',
    iconColor: 'text-purple-400',
    borderHover: 'hover:border-purple-500/40',
    linkText: 'Experimentar Vibe Coding',
    linkHref: '/servicio/vibe'
  }
];

const Services = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = sectionRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      { threshold: 0.05 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="servicios" className="py-24 md:py-32 px-4 relative">
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-cyan-600/5 rounded-full blur-[150px] pointer-events-none" />
      
      <div ref={sectionRef} className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className={`mb-16 text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-cyan-400 font-mono text-sm font-medium tracking-wider">// MIS SERVICIOS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-5 leading-tight">
            Soluciones para <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">Empresas y Negocios</span>
          </h2>
          <div className="section-divider mx-auto" />
          <p className="mt-5 text-gray-400 text-lg max-w-2xl mx-auto">
            Ofrezco desarrollo, automatización y seguridad de alto nivel para escalar tus operaciones y aumentar tus ventas en el entorno digital.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.Icon;
            return (
              <div
                key={index}
                className={`card p-0 group flex flex-col h-full ${service.borderHover} transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${(index + 1) * 100}ms` }}
              >
                <div className={`h-1 bg-gradient-to-r ${service.gradient}`} />
                
                <div className="p-7 sm:p-8 flex flex-col flex-grow">
                  <div className="flex items-start gap-4 mb-5">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} border border-gray-700/50 flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110`}>
                      <Icon className={`w-7 h-7 ${service.iconColor}`} />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors duration-300 leading-tight">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-400 leading-relaxed text-[0.95rem] mb-8 flex-grow">
                    {service.description}
                  </p>

                  <div className="mt-auto pt-5 border-t border-gray-800/50">
                    <Link
                      to={service.linkHref}
                      className={`inline-flex items-center gap-2 text-sm font-bold ${service.iconColor} hover:brightness-125 transition-all`}
                    >
                      {service.linkText}
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                    </Link>
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

export default Services;
