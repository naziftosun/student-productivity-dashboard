import { useEffect, useState } from 'react'
import { useCourseStore } from '@/store/useCourseStore'
import type { Course } from '@/types'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { CourseColorPicker } from './CourseColorPicker'

interface CourseFormProps {
  open: boolean
  onClose: () => void
  course?: Course
}

const DEFAULT_COLOR = '#8B5CF6'

export function CourseForm({ open, onClose, course }: CourseFormProps) {
  const { addCourse, updateCourse } = useCourseStore()
  const isEditing = !!course

  const [name, setName] = useState('')
  const [code, setCode] = useState('')
  const [color, setColor] = useState(DEFAULT_COLOR)

  useEffect(() => {
    if (open) {
      setName(course?.name ?? '')
      setCode(course?.code ?? '')
      setColor(course?.color ?? DEFAULT_COLOR)
    }
  }, [open, course])

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!name.trim()) return

    if (isEditing) {
      updateCourse(course.id, { name: name.trim(), code: code.trim(), color })
    } else {
      addCourse({
        id: crypto.randomUUID(),
        name: name.trim(),
        code: code.trim(),
        color,
        createdAt: new Date().toISOString(),
      })
    }
    onClose()
  }

  return (
    <Dialog open={open} onOpenChange={(v) => { if (!v) onClose() }}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{isEditing ? 'Edit Course' : 'Add Course'}</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-5 pt-1">
          <div className="space-y-1.5">
            <Label htmlFor="course-name">Course Name</Label>
            <Input
              id="course-name"
              placeholder="e.g. Data Structures"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              autoFocus
            />
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="course-code">Course Code <span className="text-muted-foreground">(optional)</span></Label>
            <Input
              id="course-code"
              placeholder="e.g. CS301"
              value={code}
              onChange={(e) => setCode(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label>Color</Label>
            <CourseColorPicker value={color} onChange={setColor} />
          </div>

          <DialogFooter className="pt-2">
            <Button type="button" variant="ghost" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit" disabled={!name.trim()}>
              {isEditing ? 'Save Changes' : 'Add Course'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
