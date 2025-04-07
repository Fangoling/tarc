import { updateSession } from '@/lib/utils/supabase/middleware'
import { NextResponse, type NextRequest } from "next/server"
import { match } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'

export async function middleware(request: NextRequest) {
  const response = await updateSession(request)
  const { pathname } = request.nextUrl

  // skip middle ware if static file or asset
  if (pathname.startsWith('/_next') || pathname.startsWith('/favicon.ico')) {
    return response
  }
  const locales = ['en', 'de']
  const defaultLocale = 'en'

  const headers = { 'accept-language': 'en,de;0.7' }
  const languages = new Negotiator({ headers }).languages()

  const cookieLocale = request.cookies.get('site_locale')?.value
  const matchedLocale = match(languages, locales, defaultLocale) // -> 'en-US' or 'de

  const activeLocale = cookieLocale || matchedLocale

  const pathnameLocale = locales.find((locale) =>
    pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameLocale) {
    if (pathnameLocale !== activeLocale) {
      response.cookies.set('site_locale', pathnameLocale, { path: '/' })
    }
    // Extract the locale from the pathname
    return response
  }

  // Redirect if there is no locale
  request.nextUrl.pathname = `/${activeLocale}${pathname}`
  // e.g. incoming request is /products
  // The new URL is now /en-US/products
  if (!cookieLocale) {
    response.cookies.set('site_local', activeLocale, { path: '/' })
  }
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
