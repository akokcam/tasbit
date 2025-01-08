"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Skeleton } from "@/components/ui/skeleton"

type Project = {
  id: string
  title: string
  description: string
  progress: number
}

export function ProgressCard() {
  const [project, setProject] = useState<Project | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchProject = async () => {
      try {
        // In a real application, you would fetch the student's project
        // For this example, we'll use a mock API call
        const response = await fetch('/api/projects/student')
        if (!response.ok) {
          throw new Error('Failed to fetch project')
        }
        const data = await response.json()
        setProject(data)
      } catch (err) {
        setError('Error fetching project. Please try again later.')
      } finally {
        setIsLoading(false)
      }
    }

    fetchProject()
  }, [])

  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <Skeleton className="h-8 w-[200px]" />
        </CardHeader>
        <CardContent>
          <Skeleton className="h-40 w-40 rounded-full mx-auto mb-4" />
          <Skeleton className="h-4 w-full mb-2" />
          <Skeleton className="h-4 w-2/3 mb-4" />
          <Skeleton className="h-2 w-full" />
        </CardContent>
      </Card>
    )
  }

  if (error) {
    return <div className="text-red-500">{error}</div>
  }

  if (!project) {
    return <div>No project found.</div>
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Project Progress</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-center mb-4">
          <div className="relative h-40 w-40">
            <svg className="h-full w-full" viewBox="0 0 100 100">
              <circle
                className="text-slate-200"
                strokeWidth="10"
                stroke="currentColor"
                fill="transparent"
                r="45"
                cx="50"
                cy="50"
              />
              <circle
                className="text-blue-600"
                strokeWidth="10"
                strokeDasharray={`${project.progress * 2.83} 283`}
                strokeLinecap="round"
                stroke="currentColor"
                fill="transparent"
                r="45"
                cx="50"
                cy="50"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-3xl font-bold">{project.progress}%</span>
            </div>
          </div>
        </div>
        <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
        <p className="text-sm text-slate-500 mb-4">{project.description}</p>
        <Progress value={project.progress} className="w-full" />
      </CardContent>
    </Card>
  )
}

