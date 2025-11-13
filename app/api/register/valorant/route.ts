import { NextRequest, NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';
import { simpleRateLimit } from '@/lib/ratelimit';

export async function POST(request: NextRequest) {
  try {
    // Get client IP
    const ip = request.ip || request.headers.get('x-forwarded-for') || 'unknown';
    
    // Rate limiting
    if (!simpleRateLimit(ip)) {
      return NextResponse.json({ success: false, error: 'Too many requests. Please try again later.' }, { status: 429 });
    }

    const formData = await request.formData();
    const data: any = {};
    
    // Process form fields
    for (const [key, value] of formData.entries()) {
      if (value instanceof File) {
        const bytes = await value.arrayBuffer();
        const base64 = Buffer.from(bytes).toString('base64');
        data[key] = {
          name: value.name,
          type: value.type,
          data: base64
        };
      } else {
        data[key] = value;
      }
    }
    
    // Basic validation
    if (!data.teamName || !data.collegeName || !data.leaderName) {
      return NextResponse.json({ success: false, error: 'Missing required fields' }, { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db('bracketed');
    const collection = db.collection('valorant_registrations');

    // Check for duplicate team name
    const existingTeam = await collection.findOne({ teamName: data.teamName });
    if (existingTeam) {
      return NextResponse.json({ success: false, error: 'Team name already exists' }, { status: 400 });
    }
    
    const result = await collection.insertOne({
      ...data,
      ip,
      createdAt: new Date(),
    });

    return NextResponse.json({ success: true, id: result.insertedId });
  } catch (error) {
    console.error('Database error:', error);
    return NextResponse.json({ success: false, error: 'Failed to save registration' }, { status: 500 });
  }
}