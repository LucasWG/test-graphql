import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

export const middleware = (request: NextRequest) => {
	let response = NextResponse.next()

	// response.cookie('@fx:Token', 'fgj2ft1qe05hds2h1gk51we6rqw', { httpOnly: true })
	// response.clearCookie('@fx:Token')

	// return NextResponse.rewrite('http://localhost:3000/rewrite')
	// return NextResponse.redirect('http://localhost:3000/redirect')

	// return NextResponse.json({ message: 'xXx!' })

	return response
}
