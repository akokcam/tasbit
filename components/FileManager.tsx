import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Upload } from 'lucide-react'

const files = [
  { id: 1, name: "Chapter 1 Draft.pdf", uploadedAt: "2023-05-20" },
  { id: 2, name: "Literature Review.docx", uploadedAt: "2023-05-18" },
  { id: 3, name: "Data Analysis Results.xlsx", uploadedAt: "2023-05-15" },
]

export function FileManager() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>File Management</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <Button>
            <Upload className="mr-2 h-4 w-4" /> Upload File
          </Button>
        </div>
        <ul className="space-y-2">
          {files.map((file) => (
            <li key={file.id} className="flex items-center justify-between">
              <span>{file.name}</span>
              <span className="text-sm text-slate-500">{file.uploadedAt}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

