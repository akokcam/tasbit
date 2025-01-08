"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Skeleton } from "@/components/ui/skeleton"

type Task = {
  id: string
  title: string
  status: "pending" | "in_progress" | "completed"
  deadline: string
}

export function TaskList() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch('/api/tasks')
        if (!response.ok) {
          throw new Error('Failed to fetch tasks')
        }
        const data = await response.json()
        setTasks(data)
      } catch (err) {
        setError('Error fetching tasks. Please try again later.')
      } finally {
        setIsLoading(false)
      }
    }

    fetchTasks()
  }, [])

  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <Skeleton className="h-8 w-[200px]" />
        </CardHeader>
        <CardContent>
          {[...Array(3)].map((_, index) => (
            <div key={index} className="flex items-center justify-between mb-4">
              <div>
                <Skeleton className="h-4 w-[150px] mb-2" />
                <Skeleton className="h-3 w-[100px]" />
              </div>
              <Skeleton className="h-6 w-[80px]" />
            </div>
          ))}
        </CardContent>
      </Card>
    )
  }

  if (error) {
    return <div className="text-red-500">{error}</div>
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Current Tasks</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {tasks.map((task) => (
            <li key={task.id} className="flex items-center justify-between">
              <div>
                <p className="font-medium">{task.title}</p>
                <p className="text-sm text-slate-500">Due: {new Date(task.deadline).toLocaleDateString()}</p>
              </div>
              <Badge variant={task.status === "completed" ? "default" : "secondary"}>
                {task.status}
              </Badge>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

