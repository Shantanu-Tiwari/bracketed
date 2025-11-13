import { NextRequest, NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';
import { jwtVerify } from 'jose';

export async function GET(request: NextRequest) {
  const token = request.cookies.get('admin-token')?.value;
  
  if (!token) {
    return NextResponse.json({ error: 'No token provided' }, { status: 401 });
  }
  
  try {
    const secret = new TextEncoder().encode(process.env.JWT_SECRET || 'fallback-secret');
    await jwtVerify(token, secret);
  } catch {
    return NextResponse.json({ error: 'Invalid token' }, { status: 401 });
  }

  try {
    const client = await clientPromise;
    const db = client.db('bracketed');
    
    const bgmiRegistrations = await db.collection('bgmi_registrations').find({}).toArray();
    const valorantRegistrations = await db.collection('valorant_registrations').find({}).toArray();
    
    return NextResponse.json({
      bgmi: bgmiRegistrations,
      valorant: valorantRegistrations
    });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch registrations' }, { status: 500 });
  }
}