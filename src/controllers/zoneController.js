// src/controllers/zoneController.js
import Zone from "../models/Zone.js";

// ✅ Create Zone
export const createZone = async (req, res, next) => {
  try {
    const { name } = req.body;
    if (!name) return res.status(400).json({ message: "Zone name is required" });

    const zone = await Zone.create({ name });
    res.status(201).json(zone);
  } catch (err) {
    next(err);
  }
};

// ✅ List Zones
export const listZones = async (req, res, next) => {
  try {
    const zones = await Zone.find().sort({ name: 1 });
    res.json(zones);
  } catch (err) {
    next(err);
  }
};

// ✅ Update Zone
export const updateZone = async (req, res, next) => {
  try {
    const { id } = req.params;
    const zone = await Zone.findByIdAndUpdate(
      id,
      { name: req.body.name },
      { new: true, runValidators: true }
    );

    if (!zone) return res.status(404).json({ message: "Zone not found" });
    res.json(zone);
  } catch (err) {
    next(err);
  }
};

// ✅ Delete Zone
export const deleteZone = async (req, res, next) => {
  try {
    const { id } = req.params;
    const zone = await Zone.findByIdAndDelete(id);

    if (!zone) return res.status(404).json({ message: "Zone not found" });
    res.json({ message: "Zone deleted" });
  } catch (err) {
    next(err);
  }
};
