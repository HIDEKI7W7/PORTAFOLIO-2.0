import { useState, useEffect } from 'react';
import { Send, CheckCircle, Sparkles, MapPin, Clock } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Contact = () => {
  const [sectionRef, isSectionVisible] = useScrollReveal(0.1);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  // Auto scroll to top when navigating to this standalone page
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormState({ name: '', email: '', message: '' });
    }, 3500);
  };

  return (
    <section id="contacto" className="py-28 md:py-36 px-4 relative">
      {/* Background accents */}
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-cyan-600/4 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-emerald-600/3 rounded-full blur-[140px] pointer-events-none" />

      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-700/40 to-transparent" />

      <div ref={sectionRef} className="max-w-4xl mx-auto relative z-10">
        {/* Section Header */}
        <div className={`mb-16 text-center ${isSectionVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-cyan-400 font-mono text-sm font-medium tracking-wider">// CONTACTO</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-5">
            Hablemos de tu{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
              Proyecto
            </span>
          </h2>
          <div className="section-divider mx-auto" />
          <p className="mt-6 text-gray-400 text-lg max-w-xl mx-auto">
            ¿Interesado en colaborar, necesitas una auditoría o desarrollo a medida? Envíame un mensaje.
          </p>
        </div>

        {/* Two-column layout: Info + Form */}
        <div className={`grid grid-cols-1 lg:grid-cols-5 gap-8 mb-16 ${isSectionVisible ? 'animate-fade-in-up animate-delay-200' : 'opacity-0'}`}>
          
          {/* Info Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Info cards */}
            <div className="card p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-white font-bold">Proyectos Freelance</h3>
                  <p className="text-gray-500 text-sm">Disponible inmediatamente</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Desarrollo web, apps móviles, automatización de bots y auditorías de seguridad.
              </p>
            </div>

            <div className="card p-6">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-white font-bold">Respuesta Rápida</h3>
                  <p className="text-gray-500 text-sm">{'< 24 horas'}</p>
                </div>
              </div>
            </div>

            <div className="card p-6">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-white font-bold">Remoto & Global</h3>
                  <p className="text-gray-500 text-sm">Trabajo con clientes de todo el mundo</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 pt-2">
              {/* YouTube */}
              <a
                href="#"
                id="social-youtube"
                className="social-btn youtube"
                aria-label="YouTube"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>

              {/* GitHub */}
              <a
                href="#"
                id="social-github"
                className="social-btn github"
                aria-label="GitHub"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>

              {/* Telegram */}
              <a
                href="#"
                id="social-telegram"
                className="social-btn telegram"
                aria-label="Telegram"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="lg:col-span-3 card p-8 md:p-10"
          >
            {submitted ? (
              <div className="py-16 flex flex-col items-center gap-5 text-center">
                <div className="w-20 h-20 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center animate-fade-in-scale">
                  <CheckCircle className="w-10 h-10 text-emerald-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">¡Mensaje enviado!</h3>
                <p className="text-gray-400 max-w-xs">Te responderé en menos de 24 horas. ¡Gracias por contactar!</p>
              </div>
            ) : (
              <>
                {/* Terminal-style header */}
                <div className="flex items-center gap-2 mb-8 pb-4 border-b border-gray-800/50">
                  <div className="terminal-dot bg-red-500/80" />
                  <div className="terminal-dot bg-yellow-500/80" />
                  <div className="terminal-dot bg-emerald-500/80" />
                  <span className="ml-3 text-xs text-gray-600 font-mono">contact_form.sh</span>
                </div>

                {/* Name field */}
                <div className="mb-5">
                  <label htmlFor="contact-name" className="flex items-center gap-2 text-sm font-semibold text-gray-400 mb-2.5">
                    <span className="text-cyan-500/60 font-mono text-xs">01</span>
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="input-field"
                    placeholder="Tu nombre"
                    required
                  />
                </div>

                {/* Email field */}
                <div className="mb-5">
                  <label htmlFor="contact-email" className="flex items-center gap-2 text-sm font-semibold text-gray-400 mb-2.5">
                    <span className="text-cyan-500/60 font-mono text-xs">02</span>
                    Email
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="input-field"
                    placeholder="tu@email.com"
                    required
                  />
                </div>

                {/* Message field */}
                <div className="mb-8">
                  <label htmlFor="contact-message" className="flex items-center gap-2 text-sm font-semibold text-gray-400 mb-2.5">
                    <span className="text-cyan-500/60 font-mono text-xs">03</span>
                    Mensaje
                  </label>
                  <textarea
                    id="contact-message"
                    rows="4"
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="input-field resize-none"
                    placeholder="Hola, me gustaría hablar sobre..."
                    required
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  id="contact-submit"
                  className="w-full btn-primary justify-center text-base py-4"
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                >
                  <Send className={`w-5 h-5 transition-transform duration-300 ${isHovering ? 'translate-x-0.5 -translate-y-0.5' : ''}`} />
                  Enviar Mensaje
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
