# TGVideoDown - Telegram Video Downloader

A modern, static SaaS website built with Nuxt 3, Vue 3, Tailwind CSS, and i18n support.

## Features

- 🚀 Built with Nuxt 3 and Vue 3
- 🎨 Modern UI with Tailwind CSS
- 🌍 Multi-language support (English, Chinese, Spanish)
- 📱 Fully responsive design
- ⚡ Static site generation ready

## Tech Stack

- **Framework**: Nuxt 3
- **UI**: Vue 3
- **Styling**: Tailwind CSS
- **i18n**: @nuxtjs/i18n
- **Language Support**: English (en), Chinese (cn), Spanish (es)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

4. Generate static site:
```bash
npm run generate
```

## Project Structure

```
├── assets/
│   └── css/
│       └── main.css          # Global styles
├── components/
│   ├── AppHeader.vue         # Header component
│   ├── AppFooter.vue         # Footer component
│   ├── LanguageSwitcher.vue  # Language switcher
│   ├── HeroSection.vue       # Hero section
│   ├── FeaturesSection.vue   # Features section
│   ├── HowItWorksSection.vue # How it works
│   ├── CTASection.vue        # Call to action
│   └── TestimonialsSection.vue # Testimonials
├── layouts/
│   └── default.vue           # Default layout
├── locales/
│   ├── en.json               # English translations
│   ├── cn.json               # Chinese translations
│   └── es.json               # Spanish translations
├── pages/
│   └── index.vue             # Home page
├── nuxt.config.ts            # Nuxt configuration
├── tailwind.config.js        # Tailwind configuration
└── package.json
```

## Color Scheme

Based on SaaS design guidelines:
- **Primary**: #2563EB (Trust Blue)
- **Secondary**: #3B82F6
- **CTA**: #F97316 (Orange)
- **Background**: #F8FAFC
- **Text**: #1E293B
- **Border**: #E2E8F0

## License

MIT
