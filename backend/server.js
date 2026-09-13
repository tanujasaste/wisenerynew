const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const demoRoutes = require("./routes/demoRoutes");

const app = express();

const PORT = process.env.PORT || 5000;

// ========================================
// MIDDLEWARE
// ========================================

app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:5173",
  })
);

app.use(express.json());

// ========================================
// HEALTH CHECK
// ========================================

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Wisenery backend is running!",
  });
});

// ========================================
// ROUTES
// ========================================

app.use("/api/demo-requests", demoRoutes);

// ========================================
// MONGODB + SERVER
// ========================================

const startServer = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB connected successfully");

    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("MongoDB connection failed:");
    console.error(error.message);

    process.exit(1);
  }
};

startServer();