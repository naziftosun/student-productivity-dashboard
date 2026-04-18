import { Pencil, Trash2 } from 'lucide-react'
import type { Course } from '@/types'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

interface CourseCardProps {
  course: Course
  onEdit: (course: Course) => void
  onDelete: (course: Course) => void
}

export function CourseCard({ course, onEdit, onDelete }: CourseCardProps) {
  const addedDate = new Date(course.createdAt).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })

  return (
    <div className="group relative flex flex-col gap-3 rounded-xl border border-border/60 bg-card p-4 shadow-sm transition-all duration-200 hover:shadow-lg hover:-translate-y-px hover:border-border">
      {/* Color accent strip */}
      <div
        className="absolute left-0 top-0 h-full w-[3px] rounded-l-xl"
        style={{ backgroundColor: course.color }}
      />

      {/* Top row: name + actions */}
      <div className="flex items-start justify-between gap-3 pl-3">
        <div className="min-w-0 flex-1">
          <h3 className="truncate font-semibold text-foreground leading-snug">
            {course.name}
          </h3>
          {course.code && (
            <Badge
              variant="secondary"
              className="mt-1.5 text-xs font-medium tracking-wide"
            >
              {course.code}
            </Badge>
          )}
        </div>

        {/* Actions — fade in on hover */}
        <div className="flex shrink-0 gap-0.5 opacity-0 transition-opacity group-hover:opacity-100">
          <Button
            variant="ghost"
            size="icon"
            className="h-7 w-7"
            onClick={() => onEdit(course)}
            aria-label="Edit course"
          >
            <Pencil className="h-3.5 w-3.5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-7 w-7 text-destructive hover:text-destructive"
            onClick={() => onDelete(course)}
            aria-label="Delete course"
          >
            <Trash2 className="h-3.5 w-3.5" />
          </Button>
        </div>
      </div>

      {/* Bottom row: date */}
      <div className="pl-3">
        <span className="text-xs text-muted-foreground/70">Added {addedDate}</span>
      </div>
    </div>
  )
}
