# Remwaste – Skip Hire Booking App

A modern web application for selecting  skip hire services. Built with React, TypeScript, Vite, and Tailwind CSS.

## Features

- **Skip Size Selection:** Browse and select from a range of skip sizes with images and details.
- **Dynamic Summary:** View a detailed summary of your selection, including price breakdown and hire period.
- **Responsive UI:** Clean, modern interface optimized for desktop and mobile.
- **Progress Sidebar:** Visual progress tracker for the booking steps.

## Tech Stack

- **React 19** with TypeScript
- **Vite** for fast development and builds
- **Tailwind CSS** for utility-first styling
- **Lucide React** for icons
- **ESLint** for code quality

## Getting Started

### Prerequisites
- Node.js (v18 or newer recommended)
- npm or yarn

### Installation
1. Clone the repository:
   ```bash
   git clone <repo-url>
   cd remwaste
   ```
2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

### Development
Start the development server:
```bash
npm run dev
# or
yarn dev
```
Open [http://localhost:5173](http://localhost:5173) to view the app in your browser.

### Build
To build for production:
```bash
npm run build
# or
yarn build
```

### Lint
To check code quality:
```bash
npm run lint
# or
yarn lint
```

## Project Structure

```
remwaste/
├── public/              # Static assets
├── src/
│   ├── components/      # React components (main-content, sidebar, summary, etc.)
│   ├── interface/       # TypeScript types
│   ├── shared/          # Shared data and utilities
│   ├── App.tsx          # Main app component
│   ├── main.tsx         # Entry point
│   └── index.css        # Tailwind CSS imports
├── index.html           # HTML template
├── package.json         # Project metadata and scripts
├── vite.config.ts       # Vite configuration
└── README.md            # Project documentation
```

## Customization
- **Skip Data:** Edit `src/shared/data/mockData.json` to change available skip sizes and pricing.
- **Steps:** Modify `src/shared/string.ts` to adjust the booking steps.

