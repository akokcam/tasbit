import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"

const tasks = [
  { id: 1, title: "Complete literature review", deadline: "2023-06-15", completed: false },
  { id: 2, title: "Draft methodology chapter", deadline: "2023-07-01", completed: false },
  { id: 3, title: "Prepare for advisor meeting", deadline: "2023-06-10", completed: true },
]

export function TaskList() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Current Tasks</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {tasks.map((task) => (
            <li key={task.id} className="flex items-center space-x-2">
              <Checkbox id={`task-${task.id}`} checked={task.completed} />
              <label
                htmlFor={`task-${task.id}`}
                className={`flex-1 ${task.completed ? "line-through text-slate-500" : ""}`}
              >
                {task.title}
              </label>
              <span className="text-sm text-slate-500">{task.deadline}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

