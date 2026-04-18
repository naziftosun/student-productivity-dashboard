import { NavLink } from 'react-router-dom'
import { LayoutDashboard, BookOpen, ClipboardList, Calendar, CalendarDays } from 'lucide-react'
import { cn } from '@/lib/utils'

const navItems = [
  { to: '/', label: 'Dashboard', icon: LayoutDashboard },
  { to: '/courses', label: 'Courses', icon: BookOpen },
  { to: '/assignments', label: 'Assignments', icon: ClipboardList },
  { to: '/calendar', label: 'Calendar', icon: Calendar },
  { to: '/planner', label: 'Weekly Planner', icon: CalendarDays },
]

export function Sidebar() {
  return (
    <aside className="w-60 shrink-0 border-r bg-sidebar h-screen sticky top-0 flex flex-col">
      <div className="px-6 py-5 border-b">
        <h2 className="font-semibold text-sm tracking-wide text-sidebar-foreground">
          Student Dashboard
        </h2>
      </div>
      <nav className="flex-1 px-3 py-4 space-y-1">
        {navItems.map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            end={to === '/'}
            className={({ isActive }) =>
              cn(
                'flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors',
                isActive
                  ? 'bg-sidebar-accent text-sidebar-accent-foreground font-medium'
                  : 'text-sidebar-foreground hover:bg-sidebar-accent/50'
              )
            }
          >
            <Icon className="w-4 h-4 shrink-0" />
            {label}
          </NavLink>
        ))}
      </nav>
    </aside>
  )
}
