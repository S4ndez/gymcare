// src/models/Equipment.js
import mongoose from "mongoose";

const equipmentSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true }, // equipment name
    type: { type: String, required: true, enum: ["Cardio", "Strength", "Flexibility"] }, // dropdown with 3 options
    manufacturer: { type: String, required: true },
    serialNumber: { type: String, required: true, unique: true },
    zone: { type: String, required: true }, // equipment zone
    purchaseDate: { type: Date, required: true },
    warrantyExpiry: { type: Date, required: true },
    price: { type: Number, required: true },
    vendor: { type: String, required: true },
    maintenanceSchedule: {
      type: String,
      enum: [
        "Daily",
        "Weekly",
        "Monthly",
        "Quarterly",
        "Yearly"
      ], // dropdown with 5 options
      required: true,
    },
    nextMaintenanceDate: { type: Date, required: true },
    maintenanceNotes: { type: String },
    description: { type: String },
    userCapacity: { type: Number, required: true },
    powerRequirement: { type: String }, // e.g., "220V", "110V"
  },
  { timestamps: true }
);

const Equipment = mongoose.model("Equipment", equipmentSchema);

export default Equipment;
