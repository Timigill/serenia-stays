// models/Bookings.js
import mongoose from 'mongoose';

const BookingSchema = new mongoose.Schema({
  fullName: String,
  email: String,
  phone: String,
  checkIn: Date,
  checkOut: Date,
  roomType: String,
  specialRequests: String,
});

export default mongoose.models.Booking || mongoose.model('bookings', BookingSchema);
