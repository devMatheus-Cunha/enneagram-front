import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const response = new NextResponse('Hello, Next.js!', {
        status: 200,
        statusText: 'OK',
      })
      resolve(response)
    }, 1000)
  })
}
