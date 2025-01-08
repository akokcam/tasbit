import { ProjectOverview } from "@/components/advisor/ProjectOverview"

export default function AdvisorDashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight">Advisor Dashboard</h1>
      <ProjectOverview />
    </div>
  )
}

