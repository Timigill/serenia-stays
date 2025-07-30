import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

// ✅ Load environment variables from .env.local
dotenv.config({ path: '.env.local' });

const uri = process.env.MONGODB_URI;

if (!uri) {
  throw new Error('❌ MONGODB_URI not found in .env.local');
}

const client = new MongoClient(uri);

(async () => {
  try {
    await client.connect();
    console.log("✅ Connected to MongoDB");

    const db = client.db('Sereniastays');
    const bookings = db.collection('bookings');

    const allBookings = await bookings.find().toArray();
    console.log("📦 Bookings:");
    console.log(JSON.stringify(allBookings, null, 2));
  } catch (err) {
    console.error("❌ Error:", err.message);
  } finally {
    await client.close();
    console.log("🔌 Connection closed.");
  }
})();
