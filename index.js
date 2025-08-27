import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./src/config/db.js";
import equipmentRoutes from "./src/routes/equipmentRoutes.js";
import zoneRoutes from "./src/routes/zoneRoutes.js";

dotenv.config();
const app = express();

// Connect DB
connectDB();

// Middlewares
app.use(cors());
app.use(express.json());




// Routes
app.use("/api/equipments", equipmentRoutes);
app.use("/api/zones", zoneRoutes);

// Default
app.get("/", (req, res) => {
  res.send("Gym Equipment Management API is running...");
});

// Error handler middleware (optional but good)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Something went wrong", error: err.message });
});

// Start server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
