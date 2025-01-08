"use client"

import { useState, useEffect } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Skeleton } from "@/components/ui/skeleton"
import { toast } from "@/components/ui/use-toast"

type Task = {
  id: string
  title: string
  status: "pending" | "in_progress" | "completed"
  deadline: string
  feedback?: string
}

export function TaskManagement() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [newTask, setNewTask] = useState({ title: "", deadline: "" })
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

  const addTask = async () => {
    if (newTask.title && newTask.deadline) {
      try {
        const response = await fetch('/api/tasks', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ ...newTask, status: "pending" }),
        })

        if (!response.ok) {
          throw new Error('Failed to add task')
        }

        const addedTask = await response.json()
        setTasks([...tasks, addedTask])
        setNewTask({ title: "", deadline: "" })
        toast({
          title: "Task added",
          description: "The new task has been successfully added.",
        })
      } catch (err) {
        toast({
          title: "Error",
          description: "Failed to add the task. Please try again.",
          variant: "destructive",
        })
      }
    }
  }

  const updateTaskFeedback = async (taskId: string, feedback: string) => {
    try {
      const response = await fetch(`/api/tasks/${taskId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ feedback }),
      })

      if (!response.ok) {
        throw new Error('Failed to update task feedback')
      }

      const updatedTask = await response.json()
      setTasks(tasks.map(task => task.id === taskId ? updatedTask : task))
      toast({
        title: "Feedback updated",
        description: "The task feedback has been successfully updated.",
      })
    } catch (err) {
      toast({
        title: "Error",
        description: "Failed to update the task feedback. Please try again.",
        variant: "destructive",
      })
    }
  }

  if (isLoading) {
    return (
      <div className="space-y-4">
        <Skeleton className="h-10 w-full" />
        <Skeleton className="h-10 w-full" />
        <Skeleton className="h-64 w-full" />
      </div>
    )
  }

  if (error) {
    return <div className="text-red-500">{error}</div>
  }

  return (
    <div className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <Label htmlFor="title">Task Title</Label>
          <Input
            id="title"
            value={newTask.title}
            onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
          />
        </div>
        <div>
          <Label htmlFor="deadline">Deadline</Label>
          <Input
            id="deadline"
            type="date"
            value={newTask.deadline}
            onChange={(e) => setNewTask({ ...newTask, deadline: e.target.value })}
          />
        </div>
      </div>
      <Button onClick={addTask}>Add Task</Button>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Deadline</TableHead>
            <TableHead>Feedback</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tasks.map((task) => (
            <TableRow key={task.id}>
              <TableCell>{task.title}</TableCell>
              <TableCell>
                <Badge variant={task.status === "completed" ? "default" : "secondary"}>
                  {task.status}
                </Badge>
              </TableCell>
              <TableCell>{new Date(task.deadline).toLocaleDateString()}</TableCell>
              <TableCell>
                <Textarea 
                  placeholder="Add feedback..." 
                  value={task.feedback} 
                  onChange={(e) => updateTaskFeedback(task.id, e.target.value)}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

