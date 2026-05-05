# 🛡️ 0xDEV — Portafolio Interactivo

Portafolio web profesional con temática **hacker/cybersec**, construido para destacar habilidades en **Frontend, Backend, Desarrollo de Apps Móviles y Ciberseguridad**.

![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=flat-square&logo=vite)
![TailwindCSS](https://img.shields.io/badge/Tailwind-4-06B6D4?style=flat-square&logo=tailwindcss)

---

## ✨ Características

- 🎨 **Diseño Cybersec/Hacker**: Dark mode profundo con acentos neón (cian, esmeralda, púrpura)
- 🌐 **SPA con scroll suave**: Navegación fluida entre secciones con detección activa
- 🎬 **Animaciones premium**: Partículas interactivas con mouse, typing effect, scroll reveal, micro-interacciones
- 🖱️ **Partículas reactivas al cursor**: Las partículas se conectan y reaccionan al movimiento del ratón
- 📊 **Stats animadas**: Sección de estadísticas con diseño gradient
- 📱 **100% Responsive**: Menú móvil con hamburguesa + diseño adaptable a todos los dispositivos
- 🧩 **Componentes reutilizables**: Navbar, Hero, Projects, Courses, Contact, ParticleBackground
- 🎭 **Glassmorphism**: Efectos de cristal esmerilado, noise overlay y gradient borders
- ⚡ **Rendimiento**: Vite + React 19 para carga instantánea
- 📝 **Formulario de contacto**: Diseño terminal-style con campos numerados

## 📐 Estructura del Proyecto

```
Portafolio/
├── index.html                 # Entry HTML con SEO meta tags
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── public/
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── main.jsx               # Entry point React
│   ├── App.jsx                # Root component + noise overlay
│   ├── App.css
│   ├── index.css              # Design system completo (animaciones, utilidades, componentes)
│   ├── hooks/
│   │   └── useScrollReveal.js # Hook para animaciones al scroll
│   └── components/
│       ├── ParticleBackground.jsx  # Canvas animado con interacción del mouse
│       ├── Navbar.jsx              # Navbar pegajosa con detección de sección activa
│       ├── Hero.jsx                # Hero con typing effect + stats row
│       ├── Projects.jsx            # Grid de proyectos con status badges
│       ├── Courses.jsx             # Catálogo educativo con niveles y duración
│       └── Contact.jsx             # Formulario terminal-style + info cards + social
```

## 🚀 Instalación y Ejecución Local

### Requisitos previos
- [Node.js](https://nodejs.org/) v18 o superior
- npm (incluido con Node.js)

### Pasos

1. **Clona o descarga** el repositorio:
   ```bash
   git clone <url-del-repo>
   cd Portafolio
   ```

2. **Instala las dependencias**:
   ```bash
   npm install
   ```

3. **Inicia el servidor de desarrollo**:
   ```bash
   npm run dev
   ```

4. **Abre tu navegador** en la URL que indica la terminal (por defecto):
   ```
   http://localhost:5173/
   ```

### Build de producción

```bash
npm run build
npm run preview   # Vista previa del build
```

## 🛠️ Tecnologías

| Tecnología | Uso |
|---|---|
| **React 19** | Librería UI con componentes funcionales y hooks |
| **Vite 8** | Build tool y servidor de desarrollo ultrarrápido |
| **Tailwind CSS 4** | Sistema de diseño utility-first |
| **Lucide React** | Iconos SVG (+ SVG inline para iconos de marca) |
| **Google Fonts** | Inter (UI) + JetBrains Mono (código) |

## 🎨 Tema y Diseño

- **Fondo**: `#030712` (dark mode profundo)
- **Acentos**: Cyan (`#06b6d4`), Emerald (`#10b981`), Purple (`#a855f7`)
- **Efectos**: Glassmorphism, gradient borders, neon glow, partículas interactivas, noise overlay
- **Tipografía**: Inter (sans-serif) + JetBrains Mono (monospace)
- **Scrollbar**: Personalizada con gradiente cyan-to-emerald

## 🧑‍💻 Secciones

### Hero
- Typing effect rotativo con roles del desarrollador
- Iconos animados flotantes (Code, Shield, CPU)
- Fila de stats animadas (Años Exp, Proyectos, Uptime, Café)
- CTA dual: "Explorar mi trabajo" + "Contáctame"

### Mis Proyectos
- Grid 2x2 con tarjetas glassmorphism
- Status badges (Producción, Activo, En desarrollo, Completado)
- Tags de tecnología por color del proyecto
- Hover effects con gradient borders y elevación

### Cursos
- Grid 3 columnas con header visual por curso
- Badges de duración y nivel de dificultad
- Botón play overlay al hacer hover
- CTAs: YouTube + Grupo VIP

### Contacto
- Layout 2 columnas: Info cards + Formulario
- Formulario estilo terminal con campos numerados
- Info cards: Freelance, Respuesta rápida, Remoto
- Botones sociales (YouTube, GitHub, Telegram) con hover effects únicos

## 📄 Licencia

© 2026 0xDEV. Todos los derechos reservados.
