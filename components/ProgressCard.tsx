import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export function ProgressCard() {
  const progress = 65 // This would come from your actual data

  return (
    <Card>
      <CardHeader>
        <CardTitle>Project Progress</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between mb-2">
          <span className="text-2xl font-bold">{progress}%</span>
          <span className="text-sm text-slate-500">AI in Healthcare</span>
        </div>
        <Progress value={progress} className="w-full h-2" />
        <p className="mt-2 text-sm text-slate-500">
          You're making great progress! Keep up the good work.
        </p>
      </CardContent>
    </Card>
  )
}

