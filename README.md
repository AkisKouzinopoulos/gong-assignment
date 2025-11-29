# Gong Assignment

This project is a React + TypeScript application using Vite, Tailwind CSS, and Vitest for testing. It provides a modern, fast development environment with HMR, linting, and testing support.

## Prerequisites

- Node.js (v18 or newer recommended)
- Yarn (v4 recommended)

## Getting Started

1. **Install dependencies:**

   ```sh
   yarn install
   ```

2. **Start the development server:**

   ```sh
   yarn dev
   ```

   The app will be available at [http://localhost:3000](http://localhost:3000).

3. **Build for production:**

   ```sh
   yarn build
   ```

4. **Preview the production build:**

   ```sh
   yarn preview
   ```

5. **Run tests:**

   ```sh
   yarn test
   ```

   For watch mode:

   ```sh
   yarn test:watch
   ```

6. **Lint the code:**

   ```sh
   yarn lint
   ```

7. **Format code with Prettier:**
   ```sh
   yarn prettier:check   # Check formatting
   yarn prettier:fix     # Auto-fix formatting
   ```

## Project Structure

- `src/` — Main source code
  - `components/` — Reusable UI components
  - `pages/` — Page-level components (e.g., Login, Users)
  - `services/` — Service modules (e.g., auth, firebase)
  - `utils/` — Utility functions and types
  - `assets/` — Static assets
- `public/` — Static files served at root
- `index.html` — Main HTML entry point
- `vite.config.ts` — Vite configuration
- `tailwind.config.js` — Tailwind CSS configuration
- `eslint.config.js` — ESLint configuration
- `tsconfig*.json` — TypeScript configuration

## Main Dependencies

- React, React DOM
- React Router DOM
- Tailwind CSS
- Radix UI
- Lucide React (icons)
- Vitest (testing)
- ESLint, Prettier

## Configuration

- **Vite**: See `vite.config.ts` for plugins and alias setup.
- **Tailwind**: See `tailwind.config.js` for theme and plugin settings.
- **ESLint**: See `eslint.config.js` for lint rules and recommended configs.
- **TypeScript**: See `tsconfig.json`, `tsconfig.app.json`, and `tsconfig.node.json` for type settings.

## Environment Variables

If you need to add environment variables, create a `.env` file in the project root. See [Vite documentation](https://vitejs.dev/guide/env-and-mode.html) for details.

## Testing

Tests are written using Vitest and Testing Library. See `src/components/*/*.test.tsx` for examples.

## Additional Notes

- Uses HMR (Hot Module Replacement) for fast development.
- Type-safe codebase with strict TypeScript settings.
- Pre-configured for Tailwind CSS and modern UI libraries.

---

For any issues, please check the configuration files or reach out to the project maintainer.
