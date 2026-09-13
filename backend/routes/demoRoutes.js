const express = require("express");
const router = express.Router();

const DemoRequest = require("../models/DemoRequest");

// ========================================
// CREATE FREE DEMO REQUEST
// POST /api/demo-requests
// ========================================

router.post("/", async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      grade,
      message,
    } = req.body;

    // Required field validation
    if (!name || !email || !phone || !grade) {
      return res.status(400).json({
        success: false,
        message: "Please fill in all required fields.",
      });
    }

    // Create database record
    const demoRequest = await DemoRequest.create({
      name,
      email,
      phone,
      grade,
      message: message || "",
    });

    return res.status(201).json({
      success: true,
      message: "Free demo request submitted successfully.",
      data: demoRequest,
    });
  } catch (error) {
    console.error("Demo request error:", error);

    return res.status(500).json({
      success: false,
      message: "Unable to submit demo request. Please try again.",
    });
  }
});

module.exports = router;