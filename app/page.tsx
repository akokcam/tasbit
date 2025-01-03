"use client"

import { useSession } from "next-auth/react"
import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function Home() {
  const { data: session, status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (status === "authenticated") {
      if (session?.user?.role === "advisor") {
        router.push("/advisor")
      } else if (session?.user?.role === "student") {
        router.push("/student")
      }
    } else if (status === "unauthenticated") {
      router.push("/auth/signin")
    }
  }, [session, status, router])

  return (
    <div className="flex items-center justify-center min-h-screen">
      <p>Loading...</p>
    </div>
  )
}

