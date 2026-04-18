# PROGRESS.md — Milestone Log

## Current Status
**Phase:** Phase 2 complete — ready for Phase 3 (Assignment Tracker)  
**Last Updated:** 2026-04-18

---

## Completed Milestones

### 2026-04-18 — Project Planning
- Defined MVP scope: 5 core features
- Chose tech stack: React + TypeScript + Vite + Tailwind + shadcn/ui + Zustand
- Decided on localStorage for MVP, Supabase for Phase 2
- Created project documentation: README.md, CLAUDE.md, TASKS.md, PROGRESS.md

### 2026-04-18 — Phase 1: Foundation
- Scaffolded Vite + React + TypeScript project
- Configured Tailwind CSS v4 and shadcn/ui
- Installed Zustand (with persist middleware) and React Router v6
- Installed lucide-react for icons
- Created folder structure: `components/layout`, `pages`, `store`, `types`, `lib`
- Defined TypeScript types: `Course`, `Assignment`, `DailyTask`, `WeeklyPlan`
- Created three Zustand stores: `useCourseStore`, `useAssignmentStore`, `usePlannerStore`
- Built `RootLayout` with sticky sidebar and `Sidebar` with active-link navigation
- Created placeholder pages for all 5 routes (Dashboard, Courses, Assignments, Calendar, Planner)
- Production build passes cleanly with no errors

### 2026-04-18 — Phase 2: Course Manager
- Built `CourseCard` — color accent strip, course name, badge for code, hover-reveal edit/delete actions
- Built `CourseForm` — Dialog-based add/edit form with name, code, and 10-color preset picker
- Built `CourseColorPicker` — circular color swatches with active ring indicator
- Built `DeleteCourseDialog` — AlertDialog with named course confirmation
- Rebuilt `CoursesPage` — page header with Add button, responsive 3-column grid, rich empty state
- Design follows dark mode first: card surfaces, muted text, purple primary, semantic Tailwind classes throughout
- Production build passes cleanly

---

## Upcoming
- [x] Phase 1: Project scaffold
- [x] Phase 2: Course Manager
- [ ] Phase 3: Course Manager
- [ ] Phase 4: Assignment Tracker
- [ ] Phase 5: Deadline Calendar
- [ ] Phase 6: Weekly Planner
- [ ] Phase 7: Progress Dashboard
- [ ] Phase 8: Polish + Vercel deployment
