import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { RootLayout } from '@/components/layout/RootLayout'
import { DashboardPage } from '@/pages/DashboardPage'
import { CoursesPage } from '@/pages/CoursesPage'
import { AssignmentsPage } from '@/pages/AssignmentsPage'
import { CalendarPage } from '@/pages/CalendarPage'
import { PlannerPage } from '@/pages/PlannerPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route index element={<DashboardPage />} />
          <Route path="courses" element={<CoursesPage />} />
          <Route path="assignments" element={<AssignmentsPage />} />
          <Route path="calendar" element={<CalendarPage />} />
          <Route path="planner" element={<PlannerPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
