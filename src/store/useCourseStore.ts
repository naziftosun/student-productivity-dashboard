import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { Course } from '@/types'

interface CourseStore {
  courses: Course[]
  addCourse: (course: Course) => void
  updateCourse: (id: string, updates: Partial<Course>) => void
  deleteCourse: (id: string) => void
}

export const useCourseStore = create<CourseStore>()(
  persist(
    (set) => ({
      courses: [],
      addCourse: (course) =>
        set((state) => ({ courses: [...state.courses, course] })),
      updateCourse: (id, updates) =>
        set((state) => ({
          courses: state.courses.map((c) => (c.id === id ? { ...c, ...updates } : c)),
        })),
      deleteCourse: (id) =>
        set((state) => ({ courses: state.courses.filter((c) => c.id !== id) })),
    }),
    { name: 'courses' }
  )
)
