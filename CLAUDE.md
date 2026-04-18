# CLAUDE.md — Claude Code Instructions for This Repo

## Project Overview
Student Productivity Dashboard — a portfolio-quality web app for managing courses, assignments, deadlines, weekly planning, and progress tracking.

## Tech Stack
- **Framework:** React 18 + TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS + shadcn/ui
- **State Management:** Zustand
- **Routing:** React Router v6
- **Storage (MVP):** localStorage
- **Storage (Phase 2):** Supabase (PostgreSQL + Auth)
- **Testing:** Vitest + React Testing Library
- **Deployment:** Vercel

## How to Work in This Repo

### General Rules
- Do not start coding until the user approves a plan.
- Build one feature at a time, in the order defined in TASKS.md.
- After each meaningful milestone, update PROGRESS.md.
- Keep code clean, typed, and scalable — this is a portfolio project.
- Do not add features beyond what is currently scoped.
- Do not add unnecessary comments. Only comment when the reason is non-obvious.

### Code Conventions
- All components in `src/components/`, organized by feature folder.
- All pages in `src/pages/`.
- All Zustand stores in `src/store/`.
- All TypeScript types/interfaces in `src/types/`.
- All utility functions in `src/lib/`.
- Use named exports, not default exports for components.
- Use `kebab-case` for file names, `PascalCase` for component names.
- Prefer functional components and hooks over class components.
- Tailwind classes only — no inline styles, no CSS modules.

### shadcn/ui Usage
- Use shadcn/ui components as the base UI layer.
- Do not override shadcn styles with custom CSS unless absolutely necessary.
- Install components via CLI: `npx shadcn-ui@latest add <component>`

### State Management
- Use Zustand for all global state.
- Persist state to localStorage using Zustand's `persist` middleware.
- Keep store slices small and focused (one store per domain: courses, assignments, planner).

### What to Avoid
- No class components.
- No prop drilling beyond 2 levels — use Zustand instead.
- No `any` types in TypeScript.
- No hardcoded mock data in production components.
- No backend code in MVP phase.
- Do not install unnecessary packages.

## Build Order (MVP)
1. Project scaffold
2. Data models + Zustand stores
3. Course Manager
4. Assignment Tracker
5. Deadline Calendar
6. Weekly Planner
7. Progress Dashboard
8. Polish + Vercel deployment

## Phase 2 (Post-MVP)
- Migrate localStorage to Supabase
- Add user authentication
- Add data sync across devices
