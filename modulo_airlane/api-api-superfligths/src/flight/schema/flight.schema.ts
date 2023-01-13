import * as mongoose from 'mongoose';

export const FlightSchema = new mongoose.Schema(
  {
    pilot: { type: String, require: true },
    airplane: { type: String, require: true },
    destiny: { type: String, require: true },
    origin: { type: String, require: true },
    flightDate: { type: Date, require: true },
    passenger: [{ type: mongoose.Schema.Types.ObjectId, ref: 'passegers' }],
  },
  { timestamps: true },
);
