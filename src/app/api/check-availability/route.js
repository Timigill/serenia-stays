// src/app/api/check-availability/route.js

import { NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

export async function POST(req) {
  try {
    const data = await req.json();
    const db = client.db('Sereniastays');
    const bookings = db.collection('bookings');

    const { checkIn, checkOut, roomType } = data;

    const overlapping = await bookings.findOne({
      roomType,
      checkIn: { $lt: new Date(checkOut) },
      checkOut: { $gt: new Date(checkIn) },
    });

    if (overlapping) {
      return NextResponse.json({ available: false, message: 'Room not available.' }, { status: 200 });
    }

    return NextResponse.json({ available: true }, { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
