import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"

export function MeetingScheduler() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Meeting Scheduler</CardTitle>
      </CardHeader>
      <CardContent className="flex justify-between">
        <div className="w-1/2">
          <Calendar mode="single" />
        </div>
        <div className="w-1/2 pl-6">
          <h3 className="text-lg font-semibold mb-4">Available Time Slots</h3>
          <div className="space-y-2">
            <Button variant="outline" className="w-full justify-start">
              9:00 AM - 10:00 AM
            </Button>
            <Button variant="outline" className="w-full justify-start">
              11:00 AM - 12:00 PM
            </Button>
            <Button variant="outline" className="w-full justify-start">
              2:00 PM - 3:00 PM
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

