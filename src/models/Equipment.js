// src/models/Equipment.js
import mongoose from "mongoose";

const equipmentSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true }, // equipment name
    type: { type: String, required: true,}, // dropdown with 3 options
    manufacturer: { type: String, required: true },
    serialNumber: { type: String, required: true, unique: true },
    zone: { type: String,  }, // equipment zone
    purchaseDate: { type: Date, required: true },
    warrantyExpiry: { type: Date, required: true },
    price: { type: Number, required: true },
    vendor: { type: String,  },
    maintenanceSchedule: {
      type: String,
    // dropdown with 5 options
      required: true,
    },
    nextMaintenanceDate: { type: Date, required: true },
    maintenanceNotes: { type: String },
    description: { type: String },
    userCapacity: { type: Number, },
    powerRequirement: { type: String }, // e.g., "220V", "110V"
  },
  { timestamps: true }
);

const Equipment = mongoose.model("Equipment", equipmentSchema);

export default Equipment;
