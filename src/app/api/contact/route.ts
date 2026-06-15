import { NextResponse } from 'next/server'

// Node.js runtime (not edge) — gives us full Node APIs for future email/CRM integration.
export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

type ContactPayload = {
  name?: string
  email?: string
  company?: string
  message?: string
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(request: Request) {
  let body: ContactPayload
  try {
    body = (await request.json()) as ContactPayload
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid JSON.' }, { status: 400 })
  }

  const name = body.name?.trim() ?? ''
  const email = body.email?.trim() ?? ''
  const company = body.company?.trim() ?? ''
  const message = body.message?.trim() ?? ''

  if (!name || !email || !message) {
    return NextResponse.json(
      { ok: false, error: 'Name, email and message are required.' },
      { status: 422 },
    )
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ ok: false, error: 'Please provide a valid email.' }, { status: 422 })
  }

  // Where real delivery would happen — wire up an email/CRM provider via env vars.
  // Kept side-effect-free so the build needs no secrets. Logged server-side for now.
  const lead = {
    name,
    email,
    company: company || '—',
    message,
    receivedAt: new Date().toISOString(),
  }
  console.log('[keysandkites] new launch inquiry:', lead)

  return NextResponse.json({ ok: true })
}
