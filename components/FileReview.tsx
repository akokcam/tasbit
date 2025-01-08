"use client"

import { useState, useEffect } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"
import { toast } from "@/components/ui/use-toast"

type File = {
  id: string
  name: string
  url: string
  uploadedAt: string
  uploadedBy: {
    name: string
  }
}

export function FileReview() {
  const [files, setFiles] = useState<File[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const response = await fetch('/api/files')
        if (!response.ok) {
          throw new Error('Failed to fetch files')
        }
        const data = await response.json()
        setFiles(data)
      } catch (err) {
        setError('Error fetching files. Please try again later.')
      } finally {
        setIsLoading(false)
      }
    }

    fetchFiles()
  }, [])

  const handleDownload = (url: string, fileName: string) => {
    // In a real application, you would handle the file download here
    // For this example, we'll just show a toast notification
    toast({
      title: "File Download",
      description: `Downloading ${fileName}...`,
    })
  }

  if (isLoading) {
    return (
      <div className="space-y-4">
        <Skeleton className="h-10 w-full" />
        <Skeleton className="h-64 w-full" />
      </div>
    )
  }

  if (error) {
    return <div className="text-red-500">{error}</div>
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">File Review</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>File Name</TableHead>
            <TableHead>Uploaded By</TableHead>
            <TableHead>Upload Date</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {files.map((file) => (
            <TableRow key={file.id}>
              <TableCell>{file.name}</TableCell>
              <TableCell>{file.uploadedBy.name}</TableCell>
              <TableCell>{new Date(file.uploadedAt).toLocaleDateString()}</TableCell>
              <TableCell>
                <Button onClick={() => handleDownload(file.url, file.name)}>
                  Download
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

