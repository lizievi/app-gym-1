💪 Fitness Gym

¡Bienvenido al proyecto frontend App-Gym-1 Esta aplicación web está diseñada para ser una landing page moderna y altamente interactiva para el gimnasio, enfocada en la experiencia del usuario y el rendimiento.

🚀 Tecnologías Principales

El proyecto está construido con un stack moderno de desarrollo web:


  React (^19.2.0): Biblioteca principal para la construcción de la interfaz de usuario.

  TypeScript (~5.9.3): Lenguaje tipado para código más robusto y escalable.

  Vite (^7.2.2): Herramienta de construcción rápida y optimizada.

  Tailwind CSS (^4.1.17): Framework CSS utility-first para estilos responsivos.

  Swiper (^12.0.3): Librería para carruseles y sliders de contenido.

  Framer Motion (^12.23.24): Librería para animaciones fluidas y declarativas.

  Lucide React (Implícito): Iconografía modular.




🛠️ Instalación y Configuración

Para poner en marcha el proyecto en tu máquina local, sigue los siguientes pasos:

Clona el repositorio:

git clone [URL_DEL_REPOSITORIO]
cd app-gym-1


Instala las dependencias:

npm install


Ejecuta el servidor de desarrollo:

npm run dev


El sitio estará disponible en http://localhost:5173 (o el puerto que asigne Vite).

📦 Estructura del Proyecto

La estructura de carpetas sigue un patrón basado en componentes y módulos:

```plain
  src/
  ├── animation/          # Lógica de animación con Framer Motion
  ├── assets/             # Archivos estáticos (imágenes, iconos, etc.)
  ├── components/         # Componentes reutilizables de la UI (e.g., Header, Footer, Accordion)
  │   ├── About.tsx
  │   ├── Accordion.tsx
  │   ├── Banner.tsx
  │   ├── ...
  │   ├── WorkoutSlider.tsx
  ├── data.ts             # Archivos de datos tipados (e.g., pricingData, faq)
  ├── App.css             # Estilos de la aplicación
  ├── index.css           # Archivo principal de Tailwind (donde está @theme)
  ├── main.tsx            # Punto de entrada de React
  └── workoutSlider.css   # Estilos específicos para los sliders (Swiper)
```

🎨 Convenciones de Diseño (Tailwind CSS)

El proyecto utiliza un sistema de diseño customizado inyectado directamente a través de @theme en index.css, lo cual define la paleta de colores, tipografía y utilidades base.

Paleta de Colores

  --color-primary-200 (#F28D34): Color Primario. Usado en botones, acentos y estados activos.

  --color-neutral-500 (#131316): Texto Principal. Usado en títulos y elementos clave.

  --color-neutral-400 (#595962): Texto Secundario. Usado para el cuerpo de texto general.

  --color-page (#fcfcff): Fondo general de la aplicación.

Tipografía

  --font-primary (Títulos): Inter

  --font-secondary (Cuerpo): "Open Sans"

Clases de Utilidad Clave

  .container: Contenedor responsivo con ancho ajustado por breakpoints (sm:w-[90%], md:w-[80%], lg:w-[70%] de ancho).

  .h1, .h2, etc.: Clases tipográficas con estilos predefinidos para encabezados (usan font-primary y font-extrabold).

  .btn-primary: Botón principal con fondo primario (#F28D34) y texto blanco.

  .section: Estilo base para las secciones con padding responsivo.

  .workoutSlider: Contenedor con position: relative para el posicionamiento correcto de las flechas de Swiper.