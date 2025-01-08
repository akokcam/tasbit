"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Search, GraduationCap } from 'lucide-react'

type Student = {
  id: string
  name: string
  project: string
}

const students: Student[] = [
  { id: "1", name: "Alice Johnson", project: "AI in Healthcare" },
  { id: "2", name: "Bob Smith", project: "Renewable Energy Systems" },
  { id: "3", name: "Charlie Brown", project: "Cybersecurity in IoT" },
  // Add more students as needed
]

export function Sidebar() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
      <div className="p-4 border-b border-gray-200">
        <h2 className="text-lg font-semibold flex items-center">
          <GraduationCap className="mr-2" />
          Students
        </h2>
      </div>
      <div className="p-4">
        <div className="relative">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-slate-500" />
          <Input
            placeholder="Search students"
            className="pl-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      <ScrollArea className="flex-1">
        <div className="px-4 py-2">
          {filteredStudents.map((student) => (
            <div
              key={student.id}
              className="mb-2 p-2 rounded hover:bg-slate-100 cursor-pointer"
            >
              <h3 className="font-medium">{student.name}</h3>
              <p className="text-sm text-slate-500">{student.project}</p>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  )
}

