# 🎨 Lifetime-CV Frontend

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Angular](https://img.shields.io/badge/angular-18.x-red.svg)
![TypeScript](https://img.shields.io/badge/typescript-5.x-blue.svg)
![Node](https://img.shields.io/badge/node-%3E%3D18.0.0-brightgreen.svg)

Modern, multilingual CV showcase application built with Angular. Features dynamic content management, smooth animations, and a responsive design.

## 📋 Table of Contents

- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Environment Configuration](#environment-configuration)
- [Running the Application](#running-the-application)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [Internationalization (i18n)](#internationalization-i18n)
- [Testing](#testing)
- [Building for Production](#building-for-production)
- [Contributing](#contributing)
- [License](#license)

## 📖 About

Lifetime-CV Frontend is a modern, responsive web application that showcases your professional profile in multiple languages. Built with Angular, it features smooth animations, dark/light theme support, and seamless integration with the backend API.

This frontend connects to the [Lifetime-CV Backend](https://github.com/YOUR_GITHUB_USERNAME/Lifetime-CV-backend) API.

## ✨ Features

- 🌍 **Multilingual Support:** Spanish, English, French, and German
- 🎨 **Modern UI/UX:** Clean, professional design with smooth animations
- 🌓 **Dark/Light Theme:** Toggle between themes with persistent preference
- 📱 **Fully Responsive:** Optimized for desktop, tablet, and mobile
- 🔐 **Admin Panel:** Secure dashboard for content management
- 📊 **Real-time Analytics:** View CV statistics and visitor insights
- 🎭 **Dynamic Sections:**
  - About Me / Profile
  - Work Experience Timeline
  - Projects Portfolio
  - Skills & Technologies
  - Education & Certifications
  - Contact Form
- 📄 **PDF Export:** Download CV in different formats
- 🔗 **GitHub Integration:** Display live GitHub statistics
- 🚀 **Performance Optimized:** Lazy loading, code splitting, and caching
- ♿ **Accessible:** WCAG 2.1 compliant
- 🎯 **SEO Friendly:** Server-side rendering with Angular Universal

## 🛠️ Tech Stack

- **Framework:** Angular 18.x
- **Language:** TypeScript 5.x
- **Styling:** SCSS + Tailwind CSS
- **State Management:** NgRx / RxJS
- **Forms:** Reactive Forms
- **HTTP Client:** HttpClient with Interceptors
- **Routing:** Angular Router with guards
- **Animations:** Angular Animations
- **i18n:** @angular/localize + ngx-translate
- **Charts:** Chart.js / ng2-charts
- **Icons:** Font Awesome / Material Icons
- **Testing:** Jest + Angular Testing Library
- **E2E Testing:** Cypress / Playwright
- **Code Quality:** ESLint + Prettier
- **Build Tool:** Angular CLI + Webpack

## 📦 Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v18.x or higher)
- [npm](https://www.npmjs.com/) (v9.x or higher) or [yarn](https://yarnpkg.com/)
- [Angular CLI](https://angular.io/cli) (v18.x)
- [Git](https://git-scm.com/)

```bash
# Install Angular CLI globally
npm install -g @angular/cli
```

## 🚀 Installation

1. **Clone the repository**

```bash
git clone https://github.com/YOUR_GITHUB_USERNAME/Lifetime-CV-frontend.git
cd Lifetime-CV-frontend
```

2. **Install dependencies**

```bash
npm install
# or
yarn install
```

3. **Set up environment configuration**

```bash
# Development environment is configured by default
# For custom configuration, see Environment Configuration section
```

## 🔧 Environment Configuration

The application uses Angular environment files for configuration. Create or modify the following files:

### Development: `src/environments/environment.ts`

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

### Production: `src/environments/environment.prod.ts`

```typescript
export const environment = {
  production: true,
  apiUrl: 'https://your-backend-domain.com/api/v1',
  apiVersion: 'v1',
  enableAnalytics: true,
  enableDevTools: false,
  defaultLanguage: 'es',
  supportedLanguages: ['es', 'en', 'fr', 'de'],
  githubApi: 'https://api.github.com',
  githubUsername: 'YOUR_GITHUB_USERNAME'
};
```

## ▶️ Running the Application

### Development server

```bash
npm start
# or
ng serve
```

Navigate to `http://localhost:4200/`. The application will automatically reload if you change any source files.

### Development server with specific language

```bash
# Spanish (default)
ng serve --configuration=es

# English
ng serve --configuration=en

# French
ng serve --configuration=fr

# German
ng serve --configuration=de
```

### Run with backend proxy (avoid CORS issues)

```bash
ng serve --proxy-config proxy.conf.json
```

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Start development server at http://localhost:4200 |
| `npm run build` | Build the project for production |
| `npm run build:es` | Build for production (Spanish) |
| `npm run build:en` | Build for production (English) |
| `npm run build:fr` | Build for production (French) |
| `npm run build:de` | Build for production (German) |
| `npm test` | Run unit tests with Jest |
| `npm run test:watch` | Run tests in watch mode |
| `npm run test:coverage` | Generate test coverage report |
| `npm run e2e` | Run end-to-end tests |
| `npm run lint` | Run ESLint |
| `npm run lint:fix` | Fix ESLint errors automatically |
| `npm run format` | Format code with Prettier |
| `npm run analyze` | Analyze bundle size |
| `npm run extract-i18n` | Extract translation strings |

## 📁 Project Structure

```
Lifetime-CV-frontend/
├── src/
│   ├── app/
│   │   ├── core/                    # Singleton services, guards, interceptors
│   │   │   ├── guards/              # Route guards (auth, admin)
│   │   │   ├── interceptors/        # HTTP interceptors (auth, error)
│   │   │   ├── services/            # Core services (auth, api, theme)
│   │   │   └── models/              # TypeScript interfaces and types
│   │   ├── shared/                  # Shared components, directives, pipes
│   │   │   ├── components/          # Reusable components (button, modal, etc.)
│   │   │   ├── directives/          # Custom directives
│   │   │   ├── pipes/               # Custom pipes
│   │   │   └── validators/          # Custom form validators
│   │   ├── features/                # Feature modules
│   │   │   ├── home/                # Landing page
│   │   │   ├── about/               # About section
│   │   │   ├── experience/          # Experience timeline
│   │   │   ├── projects/            # Projects portfolio
│   │   │   ├── skills/              # Skills showcase
│   │   │   ├── contact/             # Contact form
│   │   │   └── admin/               # Admin dashboard
│   │   │       ├── dashboard/       # Main dashboard
│   │   │       ├── manage-experience/
│   │   │       ├── manage-projects/
│   │   │       └── analytics/       # Statistics
│   │   ├── layout/                  # Layout components
│   │   │   ├── header/              # Navigation header
│   │   │   ├── footer/              # Footer
│   │   │   └── sidebar/             # Admin sidebar
│   │   ├── app.component.ts         # Root component
│   │   ├── app.routes.ts            # Application routes
│   │   └── app.config.ts            # App configuration
│   ├── assets/                      # Static assets
│   │   ├── i18n/                    # Translation files
│   │   │   ├── es.json              # Spanish translations
│   │   │   ├── en.json              # English translations
│   │   │   ├── fr.json              # French translations
│   │   │   └── de.json              # German translations
│   │   ├── images/                  # Images
│   │   ├── icons/                   # Icons
│   │   └── fonts/                   # Custom fonts
│   ├── styles/                      # Global styles
│   │   ├── _variables.scss          # SCSS variables
│   │   ├── _mixins.scss             # SCSS mixins
│   │   ├── _themes.scss             # Theme definitions
│   │   └── styles.scss              # Main stylesheet
│   ├── environments/                # Environment configurations
│   ├── index.html                   # Main HTML file
│   └── main.ts                      # Application entry point
├── tests/                           # Test files
│   ├── unit/                        # Unit tests
│   ├── integration/                 # Integration tests
│   └── e2e/                         # E2E tests
├── .github/                         # GitHub Actions workflows
│   └── workflows/
│       ├── ci.yml                   # CI pipeline
│       └── cd.yml                   # CD pipeline
├── angular.json                     # Angular CLI configuration
├── tsconfig.json                    # TypeScript configuration
├── tailwind.config.js               # Tailwind CSS configuration
├── jest.config.js                   # Jest configuration
├── .eslintrc.json                   # ESLint configuration
├── .prettierrc                      # Prettier configuration
├── proxy.conf.json                  # Proxy configuration for dev server
├── package.json                     # Dependencies and scripts
└── README.md                        # This file
```

## 🌍 Internationalization (i18n)

The application supports four languages:

- 🇪🇸 Spanish (es) - Default
- 🇬🇧 English (en)
- 🇫🇷 French (fr)
- 🇩🇪 German (de)

### Translation Files

Translation files are located in `src/assets/i18n/`:

```
src/assets/i18n/
├── es.json
├── en.json
├── fr.json
└── de.json
```

### Adding a New Translation

1. Add the translation key to all language files
2. Use the `translate` pipe or service in components:

```typescript
// In template
{{ 'COMMON.WELCOME' | translate }}

// In component
this.translate.get('COMMON.WELCOME').subscribe(text => {
  console.log(text);
});
```

### Changing Language

The user can change the language from the UI, and the preference is stored in localStorage.

```typescript
// Change language programmatically
this.translateService.use('en');
```

## 🧪 Testing

We use Jest for unit testing and Cypress/Playwright for E2E testing.

### Run unit tests

```bash
npm test
```

### Run tests with coverage

```bash
npm run test:coverage
```

Coverage reports will be generated in the `coverage/` directory.

### Run tests in watch mode

```bash
npm run test:watch
```

### Run E2E tests

```bash
npm run e2e
```

### Test Structure

- **Unit Tests:** Test individual components, services, and pipes
- **Integration Tests:** Test module interactions
- **E2E Tests:** Test complete user flows

## 🏗️ Building for Production

### Build for all languages

```bash
npm run build
```

This will create optimized builds for all supported languages in the `dist/` directory:

```
dist/
├── es/        # Spanish version
├── en/        # English version
├── fr/        # French version
└── de/        # German version
```

### Build for specific language

```bash
npm run build:es   # Spanish only
npm run build:en   # English only
npm run build:fr   # French only
npm run build:de   # German only
```

### Analyze bundle size

```bash
npm run analyze
```

This will open a visualization of the bundle size to help optimize your application.

## 🎨 Theming

The application supports dark and light themes. Users can toggle between themes, and their preference is saved in localStorage.

### Theme Configuration

Themes are defined in `src/styles/_themes.scss`:

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

## 🤝 Contributing

We follow a structured Git workflow. Please read our [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct and development process.

### Branch Strategy

- `main` - Production-ready code
- `develop` - Integration branch for features
- `feature/*` - New features
- `bugfix/*` - Bug fixes
- `hotfix/*` - Urgent production fixes

### Commit Convention

We follow [Conventional Commits](https://www.conventionalcommits.org/):

```
feat: add dark theme toggle
fix: resolve routing issue in admin panel
docs: update installation instructions
style: format code with prettier
refactor: reorganize component structure
test: add tests for contact form
chore: update dependencies
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🔗 Related Projects

- [Lifetime-CV Backend](https://github.com/YOUR_GITHUB_USERNAME/Lifetime-CV-backend) - Express.js backend API

## 👤 Author

**Your Name**
- GitHub: [@YOUR_GITHUB_USERNAME](https://github.com/YOUR_GITHUB_USERNAME)

## ⭐ Show your support

Give a ⭐️ if this project helped you!

---

## 🚀 Deployment

### Recommended Platforms

- **Vercel:** Zero-config deployment for Angular (recommended)
- **Netlify:** Great for static sites with continuous deployment
- **Firebase Hosting:** Fast and secure hosting
- **AWS S3 + CloudFront:** Scalable and cost-effective

### Deploy to Vercel (Recommended)

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

### Deploy to Netlify

1. Build the project:
```bash
npm run build
```

2. Deploy the `dist/` folder to Netlify

---

**Made with ❤️ and Angular**
