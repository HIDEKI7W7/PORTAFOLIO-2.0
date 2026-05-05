import { Code2, Server, Shield, Terminal } from 'lucide-react';
import { useEffect } from 'react';

const stats = [
  { value: '40+', label: 'PROYECTOS' },
  { value: '5+', label: 'AÑOS EXP.' },
  { value: '25+', label: 'CLIENTES' },
  { value: '12', label: 'PREMIOS' },
];

const skills = [
  {
    category: 'Frontend',
    icon: Code2,
    techs: [
      { name: 'React', progress: 95 },
      { name: 'JavaScript / TypeScript', progress: 90 },
      { name: 'Tailwind CSS', progress: 95 },
      { name: 'Next.js', progress: 85 }
    ]
  },
  {
    category: 'Backend & Bots',
    icon: Server,
    techs: [
      { name: 'Node.js', progress: 88 },
      { name: 'Python', progress: 95 },
      { name: 'Express', progress: 85 },
      { name: 'Bases de Datos', progress: 85 }
    ]
  },
  {
    category: 'Ciberseguridad',
    icon: Shield,
    techs: [
      { name: 'Pentesting & Auditoría', progress: 85 },
      { name: 'Seguridad en Redes', progress: 80 },
      { name: 'Linux / OSINT', progress: 90 },
      { name: 'Securización Web', progress: 85 }
    ]
  }
];

const skillLogos = [
  { name: 'JavaScript', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
  { name: 'TypeScript', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg' },
  { name: 'React', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
  { name: 'React Native', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
  { name: 'Flutter', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg' },
  { name: 'Swift', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swift/swift-original.svg' },
  { name: 'Kotlin', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kotlin/kotlin-original.svg' },
  { name: 'Next.js', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg', invert: true },
  { name: 'Node.js', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg' },
  { name: 'Python', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
  { name: 'Tailwind CSS', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
  { name: 'PostgreSQL', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg' },
  { name: 'MongoDB', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg' },
  { name: 'Git', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg' },
  { name: 'Docker', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg' },
  { name: 'AWS', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg', invert: true },
  { name: 'Figma', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg' },
  { name: 'Linux', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg' },
  { name: 'Bash', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bash/bash-original.svg' },
];

const timeline = [
  {
    year: '2026 - PRESENTE',
    role: 'Desarrollador Web Freelance',
    description: 'Creando soluciones digitales para negocios locales e internacionales.'
  },
  {
    year: '2021 - 2023',
    role: 'Full-Stack Developer',
    description: 'Desarrollo de arquitecturas robustas y escalables con React y Node.js.'
  },
  {
    year: '2019 - 2021',
    role: 'Frontend Developer',
    description: 'Especialización en interfaces de usuario interactivas y accesibles.'
  },
  {
    year: '2015 - 2019',
    role: 'Curiosidad por conocer mas sobre computador y hacking',
    description: 'Primeros pasos explorando el mundo de la informática, aprendiendo conceptos básicos de sistemas, redes y fundamentos de hacking.'
  }
];

const About = () => {
  // Auto scroll to top when navigating to this standalone page
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <section id="sobre" className="py-28 md:py-36 px-4 relative overflow-hidden min-h-screen">
      {/* Decorative background gradients (matching hacker/cybersec aesthetic) */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-900/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-900/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Sobre <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">Mí</span>
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-cyan-500 to-emerald-500 mx-auto rounded-full" />
        </div>

        {/* Top Split: Bio and Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-24">
          
          {/* Bio Text */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-white">Desarrollador Web y Consultor de Ciberseguridad</h3>
            <p className="text-xl font-medium text-cyan-400">Hola, soy Bryan 👋</p>
            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>
                Desarrollador Web especializado en crear plataformas profesionales, 
                automatización de procesos y bots avanzados para negocios que buscan 
                escalar su presencia en internet de forma segura.
              </p>
              <p>
                Ayudo a empresas y emprendedores a tener una infraestructura digital 
                sólida mediante el desarrollo de páginas optimizadas y seguras, y soluciones 
                digitales que mejoran la eficiencia. Cuento con experiencia combinando 
                desarrollo de software y ciberseguridad para garantizar que el rendimiento 
                y la protección de datos vayan de la mano.
              </p>
              <p>
                Más allá del código, mi enfoque es entender los problemas de seguridad 
                y las necesidades de negocio. No solo programo; diseño ecosistemas seguros, 
                automatizo procesos repetitivos y garantizo experiencias de usuario de primer nivel.
              </p>
              <p>
                Actualmente trabajando de forma remota, creando la nueva generación de 
                soluciones tecnológicas.
              </p>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="flex items-center justify-center">
            <div className="grid grid-cols-2 gap-4 w-full p-6 glass rounded-3xl border border-gray-800">
              {stats.map((stat, i) => (
                <div key={i} className="bg-gray-900/60 border border-gray-800/80 rounded-2xl p-6 hover:border-cyan-500/30 transition-all duration-300 group">
                  <div className="text-cyan-500 mb-2 font-mono text-sm opacity-70 group-hover:opacity-100 transition-opacity">{'>_'}</div>
                  <div className="text-3xl font-black text-white mb-1 group-hover:text-cyan-400 transition-colors">
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-500 font-bold tracking-widest uppercase">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-white inline-flex items-center gap-2">
              <Terminal className="w-6 h-6 text-cyan-400" />
              Stack Tecnológico
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {skills.map((skillGroup, i) => (
              <div key={i} className="glass rounded-3xl p-8 border border-gray-800 hover:border-gray-700 transition-all duration-300">
                <div className="flex items-center gap-3 mb-8">
                  <skillGroup.icon className="w-6 h-6 text-cyan-400" />
                  <h4 className="text-xl font-bold text-white">{skillGroup.category}</h4>
                </div>
                
                <div className="space-y-6">
                  {skillGroup.techs.map((tech, j) => (
                    <div key={j}>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-gray-300 font-medium">{tech.name}</span>
                        <span className="text-cyan-500/80 font-mono">{tech.progress}%</span>
                      </div>
                      <div className="h-2 bg-gray-900 rounded-full overflow-hidden border border-gray-800">
                        <div 
                          className="h-full bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-full group-hover:animate-pulse"
                          style={{ width: `${tech.progress}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline Section */}
        <div className="max-w-3xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white">Mi Trayectoria</h3>
          </div>
          
          <div className="bg-[#0b1325] rounded-[2rem] p-8 md:p-14 border border-gray-800/40 w-full mx-auto shadow-2xl">
            <div className="relative border-l border-[#2e3c54] ml-2 md:ml-4 space-y-12 py-2">
              {timeline.map((item, i) => (
                <div key={i} className="relative pl-8 md:pl-12">
                  {/* Circle indicator */}
                  <div className="absolute -left-[11px] top-1 w-[21px] h-[21px] rounded-full border-[3px] border-[#3b82f6] bg-[#0b1325]" />
                  
                  {/* Content */}
                  <div>
                    <div className="text-[#3b82f6] font-extrabold text-[13px] tracking-wide mb-1 md:mb-1.5 uppercase font-sans">
                      {item.year}
                    </div>
                    <div className="text-white font-bold text-xl md:text-[22px] mb-2 leading-tight">
                      {item.role}
                    </div>
                    {item.description && (
                      <p className="text-[#8894ab] text-[15px] leading-relaxed max-w-xl font-medium">
                        {item.description}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Skills Logos Section */}
        <div className="mt-24 mb-10 text-center relative z-10">
          <h3 className="text-3xl font-bold text-white mb-12">Skills</h3>
          <div className="flex flex-wrap justify-center gap-6 md:gap-10 max-w-5xl mx-auto">
            {skillLogos.map((skill, idx) => (
              <div key={idx} className="flex flex-col items-center gap-3 group">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-[#0b1325] border border-gray-800/60 rounded-2xl flex items-center justify-center p-3 sm:p-4 group-hover:border-cyan-500/50 group-hover:-translate-y-2 transition-all duration-300 shadow-lg group-hover:shadow-[0_0_20px_rgba(34,211,238,0.15)]">
                  <img 
                    src={skill.src} 
                    alt={skill.name} 
                    className={`w-full h-full object-contain ${skill.invert ? 'filter invert opacity-80' : ''} group-hover:scale-110 transition-transform duration-300`} 
                  />
                </div>
                <span className="text-gray-400 text-sm font-semibold group-hover:text-cyan-400 transition-colors">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
