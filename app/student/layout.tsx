import { TopBar } from "@/components/student/TopBar"

export default function StudentLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <TopBar />
      <main className="flex-1 p-6">
        {children}
      </main>
    </div>
  )
}

