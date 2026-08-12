<div align="center">

# React Router RSC · Node

**An experimental full-stack template for React Server Components, streamed through React Router and served by Hono.**

[![React](https://img.shields.io/badge/React-19.2.8-0b0b0b?style=flat-square&logo=react&logoColor=61DAFB)](https://react.dev/)
[![React Router](https://img.shields.io/badge/React_Router-8.3.0-0b0b0b?style=flat-square&logo=reactrouter&logoColor=CA4245)](https://reactrouter.com/)
[![Vite](https://img.shields.io/badge/Vite-8.2.1-0b0b0b?style=flat-square&logo=vite&logoColor=FFD62E)](https://vite.dev/)
[![Hono](https://img.shields.io/badge/Hono-4.13.1-0b0b0b?style=flat-square&logo=hono&logoColor=E36002)](https://hono.dev/)
[![Node.js](https://img.shields.io/badge/Node.js-22.22.2%2B-0b0b0b?style=flat-square&logo=nodedotjs&logoColor=5FA04E)](https://nodejs.org/)

[Quick start](#quick-start) · [How it works](#how-it-works) · [Commands](#commands) · [Docker](#docker) · [Project structure](#project-structure)

</div>

> [!WARNING]
> React Server Components support in this stack is experimental. This repository is intended for exploration, prototyping, and learning—not production deployment.

## What is inside

- **React 19.2.8** with React Server Components and Server Actions
- **React Router 8.3.0** RSC request matching, routing, and hydration
- **Vite 8.2.1** multi-environment RSC, SSR, and browser builds
- **Hono 4.13.1** HTTP server with `@hono/node-server` 2.1.0, static asset serving, and compression
- **Tailwind CSS 4** through the first-party Vite plugin
- **React Compiler** through the Rolldown Babel plugin
- **TypeScript 7.0.2** in strict mode
- **Vite+** for Oxlint, Oxfmt, and unified project checks
- **Node.js and Bun** server examples

## Quick start

### Use this repository as a template

```bash
npx degit bskimball/rr-rsc my-rsc-app
cd my-rsc-app
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

### Requirements

| Tool    | Version                                |
| ------- | -------------------------------------- |
| Node.js | `^22.22.2` or `^24.15.0` or `>=26.0.0` |
| npm     | `12.0.2`; pinned in `packageManager`   |

The supported Node.js ranges are set by the current React Router, npm, Babel, and Vite+ toolchain. The production server executes `server.ts` directly using Node's native TypeScript type stripping.

## How it works

The application is built as three cooperating environments:

```text
╭──────────────────╮       ╭──────────────────╮
│ Browser          │       │ Hono server      │
│ entry.browser    │◀─────▶│ server.ts        │
╰────────┬─────────╯  HTTP ╰────────┬─────────╯
         │                           │
         │ hydration                 │ request
         ▼                           ▼
╭──────────────────╮       ╭──────────────────╮
│ SSR environment  │◀─────▶│ RSC environment  │
│ entry.ssr        │ stream│ entry.rsc        │
╰──────────────────╯       ╰────────┬─────────╯
                                    │
                                    ▼
                           ╭──────────────────╮
                           │ Route modules    │
                           │ src/routes       │
                           ╰──────────────────╯
```

1. Hono serves built assets and forwards application requests to the RSC build.
2. `entry.rsc.tsx` matches the request against the React Router route configuration.
3. `entry.ssr.tsx` converts the RSC payload into streamed HTML.
4. `entry.browser.tsx` decodes the initial payload, hydrates the router, and wires up Server Actions.

## Commands

| Command             | Purpose                                                             |
| ------------------- | ------------------------------------------------------------------- |
| `npm run dev`       | Start the Vite development server with HMR on port `5173`           |
| `npm run build`     | Build the RSC, SSR, and browser environments into `dist/`           |
| `npm start`         | Start the built Hono server on port `3000`                          |
| `npm run typecheck` | Run TypeScript without emitting files                               |
| `npm run lint`      | Run Oxlint through Vite+                                            |
| `npm run format`    | Format the repository with Oxfmt through Vite+                      |
| `npm run check`     | Run the configured Vite+ formatting, linting, and type-aware checks |

Set `PORT` to change the server port on macOS or Linux:

```bash
PORT=8080 npm start
```

On Windows PowerShell:

```powershell
$env:PORT=8080; npm start
```

On Windows Command Prompt:

```bat
set PORT=8080&& npm start
```

## Production build

```bash
npm run build
npm start
```

The build output is split by environment:

```text
dist/
├── client/  # Browser bundles and static assets
├── rsc/     # React Server Components request handler
└── ssr/     # HTML streaming renderer
```

The Node server provides:

- compressed assets under `/assets/*`
- static files from `dist/client`
- a catch-all route backed by the generated RSC handler
- a configurable `PORT`, defaulting to `3000`

## Docker

### Docker Compose

```bash
# Node.js image
docker compose --profile node up --build

# Bun image
docker compose --profile bun up --build
```

Use a custom host and container port:

```bash
PORT=8080 docker compose --profile node up --build
```

### Direct builds

```bash
# Node.js
docker build -t rr-rsc .
docker run --rm -p 3000:3000 rr-rsc

# Bun
docker build -f Dockerfile.bun -t rr-rsc-bun .
docker run --rm -p 3000:3000 rr-rsc-bun
```

Both Dockerfiles use multi-stage Alpine builds to keep development dependencies out of the runtime image.

## Bun server

`server.bun.ts` provides the equivalent server entry point for Bun, including its static-file middleware and the compression stream polyfill.

```bash
bun install
bun run build
bun server.bun.ts
```

## Project structure

```text
.
├── server.ts                 # Hono server for Node.js
├── server.bun.ts             # Hono server for Bun
├── vite.config.ts            # Vite, RSC, React, Tailwind, and Vite+ config
├── src/
│   ├── entry.browser.tsx     # Browser hydration and Server Actions
│   ├── entry.rsc.tsx         # RSC request handler
│   ├── entry.ssr.tsx         # HTML streaming renderer
│   ├── components/           # Shared UI components
│   └── routes/
│       ├── config.ts         # React Router RSC route configuration
│       ├── root/             # Root layout and global styles
│       ├── home/             # Home route
│       ├── about/            # About route
│       └── style/            # Design-system route
├── Dockerfile
├── Dockerfile.bun
└── compose.yaml
```

## Adding a route

Create a route module and add a lazy entry to `src/routes/config.ts`:

```tsx
{
	id: "example",
	path: "example",
	lazy: () => import("./example/route"),
}
```

Route modules follow React Router's RSC route-module contract. Keep browser-only behavior in files marked with `"use client"`.

## Code quality

Vite+ centralizes formatting and linting in `vite.config.ts`:

- tabs for indentation
- double-quoted JavaScript and TypeScript strings
- semicolons
- import organization
- Oxlint recommended rules
- type-aware linting and TypeScript checks

Run the full local gate before opening a pull request:

```bash
npm run check
npm run typecheck
npm run build
```

## Learn more

- [React Router: React Server Components](https://reactrouter.com/how-to/react-server-components)
- [React Server Components](https://react.dev/reference/rsc/server-components)
- [Vite RSC plugin](https://github.com/vitejs/vite-plugin-react/tree/main/packages/plugin-rsc)
- [Hono documentation](https://hono.dev/)
- [Tailwind CSS documentation](https://tailwindcss.com/docs)
- [Vite+ documentation](https://vite.plus/)

---

<div align="center">

Built as an experimental reference for the React Router RSC stack.

</div>
