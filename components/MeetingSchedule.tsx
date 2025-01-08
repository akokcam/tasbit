"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Skeleton } from "@/components/ui/skeleton"

type Meeting = {
  id: string
  scheduledFor: string
  status: "scheduled" | "completed" | "cancelled"
}

export function MeetingSchedule() {
  const [meetings, setMeetings] = useState<Meeting[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchMeetings = async () => {
      try {
        const response = await fetch('/api/meetings')
        if (!response.ok) {
          throw new Error('Failed to fetch meetings')
        }
        const data = await response.json()
        setMeetings(data)
      } catch (err) {
        setError('Error fetching meetings. Please try again later.')
      } finally {
        setIsLoading(false)
      }
    }

    fetchMeetings()
  }, [])

  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <Skeleton className="h-8 w-[200px]" />
        </CardHeader>
        <CardContent>
          {[...Array(3)].map((_, index) => (
            <div key={index} className="flex items-center justify-between mb-4">
              <div>
                <Skeleton className="h-4 w-[150px] mb-2" />
                <Skeleton className="h-3 w-[100px]" />
              </div>
              <Skeleton className="h-6 w-[80px]" />
            </div>
          ))}
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
        <CardTitle>Upcoming Meetings</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {meetings.map((meeting) => (
            <li key={meeting.id} className="flex items-center justify-between">
              <div>
                <p className="font-medium">{new Date(meeting.scheduledFor).toLocaleString()}</p>
              </div>
              <Badge variant={meeting.status === "scheduled" ? "default" : "secondary"}>
                {meeting.status}
              </Badge>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

