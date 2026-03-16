import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Simple edge redirect fallback for registration slugs
const redirects: Record<string, string> = {
  "/reg/hs": "https://unstop.com/p/hackerzstreet-40-manipal-university-mu-jaipur-1657990",
  "/reg/mockup":
    "https://unstop.com/o/5JHBCOz?lb=jRTzLubh&utm_medium=Share&utm_source=sarapan47121&utm_campaign=Online_coding_challenge",
};

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname.toLowerCase().replace(/\/$/, "");
  const destination = redirects[pathname];

  if (destination) {
    return NextResponse.redirect(destination, 307);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/reg/:path*"],
};
