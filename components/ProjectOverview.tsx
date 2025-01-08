"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

type Project = {
  id: string
  title: string
  student: string
  progress: number
}

const projects: Project[] = [
  { id: "1", title: "AI in Healthcare", student: "Alice Johnson", progress: 75 },
  { id: "2", title: "Renewable Energy Systems", student: "Bob Smith", progress: 40 },
  { id: "3", title: "Cybersecurity in IoT", student: "Charlie Brown", progress: 60 },
]

export function ProjectOverview() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <Card key={project.id}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              {project.title}
            </CardTitle>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-4 w-4 text-muted-foreground"
            >
              <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{project.progress}%</div>
            <p className="text-xs text-muted-foreground">{project.student}</p>
            <Progress value={project.progress} className="mt-2" />
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

