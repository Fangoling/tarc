import { updateSession } from '@/lib/utils/supabase/middleware'
import { NextResponse, type NextRequest } from "next/server"
import { match } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'
 
let headers = { 'accept-language': 'en,de;0.7' }
let languages = new Negotiator({ headers }).languages()
let locales = ['en', 'de']
let defaultLocale = 'en'
let currentLocale = ''
 
const matchedLocale = match(languages, locales, defaultLocale) // -> 'en-US' or 'de

// Get the preferred locale, similar to the above or using a library
function getLocale(request: NextRequest) {
  if (currentLocale != '') {
    return currentLocale;
  }
  return matchedLocale
}

export async function middleware(request: NextRequest) {

  const response = await updateSession(request)
  // Check if there is any supported locale in the pathname
  const { pathname } = request.nextUrl
  const pathnameLocale = locales.find((locale) =>
    pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );


  if (pathnameLocale != null) {
    // Extract the locale from the pathname
    currentLocale = pathnameLocale
    return response
  }
 
  // Redirect if there is no locale
  const locale = getLocale(request)
  request.nextUrl.pathname = `/${locale}${pathname}`
  // e.g. incoming request is /products
  // The new URL is now /en-US/products
  return NextResponse.redirect(request.nextUrl, 308)
}


export const config = {
    matcher: [
        /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - images - .svg, .png, .jpg, .jpeg, .gif, .webp
     * Feel free to modify this pattern to include more paths.
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
}
