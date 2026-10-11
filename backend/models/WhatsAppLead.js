const mongoose = require("mongoose");

const whatsappLeadSchema = new mongoose.Schema(
  {
    waId: { type: String, required: true, index: true },
    name: { type: String, default: "" },
    category: { type: String, default: "" },
    grade: { type: String, default: "" },
    board: { type: String, default: "" },
    course: { type: String, default: "" },
    wantsDemo: { type: String, default: "" },
    source: { type: String, default: "WhatsApp" },
    status: {
      type: String,
      enum: ["new", "contacted", "completed"],
      default: "new",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("WhatsAppLead", whatsappLeadSchema);
