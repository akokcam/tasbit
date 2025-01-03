import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const meetings = [
  { id: 1, date: "2023-06-10", time: "10:00 AM", status: "scheduled" },
  { id: 2, date: "2023-06-17", time: "2:00 PM", status: "scheduled" },
  { id: 3, date: "2023-06-24", time: "11:00 AM", status: "scheduled" },
]

export function MeetingSchedule() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Upcoming Meetings</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {meetings.map((meeting) => (
            <li key={meeting.id} className="flex items-center justify-between">
              <span>{meeting.date} at {meeting.time}</span>
              <span className="text-sm font-medium text-green-500 capitalize">{meeting.status}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

