import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

// Mock data for tasks
const tasks = [
  { id: 1, title: "Literature Review", status: "in_progress", deadline: "2023-06-15" },
  { id: 2, title: "Methodology Chapter", status: "pending", deadline: "2023-07-01" },
  { id: 3, title: "Data Collection", status: "completed", deadline: "2023-05-30" },
]

export function TaskManagement() {
  const [selectedTask, setSelectedTask] = useState(null)

  return (
    <Card>
      <CardHeader>
        <CardTitle>Task Management</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Task</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Deadline</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tasks.map((task) => (
              <TableRow key={task.id}>
                <TableCell>{task.title}</TableCell>
                <TableCell>{task.status}</TableCell>
                <TableCell>{task.deadline}</TableCell>
                <TableCell>
                  <Button variant="outline" size="sm" onClick={() => setSelectedTask(task)}>
                    View
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

