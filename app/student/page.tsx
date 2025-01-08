import { ProgressCard } from "@/components/student/ProgressCard"
import { TaskList } from "@/components/student/TaskList"
import { FileManager } from "@/components/student/FileManager"
import { MeetingSchedule } from "@/components/student/MeetingSchedule"
import { FeedbackViewer } from "@/components/student/FeedbackViewer"
import { NoteTaking } from "@/components/student/NoteTaking"

export default function StudentDashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight">Student Dashboard</h1>
      <div className="grid gap-6 md:grid-cols-2">
        <ProgressCard />
        <TaskList />
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <FileManager />
        <div className="space-y-6">
          <MeetingSchedule />
          <FeedbackViewer />
        </div>
      </div>
      <NoteTaking />
    </div>
  )
}

Now, let's create the components for the student dashboard:

```tsx file="components/student/TopBar.tsx"
"use client"

import { Bell, User } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function TopBar() {
  return (
    <div className="h-16 border-b border-gray-200 bg-white flex items-center justify-between px-4">
      <h1 className="text-xl font-semibold">Thesis Management System</h1>
      <div className="flex items-center space-x-4">
        <Button variant="ghost" size="icon">
          <Bell className="h-5 w-5" />
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Log out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  )
}

