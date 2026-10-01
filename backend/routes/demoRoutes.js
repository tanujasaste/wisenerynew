const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");

const DemoRequest = require("../models/DemoRequest");

// ========================================
// CREATE FREE DEMO REQUEST
// POST /api/demo-requests
// ========================================

router.post(
  "/",
  [
    body("name")
      .trim()
      .notEmpty()
      .withMessage("Name is required.")
      .isLength({ max: 100 })
      .withMessage("Name is too long."),

    body("email")
      .trim()
      .notEmpty()
      .withMessage("Email is required.")
      .isEmail()
      .withMessage("Please enter a valid email address.")
      .normalizeEmail(),

    body("phone")
      .trim()
      .notEmpty()
      .withMessage("Phone number is required.")
      .matches(/^[0-9]{10}$/)
      .withMessage("Please enter a valid 10-digit phone number."),

    body("grade")
      .trim()
      .notEmpty()
      .withMessage("Grade is required.")
      .isLength({ max: 100 })
      .withMessage("Grade is too long."),

    body("message")
      .optional()
      .trim()
      .isLength({ max: 1000 })
      .withMessage("Message is too long."),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({
          success: false,
          message: errors.array()[0].msg,
        });
      }

      const {
        name,
        email,
        phone,
        grade,
        message,
      } = req.body;

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
  }
);

module.exports = router;