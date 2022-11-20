import { NextResponse } from "next/server"

export function middleware(req) {
    const tkn = req?.cookies['LandVerifier.AuthUserTokens']


    if (req.nextUrl.pathname === '/') {

        if (!!tkn) {
            return NextResponse.redirect(new URL('/dashboard', req.url))
        } else {
            return NextResponse.redirect(new URL('/auth', req.url))
        }
    }

    if (req.nextUrl.pathname.startsWith('/dashboard')) {
        if (!tkn) {
            return NextResponse.redirect(new URL('/auth', req.url))
        }
    }

    if (req.nextUrl.pathname.startsWith('/auth')) {
        if (!!tkn) {
            return NextResponse.redirect(new URL('/dashboard', req.url))
        }
    }
}