# TASKS.md — MVP Task Checklist

> After each phase is fully complete, update PROGRESS.md with a milestone entry.

---

## Phase 1 — Foundation

**Goal:** Get a working, styled app skeleton with routing and persistent state ready for feature development.

**Completion Criteria:** App runs locally, sidebar navigation works, all routes load empty pages, Zustand stores persist to localStorage.

- [x] Initialize Vite + React + TypeScript project
- [x] Install and configure Tailwind CSS
- [x] Install and configure shadcn/ui
- [x] Install Zustand and React Router v6
- [x] Set up folder structure (`components`, `pages`, `store`, `types`, `lib`)
- [x] Define TypeScript types: `Course`, `Assignment`, `WeeklyPlan`
- [x] Create Zustand store for courses (with localStorage persistence)
- [x] Create Zustand store for assignments (with localStorage persistence)
- [x] Create Zustand store for weekly planner (with localStorage persistence)
- [x] Create root layout with sidebar navigation
- [x] Set up React Router with placeholder routes for all pages

---

## Phase 2 — Course Manager

**Goal:** Let the user add, view, edit, and delete their courses.

**Completion Criteria:** User can create, update, and delete courses. Data persists on page refresh.

- [x] Course list page with empty state
- [x] Add course form (name, course code, color picker)
- [x] Edit course inline or via form
- [x] Delete course with confirmation dialog
- [x] Course card component with color label display

---

## Phase 3 — Assignment Tracker

**Goal:** Let the user manage assignments linked to their courses.

**Completion Criteria:** User can create, complete, edit, and delete assignments. List is filterable and sortable.

- [ ] Assignment list page with empty state
- [ ] Add assignment form (title, linked course, due date, priority)
- [ ] Mark assignment as complete / incomplete
- [ ] Edit assignment
- [ ] Delete assignment
- [ ] Filter assignments by course
- [ ] Sort assignments by due date and priority

---

## Phase 4 — Deadline Calendar

**Goal:** Give a visual time-based view of upcoming deadlines.

**Completion Criteria:** Calendar displays correct month, assignments appear on their due dates, clicking a day shows its assignments.

- [ ] Monthly calendar grid layout
- [ ] Render assignment due dates as markers on the calendar
- [ ] Color-code markers by course color
- [ ] Click a day to view that day's assignments in a side panel or popover
- [ ] Navigate between months (previous / next)

---

## Phase 5 — Weekly Planner

**Goal:** Let the user plan their week day by day, separate from the assignment tracker.

**Completion Criteria:** User can add, complete, reorder, and delete daily tasks. Week view shows Monday through Sunday.

- [ ] Weekly grid view (Monday–Sunday)
- [ ] Add a task to a specific day
- [ ] Mark daily task as done
- [ ] Delete daily task
- [ ] Drag-and-drop to reorder tasks within a day

---

## Phase 6 — Progress Dashboard

**Goal:** Surface useful stats so students can see how they are doing.

**Completion Criteria:** Dashboard shows real data from stores — completion rate, upcoming deadlines, per-course progress, and streak.

- [ ] Assignment completion rate widget (total vs completed)
- [ ] Upcoming deadlines widget (next 7 days)
- [ ] Per-course progress breakdown (assignments done vs total per course)
- [ ] Daily streak counter (consecutive days with at least one completed task)
- [ ] Make dashboard the default landing page

---

## Phase 7 — Polish + Deployment

**Goal:** Make the app feel like a real product and publish it live.

**Completion Criteria:** App is responsive, dark mode works, all pages have empty/error states, app is live on Vercel with README updated.

- [ ] Responsive layout for all pages (mobile-friendly)
- [ ] Dark mode toggle (persisted to localStorage)
- [ ] Empty states for all list/page views
- [ ] Basic error boundary for unexpected crashes
- [ ] Deploy to Vercel
- [ ] Update README with live URL and screenshots
