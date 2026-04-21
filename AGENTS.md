# AI Agent Context

This file helps AI coding assistants understand this project.

## Project Overview

React Router RSC template using React Server Components (experimental), powered by Vite and served with Hono on Node.js.

<pi-intercom>
Coordinate with other local pi sessions on related codebases. Use `/skill:pi-intercom` for patterns.

**When:** Same codebase (parallel work), reference codebase (consulting patterns), related repos (shared libraries).

**Not when:** Unrelated codebases, trivial questions, or when you can proceed independently.

**Principle:** Prefer `send` for notifications; `ask` only when blocked waiting for input.
</pi-intercom>

### Preferred Tools for Modifications
- Use `edit` tool with `oldText`/`newText` for small changes
- Only use `write` for creating new files or complete rewrites
- When using `write`, verify your output has correct syntax before calling the tool

### edit Tool Requirements
When calling the `edit` tool, you MUST include:
1. `path` parameter - The file path to edit (relative or absolute)
2. `edits` array - Each edit must have:
   - `oldText` - The exact text to find and replace
   - `newText` - The replacement text

Example:
```typescript
edit({
  path: "src/file.ts",
  edits: [{ oldText: "const x = 1;", newText: "const x = 2;" }]
})
```

## Tech Stack

- **React Router 7** with React Server Components (RSC)
- **Hono** - Web framework for the server
- **Node.js 22.6+** - Native TypeScript support (type stripping enabled by default)
- **Vite** - Build tool and dev server
- **Vite+** - Formatter and linter (Oxlint, Oxfmt, Vitest, tsdown, Rolldown)
- **TailwindCSS** - Styling

## Important Commands

- `npm run dev` - Start development server (runs on port 5173)
- `npm run build` - Build for production
- `npm start` - Run production server (default port 3000, configurable via PORT env var)
- `npm run typecheck` - Type check with TypeScript
- `npm run check` - Run Vite+ linter and formatter
- `npm run fmt` - Run Vite+ formatter (Oxfmt)

## Project Structure

- `server.ts` - Production server using Hono and @hono/node-server
- `src/entry.rsc.tsx` - React Server Components entry point
- `src/entry.ssr.tsx` - Server-side rendering entry point
- `src/entry.browser.tsx` - Client-side hydration entry point
- `dist/rsc/` - Built RSC output
- `dist/client/` - Built client assets

## Code Style

Uses **Vite+** with:

- Double quotes for strings
- Tab indentation
- Recommended linting rules (Oxlint)
- Auto-organized imports
- Run `npm run check` before committing

## Node.js Requirements

Requires **Node.js 22.6+** for native TypeScript support. The server runs TypeScript files directly without a transpiler - Node's built-in type stripping handles the conversion.

## Tool Usage Guidelines

### When Stuck in Output Loops
If you find yourself repeatedly generating malformed output (e.g., `<<htmlhtml` instead of `<html>`):
1. Immediately stop and use `context: "fresh"` in subagent calls
2. Switch from `write` to `edit` tool with small text replacements
3. Ask the user to run `/compact` if the conversation history is reinforcing bad patterns

### JSX/HTML File Handling
- When writing JSX files, always use single angle brackets: `<html>`, `<div>`, `<span>`
- Never double tags like `<<htmlhtml>` or `<<divdiv>`
- If you catch yourself doing this, delegate to a subagent with fresh context


## Important Notes

- This is **experimental** technology - not recommended for production
- Server uses top-level await for dynamic imports
- Environment variables: `PORT` (default: 3000), `NODE_ENV`
