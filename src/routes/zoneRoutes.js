import express from "express";
import {
  listZones,
  createZone,
  updateZone,
  deleteZone,
} from "../controllers/zoneController.js";

const router = express.Router();

// CRUD for zones
router.get("/", listZones);
router.post("/", createZone);
router.put("/:id", updateZone);
router.delete("/:id", deleteZone);

export default router;
