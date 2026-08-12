import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="border-t border-gray-800/40 pt-16 pb-10 bg-[#020617] mt-auto">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
        
        {/* Column 1: Brand */}
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-black text-white tracking-tight">
            Hide<span className="text-cyan-400">.dev</span>
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
            Desarrollo de páginas web, automatización y bots para WhatsApp. Ayudando a negocios remotos y globales a multiplicar sus ventas.
          </p>
          <div className="flex items-center gap-3 mt-4">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-lg bg-transparent border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:border-gray-500 transition-all opacity-80 hover:opacity-100">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a href="mailto:tu@email.com" className="w-10 h-10 rounded-lg bg-transparent border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:border-gray-500 transition-all opacity-80 hover:opacity-100">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </a>
            <a href="https://wa.me/59157067635" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-lg bg-transparent border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:border-gray-500 transition-all opacity-80 hover:opacity-100">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Column 2: Servicios Web */}
        <div>
          <h3 className="text-white font-bold mb-6 italic">Servicios Web</h3>
          <ul className="space-y-4 font-mono text-xs font-semibold tracking-wider text-gray-500">
            <li><Link to="/servicio/web" className="hover:text-cyan-400 transition-colors uppercase block">PÁGINAS WEB</Link></li>
            <li><Link to="/servicio/bots" className="hover:text-cyan-400 transition-colors uppercase block">BOTS WHATSAPP</Link></li>
            <li><Link to="/servicio/automation" className="hover:text-cyan-400 transition-colors uppercase block">AUTOMATIZACIÓN</Link></li>
            <li><Link to="/servicio/vibe" className="hover:text-cyan-400 transition-colors uppercase block">VIBE CODING</Link></li>
          </ul>
        </div>

        {/* Column 3: Enlaces */}
        <div>
          <h3 className="text-white font-bold mb-6">Enlaces de Interés</h3>
          <ul className="space-y-4 text-sm text-gray-400">
            <li><Link to="/proyectos" className="hover:text-white transition-colors block">Portafolio</Link></li>
            <li><Link to="/cursos" className="hover:text-white transition-colors block">Catálogo Educativo</Link></li>
            <li><Link to="/#inicio" className="hover:text-white transition-colors block">Sobre Mí</Link></li>
            <li><Link to="/contacto" className="hover:text-white transition-colors block">Contacto</Link></li>
          </ul>
        </div>

      </div>

      {/* Copyright */}
      <div className="text-center pt-8 border-t border-gray-900">
        <p className="text-gray-700 text-sm font-mono flex items-center justify-center gap-2">
          <span className="text-cyan-500/50">{'</'}</span>
          {new Date().getFullYear()} &bull; Hide.dev &bull; Built with React + TailwindCSS
          <span className="text-cyan-500/50">{'>'}</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
