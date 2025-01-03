"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ProjectOverview } from "@/components/advisor/ProjectOverview"
import { TaskManagement } from "@/components/advisor/TaskManagement"
import { FileReview } from "@/components/advisor/FileReview"
import { MeetingScheduler } from "@/components/advisor/MeetingScheduler"

export default function AdvisorDashboard() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
      <TabsList>
        <TabsTrigger value="overview">Project Overview</TabsTrigger>
        <TabsTrigger value="tasks">Task Management</TabsTrigger>
        <TabsTrigger value="files">File Review</TabsTrigger>
        <TabsTrigger value="meetings">Meeting Scheduler</TabsTrigger>
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
    </Tabs>
  )
}

