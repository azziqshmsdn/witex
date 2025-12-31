# WITEX 2026 - World Islamic Tourism & Trade Expo

Front-end landing page for WITEX 2026, built with React and Vite.

## Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Icon library

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to the URL shown in the terminal (typically `http://localhost:5173`)

### Build for Production

```bash
npm run build
```

The production build will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
witex/
├── src/
│   ├── App.jsx          # Main application component
│   ├── main.jsx         # Application entry point
│   └── index.css        # Global styles with Tailwind directives
├── index.html           # HTML template
├── package.json         # Dependencies and scripts
├── vite.config.js       # Vite configuration
├── tailwind.config.js   # Tailwind CSS configuration
└── postcss.config.js    # PostCSS configuration
```

## Features

- Responsive design for all screen sizes
- Modern UI with Tailwind CSS
- Smooth scrolling navigation
- Mobile-friendly menu
- Hero section with background image
- Event programme roadmap
- Contact information and footer

## Notes

- Logo images (`Witex-logo-02-scaled-e1729430828416.webp`) should be placed in the `public` directory for proper access
- Background images are currently using Unsplash URLs - replace with your own images as needed
