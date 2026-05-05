import { BookOpen, Bot, Fingerprint, Code2, Play, Users, ArrowRight, Clock, X } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useEffect, useState } from 'react';

const courses = [
  {
    category: 'Automatización',
    categoryColor: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/25',
    title: 'Desarrollo de Bots con Python',
    description:
      'Aprende a crear bots avanzados para Telegram con Telethon. Desde atención al cliente automatizada hasta embudos de venta inteligentes.',
    Icon: Bot,
    iconColor: 'text-emerald-400',
    accentGradient: 'from-emerald-600/20 via-emerald-800/10 to-transparent',
    accentLine: 'from-emerald-500 to-emerald-300',
    features: ['Telethon API', 'Gemini AI', 'Embudos de venta', 'Deploy'],
    duration: '6 horas',
    level: '⭐⭐⭐',
  },
  {
    category: 'Ciberseguridad',
    categoryColor: 'bg-cyan-500/15 text-cyan-400 border-cyan-500/25',
    title: 'Fundamentos de Hacking Ético',
    description:
      'Conoce las vulnerabilidades web más comunes y aprende a asegurar tus aplicaciones, servidores y redes de forma profesional.',
    Icon: Fingerprint,
    iconColor: 'text-cyan-400',
    accentGradient: 'from-cyan-600/20 via-cyan-800/10 to-transparent',
    accentLine: 'from-cyan-500 to-cyan-300',
    features: ['Pentesting', 'OWASP Top 10', 'Hardening', 'Nmap & Burp'],
    duration: '8 horas',
    level: '⭐⭐⭐⭐',
  },
  {
    category: 'Full-Stack',
    categoryColor: 'bg-purple-500/15 text-purple-400 border-purple-500/25',
    title: 'Arquitecturas Seguras React + Node',
    description:
      'Crea aplicaciones de página única conectadas a backends robustos. Autenticación, APIs REST, y buenas prácticas DevSecOps.',
    Icon: Code2,
    iconColor: 'text-purple-400',
    accentGradient: 'from-purple-600/20 via-purple-800/10 to-transparent',
    accentLine: 'from-purple-500 to-purple-300',
    features: ['React 19', 'Express', 'JWT Auth', 'PostgreSQL'],
    duration: '10 horas',
    level: '⭐⭐⭐⭐⭐',
  },
];

const Courses = () => {
  const [sectionRef, isSectionVisible] = useScrollReveal(0.1);
  const [selectedCourse, setSelectedCourse] = useState(null);

  // Auto scroll to top when navigating to this standalone page
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <section
      id="cursos"
      className="py-28 md:py-36 px-4 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/30 to-transparent pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-700/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-700/40 to-transparent" />
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-purple-600/4 rounded-full blur-[140px] pointer-events-none" />

      <div ref={sectionRef} className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className={`mb-20 text-center ${isSectionVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="inline-flex items-center justify-center w-18 h-18 rounded-2xl bg-gradient-to-br from-cyan-500/15 to-emerald-500/15 border border-cyan-500/15 mb-6 backdrop-blur-sm">
            <BookOpen className="w-9 h-9 text-cyan-400" />
          </div>
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-cyan-400 font-mono text-sm font-medium tracking-wider">// CATÁLOGO EDUCATIVO</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-5">
            Consultoría y <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">Cursos VIP</span>
          </h2>
          <div className="section-divider mx-auto" />
          <p className="mt-6 text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Aprende a programar, automatizar o asegurar sistemas. Únete a mi comunidad privada para obtener mentorías exclusivas, código y guías paso a paso.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {courses.map((course, index) => {
            const { Icon } = course;
            return (
              <div
                key={index}
                className={`card p-0 group cursor-pointer flex flex-col ${
                  isSectionVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${(index + 1) * 0.15}s` }}
                onClick={() => setSelectedCourse(course)}
              >
                {/* Card Header with icon */}
                <div className="relative h-48 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${course.accentGradient}`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/50 to-transparent z-10" />

                  {/* Large background icon */}
                  <Icon
                    className={`absolute -bottom-2 -right-2 w-32 h-32 ${course.iconColor} opacity-[0.06] group-hover:opacity-[0.12] group-hover:scale-110 group-hover:rotate-3 transition-all duration-700`}
                  />

                  {/* Muy Pronto Badge */}
                  <div className="absolute top-4 left-4 z-30">
                    <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white text-[0.65rem] font-black uppercase tracking-widest py-1.5 px-3 rounded-full shadow-lg shadow-red-500/20 animate-pulse border border-red-400/50 backdrop-blur-md">
                      Pronto
                    </span>
                  </div>

                  {/* Play button overlay */}
                  <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110 shadow-2xl">
                      <Play className="w-7 h-7 text-white ml-0.5" fill="white" />
                    </div>
                  </div>

                  {/* Duration badge */}
                  <div className="absolute top-4 right-4 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-black/40 backdrop-blur-sm border border-white/10 text-[0.7rem] text-gray-300 font-medium">
                    <Clock className="w-3 h-3" />
                    {course.duration}
                  </div>

                  {/* Grid pattern */}
                  <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                      backgroundImage:
                        'linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)',
                      backgroundSize: '24px 24px',
                    }}
                  />
                </div>

                {/* Card Content */}
                <div className="p-6 relative z-20 -mt-6 flex flex-col flex-1">
                  <span
                    className={`inline-flex items-center px-3 py-1.5 text-[0.7rem] font-bold rounded-full border backdrop-blur-sm ${course.categoryColor} tracking-wider self-start`}
                  >
                    {course.category}
                  </span>

                  <h3 className="text-xl font-bold text-white mt-4 mb-2 group-hover:text-cyan-300 transition-colors duration-300">
                    {course.title}
                  </h3>

                  <p className="text-gray-400 text-sm leading-relaxed mb-5 flex-1">
                    {course.description}
                  </p>

                  {/* Feature pills */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {course.features.map((f, i) => (
                      <span
                        key={i}
                        className="text-[0.65rem] font-semibold px-2.5 py-1 rounded-lg bg-gray-800/60 text-gray-500 border border-gray-700/40"
                      >
                        {f}
                      </span>
                    ))}
                  </div>

                  {/* Difficulty level */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-800/50">
                    <span className="text-xs text-gray-500">Nivel: {course.level}</span>
                    <div className="flex items-center gap-1.5 text-sm font-semibold text-cyan-400 group-hover:text-cyan-300 transition-colors">
                      Ver curso
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA buttons */}
        <div
          className={`mt-20 flex flex-col sm:flex-row justify-center gap-5 ${
            isSectionVisible ? 'animate-fade-in-up animate-delay-600' : 'opacity-0'
          }`}
        >
          <a
            href="#"
            className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gray-800/60 hover:bg-gray-700/70 text-white font-semibold transition-all duration-300 border border-gray-700/50 hover:border-red-500/30 shadow-lg hover:shadow-red-500/10 hover:-translate-y-1"
          >
            <svg className="w-5 h-5 text-red-500 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
            Ver en YouTube
          </a>
          <a
            href="#"
            className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-600 to-cyan-500 hover:from-cyan-500 hover:to-cyan-400 text-white font-bold transition-all duration-300 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/35 hover:-translate-y-1"
          >
            <Users className="w-5 h-5 group-hover:scale-110 transition-transform" />
            Grupo VIP
          </a>
        </div>
        
        {/* Modal "Muy Pronto" */}
        {selectedCourse && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setSelectedCourse(null)} />
            <div className="relative bg-[#0b1325] border border-gray-800 rounded-3xl p-8 md:p-12 max-w-lg w-full text-center shadow-2xl flex flex-col items-center animate-fade-in-up">
              <button 
                onClick={(e) => { e.stopPropagation(); setSelectedCourse(null); }}
                className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors"
                aria-label="Cerrar"
              >
                <X className="w-6 h-6" />
              </button>
              
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 flex items-center justify-center mb-6 relative group">
                <div className="absolute inset-0 bg-cyan-500/20 rounded-full animate-ping opacity-20"></div>
                {selectedCourse.Icon && <selectedCourse.Icon className="w-12 h-12 text-cyan-400 opacity-90 transition-transform group-hover:scale-110" />}
              </div>

              <h3 className="text-2xl md:text-3xl font-black text-white mb-4">¡Próximamente!</h3>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                El curso <strong className="text-white">"{selectedCourse.title}"</strong> aún no está listo. 
                <br/><br/>
                ¡Atento a la comunidad VIP porque ya saldrá!
              </p>
              
              <button 
                onClick={(e) => { e.stopPropagation(); setSelectedCourse(null); }}
                className="bg-gradient-to-r from-cyan-600 to-cyan-500 hover:from-cyan-500 hover:to-cyan-400 text-white font-bold py-3 px-10 rounded-xl transition-all shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:-translate-y-1"
              >
                Entendido
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Courses;
