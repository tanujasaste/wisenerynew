const mongoose = require("mongoose");

const whatsappConversationSchema = new mongoose.Schema(
  {
    waId: { type: String, required: true, unique: true, index: true },
    name: { type: String, default: "" },
    step: { type: String, default: "category" },
    category: { type: String, default: "" },
    grade: { type: String, default: "" },
    board: { type: String, default: "" },
    course: { type: String, default: "" },
    wantsDemo: { type: String, default: "" },
    lastMessageAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

module.exports = mongoose.model("WhatsAppConversation", whatsappConversationSchema);
