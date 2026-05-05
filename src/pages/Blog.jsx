import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { useEffect } from 'react';

const tags = ['#Precios Páginas Web', '#Bots WhatsApp', '#Automatización', '#Diseño Web', '#Negocios Digitales'];

const posts = [
  {
    id: 'cuanto-cuesta-pagina-web-2026',
    date: '19 DE MARZO DE 2026',
    readTime: '6 MIN',
    title: 'Cuánto Cuesta Crear una Página Web en 2026 | Precios Reales - Hide.dev',
    excerpt: 'Descubre cuánto cuesta crear una página web en 2026. Precios desde $120 USD, tipos de sitios y cotización real.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80',
    tags: ['#PRECIO PÁGINA WEB', '#DESARROLLO WEB']
  },
  {
    id: 'bots-whatsapp-automatiza-tu-negocio',
    date: '14 DE MARZO DE 2026',
    readTime: '6 MIN',
    title: 'Bots de WhatsApp | Automatiza tu Negocio 2026 - Hide.dev',
    excerpt: 'Automatiza tu negocio con bots de WhatsApp. Atiende clientes 24/7, aumenta ventas y reduce tiempos. Consulta gratis.',
    image: '/bot_cover.png',
    tags: ['#BOTS WHATSAPP', '#AUTOMATIZACIÓN']
  },
  {
    id: 'por-que-tu-negocio-necesita-web',
    date: '9 DE MARZO DE 2026',
    readTime: '5 MIN',
    title: 'Por Qué tu Negocio Necesita una Página Web 2026 | Hide.dev',
    excerpt: 'Si tu negocio no tiene página web, estás perdiendo clientes. Descubre por qué necesitas una web en 2026 y cómo empezar.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    tags: ['#PÁGINA WEB', '#CRECIMIENTO']
  }
];

const faqLinks = [
  {
    q: '¿Cuánto cuesta una página web en 2026?',
    p: 'Desde landing pages económicas hasta tiendas online completas. Te explicamos los precios reales en el mercado.',
    link: '/blog/cuanto-cuesta-pagina-web-2026'
  },
  {
    q: '¿Cómo automatizar tu negocio con WhatsApp?',
    p: 'Los bots de WhatsApp atienden clientes 24/7, toman pedidos y gestionan reservas automáticamente.',
    link: '/blog/bots-whatsapp-automatiza-tu-negocio'
  },
  {
    q: '¿Por qué tu empresa necesita una web en 2026?',
    p: 'El 80% de los clientes buscan en Google antes de comprar. Sin web, eres invisible ante tus competidores.',
    link: '/blog/por-que-tu-negocio-necesita-web'
  }
];

const Blog = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <main className="py-28 md:py-36 px-4 relative overflow-hidden min-h-screen">
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-10 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
            Blog: Crear Páginas Web y Hacer Crecer tu Negocio
          </h1>
          <p className="text-gray-400 text-lg md:text-xl leading-relaxed">
            Guías y consejos reales para dueños de negocios e inversores. Aprende cuánto cuesta una página web, cómo vender más online y cómo automatizar tu empresa.
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {tags.map((tag, i) => (
            <span key={i} className="px-4 py-2 rounded-full border border-gray-800 bg-gray-900/50 text-gray-400 text-sm font-semibold hover:border-cyan-500 hover:text-cyan-400 transition-colors cursor-pointer">
              {tag}
            </span>
          ))}
        </div>

        {/* Grid de Posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {posts.map((post) => (
            <Link 
              key={post.id} 
              to={`/blog/${post.id}`}
              className="group flex flex-col bg-[#0f1525] rounded-3xl overflow-hidden border border-gray-800/60 hover:border-cyan-500/30 transition-all duration-300 shadow-xl hover:-translate-y-2"
            >
              <div className="h-52 overflow-hidden relative">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f1525] to-transparent opacity-80" />
              </div>
              <div className="p-6 md:p-8 flex flex-col flex-1">
                <div className="flex items-center gap-4 text-xs font-bold text-gray-500 mb-4 tracking-wider uppercase">
                  <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> {post.date}</span>
                  <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> {post.readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 leading-snug group-hover:text-cyan-400 transition-colors">
                  {post.title}
                </h3>
                <p className="text-[#8894ab] text-sm leading-relaxed mb-6 flex-1">
                  {post.excerpt}
                </p>
                
                <div className="pt-5 border-t border-gray-800/50 flex flex-wrap items-center justify-between gap-2">
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag, i) => (
                      <span key={i} className="text-[0.65rem] font-bold text-cyan-500 tracking-wider">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center group-hover:bg-cyan-500 transition-colors">
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-white" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Las Preguntas Más Frecuentes - Blog Style */}
        <div className="bg-[#0b1325] rounded-[2rem] border border-gray-800/40 p-10 md:p-14 shadow-2xl">
          <h2 className="text-center text-3xl font-bold text-white mb-12">Las Preguntas Más Frecuentes</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14">
            {faqLinks.map((faq, i) => (
              <div key={i} className="flex flex-col items-center text-center group">
                <h4 className="text-xl font-bold text-[#3b82f6] mb-4 min-h-[56px] flex items-center justify-center">
                  {faq.q}
                </h4>
                <p className="text-[#8894ab] text-sm md:text-base leading-relaxed mb-6 font-medium flex-1">
                  {faq.p}
                </p>
                <Link 
                  to={faq.link}
                  className="text-[#3b82f6] font-bold text-sm tracking-wide flex items-center gap-2 hover:text-cyan-400 transition-colors"
                >
                  Leer artículo <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>

      </div>
    </main>
  );
};

export default Blog;
