"use client"

import { useState, useEffect } from "react"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"
import { toast } from "@/components/ui/use-toast"

type Meeting = {
  id: string
  scheduledFor: string
  status: "scheduled" | "completed" | "cancelled"
  projectId: string
}

export function MeetingScheduler() {
  const [meetings, setMeetings] = useState<Meeting[]>([])
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date())
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

  const scheduleMeeting = async () => {
    if (selectedDate) {
      try {
        const response = await fetch('/api/meetings', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            scheduledFor: selectedDate.toISOString(),
            status: "scheduled",
            projectId: "placeholder-project-id", // You would need to select a project in a real application
          }),
        })

        if (!response.ok) {
          throw new Error('Failed to schedule meeting')
        }

        const newMeeting = await response.json()
        setMeetings([...meetings, newMeeting])
        toast({
          title: "Meeting Scheduled",
          description: `New meeting scheduled for ${selectedDate.toLocaleDateString()}`,
        })
      } catch (err) {
        toast({
          title: "Error",
          description: "Failed to schedule the meeting. Please try again.",
          variant: "destructive",
        })
      }
    }
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
    <div className="space-y-4">
      <h2 className="text-2xl font-bold mb-4">Meeting Scheduler</h2>
      <div className="flex space-x-4">
        <Card className="flex-1">
          <CardHeader>
            <CardTitle>Select Date</CardTitle>
          </CardHeader>
          <CardContent>
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
              className="rounded-md border"
            />
          </CardContent>
        </Card>
        <Card className="flex-1">
          <CardHeader>
            <CardTitle>Scheduled Meetings</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {meetings.map((meeting) => (
                <li key={meeting.id} className="flex justify-between items-center">
                  <span>{new Date(meeting.scheduledFor).toLocaleString()}</span>
                  <Badge variant={meeting.status === "completed" ? "default" : "secondary"}>
                    {meeting.status}
                  </Badge>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
      <Button onClick={scheduleMeeting}>Schedule Meeting</Button>
    </div>
  )
}

