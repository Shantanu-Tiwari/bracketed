import { NextRequest, NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';
import { jwtVerify } from 'jose';

export async function GET(request: NextRequest) {
  console.log('Registrations endpoint called');
  const token = request.cookies.get('admin-token')?.value;
  console.log('Token found:', !!token);
  
  if (!token) {
    console.log('No token provided');
    return NextResponse.json({ error: 'No token provided' }, { status: 401 });
  }
  
  try {
    const secret = new TextEncoder().encode(process.env.JWT_SECRET || 'fallback-secret');
    await jwtVerify(token, secret);
    console.log('Token verified successfully');
  } catch (error) {
    console.log('Token verification failed:', error);
    return NextResponse.json({ error: 'Invalid token' }, { status: 401 });
  }

  try {
    console.log('Connecting to MongoDB...');
    const client = await clientPromise;
    const db = client.db('bracketed');
    
    console.log('Fetching BGMI registrations...');
    const bgmiRegistrations = await db.collection('bgmi_registrations').find({}).toArray();
    console.log('BGMI count:', bgmiRegistrations.length);
    
    console.log('Fetching Valorant registrations...');
    const valorantRegistrations = await db.collection('valorant_registrations').find({}).toArray();
    console.log('Valorant count:', valorantRegistrations.length);
    
    return NextResponse.json({
      bgmi: bgmiRegistrations,
      valorant: valorantRegistrations
    });
  } catch (error) {
    console.error('Database error:', error);
    return NextResponse.json({ error: `Database error: ${error}` }, { status: 500 });
  }
}