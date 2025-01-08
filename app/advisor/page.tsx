import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ProjectOverview } from "@/components/advisor/ProjectOverview"
import { TaskManagement } from "@/components/advisor/TaskManagement"
import { FileReview } from "@/components/advisor/FileReview"
import { MeetingScheduler } from "@/components/advisor/MeetingScheduler"
import { FeedbackForm } from "@/components/advisor/FeedbackForm"

export default function AdvisorDashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight">Advisor Dashboard</h1>
      <Tabs defaultValue="overview">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="tasks">Tasks</TabsTrigger>
          <TabsTrigger value="files">Files</TabsTrigger>
          <TabsTrigger value="meetings">Meetings</TabsTrigger>
          <TabsTrigger value="feedback">Feedback</TabsTrigger>
        </TabsList>
        <TabsContent value="overview">
          <ProjectOverview />
        </TabsContent>
        <TabsContent value="tasks">
          <TaskManagement />
        </TabsContent>
        <TabsContent value="files">
          <FileReview />
        </TabsContent>
        <TabsContent value="meetings">
          <MeetingScheduler />
        </TabsContent>
        <TabsContent value="feedback">
          <FeedbackForm />
        </TabsContent>
      </Tabs>
    </div>
  )
}

