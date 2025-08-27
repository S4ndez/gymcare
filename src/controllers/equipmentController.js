import Equipment from "../models/Equipment.js";
import Zone from "../models/Zone.js";
import { ZONE_LIMIT } from "../constants.js";   // ✅ fixed path


// Add new equipment
export const createEquipment = async (req, res) => {
  try {
    const {
      name,
      type,
      zone, // string entered by user
      manufacturer,
      serialNumber,
      purchaseDate,
      warrantyExpiry,
      price,
      vendor,
      maintenanceSchedule,
      nextMaintenanceDate,
      userCapacity,
      powerRequirement
    } = req.body;

    // Validate required fields
    if (!name || !type || !zone) {
      return res.status(400).json({ message: "Name, type, and zone are required" });
    }

    // Create new equipment
    const equipment = new Equipment({
      name,
      type,
      zone, // just store the user-entered string
      manufacturer,
      serialNumber,
      purchaseDate,
      warrantyExpiry,
      price,
      vendor,
      maintenanceSchedule,
      nextMaintenanceDate,
      userCapacity,
      powerRequirement
    });

    await equipment.save();

    res.status(201).json(equipment);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get all equipment
export const listEquipment = async (req, res) => {
  try {
    const equipment = await Equipment.find().populate("zone");
    res.json(equipment);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get equipment by ID
export const getEquipment = async (req, res) => {
  try {
    const equipment = await Equipment.findById(req.params.id).populate("zone");
    if (!equipment) return res.status(404).json({ message: "Equipment not found" });
    res.json(equipment);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update equipment
export const updateEquipment = async (req, res) => {
  try {
    const equipment = await Equipment.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!equipment) return res.status(404).json({ message: "Equipment not found" });
    res.json(equipment);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete equipment
export const removeEquipment = async (req, res) => {
  try {
    const equipment = await Equipment.findByIdAndDelete(req.params.id);
    if (!equipment) return res.status(404).json({ message: "Equipment not found" });
    res.json({ message: "Equipment deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
export const listDueMaintenance = async (req, res) => {
  try {
    const today = new Date();
    const tenDaysLater = new Date();
    tenDaysLater.setDate(today.getDate() + 10);

    const equipments = await Equipment.find({
      maintenanceDate: { $gte: today, $lte: tenDaysLater }
    });

    res.json(equipments);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch due maintenance equipment" });
  }
};

