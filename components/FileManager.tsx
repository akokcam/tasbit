"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Upload, Download } from 'lucide-react'
import { Skeleton } from "@/components/ui/skeleton"
import { toast } from "@/components/ui/use-toast"

type File = {
  id: string
  name: string
  uploadedAt: string
}

export function FileManager() {
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

  const handleUpload = () => {
    // In a real application, you would handle file upload here
    toast({
      title: "File Upload",
      description: "File upload functionality will be implemented here.",
    })
  }

  const handleDownload = (fileId: string) => {
    // In a real application, you would handle file download here
    toast({
      title: "File Download",
      description: `Downloading file with ID: ${fileId}`,
    })
  }

  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <Skeleton className="h-8 w-[200px]" />
        </CardHeader>
        <CardContent>
          <Skeleton className="h-[200px] w-full mb-4" />
          <Skeleton className="h-10 w-[100px]" />
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
        <CardTitle>File Management</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="border-2 border-dashed border-slate-300 rounded-lg p-6 text-center mb-4">
          <Upload className="mx-auto h-12 w-12 text-slate-400" />
          <p className="mt-2 text-sm text-slate-500">Drag and drop files here, or click to select files</p>
          <Button className="mt-4" onClick={handleUpload}>Upload Files</Button>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>File Name</TableHead>
              <TableHead>Upload Date</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {files.map((file) => (
              <TableRow key={file.id}>
                <TableCell>{file.name}</TableCell>
                <TableCell>{new Date(file.uploadedAt).toLocaleDateString()}</TableCell>
                <TableCell>
                  <Button variant="ghost" size="sm" onClick={() => handleDownload(file.id)}>
                    <Download className="h-4 w-4 mr-2" />
                    Download
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

