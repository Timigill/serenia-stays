// /app/api/contact/route.js
import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongodb'; 
import Contact from '@/models/Contact';

export async function POST(req) {
  try {
    const body = await req.json();
    await connectDB();

    const newMessage = new Contact(body);
    await newMessage.save();

    return NextResponse.json({ success: true, message: 'Message saved' }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, message: 'Server error' }, { status: 500 });
  }
}
