import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest, res: NextResponse) {
  const hasToken = req.cookies.has("token");
  const token = req.cookies.get("token");
  const authorizedPaths = [
    "/",
    "/courses",
    /^\/courses\/([^\/]+)$/,
    /^\/courses\/\d+\/quizz$/,
    /^\/courses\/\d+\/missions$/,
    "/new",
  ];
  const { pathname, origin } = req.nextUrl;

  const isAuthorized = authorizedPaths.some((path) => {
    if (typeof path === "string") {
      return path === pathname;
    } else if (path instanceof RegExp) {
      const match = pathname.match(path);

      if (match) return true;
    }

    return false;
  });

  if (isAuthorized) {
    if (hasToken) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(new URL("/sign-in", origin));
    }
  } else {
    if (hasToken) {
      return NextResponse.redirect(new URL("/", origin));
    } else {
      return NextResponse.next();
    }
  }
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|.mp4|.webm|.mov).*)",
  ],
  static: true,
};
