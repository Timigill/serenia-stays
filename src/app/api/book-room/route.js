// src/app/api/book-room/route.js

import { NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;

const options = {};
let client;
let clientPromise;

if (!global._mongoClientPromise) {
  client = new MongoClient(uri, options);
  global._mongoClientPromise = client.connect();
}
clientPromise = global._mongoClientPromise;

// ✅ POST: Add a new booking
export async function POST(req) {
  try {
    const data = await req.json();
    const client = await clientPromise;
    const db = client.db('Sereniastays');
    const bookings = db.collection('bookings');

    const result = await bookings.insertOne({
      ...data,
      createdAt: new Date(),
    });

    console.log("✅ Booking inserted:", result.insertedId);

    return NextResponse.json({ success: true, id: result.insertedId }, { status: 201 });
  } catch (err) {
    console.error("❌ Booking error:", err);
    return NextResponse.json({ error: 'Booking failed' }, { status: 500 });
  }
}

// ✅ GET: Fetch all bookings
export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db('Sereniastays');
    const bookings = db.collection('bookings');

    const allBookings = await bookings.find().toArray();

    return NextResponse.json(allBookings, { status: 200 });
  } catch (err) {
    console.error("❌ Fetch error:", err);
    return NextResponse.json({ error: 'Error fetching bookings' }, { status: 500 });
  }
}
