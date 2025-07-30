import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' }); // 👈 manually load `.env.local`

const uri = process.env.MONGODB_URI;

if (!uri) {
  throw new Error('❌ MONGODB_URI is not defined in your .env.local');
}

// Now you can connect
import { MongoClient } from 'mongodb';
const client = new MongoClient(uri);

async function connectDB() {
  try {
    await client.connect();
    console.log("✅ Connected to MongoDB");
    await client.close();
  } catch (err) {
    console.error("❌ Failed to connect:", err);
  }
}

connectDB();
