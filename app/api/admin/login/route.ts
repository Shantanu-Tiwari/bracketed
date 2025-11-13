import { NextRequest, NextResponse } from 'next/server';
import { SignJWT } from 'jose';
import { simpleRateLimit } from '@/lib/ratelimit';

export async function POST(request: NextRequest) {
  const ip = request.headers.get('x-forwarded-for') || 'unknown';
  
  if (!simpleRateLimit(`admin_login_${ip}`, 5, 300)) {
    return NextResponse.json({ error: 'Too many login attempts' }, { status: 429 });
  }

  const { username, password } = await request.json();
  
  if (username !== process.env.ADMIN_USERNAME || password !== process.env.ADMIN_PASSWORD) {
    return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
  }

  const secret = new TextEncoder().encode(process.env.JWT_SECRET || 'fallback-secret');
  const token = await new SignJWT({ admin: true })
    .setProtectedHeader({ alg: 'HS256' })
    .setExpirationTime('1h')
    .sign(secret);

  const response = NextResponse.json({ success: true });
  response.cookies.set('admin-token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 3600
  });

  return response;
}