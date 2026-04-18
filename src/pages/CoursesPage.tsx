import { useState } from 'react'
import { BookOpen, Plus } from 'lucide-react'
import { useCourseStore } from '@/store/useCourseStore'
import type { Course } from '@/types'
import { Button } from '@/components/ui/button'
import { CourseCard } from '@/components/courses/CourseCard'
import { CourseForm } from '@/components/courses/CourseForm'
import { DeleteCourseDialog } from '@/components/courses/DeleteCourseDialog'

export function CoursesPage() {
  const { courses, deleteCourse } = useCourseStore()

  const [formOpen, setFormOpen] = useState(false)
  const [editingCourse, setEditingCourse] = useState<Course | null>(null)
  const [deletingCourse, setDeletingCourse] = useState<Course | null>(null)

  function handleEdit(course: Course) {
    setEditingCourse(course)
    setFormOpen(true)
  }

  function handleFormClose() {
    setFormOpen(false)
    setEditingCourse(null)
  }

  function handleDeleteConfirm() {
    if (deletingCourse) {
      deleteCourse(deletingCourse.id)
      setDeletingCourse(null)
    }
  }

  return (
    <div className="min-h-full p-6 max-w-5xl mx-auto">
      {/* Page header */}
      <div className="flex items-start justify-between gap-4 mb-6 pb-6 border-b border-border/50">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight text-foreground">
            Courses
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Manage and organize your enrolled courses.
          </p>
        </div>
        <Button onClick={() => setFormOpen(true)} className="shrink-0 shadow-sm">
          <Plus className="mr-2 h-4 w-4" />
          Add Course
        </Button>
      </div>

      {/* Course grid or empty state */}
      {courses.length === 0 ? (
        <EmptyState onAdd={() => setFormOpen(true)} />
      ) : (
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
              onEdit={handleEdit}
              onDelete={setDeletingCourse}
            />
          ))}
        </div>
      )}

      {/* Add / Edit dialog */}
      <CourseForm
        open={formOpen}
        onClose={handleFormClose}
        course={editingCourse ?? undefined}
      />

      {/* Delete confirmation */}
      {deletingCourse && (
        <DeleteCourseDialog
          open={!!deletingCourse}
          courseName={deletingCourse.name}
          onClose={() => setDeletingCourse(null)}
          onConfirm={handleDeleteConfirm}
        />
      )}
    </div>
  )
}

function EmptyState({ onAdd }: { onAdd: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center rounded-xl border border-dashed bg-card/50 px-6 py-14 text-center">
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 mb-4">
        <BookOpen className="h-7 w-7 text-primary" />
      </div>
      <h2 className="text-lg font-semibold text-foreground">No courses yet</h2>
      <p className="mt-1.5 text-sm text-muted-foreground max-w-xs">
        Add your first course to start tracking assignments and deadlines.
      </p>
      <Button onClick={onAdd} className="mt-6">
        <Plus className="mr-2 h-4 w-4" />
        Add Your First Course
      </Button>
    </div>
  )
}
