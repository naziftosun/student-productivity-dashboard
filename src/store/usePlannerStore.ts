import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { DailyTask, WeeklyPlan } from '@/types'

interface PlannerStore {
  plan: WeeklyPlan
  addTask: (date: string, task: DailyTask) => void
  toggleTask: (date: string, taskId: string) => void
  deleteTask: (date: string, taskId: string) => void
  reorderTasks: (date: string, tasks: DailyTask[]) => void
}

export const usePlannerStore = create<PlannerStore>()(
  persist(
    (set) => ({
      plan: {},
      addTask: (date, task) =>
        set((state) => ({
          plan: {
            ...state.plan,
            [date]: [...(state.plan[date] ?? []), task],
          },
        })),
      toggleTask: (date, taskId) =>
        set((state) => ({
          plan: {
            ...state.plan,
            [date]: (state.plan[date] ?? []).map((t) =>
              t.id === taskId ? { ...t, completed: !t.completed } : t
            ),
          },
        })),
      deleteTask: (date, taskId) =>
        set((state) => ({
          plan: {
            ...state.plan,
            [date]: (state.plan[date] ?? []).filter((t) => t.id !== taskId),
          },
        })),
      reorderTasks: (date, tasks) =>
        set((state) => ({
          plan: { ...state.plan, [date]: tasks },
        })),
    }),
    { name: 'weekly-plan' }
  )
)
