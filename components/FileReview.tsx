import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

// Mock data for files
const files = [
  { id: 1, name: "Chapter 1 Draft.pdf", uploadedBy: "Alice Johnson", uploadedAt: "2023-05-20" },
  { id: 2, name: "Literature Review.docx", uploadedBy: "Bob Smith", uploadedAt: "2023-05-18" },
  { id: 3, name: "Data Analysis Results.xlsx", uploadedBy: "Charlie Brown", uploadedAt: "2023-05-15" },
]

export function FileReview() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>File Review</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>File Name</TableHead>
              <TableHead>Uploaded By</TableHead>
              <TableHead>Uploaded At</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {files.map((file) => (
              <TableRow key={file.id}>
                <TableCell>{file.name}</TableCell>
                <TableCell>{file.uploadedBy}</TableCell>
                <TableCell>{file.uploadedAt}</TableCell>
                <TableCell>
                  <Button variant="outline" size="sm">
                    Review
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

