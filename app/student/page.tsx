import { ProgressCard } from "@/components/student/ProgressCard"
import { TaskList } from "@/components/student/TaskList"
import { FileManager } from "@/components/student/FileManager"
import { MeetingSchedule } from "@/components/student/MeetingSchedule"

export default function StudentDashboard() {
  return (
    <div className="space-y-6">
      <ProgressCard />
      <TaskList />
      <div className="grid gap-6 md:grid-cols-2">
        <FileManager />
        <MeetingSchedule />
      </div>
    </div>
  )
}

