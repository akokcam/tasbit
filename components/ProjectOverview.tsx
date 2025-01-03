import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

// Mock data for projects
const projects = [
  { id: 1, title: "AI in Healthcare", student: "Alice Johnson", progress: 75 },
  { id: 2, title: "Sustainable Energy Systems", student: "Bob Smith", progress: 40 },
  { id: 3, title: "Quantum Computing Applications", student: "Charlie Brown", progress: 60 },
]

export function ProjectOverview() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <Card key={project.id}>
          <CardHeader>
            <CardTitle>{project.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-500 mb-4">{project.student}</p>
            <Progress value={project.progress} className="w-full" />
            <p className="text-sm text-slate-500 mt-2">{project.progress}% Complete</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

