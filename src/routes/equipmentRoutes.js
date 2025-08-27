// src/routes/equipmentRoutes.js
import express from "express";
import {
  listEquipment,      // GET all equipments
  getEquipment,       // GET one equipment
  createEquipment,    // POST new equipment
  updateEquipment,    // PUT update equipment
  removeEquipment,
  listDueMaintenance
  // DELETE (soft delete) equipment
} from "../controllers/equipmentController.js";

const router = express.Router();

// GET all equipments with filter/search
router.get("/", listEquipment);

// GET one equipment
router.get("/:id", getEquipment);

// POST new equipment
router.post("/", createEquipment);

// PUT update equipment
router.put("/:id", updateEquipment);

// DELETE equipment (soft delete)
router.delete("/:id", removeEquipment);

router.get("/due-maintenance",listDueMaintenance);

export default router;
