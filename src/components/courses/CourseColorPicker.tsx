import { cn } from '@/lib/utils'

const PRESET_COLORS = [
  { label: 'Purple',  value: '#8B5CF6' },
  { label: 'Blue',    value: '#3B82F6' },
  { label: 'Cyan',    value: '#06B6D4' },
  { label: 'Green',   value: '#10B981' },
  { label: 'Amber',   value: '#F59E0B' },
  { label: 'Orange',  value: '#F97316' },
  { label: 'Red',     value: '#EF4444' },
  { label: 'Pink',    value: '#EC4899' },
  { label: 'Rose',    value: '#F43F5E' },
  { label: 'Indigo',  value: '#6366F1' },
]

interface CourseColorPickerProps {
  value: string
  onChange: (color: string) => void
}

export function CourseColorPicker({ value, onChange }: CourseColorPickerProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {PRESET_COLORS.map((color) => (
        <button
          key={color.value}
          type="button"
          title={color.label}
          onClick={() => onChange(color.value)}
          className={cn(
            'w-7 h-7 rounded-full border-2 transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background',
            value === color.value ? 'border-foreground scale-110' : 'border-transparent'
          )}
          style={{ backgroundColor: color.value }}
        />
      ))}
    </div>
  )
}
