# 🎨 Lifetime-CV Frontend

[🇬🇧 English](README.md) | [🇪🇸 Español](README.es.md) | [🇫🇷 Français](README.fr.md) | [🇩🇪 Deutsch](README.de.md)

![License](https://img.shields.io/badge/licencia-MIT-blue.svg)
![Angular](https://img.shields.io/badge/angular-18.x-red.svg)
![TypeScript](https://img.shields.io/badge/typescript-5.x-blue.svg)
![Node](https://img.shields.io/badge/node-%3E%3D18.0.0-brightgreen.svg)
![NgRx](https://img.shields.io/badge/ngrx-18.x-purple.svg)

Aplicación moderna de CV multilingüe construida con Angular. Incluye gestión dinámica de contenido, animaciones fluidas y diseño responsivo.

## 📋 Tabla de Contenidos

- [Acerca del Proyecto](#acerca-del-proyecto)
- [Características](#características)
- [Stack Tecnológico](#stack-tecnológico)
- [Requisitos Previos](#requisitos-previos)
- [Instalación](#instalación)
- [Configuración de Entornos](#configuración-de-entornos)
- [Ejecutar la Aplicación](#ejecutar-la-aplicación)
- [Scripts Disponibles](#scripts-disponibles)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Internacionalización (i18n)](#internacionalización-i18n)
- [Testing](#testing)
- [Construcción para Producción](#construcción-para-producción)
- [Contribuir](#contribuir)
- [Licencia](#licencia)

## 📖 Acerca del Proyecto

Lifetime-CV Frontend es una aplicación web moderna y responsiva que muestra tu perfil profesional en múltiples idiomas. Construida con Angular, incluye animaciones fluidas, soporte de tema oscuro/claro e integración perfecta con la API del backend.

Este frontend se conecta a la API [Lifetime-CV Backend](https://github.com/YOUR_GITHUB_USERNAME/Lifetime-CV-backend).

## ✨ Características

- 🌍 **Soporte Multilingüe:** Español, Inglés, Francés y Alemán
- 🎨 **UI/UX Moderna:** Diseño limpio y profesional con animaciones fluidas
- 🌓 **Tema Oscuro/Claro:** Alternar entre temas con preferencia persistente
- 📱 **Totalmente Responsivo:** Optimizado para escritorio, tablet y móvil
- 🔐 **Panel de Administración:** Dashboard seguro para gestión de contenido
- 📊 **Analíticas en Tiempo Real:** Ver estadísticas del CV y datos de visitantes
- 🎭 **Secciones Dinámicas:**
  - Sobre Mí / Perfil
  - Línea de Tiempo de Experiencia Laboral
  - Portfolio de Proyectos
  - Habilidades y Tecnologías
  - Educación y Certificaciones
  - Formulario de Contacto
- 📄 **Exportación a PDF:** Descargar CV en diferentes formatos
- 🔗 **Integración con GitHub:** Mostrar estadísticas de GitHub en vivo
- 🚀 **Optimizado para Rendimiento:** Lazy loading, code splitting y caché
- ♿ **Accesible:** Cumple con WCAG 2.1
- 🎯 **Amigable con SEO:** Server-side rendering con Angular Universal

## 🛠️ Stack Tecnológico

- **Framework:** Angular 18.x
- **Lenguaje:** TypeScript 5.x
- **Estilos:** SCSS + Tailwind CSS
- **Gestión de Estado:** NgRx (Store, Effects, Entity)
- **Formularios:** Reactive Forms
- **Cliente HTTP:** HttpClient con Interceptors
- **Enrutamiento:** Angular Router con guards
- **Animaciones:** Angular Animations
- **i18n:** @angular/localize + ngx-translate
- **Gráficos:** Chart.js / ng2-charts
- **Iconos:** Font Awesome / Material Icons
- **Testing:** Jest + Angular Testing Library
- **Testing E2E:** Cypress
- **Calidad de Código:** ESLint + Prettier
- **Herramienta de Construcción:** Angular CLI + Webpack

## 📦 Requisitos Previos

Antes de comenzar, asegúrate de tener instalado lo siguiente:

- [Node.js](https://nodejs.org/) (v18.x o superior)
- [npm](https://www.npmjs.com/) (v9.x o superior) o [yarn](https://yarnpkg.com/)
- [Angular CLI](https://angular.io/cli) (v18.x)
- [Git](https://git-scm.com/)

```bash
# Instalar Angular CLI globalmente
npm install -g @angular/cli
```

## 🚀 Instalación

1. **Clonar el repositorio**

```bash
git clone https://github.com/YOUR_GITHUB_USERNAME/Lifetime-CV-frontend.git
cd Lifetime-CV-frontend
```

2. **Instalar dependencias**

```bash
npm install
# o
yarn install
```

3. **Configurar entornos**

```bash
# El entorno de desarrollo está configurado por defecto
# Para configuración personalizada, ver sección Configuración de Entornos
```

## 🔧 Configuración de Entornos

La aplicación utiliza archivos de entorno de Angular para la configuración. Crea o modifica los siguientes archivos:

### Desarrollo: `src/environments/environment.ts`

```typescript
export const environment = {
  production: false,
  apiUrl: 'http://localhost:3000/api/v1',
  apiVersion: 'v1',
  enableAnalytics: false,
  enableDevTools: true,
  defaultLanguage: 'es',
  supportedLanguages: ['es', 'en', 'fr', 'de'],
  githubApi: 'https://api.github.com',
  githubUsername: 'YOUR_GITHUB_USERNAME'
};
```

### Producción: `src/environments/environment.prod.ts`

```typescript
export const environment = {
  production: true,
  apiUrl: 'https://tu-dominio-backend.com/api/v1',
  apiVersion: 'v1',
  enableAnalytics: true,
  enableDevTools: false,
  defaultLanguage: 'es',
  supportedLanguages: ['es', 'en', 'fr', 'de'],
  githubApi: 'https://api.github.com',
  githubUsername: 'YOUR_GITHUB_USERNAME'
};
```

## ▶️ Ejecutar la Aplicación

### Servidor de desarrollo

```bash
npm start
# o
ng serve
```

Navega a `http://localhost:4200/`. La aplicación se recargará automáticamente si cambias cualquier archivo fuente.

### Servidor de desarrollo con idioma específico

```bash
# Español (por defecto)
ng serve --configuration=es

# Inglés
ng serve --configuration=en

# Francés
ng serve --configuration=fr

# Alemán
ng serve --configuration=de
```

### Ejecutar con proxy de backend (evitar problemas de CORS)

```bash
ng serve --proxy-config proxy.conf.json
```

## 📜 Scripts Disponibles

| Comando | Descripción |
|---------|-------------|
| `npm start` | Iniciar servidor de desarrollo en http://localhost:4200 |
| `npm run build` | Construir el proyecto para producción |
| `npm run build:es` | Construir para producción (Español) |
| `npm run build:en` | Construir para producción (Inglés) |
| `npm run build:fr` | Construir para producción (Francés) |
| `npm run build:de` | Construir para producción (Alemán) |
| `npm test` | Ejecutar tests unitarios con Jest |
| `npm run test:watch` | Ejecutar tests en modo observación |
| `npm run test:coverage` | Generar reporte de cobertura de tests |
| `npm run e2e` | Ejecutar tests end-to-end |
| `npm run lint` | Ejecutar ESLint |
| `npm run lint:fix` | Corregir errores de ESLint automáticamente |
| `npm run format` | Formatear código con Prettier |
| `npm run analyze` | Analizar tamaño del bundle |
| `npm run extract-i18n` | Extraer cadenas de traducción |

## 📁 Estructura del Proyecto

```
Lifetime-CV-frontend/
├── src/
│   ├── app/
│   │   ├── core/                    # Servicios singleton, guards, interceptors
│   │   │   ├── guards/              # Guards de rutas (auth, admin)
│   │   │   ├── interceptors/        # Interceptors HTTP (auth, error)
│   │   │   ├── services/            # Servicios core (auth, api, theme)
│   │   │   └── models/              # Interfaces y tipos de TypeScript
│   │   ├── shared/                  # Componentes, directivas, pipes compartidos
│   │   │   ├── components/          # Componentes reutilizables (button, modal, etc.)
│   │   │   ├── directives/          # Directivas personalizadas
│   │   │   ├── pipes/               # Pipes personalizados
│   │   │   └── validators/          # Validadores de formulario personalizados
│   │   ├── store/                   # Gestión de estado NgRx
│   │   │   ├── actions/             # Actions
│   │   │   ├── reducers/            # Reducers
│   │   │   ├── effects/             # Effects (efectos secundarios)
│   │   │   ├── selectors/           # Selectors
│   │   │   └── models/              # Modelos de estado
│   │   ├── features/                # Módulos de funcionalidades
│   │   │   ├── home/                # Página de inicio
│   │   │   ├── about/               # Sección sobre mí
│   │   │   ├── experience/          # Línea de tiempo de experiencia
│   │   │   ├── projects/            # Portfolio de proyectos
│   │   │   ├── skills/              # Showcase de habilidades
│   │   │   ├── contact/             # Formulario de contacto
│   │   │   └── admin/               # Dashboard de administración
│   │   │       ├── dashboard/       # Dashboard principal
│   │   │       ├── manage-experience/
│   │   │       ├── manage-projects/
│   │   │       └── analytics/       # Estadísticas
│   │   ├── layout/                  # Componentes de layout
│   │   │   ├── header/              # Cabecera de navegación
│   │   │   ├── footer/              # Pie de página
│   │   │   └── sidebar/             # Barra lateral de admin
│   │   ├── app.component.ts         # Componente raíz
│   │   ├── app.routes.ts            # Rutas de la aplicación
│   │   └── app.config.ts            # Configuración de la app
│   ├── assets/                      # Assets estáticos
│   │   ├── i18n/                    # Archivos de traducción
│   │   │   ├── es.json              # Traducciones en español
│   │   │   ├── en.json              # Traducciones en inglés
│   │   │   ├── fr.json              # Traducciones en francés
│   │   │   └── de.json              # Traducciones en alemán
│   │   ├── images/                  # Imágenes
│   │   ├── icons/                   # Iconos
│   │   └── fonts/                   # Fuentes personalizadas
│   ├── styles/                      # Estilos globales
│   │   ├── _variables.scss          # Variables SCSS
│   │   ├── _mixins.scss             # Mixins SCSS
│   │   ├── _themes.scss             # Definiciones de temas
│   │   └── styles.scss              # Hoja de estilos principal
│   ├── environments/                # Configuraciones de entorno
│   ├── index.html                   # Archivo HTML principal
│   └── main.ts                      # Punto de entrada de la aplicación
├── tests/                           # Archivos de test
│   ├── unit/                        # Tests unitarios
│   ├── integration/                 # Tests de integración
│   └── e2e/                         # Tests E2E (Cypress)
│       ├── fixtures/                # Datos de prueba
│       ├── integration/             # Specs de test
│       └── support/                 # Archivos de soporte
├── cypress/                         # Configuración de Cypress
│   └── cypress.config.ts            # Archivo de configuración de Cypress
├── .github/                         # Flujos de trabajo de GitHub Actions
│   └── workflows/
│       ├── ci.yml                   # Pipeline de CI
│       └── cd.yml                   # Pipeline de CD
├── angular.json                     # Configuración de Angular CLI
├── tsconfig.json                    # Configuración de TypeScript
├── tailwind.config.js               # Configuración de Tailwind CSS
├── jest.config.js                   # Configuración de Jest
├── .eslintrc.json                   # Configuración de ESLint
├── .prettierrc                      # Configuración de Prettier
├── proxy.conf.json                  # Configuración de proxy para servidor dev
├── package.json                     # Dependencias y scripts
└── README.md                        # Este archivo
```

## 🌍 Internacionalización (i18n)

La aplicación soporta cuatro idiomas:

- 🇪🇸 Español (es) - Por defecto
- 🇬🇧 Inglés (en)
- 🇫🇷 Francés (fr)
- 🇩🇪 Alemán (de)

### Archivos de Traducción

Los archivos de traducción se encuentran en `src/assets/i18n/`:

```
src/assets/i18n/
├── es.json
├── en.json
├── fr.json
└── de.json
```

### Añadir una Nueva Traducción

1. Añade la clave de traducción a todos los archivos de idioma
2. Usa el pipe `translate` o el servicio en componentes:

```typescript
// En el template
{{ 'COMMON.WELCOME' | translate }}

// En el componente
this.translate.get('COMMON.WELCOME').subscribe(text => {
  console.log(text);
});
```

### Cambiar Idioma

El usuario puede cambiar el idioma desde la UI, y la preferencia se almacena en localStorage.

```typescript
// Cambiar idioma programáticamente
this.translateService.use('en');
```

## 🧪 Testing

Usamos Jest para tests unitarios y Cypress para tests E2E.

### Ejecutar tests unitarios

```bash
npm test
```

### Ejecutar tests con cobertura

```bash
npm run test:coverage
```

Los reportes de cobertura se generarán en el directorio `coverage/`.

### Ejecutar tests en modo observación

```bash
npm run test:watch
```

### Ejecutar tests E2E

```bash
npm run e2e
```

### Estructura de Tests

- **Tests Unitarios:** Prueban componentes, servicios y pipes individuales
- **Tests de Integración:** Prueban interacciones entre módulos
- **Tests E2E:** Prueban flujos completos de usuario

## 🏗️ Construcción para Producción

### Construir para todos los idiomas

```bash
npm run build
```

Esto creará builds optimizados para todos los idiomas soportados en el directorio `dist/`:

```
dist/
├── es/        # Versión en español
├── en/        # Versión en inglés
├── fr/        # Versión en francés
└── de/        # Versión en alemán
```

### Construir para un idioma específico

```bash
npm run build:es   # Solo español
npm run build:en   # Solo inglés
npm run build:fr   # Solo francés
npm run build:de   # Solo alemán
```

### Analizar tamaño del bundle

```bash
npm run analyze
```

Esto abrirá una visualización del tamaño del bundle para ayudar a optimizar tu aplicación.

## 🎨 Temas

La aplicación soporta temas oscuro y claro. Los usuarios pueden alternar entre temas, y su preferencia se guarda en localStorage.

### Configuración de Temas

Los temas están definidos en `src/styles/_themes.scss`:

```scss
$light-theme: (
  primary: #3b82f6,
  secondary: #8b5cf6,
  background: #ffffff,
  text: #1f2937,
  // ...
);

$dark-theme: (
  primary: #60a5fa,
  secondary: #a78bfa,
  background: #111827,
  text: #f9fafb,
  // ...
);
```

## 🤝 Contribuir

Seguimos un flujo de trabajo estructurado de Git. Por favor lee nuestro [CONTRIBUTING.md](CONTRIBUTING.md) para detalles sobre nuestro código de conducta y proceso de desarrollo.

### Estrategia de Ramas

- `main` - Código listo para producción
- `develop` - Rama de integración para features
- `feature/*` - Nuevas funcionalidades
- `bugfix/*` - Corrección de errores
- `hotfix/*` - Correcciones urgentes de producción

### Convención de Commits

Seguimos [Conventional Commits](https://www.conventionalcommits.org/):

```
feat: añadir toggle de tema oscuro
fix: resolver problema de enrutamiento en panel de admin
docs: actualizar instrucciones de instalación
style: formatear código con prettier
refactor: reorganizar estructura de componentes
test: añadir tests para formulario de contacto
chore: actualizar dependencias
```

## 📄 Licencia

Este proyecto está licenciado bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

---

## 🔗 Proyectos Relacionados

- [Lifetime-CV Backend](https://github.com/YOUR_GITHUB_USERNAME/Lifetime-CV-backend) - API backend en Express.js

## 👤 Autor

**Tu Nombre**
- GitHub: [@YOUR_GITHUB_USERNAME](https://github.com/YOUR_GITHUB_USERNAME)

## ⭐ Muestra tu apoyo

¡Dale una ⭐️ si este proyecto te ayudó!

---

## 🚀 Despliegue

### Plataformas Recomendadas

- **Vercel:** Despliegue sin configuración para Angular (recomendado)
- **Netlify:** Excelente para sitios estáticos con despliegue continuo
- **Firebase Hosting:** Hosting rápido y seguro
- **AWS S3 + CloudFront:** Escalable y rentable

### Desplegar en Vercel (Recomendado)

1. Instalar Vercel CLI:
```bash
npm install -g vercel
```

2. Desplegar:
```bash
vercel
```

### Desplegar en Netlify

1. Construir el proyecto:
```bash
npm run build
```

2. Desplegar la carpeta `dist/` en Netlify

---

**Hecho con ❤️ y Angular**
