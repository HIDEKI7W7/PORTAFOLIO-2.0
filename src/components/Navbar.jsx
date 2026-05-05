import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { label: 'Inicio', href: '/#inicio', targetId: 'inicio' },
  { label: 'Portafolio', href: '/proyectos', targetId: 'proyectos' },
  { label: 'Sobre Mí', href: '/sobre', targetId: 'sobre' },
  { label: 'Cursos', href: '/cursos', targetId: 'cursos' },
  { label: 'Blog', href: '/blog', targetId: 'blog' },
  { label: 'Contacto', href: '/contacto', targetId: 'contacto' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = ['inicio', 'proyectos', 'blog', 'contacto'];
    const observers = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { threshold: 0.3, rootMargin: '-80px 0px 0px 0px' }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  // Determine visual active state (fallback to route parsing if not on home)
  const isHome = location.pathname === '/';
  const getActiveState = (href, targetId) => {
    if (href === '/proyectos') return location.pathname === '/proyectos';
    if (href === '/blog') return location.pathname === '/blog' || location.pathname.startsWith('/blog/');
    if (href === '/cursos') return location.pathname === '/cursos';
    if (href === '/contacto') return location.pathname === '/contacto';
    if (href === '/sobre') return location.pathname === '/sobre';
    if (isHome) return activeSection === targetId;
    return location.hash === `#${targetId}`;
  };

  const handleNavClick = () => {
    setMobileOpen(false);
  };

  return (
    <nav
      id="navbar"
      className={`fixed w-full z-50 transition-all duration-500 ${isScrolled
          ? 'glass shadow-2xl shadow-black/30'
          : 'bg-transparent border-b border-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-[4.5rem]">
          {/* Logo */}
          <Link to="/#inicio" className="flex-shrink-0 flex items-center gap-1 group" onClick={handleNavClick}>
            <span className="text-white font-bold text-2xl tracking-tight transition-colors group-hover:text-gray-200">
              Hide<span className="text-cyan-400">.dev</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 ml-auto mr-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                onClick={handleNavClick}
                className={`text-sm font-semibold transition-colors duration-300 ${getActiveState(item.href, item.targetId)
                    ? 'text-blue-500'
                    : 'text-gray-300 hover:text-white'
                  }`}
              >
                {item.label}
              </Link>
            ))}
          </div>



          {/* Mobile Menu Button */}
          <button
            id="mobile-menu-btn"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden relative w-10 h-10 rounded-lg bg-gray-800/50 border border-gray-700/50 flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-500/30 transition-all duration-300"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden absolute top-full left-0 w-full glass transition-all duration-400 overflow-hidden ${mobileOpen ? 'max-h-80 border-b border-gray-700/50' : 'max-h-0'
          }`}
      >
        <div className="px-4 py-4 flex flex-col gap-1">
          {navItems.map((item, index) => (
            <Link
              key={item.href}
              to={item.href}
              onClick={handleNavClick}
              className={`block px-4 py-3.5 rounded-xl text-sm font-semibold tracking-wide transition-all duration-200 ${getActiveState(item.href, item.targetId)
                  ? 'bg-gradient-to-r from-cyan-500/10 to-emerald-500/5 text-cyan-400 border border-cyan-500/20'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <span className="font-mono text-xs text-gray-600 mr-2">{String(index + 1).padStart(2, '0')}</span>
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
