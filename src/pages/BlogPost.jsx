import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, Clock, ArrowLeft, Share2 } from 'lucide-react';

const postData = {
  'cuanto-cuesta-pagina-web-2026': {
    tags: ['PRECIO PÁGINA WEB', 'DESARROLLO WEB', 'CUÁNTO CUESTA PÁGINA WEB', 'DISEÑO WEB', 'PÁGINAS WEB PRECIOS'],
    date: '19 DE MARZO DE 2026',
    readTime: '6 MIN',
    title: 'Cuánto Cuesta Crear una Página Web en 2026 (Precios Reales)',
    author: 'BRYAN',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    content: (
      <>
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 mt-12">¿Cuánto cuesta crear una página web en 2026?</h2>
        <p className="mb-6">
          Si tienes un negocio y estás pensando en crear una página web profesional, es normal encontrar precios muy diferentes. El desarrollo web puede variar desde <strong>$120 hasta más de $3,500 USD</strong> dependiendo del tipo de sitio, funcionalidades y nivel de personalización.
        </p>
        <p className="mb-10">
          En esta guía te explico los precios reales de páginas web en 2026, qué factores influyen en el costo y cuánto deberías invertir según tu negocio.
        </p>

        <h3 className="text-xl md:text-2xl font-bold text-white mb-6 mt-10">Precio de páginas web según el tipo de sitio</h3>
        <p className="mb-8">No todas las páginas web cuestan lo mismo. El precio depende del objetivo de tu negocio y del tipo de web que necesites.</p>

        <div className="space-y-6 mb-12">
          <div className="bg-[#0b1325] p-6 rounded-2xl border border-gray-800/60 shadow-lg">
            <h4 className="text-lg font-bold text-cyan-400 mb-1">Landing Page (Página de Aterrizaje)</h4>
            <p className="text-white font-mono text-[0.9rem] font-semibold mb-3 border-b border-gray-800 pb-3">Precio: $120 - $350 USD</p>
            <p className="text-gray-400 text-sm leading-relaxed">Ideal para promocionar un servicio o producto específico. Este tipo de página web es común en negocios que quieren generar clientes rápidamente.</p>
          </div>

          <div className="bg-[#0b1325] p-6 rounded-2xl border border-gray-800/60 shadow-lg">
            <h4 className="text-lg font-bold text-cyan-400 mb-1">Sitio Web Corporativo</h4>
            <p className="text-white font-mono text-[0.9rem] font-semibold mb-3 border-b border-gray-800 pb-3">Precio: $350 - $950 USD</p>
            <p className="text-gray-400 text-sm leading-relaxed">Perfecto para empresas que necesitan presencia online profesional con varias secciones como inicio, servicios, contacto y blog.</p>
          </div>

          <div className="bg-[#0b1325] p-6 rounded-2xl border border-gray-800/60 shadow-lg">
            <h4 className="text-lg font-bold text-cyan-400 mb-1">Tienda Online (E-Commerce)</h4>
            <p className="text-white font-mono text-[0.9rem] font-semibold mb-3 border-b border-gray-800 pb-3">Precio: $700 - $1,900 USD</p>
            <p className="text-gray-400 text-sm leading-relaxed">Incluye catálogo de productos, carrito de compras, pagos online y gestión de pedidos. Ideal para negocios que venden en internet.</p>
          </div>

          <div className="bg-[#0b1325] p-6 rounded-2xl border border-gray-800/60 shadow-lg">
            <h4 className="text-lg font-bold text-cyan-400 mb-1">Aplicación Web a Medida</h4>
            <p className="text-white font-mono text-[0.9rem] font-semibold mb-3 border-b border-gray-800 pb-3">Precio: $1,200 - $3,500+ USD</p>
            <p className="text-gray-400 text-sm leading-relaxed">Soluciones personalizadas con funcionalidades específicas como dashboards, automatización y sistemas internos.</p>
          </div>
        </div>

        <h3 className="text-xl md:text-2xl font-bold text-white mb-6 mt-10">Factores que afectan el precio de una página web</h3>
        <ul className="space-y-3 mb-10 text-gray-300 list-disc pl-5">
          <li><strong className="text-white">Tipo de web:</strong> Landing page, corporativa, e-commerce o sistema personalizado</li>
          <li><strong className="text-white">Diseño:</strong> Plantilla o diseño completamente personalizado</li>
          <li><strong className="text-white">Funcionalidades:</strong> Formularios, pagos, reservas, automatización</li>
          <li><strong className="text-white">Contenido:</strong> Textos, imágenes y estructura SEO</li>
          <li><strong className="text-white">Optimización SEO:</strong> Fundamental para aparecer en Google</li>
        </ul>

        <h3 className="text-xl md:text-2xl font-bold text-white mb-6 mt-10">¿Qué incluye una página web profesional?</h3>
        <p className="mb-4">Una página web bien desarrollada debería incluir:</p>
        <ul className="space-y-3 mb-10 text-gray-300 list-disc pl-5">
          <li>Diseño moderno y responsive</li>
          <li>Optimización para SEO en Google</li>
          <li>Carga rápida y buen rendimiento</li>
          <li>Certificado SSL (HTTPS)</li>
          <li>Formulario de contacto o integración con WhatsApp</li>
          <li>Panel de administración (opcional)</li>
        </ul>

        <h3 className="text-xl md:text-2xl font-bold text-white mb-6 mt-10">¿Vale la pena invertir en una página web?</h3>
        <p className="mb-4">
          Si tu negocio depende de conseguir clientes, la respuesta es sí. Una página web bien optimizada puede traerte clientes todos los días desde Google sin necesidad de pagar publicidad.
        </p>
        <p className="mb-10">
          Cada vez más personas buscan servicios y productos en internet. Si tu negocio no aparece, estás perdiendo oportunidades frente a tu competencia.
        </p>

        <h3 className="text-xl md:text-2xl font-bold text-white mb-6 mt-10">Conclusión</h3>
        <p className="mb-6">
          El precio de una página web depende de lo que realmente necesitas. Lo importante no es gastar menos, sino invertir en una web que genere resultados.
        </p>
        <p className="mb-12">
          Si quieres una cotización real para tu negocio, escríbeme por WhatsApp y te ayudo a definir la mejor opción según tu presupuesto.
        </p>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <span className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4 block">Artículos relacionados</span>
          <Link to="/blog/por-que-tu-negocio-necesita-web" className="group block p-6 rounded-2xl bg-[#0b1325] border border-gray-800/80 hover:border-cyan-500/40 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-900/10">
            <h4 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors mb-2">
              "Por qué tu negocio necesita una página web en 2026"
            </h4>
            <p className="text-sm text-cyan-500 font-semibold group-hover:text-cyan-300">Leer artículo &rarr;</p>
          </Link>
        </div>
      </>
    )
  },
  'bots-whatsapp-automatiza-tu-negocio': {
    tags: ['BOTS WHATSAPP', 'AUTOMATIZACIÓN NEGOCIOS', 'BOT WHATSAPP PRECIO', 'AUTOMATIZAR ATENCIÓN CLIENTES', 'WHATSAPP BUSINESS BOT'],
    date: '14 DE MARZO DE 2026',
    readTime: '6 MIN',
    title: 'Cómo Automatizar tu Negocio con Bots de WhatsApp (Guía 2026)',
    author: 'BRYAN',
    image: '/bot_cover.png',
    content: (
      <>
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 mt-12">¿Por qué automatizar tu negocio con WhatsApp?</h2>
        <p className="mb-6">
          La mayoría de clientes prefiere escribir por WhatsApp antes que llamar. Si tu negocio no responde rápido, estás perdiendo ventas todos los días. Hoy en día, la velocidad de respuesta es clave para cerrar clientes.
        </p>
        <p className="mb-10">
          Un bot de WhatsApp permite automatizar tu negocio, responder mensajes al instante y atender clientes 24/7 sin necesidad de estar siempre disponible.
        </p>

        <h3 className="text-xl md:text-2xl font-bold text-white mb-6 mt-10">¿Qué es un bot de WhatsApp y cómo funciona?</h3>
        <p className="mb-4">
          Un bot de WhatsApp es una herramienta que responde automáticamente a los mensajes de tus clientes. Puede guiar conversaciones, enviar información, tomar pedidos o agendar citas sin intervención manual.
        </p>
        <p className="mb-10">
          Esto permite que tu negocio funcione de forma más eficiente y profesional.
        </p>

        <h3 className="text-xl md:text-2xl font-bold text-white mb-6 mt-10">Beneficios de automatizar tu negocio con bots de WhatsApp</h3>
        <ul className="space-y-4 mb-12 text-gray-300">
          <li className="flex items-start gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-2 flex-shrink-0" />
            <p><strong className="text-white">Respuesta inmediata:</strong> Atiende clientes en segundos, incluso fuera de horario.</p>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-2 flex-shrink-0" />
            <p><strong className="text-white">Más ventas:</strong> No pierdes clientes por demora en respuestas.</p>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-2 flex-shrink-0" />
            <p><strong className="text-white">Ahorro de tiempo:</strong> Automatiza tareas repetitivas.</p>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-2 flex-shrink-0" />
            <p><strong className="text-white">Atención 24/7:</strong> Tu negocio nunca deja de responder.</p>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-2 flex-shrink-0" />
            <p><strong className="text-white">Escalabilidad:</strong> Atiende múltiples clientes al mismo tiempo.</p>
          </li>
        </ul>

        <h3 className="text-xl md:text-2xl font-bold text-white mb-6 mt-10">¿Qué puede hacer un bot de WhatsApp para tu negocio?</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-[#0b1325] p-6 rounded-2xl border border-gray-800/60 shadow-lg">
            <h4 className="text-lg font-bold text-cyan-400 mb-2">Responder preguntas frecuentes</h4>
            <p className="text-gray-400 text-sm leading-relaxed">Horarios, ubicación, precios o servicios. Todo de forma automática.</p>
          </div>
          <div className="bg-[#0b1325] p-6 rounded-2xl border border-gray-800/60 shadow-lg">
            <h4 className="text-lg font-bold text-cyan-400 mb-2">Tomar pedidos</h4>
            <p className="text-gray-400 text-sm leading-relaxed">El bot puede guiar al cliente, mostrar productos y registrar pedidos directamente.</p>
          </div>
          <div className="bg-[#0b1325] p-6 rounded-2xl border border-gray-800/60 shadow-lg">
            <h4 className="text-lg font-bold text-cyan-400 mb-2">Agendar citas</h4>
            <p className="text-gray-400 text-sm leading-relaxed">Ideal para barberías, consultorios o servicios. El bot organiza tu agenda automáticamente.</p>
          </div>
          <div className="bg-[#0b1325] p-6 rounded-2xl border border-gray-800/60 shadow-lg">
            <h4 className="text-lg font-bold text-cyan-400 mb-2">Enviar notificaciones</h4>
            <p className="text-gray-400 text-sm leading-relaxed">Recordatorios de citas, confirmaciones de pedidos y seguimiento al cliente.</p>
          </div>
        </div>

        <h3 className="text-xl md:text-2xl font-bold text-white mb-6 mt-10">Casos reales de automatización</h3>
        <p className="mb-6">He implementado bots de WhatsApp en múltiples negocios con resultados reales:</p>
        <ul className="space-y-3 mb-12 text-gray-300 list-disc pl-5">
          <li><strong className="text-white">Restaurante:</strong> Automatizó pedidos y redujo tiempos en un 70%</li>
          <li><strong className="text-white">Tienda de ropa:</strong> Aumentó ventas atendiendo fuera de horario</li>
          <li><strong className="text-white">Consultorio:</strong> Automatizó citas sin llamadas</li>
        </ul>

        <h3 className="text-xl md:text-2xl font-bold text-white mb-6 mt-10">¿Cuánto cuesta un bot de WhatsApp?</h3>
        <p className="mb-6">El precio de un bot de WhatsApp depende de la complejidad:</p>
        <div className="bg-gray-900/40 p-6 rounded-2xl border border-gray-800 mb-6">
          <ul className="space-y-4 text-white font-mono text-sm max-w-sm">
            <li className="flex justify-between border-b border-gray-800 pb-2">
              <span className="text-cyan-400">Bot básico:</span>
              <span>desde $200 USD</span>
            </li>
            <li className="flex justify-between border-b border-gray-800 pb-2">
              <span className="text-cyan-400">Bot intermedio:</span>
              <span>entre $350 y $700 USD</span>
            </li>
            <li className="flex justify-between">
              <span className="text-cyan-400">Bot avanzado:</span>
              <span>desde $700 USD</span>
            </li>
          </ul>
        </div>
        <p className="mb-10 text-gray-400 italic">La inversión depende de las funciones que necesite tu negocio.</p>

        <h3 className="text-xl md:text-2xl font-bold text-white mb-6 mt-10">¿Vale la pena automatizar tu negocio?</h3>
        <p className="mb-4">
          Si recibes mensajes constantemente, la respuesta es sí. Automatizar tu WhatsApp no solo mejora la atención, también aumenta tus ingresos y reduce carga de trabajo.
        </p>
        <p className="mb-10">
          Los negocios que responden más rápido tienen una ventaja clara frente a su competencia.
        </p>

        <h3 className="text-xl md:text-2xl font-bold text-white mb-6 mt-10">Conclusión</h3>
        <p className="mb-6">
          Automatizar tu negocio con bots de WhatsApp es una de las mejores decisiones si quieres crecer sin aumentar costos operativos.
        </p>
        <p className="mb-12">
          Si quieres implementar un bot en tu negocio, escríbeme por WhatsApp y te explico cómo hacerlo paso a paso.
        </p>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <span className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4 block">Artículos relacionados</span>
          <Link to="/blog/cuanto-cuesta-pagina-web-2026" className="group block p-6 rounded-2xl bg-[#0b1325] border border-gray-800/80 hover:border-cyan-500/40 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-900/10">
            <h4 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors mb-2">
              "Cuánto cuesta crear una página web en 2026"
            </h4>
            <p className="text-sm text-cyan-500 font-semibold group-hover:text-cyan-300">&larr; Leer artículo</p>
          </Link>
        </div>
      </>
    )
  },
  'por-que-tu-negocio-necesita-web': {
    tags: ['PÁGINA WEB', 'DESARROLLO WEB', 'NEGOCIO SIN WEB', 'PRESENCIA DIGITAL', 'CREAR PÁGINA WEB NEGOCIO'],
    date: '9 DE MARZO DE 2026',
    readTime: '5 MIN',
    title: 'Por Qué tu Negocio Necesita una Página Web en 2026',
    author: 'BRYAN',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80',
    content: (
      <>
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 mt-12">¿Por qué tu negocio necesita una página web?</h2>
        <p className="mb-6">
          Si tienes un negocio y no tienes página web, estás perdiendo clientes todos los días. Hoy en día, la mayoría de personas busca en Google antes de comprar, y si tu negocio no aparece, simplemente eligen a tu competencia.
        </p>
        <p className="mb-10">
          Tener una página web ya no es un lujo, es una necesidad para cualquier negocio que quiera crecer en internet.
        </p>

        <h3 className="text-xl md:text-2xl font-bold text-white mb-6 mt-10">El 80% de los clientes buscan en Google</h3>
        <p className="mb-6">
          Antes de tomar una decisión, los clientes investigan. Buscan servicios, comparan opciones y eligen el negocio que les genere más confianza.
        </p>
        <p className="mb-10 text-cyan-400 font-semibold italic border-l-4 border-cyan-500 pl-4 bg-gray-900/30 p-4 rounded-r-lg">
          Si tu negocio no aparece en Google, es como si no existiera para muchos clientes potenciales.
        </p>

        <h3 className="text-xl md:text-2xl font-bold text-white mb-6 mt-10">Ventajas de tener una página web propia</h3>
        <div className="space-y-6 mb-12">
          <div className="bg-[#0b1325] p-6 rounded-2xl border border-gray-800/60 shadow-lg relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-cyan-500"></div>
            <h4 className="text-lg font-bold text-white mb-2">Clientes todos los días</h4>
            <p className="text-gray-400 text-sm leading-relaxed">Una página web bien optimizada puede traerte clientes constantemente sin necesidad de pagar publicidad continua.</p>
          </div>
          <div className="bg-[#0b1325] p-6 rounded-2xl border border-gray-800/60 shadow-lg relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-emerald-500"></div>
            <h4 className="text-lg font-bold text-white mb-2">Mayor credibilidad</h4>
            <p className="text-gray-400 text-sm leading-relaxed">Un negocio con página web se percibe como más profesional, oficial y confiable frente a los clientes.</p>
          </div>
          <div className="bg-[#0b1325] p-6 rounded-2xl border border-gray-800/60 shadow-lg relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-blue-500"></div>
            <h4 className="text-lg font-bold text-white mb-2">Presencia en Google</h4>
            <p className="text-gray-400 text-sm leading-relaxed">Con una web optimizada, tu negocio puede aparecer y liderar cuando las personas locales o internacionales buscan tus servicios.</p>
          </div>
          <div className="bg-[#0b1325] p-6 rounded-2xl border border-gray-800/60 shadow-lg relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-purple-500"></div>
            <h4 className="text-lg font-bold text-white mb-2">Disponibilidad 24/7</h4>
            <p className="text-gray-400 text-sm leading-relaxed">Tu escaparate digital está disponible en todo momento, incluso cuando estás descansando.</p>
          </div>
        </div>

        <h3 className="text-xl md:text-2xl font-bold text-white mb-6 mt-10">¿Por qué no basta con redes sociales?</h3>
        <ul className="space-y-4 mb-10 text-gray-300">
          <li className="flex items-start gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-2 flex-shrink-0" />
            <p><strong className="text-white">No controlas la plataforma:</strong> Las redes pueden cambiar reglas o limitar tu alcance orgánico de un día para otro.</p>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-2 flex-shrink-0" />
            <p><strong className="text-white">Menor visibilidad:</strong> Solo una fracción de tus seguidores reales ve tus publicaciones debido al algoritmo.</p>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-2 flex-shrink-0" />
            <p><strong className="text-white">No posicionas en Google:</strong> Las redes están desconectadas del motor de búsqueda más grande del mundo.</p>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-2 flex-shrink-0" />
            <p><strong className="text-white">Menor credibilidad:</strong> Una web propia demuestra inversión e infraestructura y genera más confianza.</p>
          </li>
        </ul>

        <h3 className="text-xl md:text-2xl font-bold text-white mb-6 mt-10">El costo de no tener página web</h3>
        <p className="mb-6">
          Cada día sin página web son clientes que buscan tus servicios en Internet y terminan contratando a tu competencia.
        </p>
        <p className="mb-10 text-white font-bold text-xl">
          Invertir en una web profesional no es un gasto, es una herramienta clave para generar ingresos.
        </p>

        <h3 className="text-xl md:text-2xl font-bold text-white mb-6 mt-10">Conclusión</h3>
        <p className="mb-6">
          Si quieres que tu negocio crezca sólidamente este año, necesitas una página web optimizada que te ayude a conseguir clientes. No se trata solo de tener presencia online, sino de tener una herramienta que trabaje por ti todos los días.
        </p>
        <p className="mb-12 text-gray-400">
          Si quieres crear una página web que realmente genere clientes, escríbeme por WhatsApp y te ayudo a empezar.
        </p>

        {/* RELATED ARTICLES - DOUBLE LINK */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <span className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-6 block">Artículos relacionados recomendados</span>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <Link to="/blog/cuanto-cuesta-pagina-web-2026" className="group flex flex-col p-6 rounded-2xl bg-[#0b1325] border border-gray-800/80 hover:border-cyan-500/40 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-900/10">
              <h4 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors mb-3 leading-snug">
                "Cuánto cuesta crear una página web en 2026"
              </h4>
              <p className="text-sm text-cyan-500 font-semibold group-hover:text-cyan-300 mt-auto">Leer artículo &rarr;</p>
            </Link>
            <Link to="/blog/bots-whatsapp-automatiza-tu-negocio" className="group flex flex-col p-6 rounded-2xl bg-[#0b1325] border border-gray-800/80 hover:border-cyan-500/40 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-900/10">
              <h4 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors mb-3 leading-snug">
                "Cómo automatizar tu negocio con bots de WhatsApp"
              </h4>
              <p className="text-sm text-cyan-500 font-semibold group-hover:text-cyan-300 mt-auto">Leer artículo &rarr;</p>
            </Link>
          </div>
        </div>
      </>
    )
  }
};

const BlogPost = () => {
  const { id } = useParams();
  const post = postData[id];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [id]);

  if (!post) {
    return (
      <main className="py-36 px-4 min-h-screen flex flex-col items-center justify-center text-center">
        <h1 className="text-3xl font-bold text-white mb-4">Artículo no encontrado</h1>
        <Link to="/blog" className="text-cyan-500 hover:underline">Volver al blog</Link>
      </main>
    );
  }

  return (
    <main className="py-28 md:py-36 px-4 relative overflow-hidden min-h-screen bg-dark-950">
      <div className="max-w-3xl mx-auto relative z-10">
        
        <Link to="/blog" className="inline-flex items-center gap-2 text-cyan-500 font-semibold mb-10 hover:text-cyan-400 transition-colors bg-cyan-500/10 px-4 py-2 rounded-full text-sm">
          <ArrowLeft className="w-4 h-4" /> Volver al Blog
        </Link>
        
        {/* Post Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {post.tags.map((tag, i) => (
            <span key={i} className="px-3 py-1 rounded-full border border-gray-800 bg-[#0b1325] text-cyan-500 text-[0.65rem] font-bold tracking-wider uppercase">
              {tag}
            </span>
          ))}
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-8 leading-[1.1] tracking-tight">
          {post.title}
        </h1>

        <div className="flex flex-wrap items-center gap-6 text-xs font-bold text-gray-400 mb-10 tracking-widest uppercase border-y border-gray-800/80 py-4">
          <div className="flex items-center gap-2 text-white">
            <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-cyan-500 to-emerald-500 flex items-center justify-center text-[10px]">
              HD
            </div>
            {post.author}
          </div>
          <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-cyan-500" /> {post.date}</span>
          <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-cyan-500" /> {post.readTime}</span>
          <button className="flex items-center gap-1.5 ml-auto hover:text-white transition-colors">
            <Share2 className="w-4 h-4" /> Compartir
          </button>
        </div>

        <div className="w-full h-64 md:h-[26rem] bg-gray-800 rounded-3xl mb-12 overflow-hidden shadow-2xl border border-gray-700/50">
          <img 
            src={post.image} 
            alt="Cover" 
            className="w-full h-full object-cover"
          />
        </div>

        <article className="prose prose-invert prose-lg max-w-none text-gray-300 prose-headings:text-white prose-p:leading-relaxed prose-a:text-cyan-400 hover:prose-a:text-cyan-300 prose-strong:text-white">
          {post.content}
        </article>

        {/* Global Blog CTA */}
        <div className="mt-16 bg-[#0b1325] rounded-[1.5rem] p-10 md:p-14 border border-gray-800/60 text-center shadow-xl">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            ¿Necesitas ayuda con tu proyecto online?
          </h3>
          <p className="text-[#8894ab] text-[15px] md:text-base leading-relaxed max-w-2xl mx-auto mb-8 font-medium">
            He capacitado e implementado soluciones que ayudan a los negocios locales a automatizar procesos y obtener más clientes.
          </p>
          <a 
            href="https://wa.me/59157067635?text=Hola%20Bryan,%20le%C3%AD%20tu%20blog%20y%20me%20gustar%C3%ADa%20agendar%20una%20consultor%C3%ADa." 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block px-8 py-3.5 bg-[#3b82f6] hover:bg-[#2563eb] text-white font-bold rounded-xl transition-all shadow-[0_0_25px_rgba(59,130,246,0.25)] hover:shadow-[0_0_35px_rgba(59,130,246,0.45)] hover:-translate-y-1"
          >
            Agendar Consultoría Gratuita
          </a>
        </div>

      </div>
    </main>
  );
};

export default BlogPost;
