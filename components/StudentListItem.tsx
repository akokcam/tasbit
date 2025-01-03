import { User } from 'lucide-react'

interface StudentListItemProps {
  student: {
    id: number
    name: string
    project: string
  }
}

export function StudentListItem({ student }: StudentListItemProps) {
  return (
    <div className="p-4 hover:bg-slate-100 cursor-pointer">
      <div className="flex items-center space-x-3">
        <User className="h-8 w-8 text-slate-500" />
        <div>
          <p className="font-medium text-sm">{student.name}</p>
          <p className="text-xs text-slate-500">{student.project}</p>
        </div>
      </div>
    </div>
  )
}

