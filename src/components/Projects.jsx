import { useState, useEffect } from 'react';
import { Filter, X, MessageSquare, ExternalLink } from 'lucide-react';

const projectsData = [
  {
    id: 4,
    title: 'Burger Royall – App de Delivery para Restaurantes',
    category: ['Frontend', 'Páginas Web'],
    shortDescription: 'Plataforma web para un restaurante de hamburguesas con sistema de menú interactivo, carrito de compras y un diseño moderno y apetitoso.',
    longDescription: 'Burger Royall es una plantilla de E-Commerce diseñada específicamente para restaurantes de comida rápida y hamburgueserías. Presenta un diseño muy atractivo con un esquema de colores oscuros que resalta las imágenes de los productos. Incluye menú categorizado, carrito de compras (checkout), páginas de detalles del producto, blog y seguimiento de pedidos, todo 100% responsivo para generar ventas desde teléfonos móviles.',
    image: '/burger_gallery_1.png',
    gallery: [
      '/burger_gallery_1.png',
      '/burger_gallery_2.png'
    ],
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'E-Commerce'],
    liveUrl: 'https://ornate-shortbread-b78b1d.netlify.app/',
    githubUrl: '#'
  },
  {
    id: 5,
    title: 'Wordle Clone en React',
    category: ['Frontend', 'Páginas Web'],
    shortDescription: 'Clon interactivo del popular juego Wordle desarrollado íntegramente en React y TypeScript con interactividad en tiempo real.',
    longDescription: 'Este proyecto es una réplica exacta del popular juego Wordle. Construido con React, hooks dinámicos y TypeScript para asegurar una arquitectura robusta y escalable. La interfaz de usuario es totalmente oscura y responsiva empleando módulos de SCSS. Cuenta con un teclado interactivo virtual en pantalla y un sistema de "Pista del día" dinámico que ofrece al jugador pequeñas ayudas sobre la palabra oculta.',
    image: '/wordle_1.png',
    gallery: [
      '/wordle_1.png',
      '/wordle_2.png'
    ],
    tech: ['React', 'TypeScript', 'SCSS', 'Vite', 'Hooks'],
    liveUrl: 'https://spontaneous-panda-f95746.netlify.app/',
    githubUrl: '#'
  },
  {
    id: 6,
    title: 'Sistema de Punto de Venta (POS) y Gestión Integral',
    category: ['Full-Stack', 'Páginas Web'],
    shortDescription: 'Plataforma completa de Punto de Venta (POS) para control de inventario, ventas, compras y gestión de clientes con panel de estadísticas en tiempo real.',
    longDescription: 'Este Sistema de Punto de Venta (POS) es una solución Full-Stack diseñada para la gestión integral de comercios y negocios. Permite administrar productos, clientes, proveedores, compras y ventas en un solo lugar. Cuenta con un dashboard administrativo interactivo que muestra estadísticas en tiempo real mediante gráficas dinámicas (ventas y compras de los últimos 7 días, inventario total, etc.). Además, incluye un sistema de autenticación seguro con control de acceso y una interfaz moderna, limpia y altamente responsiva.',
    image: '/dosxd.PNG',
    gallery: [
      '/unoxd.PNG',
      '/dosxd.PNG'
    ],
    tech: ['Laravel', 'PHP', 'MySQL', 'JavaScript', 'Bootstrap'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: 7,
    title: 'InmoVista – Plataforma Inmobiliaria con Panel Administrativo',
    category: ['Full-Stack', 'Páginas Web'],
    shortDescription: 'Plataforma completa de bienes raíces con búsqueda avanzada de propiedades, mapas interactivos y panel de gestión para agentes inmobiliarios.',
    longDescription: 'InmoVista es una solución Full-Stack para el sector inmobiliario que permite a agentes y corredores publicar, gestionar y promocionar propiedades de manera profesional. La plataforma cuenta con un buscador avanzado con filtros por precio, ubicación, tipo de propiedad y número de habitaciones. Integra mapas interactivos con geolocalización para visualizar cada propiedad. El panel administrativo incluye estadísticas de visitas, gestión de leads, agenda de citas y un CRM básico. Diseñado con una arquitectura escalable y optimizado para SEO, garantizando máxima visibilidad en buscadores.',
    image: '/proyecto_inmobiliaria_2.png',
    gallery: [
      '/proyecto_inmobiliaria_2.png'
    ],
    tech: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS', 'Mapbox', 'JWT'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: 8,
    title: 'UrbanStyle – E-Commerce de Moda con Pasarela de Pagos',
    category: ['Full-Stack', 'Páginas Web'],
    shortDescription: 'Tienda online de ropa y accesorios con catálogo dinámico, carrito inteligente, pasarela de pagos integrada y panel de administración completo.',
    longDescription: 'UrbanStyle es una plataforma de E-Commerce moderna desarrollada para una marca de moda urbana. El sistema incluye un catálogo de productos con filtros por categoría, talla, color y rango de precios. Cuenta con un carrito de compras persistente, sistema de wishlist, y checkout optimizado con integración de pasarela de pagos (Stripe). El panel de administración permite gestionar inventario, procesar pedidos, aplicar cupones de descuento y analizar métricas de ventas con gráficas en tiempo real. La interfaz fue diseñada con un enfoque mobile-first para maximizar las conversiones desde dispositivos móviles.',
    image: '/proyecto_ecommerce.png',
    gallery: [
      '/proyecto_ecommerce.png',
      '/proyecto_ecommerce_2.png'
    ],
    tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Stripe', 'Tailwind CSS', 'Prisma'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: 9,
    title: 'IronForge Gym – Landing Page Premium para Gimnasios',
    category: ['Frontend', 'Páginas Web'],
    shortDescription: 'Página web de alto impacto visual para un gimnasio con secciones de planes, horarios de clases, galería y formulario de inscripción online.',
    longDescription: 'IronForge Gym es una landing page de alto rendimiento diseñada para un gimnasio de fitness y crossfit. El sitio presenta un diseño oscuro y agresivo con animaciones de scroll que capturan la atención del visitante. Incluye secciones de planes de membresía con comparativa de precios, horarios de clases interactivos, perfiles de entrenadores, galería de instalaciones con lightbox y un formulario de inscripción conectado a WhatsApp Business. Totalmente optimizado para SEO local y velocidad de carga, alcanzando un score de 95+ en Lighthouse.',
    image: '/proyecto_gym.png',
    gallery: [
      '/proyecto_gym.png',
      '/proyecto_gym_2.png'
    ],
    tech: ['React', 'Vite', 'Framer Motion', 'CSS Modules', 'EmailJS'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: 11,
    title: 'MediCare Plus – Plataforma de Citas Médicas Online',
    category: ['Full-Stack', 'Páginas Web'],
    shortDescription: 'Sistema web de gestión de citas médicas con perfiles de doctores, calendario inteligente, historial de pacientes y recordatorios automáticos.',
    longDescription: 'MediCare Plus es una plataforma Full-Stack diseñada para clínicas y consultorios médicos que necesitan digitalizar su proceso de agendamiento. El sistema permite a los pacientes buscar especialistas por área médica, consultar horarios disponibles y agendar citas de forma autónoma. Los doctores cuentan con un panel donde pueden gestionar su agenda, revisar el historial de pacientes y emitir recetas digitales. Incluye recordatorios automáticos por email y SMS, sistema de valoraciones y reseñas, y un dashboard administrativo con métricas de ocupación y rendimiento por especialidad.',
    image: '/proyecto_clinica.png',
    gallery: [
      '/proyecto_clinica.png',
      '/proyecto_clinica_2.png'
    ],
    tech: ['React', 'Express', 'PostgreSQL', 'Nodemailer', 'Twilio', 'Docker'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: 12,
    title: 'DataPulse – Panel de Analítica SaaS en Tiempo Real',
    category: ['Full-Stack', 'Páginas Web'],
    shortDescription: 'Dashboard empresarial SaaS con métricas en tiempo real, gráficos interactivos, gestión de reportes y control de rendimiento por equipo.',
    longDescription: 'DataPulse es una plataforma SaaS de analítica empresarial diseñada para empresas que necesitan visualizar el rendimiento de sus operaciones en un solo lugar. El dashboard presenta KPIs críticos (ingresos, usuarios activos, pedidos, tasa de conversión) actualizados en tiempo real mediante WebSockets. Incluye gráficas de tendencias con área, barras y donut charts, tablas de transacciones con filtros avanzados, sistema de reportes exportables a PDF/Excel, y un módulo de rendimiento por equipo con indicadores de progreso. La interfaz dark mode fue diseñada para uso prolongado sin fatiga visual, con una arquitectura multi-tenant que permite a cada empresa tener su propio workspace aislado.',
    image: '/proyecto_dashboard.png',
    gallery: [
      '/proyecto_dashboard.png',
      '/proyecto_dashboard_2.png'
    ],
    tech: ['React', 'Node.js', 'WebSockets', 'Chart.js', 'PostgreSQL', 'Redis'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: 13,
    title: 'GrandHotel – Sistema de Reservas Hoteleras Online',
    category: ['Full-Stack', 'Páginas Web'],
    shortDescription: 'Plataforma elegante de reservas para hoteles con buscador avanzado de habitaciones, galería inmersiva, pasarela de pagos y panel administrativo.',
    longDescription: 'GrandHotel es una solución web completa para cadenas hoteleras y hoteles boutique que necesitan un sistema de reservas profesional. La plataforma permite a los huéspedes explorar habitaciones con galerías fotográficas de alta resolución, consultar disponibilidad en tiempo real mediante un calendario interactivo, y completar reservas con pasarela de pagos integrada (Stripe/PayPal). Cada habitación incluye listado detallado de amenidades, reseñas verificadas de huéspedes anteriores y precios dinámicos por temporada. El panel administrativo permite gestionar reservas, controlar ocupación, configurar tarifas estacionales y generar reportes de ingresos. Diseño elegante con tipografía serif y paleta cálida que transmite lujo y confianza.',
    image: '/proyecto_hotel.png',
    gallery: [
      '/proyecto_hotel.png',
      '/proyecto_hotel_2.png'
    ],
    tech: ['Next.js', 'TypeScript', 'Stripe', 'Supabase', 'Tailwind CSS', 'Vercel'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: 14,
    title: 'RapidEats – App de Delivery de Comida a Domicilio',
    category: ['Full-Stack', 'Páginas Web'],
    shortDescription: 'Aplicación web de delivery con catálogo de restaurantes, carrito inteligente, seguimiento de pedidos en tiempo real y sistema de pagos integrado.',
    longDescription: 'RapidEats es una plataforma de delivery de comida diseñada para conectar restaurantes locales con clientes hambrientos. La aplicación incluye un buscador inteligente con filtros por categoría (Pizza, Sushi, Burger, Tacos), banners promocionales con descuentos dinámicos, y tarjetas de restaurantes con ratings, tiempo estimado de entrega y rango de precios. El carrito de compras es persistente y muestra un desglose completo del pedido (subtotal, costo de envío, propina, descuentos). El checkout integra múltiples métodos de pago y un sistema de seguimiento en tiempo real del pedido con mapa interactivo. Los restaurantes cuentan con un panel para gestionar su menú, procesar pedidos y analizar métricas de ventas. Diseño mobile-first optimizado para conversiones rápidas desde el celular.',
    image: '/proyecto_delivery.png',
    gallery: [
      '/proyecto_delivery.png',
      '/proyecto_delivery_2.png'
    ],
    tech: ['React Native', 'Node.js', 'MongoDB', 'Socket.io', 'Google Maps API', 'Stripe'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: 15,
    title: 'LeadFlow – CRM de Ventas con Pipeline Visual',
    category: ['Full-Stack', 'Páginas Web'],
    shortDescription: 'Sistema CRM completo con pipeline Kanban drag-and-drop, gestión de clientes, seguimiento de deals y reportes de rendimiento comercial.',
    longDescription: 'LeadFlow es un CRM (Customer Relationship Management) desarrollado para equipos de ventas que necesitan organizar y acelerar su proceso comercial. El corazón del sistema es un pipeline visual estilo Kanban con columnas personalizables (Nuevo Lead → Contactado → Propuesta → Negociación → Cerrado) donde las oportunidades se arrastran entre etapas. Cada tarjeta de deal muestra el valor monetario, prioridad (Hot/Warm/Cold), avatar del responsable y último punto de contacto. El módulo de clientes incluye perfiles detallados con historial de actividades, deals asociados, documentos y notas colaborativas del equipo. Los reportes del dashboard muestran métricas clave como pipeline total, tasa de conversión, deal promedio y rendimiento por vendedor. Construido con arquitectura multi-usuario y permisos por rol.',
    image: '/proyecto_crm.png',
    gallery: [
      '/proyecto_crm.png',
      '/proyecto_crm_2.png'
    ],
    tech: ['React', 'Python', 'Django', 'PostgreSQL', 'Celery', 'AWS'],
    liveUrl: '#',
    githubUrl: '#'
  }
];

const filterCategories = ['Todos', 'Full-Stack', 'Páginas Web', 'Frontend'];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('Todos');
  const [selectedProject, setSelectedProject] = useState(null);
  const [expandedImage, setExpandedImage] = useState(null);

  // Scroll to top when opening the page
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);

  const filteredProjects = activeFilter === 'Todos' 
    ? projectsData 
    : projectsData.filter(project => project.category.includes(activeFilter));

  return (
    <div className="min-h-screen pt-28 pb-20 bg-[#050B14] relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight tracking-tight">
              Páginas Web para Negocios y Empresas
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
              Aquí puedes ver ejemplos reales de soluciones digitales que he creado. No solo son webs bonitas, sino herramientas diseñadas para <span className="font-bold text-gray-300">hacer crecer tu negocio</span> y vender más.
            </p>
          </div>

          {/* Filter Bar */}
          <div className="flex items-center gap-2 md:gap-3 w-full lg:w-auto mt-4 lg:mt-0 justify-start lg:justify-end overflow-x-auto pb-2 sm:pb-0 scrollbar-hide">
            <div className="text-gray-500 mr-1 hidden sm:block">
              <Filter className="w-5 h-5" />
            </div>
            <div className="flex gap-2 sm:gap-3">
              {filterCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`whitespace-nowrap px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-[11px] sm:text-sm font-bold transition-all duration-300 ${
                    activeFilter === cat
                      ? 'bg-blue-600 text-white shadow-[0_0_15px_rgba(37,99,235,0.4)]'
                      : 'bg-[#0f1522] text-gray-400 hover:text-gray-200 hover:bg-[#151c2d]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="bg-[#0f172a] rounded-2xl overflow-hidden border border-gray-800/60 hover:border-blue-500/30 transition-all duration-300 group flex flex-col h-full hover:-translate-y-1 hover:shadow-[0_10_30px_rgba(37,99,235,0.1)] relative"
            >
              {/* Cover Image */}
              <div className="w-full h-56 overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent opacity-80 z-10" />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20 flex items-center justify-center backdrop-blur-[2px]">
                  <button 
                    onClick={() => setSelectedProject(project)}
                    className="bg-white text-black font-extrabold text-sm px-6 py-2.5 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-xl hover:scale-105"
                  >
                    VER DETALLES
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="uppercase tracking-widest text-xs font-bold text-blue-500 mb-3 font-mono">
                  {project.category.join(' · ')}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4 line-clamp-2 leading-snug">
                  {project.title}
                </h3>
                
                <p className="text-sm text-gray-400 leading-relaxed mb-6 line-clamp-3">
                  {project.shortDescription}
                </p>
                
                {/* Tech & Actions */}
                <div className="mt-auto flex items-center gap-2 flex-wrap">
                  {project.tech.slice(0, 3).map((t, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1.5 bg-gray-900 border border-gray-800 text-gray-300 text-xs font-semibold rounded-md"
                    >
                      {t}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="px-3 py-1.5 bg-gray-900 border border-gray-800 text-gray-300 text-xs font-semibold rounded-md">
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* DETALLES PROJECT MODAL */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="bg-[#0b0f19] w-full max-w-5xl max-h-[90vh] rounded-2xl border border-gray-800 shadow-2xl overflow-hidden flex flex-col relative animate-in fade-in zoom-in duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-6 md:p-8 border-b border-gray-800 flex items-start justify-between relative shrink-0">
              <div className="pr-12">
                <span className="text-blue-500 font-bold text-[10px] sm:text-xs uppercase tracking-widest block mb-2 font-mono">
                  {selectedProject.category.join(' · ')}
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white leading-tight">
                  {selectedProject.title}
                </h2>
              </div>
              <button 
                onClick={() => setSelectedProject(null)} 
                className="absolute top-6 right-6 md:top-8 md:right-8 w-10 h-10 rounded-full bg-gray-800/60 hover:bg-gray-700 flex items-center justify-center text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 md:p-8 overflow-y-auto overflow-x-hidden flex flex-col lg:flex-row gap-10 scrollbar-thin scrollbar-thumb-gray-800 scrollbar-track-transparent">
              
              {/* Left Column (Info & Gallery) */}
              <div className="flex-1 space-y-10">
                <section>
                  <h3 className="text-gray-500 font-black text-xs uppercase tracking-widest mb-4">Sobre el Proyecto</h3>
                  <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                    {selectedProject.longDescription}
                  </p>
                </section>
                
                <section>
                  <h3 className="text-gray-500 font-black text-xs uppercase tracking-widest mb-4">Galería & Capturas</h3>
                  <div className="space-y-6">
                    {selectedProject.gallery.map((img, i) => (
                      <div key={i} className="space-y-2">
                        <div 
                          className="rounded-xl overflow-hidden border border-gray-800/60 bg-[#111827] cursor-pointer group/img relative" 
                          onClick={() => setExpandedImage(img)}
                        >
                          <img src={img} className="w-full h-auto object-cover opacity-90 group-hover/img:opacity-100 transition-all duration-300 group-hover/img:scale-[1.02]" alt={`Captura ${i + 1} del proyecto`} />
                          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center">
                            <span className="text-white bg-black/60 px-4 py-2 rounded-full text-sm font-bold backdrop-blur-sm shadow-xl flex items-center gap-2">
                              Ampliar <ExternalLink className="w-4 h-4" />
                            </span>
                          </div>
                        </div>
                        <p className="text-center text-gray-500 italic text-xs">Vista general del proyecto (Click para ampliar)</p>
                      </div>
                    ))}
                  </div>
                  
                  {/* Decorative Footer info label */}
                  <div className="mt-8 border-l-2 border-blue-500 bg-[#151c2d]/40 p-4 rounded-r-lg flex items-center">
                    <p className="text-white text-sm font-semibold tracking-wide">
                      Vista general de {selectedProject.title}
                    </p>
                  </div>
                </section>
              </div>

              {/* Right Column (Sidebar Sticky-like) */}
              <div className="w-full lg:w-80 shrink-0 flex flex-col gap-6">
                
                {/* Tech Stack Window */}
                <div className="border border-gray-800/80 rounded-2xl p-6 bg-[#0f111a]">
                  <h3 className="text-gray-500 font-black text-xs uppercase tracking-widest mb-4">Tecnologías</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map(t => (
                      <span key={t} className="px-3 py-1.5 bg-[#171e33]/50 border border-blue-500/30 text-blue-400 text-[11px] font-bold rounded-lg shadow-sm">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Blue CTA Action Box */}
                <div className="bg-blue-600 rounded-2xl p-6 text-center text-white shadow-[0_0_30px_rgba(37,99,235,0.15)] flex flex-col items-center">
                  <h3 className="text-xl font-black mb-3 leading-tight">¿Te gusta este modelo?</h3>
                  <p className="text-blue-100 text-[13px] mb-6 leading-relaxed">
                    Puedo desarrollar una solución similar personalizada para tu negocio en tiempo récord.
                  </p>
                  
                  <a 
                    href={`https://wa.me/59178680723?text=Hola,%20me%20interesa%20un%20proyecto%20similar%20a%20${encodeURIComponent(selectedProject.title)}.`}
                    target="_blank" 
                    rel="noreferrer" 
                    className="flex flex-row items-center justify-center gap-2 w-full bg-white text-blue-700 font-black text-[13px] tracking-wide px-4 py-3.5 rounded-xl mb-3 hover:bg-gray-50 transition-colors shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                  >
                    <MessageSquare className="w-4 h-4" />
                    COTIZAR ESTE MODELO
                  </a>
                  
                  <a 
                    href={selectedProject.liveUrl !== '#' ? selectedProject.liveUrl : `https://wa.me/59178680723?text=Hola,%20me%20gustar%C3%ADa%20solicitar%20el%20acceso%20a%20la%20demo%20en%20vivo%20de%20${encodeURIComponent(selectedProject.title)}.`}
                    target="_blank" 
                    rel="noreferrer" 
                    className="flex flex-row items-center justify-center gap-2 w-full bg-[#1e3a8a] text-white font-bold text-[13px] tracking-wide px-4 py-3.5 rounded-xl hover:bg-[#172554] transition-colors border border-[#1e40af]"
                  >
                    <ExternalLink className="w-4 h-4" />
                    {selectedProject.liveUrl !== '#' ? 'PROBAR DEMO EN VIVO' : 'SOLICITAR DEMO EN VIVO'}
                  </a>
                </div>

                {/* Secondary close button */}
                <button 
                  onClick={() => setSelectedProject(null)} 
                  className="mt-2 text-gray-500 hover:text-gray-300 text-xs font-semibold mx-auto transition-colors tracking-widest uppercase flex items-center gap-1"
                >
                  Cerrar detalles <X className="w-3 h-3" />
                </button>
              </div>

            </div>
          </div>
        </div>
      )}

      {/* EXPANDED IMAGE LIGHTBOX */}
      {expandedImage && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8 bg-black/95 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setExpandedImage(null)}
        >
          <button 
            onClick={() => setExpandedImage(null)} 
            className="absolute top-6 right-6 sm:top-8 sm:right-8 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-[110]"
          >
            <X className="w-6 h-6" />
          </button>
          <img 
            src={expandedImage} 
            alt="Expanded view" 
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl animate-in zoom-in-95 duration-300 scale-100"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

    </div>
  );
};

export default Projects;
