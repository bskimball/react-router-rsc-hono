# Welcome to React Router! (Experimental RSC)

⚠️ **EXPERIMENTAL**: This template demonstrates React Server Components with React Router. This is experimental technology and not recommended for production use.

A modern template for exploring React Server Components (RSC) with React Router, powered by Vite and served with Hono using Node.js native TypeScript support. Formatted with [Vite+](https://vite.plus).

## Features

- 🧪 **Experimental React Server Components**
- 🚀 Server-side rendering with RSC
- ⚡️ Hot Module Replacement (HMR)
- 📦 Asset bundling and optimization with Vite
- 🔄 Data loading and mutations
- 🔒 TypeScript by default
- 🎉 TailwindCSS for styling
- 🌐 **Hono** - Fast, lightweight web framework for the server
- 🧹 **Vite+** - Unified toolchain with Oxlint, Oxfmt, and Vitest
- 📖 [React Router docs](https://reactrouter.com/)
- 📚 [React Server Components guide](https://reactrouter.com/how-to/react-server-components)
- 🔥 [Hono documentation](https://hono.dev/)
- ⚡ [Vite+ documentation](https://vite.plus)

## Requirements

- **Node.js 22.6+** - Required for native TypeScript support with type stripping

## Quick Start

Create a new project using this template:

```bash
npx degit bskimball/rr-rsc my-app
cd my-app
npm install
npm run dev
```

## Getting Started

### Installation

Install the dependencies:

```bash
npm install
```

### Development

Start the development server with HMR:

```bash
npm run dev
```

Your application will be available at `http://localhost:5173`.

## Building for Production

Create a production build:

```bash
npm run build
```

## Running Production Build

Run the production server (powered by Hono and Node.js):

```bash
npm start
```

The production server uses:

- **Node.js 22.6+** with native TypeScript support (type stripping enabled by default)
- **Hono** as the web framework for fast, efficient request handling
- Compression middleware and static asset serving
- Customizable port via the `PORT` environment variable (defaults to 3000)

## Docker

Run with Docker Compose using profiles:

```bash
# Node.js (default)
docker compose --profile node up

# Bun
docker compose --profile bun up
```

Or with a custom port:

```bash
PORT=8080 docker compose --profile node up
```

You can also build and run directly with Docker:

```bash
# Node.js
docker build -t rr-rsc .
docker run -p 3000:3000 rr-rsc

# Bun
docker build -f Dockerfile.bun -t rr-rsc-bun .
docker run -p 3000:3000 rr-rsc-bun
```

Both Dockerfiles use multi-stage builds with Alpine images for minimal production images.

## Bun Support

A Bun-optimized server is included as `server.bun.ts`. It uses `hono/bun` for static file serving and exports a default Bun server config. To use it, run:

```bash
bun server.bun.ts
```

> **Note**: Bun support requires the `@ungap/compression-stream` polyfill, which is imported in `server.bun.ts`.

## Understanding React Server Components

This template includes three entry points:

- **`entry.rsc.tsx`** - React Server Components entry point
- **`entry.ssr.tsx`** - Server-side rendering entry point
- **`entry.browser.tsx`** - Client-side hydration entry point

The production server (`server.ts`) uses Hono to:

- Serve static assets from the build output
- Handle compression with built-in middleware
- Route all requests through the RSC handler
- Provide fast, efficient request processing

Learn more about React Server Components with React Router in our [comprehensive guide](https://reactrouter.com/how-to/react-server-components).

## Code Quality

This project uses **Vite+** (via `vp`) for fast, consistent code formatting and linting:

### Formatting

Format your code:

```bash
npm run fmt
```

### Combined Check

Run both formatting and linting:

```bash
npm run check
```

Vite+ is configured to:

- Use double quotes for JavaScript/TypeScript
- Use tab indentation
- Enable recommended linting rules (Oxlint)
- Automatically organize imports

## Styling

This template comes with [Tailwind CSS v4](https://tailwindcss.com/) already configured for a simple default starting experience. You can use whatever CSS framework you prefer.

---

Built with ❤️ using React Router, Hono, Node.js, and Vite+.
