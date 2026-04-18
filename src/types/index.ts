export interface Course {
  id: string
  name: string
  code: string
  color: string
  createdAt: string
}

export interface Assignment {
  id: string
  title: string
  courseId: string
  dueDate: string
  priority: 'low' | 'medium' | 'high'
  completed: boolean
  createdAt: string
}

export interface DailyTask {
  id: string
  title: string
  completed: boolean
}

export interface WeeklyPlan {
  [date: string]: DailyTask[]
}
