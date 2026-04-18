import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { Assignment } from '@/types'

interface AssignmentStore {
  assignments: Assignment[]
  addAssignment: (assignment: Assignment) => void
  updateAssignment: (id: string, updates: Partial<Assignment>) => void
  deleteAssignment: (id: string) => void
  toggleComplete: (id: string) => void
}

export const useAssignmentStore = create<AssignmentStore>()(
  persist(
    (set) => ({
      assignments: [],
      addAssignment: (assignment) =>
        set((state) => ({ assignments: [...state.assignments, assignment] })),
      updateAssignment: (id, updates) =>
        set((state) => ({
          assignments: state.assignments.map((a) =>
            a.id === id ? { ...a, ...updates } : a
          ),
        })),
      deleteAssignment: (id) =>
        set((state) => ({
          assignments: state.assignments.filter((a) => a.id !== id),
        })),
      toggleComplete: (id) =>
        set((state) => ({
          assignments: state.assignments.map((a) =>
            a.id === id ? { ...a, completed: !a.completed } : a
          ),
        })),
    }),
    { name: 'assignments' }
  )
)
