"use client"

import { useState } from "react"
import { Search } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { StudentListItem } from "@/components/advisor/StudentListItem"

// Mock data for students
const students = [
  { id: 1, name: "Alice Johnson", project: "AI in Healthcare" },
  { id: 2, name: "Bob Smith", project: "Sustainable Energy Systems" },
  { id: 3, name: "Charlie Brown", project: "Quantum Computing Applications" },
  // Add more students...
]

export function Sidebar() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
      <div className="p-4">
        <div className="relative">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
          <Input
            placeholder="Search students"
            className="pl-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      <ScrollArea className="flex-1">
        {filteredStudents.map((student) => (
          <StudentListItem key={student.id} student={student} />
        ))}
      </ScrollArea>
    </div>
  )
}

