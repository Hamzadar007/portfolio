# Portfolio - React Native Developer

A modern, responsive portfolio website showcasing my work as a React Native developer. This portfolio features a clean design with sections for projects, skills, experience, and contact information.

## About

This portfolio website is built to showcase my expertise in React Native development and mobile app development. It highlights my projects, technical skills, professional experience, and provides a way for potential clients and employers to get in touch.

## Technologies Used

This project is built with modern web technologies:

- **Vite** - Fast build tool and development server
- **React** - UI library for building interactive interfaces
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn-ui** - High-quality React components
- **React Router** - Client-side routing
- **React Query** - Data fetching and state management

## Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js** (v16 or higher) - [Download Node.js](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn** or **bun**

## Getting Started

Follow these steps to run the project locally:

### 1. Clone the Repository

```bash
git clone git@github.com:Hamzadar007/portfolio.git
cd portfolio
```

### 2. Install Dependencies

```bash
npm install
```

Or if you're using yarn:

```bash
yarn install
```

Or if you're using bun:

```bash
bun install
```

### 3. Start the Development Server

```bash
npm run dev
```

Or with yarn:

```bash
yarn dev
```

Or with bun:

```bash
bun run dev
```

The development server will start and you can view the portfolio at `http://localhost:5173` (or the port shown in your terminal).

### 4. Build for Production

To create a production build:

```bash
npm run build
```

The optimized files will be in the `dist` directory.

### 5. Preview Production Build

To preview the production build locally:

```bash
npm run preview
```

## Project Structure

```
src/
├── components/      # Reusable React components
│   ├── ui/         # shadcn-ui components
│   ├── Hero.tsx    # Hero section
│   ├── Projects.tsx # Projects showcase
│   ├── Skills.tsx  # Skills section
│   ├── Experience.tsx # Experience section
│   └── Contact.tsx # Contact form
├── pages/          # Page components
├── hooks/          # Custom React hooks
├── lib/            # Utility functions
└── assets/         # Images and static assets
```

## Features

- 🎨 Modern and responsive design
- 📱 Mobile-first approach
- ⚡ Fast performance with Vite
- 🎯 Type-safe with TypeScript
- 🎭 Beautiful UI components with shadcn-ui
- 📧 Contact form functionality
- 🚀 Optimized for production

## License

This project is open source and available for personal use.

## Contact

For inquiries or collaboration opportunities, please reach out through the contact form on the portfolio website.
