import { withAuth } from "next-auth/middleware"
import { NextResponse } from "next/server"

export default withAuth(
  function middleware(req) {
    const token = req.nextauth.token
    const path = req.nextUrl.pathname

    if (path.startsWith("/advisor") && token?.role !== "advisor") {
      return NextResponse.redirect(new URL("/student", req.url))
    }

    if (path.startsWith("/student") && token?.role !== "student") {
      return NextResponse.redirect(new URL("/advisor", req.url))
    }
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token
    },
  }
)

export const config = {
  matcher: ["/advisor/:path*", "/student/:path*"]
}

