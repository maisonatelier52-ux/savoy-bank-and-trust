import { NextResponse } from "next/server";

export function middleware(request) {
  const blockedRoutes = ["/company-overview", "/cookies","/privacy-policy","/leadership", "/community-impact"];

  if (blockedRoutes.includes(request.nextUrl.pathname)) {
    // return NextResponse.redirect(new URL("/", request.url));
    return NextResponse.rewrite(new URL("/404", request.url));
  }

  return NextResponse.next();
}