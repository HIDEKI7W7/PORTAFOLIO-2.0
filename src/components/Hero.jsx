import { useEffect, useState } from 'react';
import { Shield, Code2, Cpu, Zap, Lock, Globe, ArrowRight, FileDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const TYPING_TEXTS = [
  'Full-Stack Developer',
  'Pentester & Security',
  'Bot Automation Expert',
  'Mobile App Builder',
];

const stats = [
  { value: '5+', label: 'Años Exp.' },
  { value: '40+', label: 'Proyectos' },
  { value: '99%', label: 'Uptime' },
  { value: '∞', label: 'Café ☕' },
];

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentFullText = TYPING_TEXTS[textIndex];
    let timeout;

    if (!isDeleting && charIndex < currentFullText.length) {
      timeout = setTimeout(() => {
        setTypedText(currentFullText.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, 80);
    } else if (!isDeleting && charIndex === currentFullText.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setTypedText(currentFullText.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, 40);
    } else if (isDeleting && charIndex === 0) {
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setTextIndex((textIndex + 1) % TYPING_TEXTS.length);
      }, 0);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex]);

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-24 sm:pt-20 overflow-hidden"
    >
      {/* Multi-layer background effects */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-600/8 rounded-full blur-[180px] pointer-events-none animate-pulse" style={{ animationDuration: '8s' }} />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-emerald-600/6 rounded-full blur-[150px] pointer-events-none animate-pulse" style={{ animationDuration: '10s' }} />
      <div className="absolute top-1/4 left-1/6 w-[400px] h-[400px] bg-purple-600/5 rounded-full blur-[130px] pointer-events-none animate-pulse" style={{ animationDuration: '12s' }} />

      {/* Animated grid pattern */}
      <div className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(6,182,212,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.4) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      {/* Floating decorative elements */}
      <div className="absolute top-32 right-20 hidden lg:block">
        <div className="w-20 h-20 rounded-2xl border border-cyan-500/10 bg-cyan-500/5 flex items-center justify-center animate-float" style={{ animationDelay: '0s' }}>
          <Lock className="w-8 h-8 text-cyan-500/20" />
        </div>
      </div>
      <div className="absolute bottom-40 left-16 hidden lg:block">
        <div className="w-16 h-16 rounded-2xl border border-emerald-500/10 bg-emerald-500/5 flex items-center justify-center animate-float" style={{ animationDelay: '2s' }}>
          <Globe className="w-7 h-7 text-emerald-500/20" />
        </div>
      </div>
      <div className="absolute top-60 left-32 hidden xl:block">
        <div className="w-14 h-14 rounded-xl border border-purple-500/10 bg-purple-500/5 flex items-center justify-center animate-float" style={{ animationDelay: '4s' }}>
          <Zap className="w-6 h-6 text-purple-500/20" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Status Badge */}
        <div className="animate-fade-in-up inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-gradient-to-r from-cyan-500/10 to-emerald-500/5 border border-cyan-500/20 mb-10 backdrop-blur-sm">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
          </span>
          <span className="text-sm text-cyan-300 font-mono font-medium">Available for projects</span>
        </div>

        {/* Icon row */}
        <div className="animate-fade-in-up animate-delay-100 flex justify-center gap-3 sm:gap-5 mb-8 sm:mb-10">
          {[
            { icon: Code2, color: 'text-cyan-400', bg: 'from-cyan-500/15 to-cyan-900/10', shadow: 'shadow-cyan-500/20', border: 'border-cyan-500/20' },
            { icon: Shield, color: 'text-emerald-400', bg: 'from-emerald-500/15 to-emerald-900/10', shadow: 'shadow-emerald-500/20', border: 'border-emerald-500/20' },
            { icon: Cpu, color: 'text-purple-400', bg: 'from-purple-500/15 to-purple-900/10', shadow: 'shadow-purple-500/20', border: 'border-purple-500/20' },
          ].map((item, i) => {
            const IconComp = item.icon;
            return (
              <div
                key={i}
                className={`w-14 h-14 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br ${item.bg} border ${item.border} flex items-center justify-center shadow-lg ${item.shadow} animate-float backdrop-blur-sm`}
                style={{ animationDelay: `${i * 0.7}s` }}
              >
                <IconComp className={`w-6 h-6 sm:w-7 sm:h-7 ${item.color}`} />
              </div>
            );
          })}
        </div>

        {/* Main Heading */}
        <h1 className="animate-fade-in-up animate-delay-200 text-3xl xs:text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white mb-6 tracking-tight leading-[1.1] sm:leading-[1.05]">
          Desarrollo,{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-cyan-300 to-emerald-400 text-glow-cyan animate-gradient">
            Seguridad
          </span>
          <br className="hidden sm:block" />
          {' '}y Automatización
        </h1>

        {/* Typing subtitle */}
        <div className="animate-fade-in-up animate-delay-300 flex justify-center items-center gap-2 mb-6">
          <span className="text-gray-600 font-mono text-sm">{'>'}</span>
          <span className="font-mono text-cyan-400 text-lg sm:text-xl">
            {typedText}
            <span className="inline-block w-0.5 h-5 bg-cyan-400 ml-0.5 animate-pulse" />
          </span>
        </div>

        {/* Subtitle */}
        <p className="animate-fade-in-up animate-delay-400 max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-gray-400 mb-10 sm:mb-12 leading-relaxed px-2">
          Creación de arquitecturas completas y seguras. Especialista en orquestar
          <span className="text-gray-200 font-medium"> Frontend, Backend, Infraestructura Móvil </span>
          y <span className="text-gray-200 font-medium">Ciberseguridad</span> para construir ecosistemas inquebrantables.
        </p>

        {/* CTA Buttons */}
        <div className="animate-fade-in-up animate-delay-500 flex flex-col sm:flex-row gap-4 justify-center relative z-20">
          <a href="https://wa.me/59157067635" target="_blank" rel="noopener noreferrer" className="btn-primary text-lg group">
            Contactar por WhatsApp
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="/CV_Bryan_Salirrosas.pdf"
            download="CV_Bryan_Salirrosas.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary text-lg group flex items-center justify-center gap-2 border-cyan-500/30 hover:border-cyan-400 text-cyan-300 hover:text-white"
          >
            <FileDown className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" />
            Descargar CV
          </a>
          <Link to="/proyectos" className="btn-secondary text-lg">
            Ver mi Portafolio
          </Link>
        </div>

        {/* Stats Row */}
        <div className="animate-fade-in-up animate-delay-700 mt-16 sm:mt-20 grid grid-cols-2 sm:grid-cols-4 gap-0 max-w-2xl mx-auto rounded-2xl bg-gray-900/40 border border-gray-800/50 backdrop-blur-sm overflow-hidden">
          {stats.map((stat, i) => (
            <div key={i} className="stat-item py-4 sm:py-6">
              <div className="text-xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400">
                {stat.value}
              </div>
              <div className="text-[10px] sm:text-xs text-gray-500 mt-1 font-medium uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in-up animate-delay-800">
        <div className="flex flex-col items-center gap-2">
          <span className="text-[0.65rem] text-gray-600 uppercase tracking-widest font-medium">Scroll</span>
          <div className="w-5 h-9 rounded-full border-2 border-gray-700/60 flex justify-center pt-2">
            <div className="w-1 h-2.5 bg-gradient-to-b from-cyan-400 to-emerald-400 rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
