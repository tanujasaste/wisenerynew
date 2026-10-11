const express = require("express");
const router = express.Router();

const WhatsAppConversation = require("../models/WhatsAppConversation");
const WhatsAppLead = require("../models/WhatsAppLead");
const { sendText, sendButtons, sendList } = require("../services/whatsappService");

const VERIFY_TOKEN = process.env.WHATSAPP_VERIFY_TOKEN;

// Meta calls this GET route once when you subscribe the webhook.
router.get("/webhook", (req, res) => {
  const mode = req.query["hub.mode"];
  const token = req.query["hub.verify_token"];
  const challenge = req.query["hub.challenge"];

  if (mode === "subscribe" && VERIFY_TOKEN && token === VERIFY_TOKEN) {
    return res.status(200).send(challenge);
  }
  return res.sendStatus(403);
});

function getIncomingMessage(message) {
  if (!message) return null;
  if (message.type === "text") {
    return { id: message.id, text: (message.text?.body || "").trim(), type: "text" };
  }
  if (message.type === "interactive") {
    const interactive = message.interactive || {};
    const reply = interactive.button_reply || interactive.list_reply;
    return reply ? { id: message.id, text: reply.id || reply.title, title: reply.title, type: "interactive" } : null;
  }
  return { id: message.id, text: "", type: message.type };
}

async function showCategoryMenu(to) {
  return sendList(
    to,
    "👋 Hello! Welcome to Wisenery.\n\nI'm Wisenery's learning assistant. What are you interested in?",
    "Choose an option",
    [{
      title: "Learning options",
      rows: [
        { id: "category_school", title: "School education", description: "Classes and board coaching" },
        { id: "category_coding", title: "Coding", description: "Programming courses" },
        { id: "category_robotics", title: "Robotics", description: "Robotics and practical learning" },
        { id: "category_engineering", title: "Engineering", description: "Engineering and technical courses" },
        { id: "category_autocad", title: "AutoCAD", description: "Design and drafting" },
        { id: "category_teaching", title: "Other learning", description: "Ask about other classes" },
      ],
    }]
  );
}

async function showGradeMenu(to) {
  return sendList(to, "Which class are you looking for?", "Select class", [{
    title: "School classes",
    rows: [
      { id: "grade_1_5", title: "Classes 1–5" },
      { id: "grade_6_8", title: "Classes 6–8" },
      { id: "grade_9_10", title: "Classes 9–10" },
      { id: "grade_11_12", title: "Classes 11–12" },
    ],
  }]);
}

async function showBoardMenu(to) {
  return sendList(to, "Which education board do you need?", "Select board", [{
    title: "Boards",
    rows: [
      { id: "board_cbse", title: "CBSE" },
      { id: "board_state", title: "State Board" },
      { id: "board_icse", title: "ICSE" },
      { id: "board_nios", title: "NIOS" },
      { id: "board_other", title: "Other / not sure" },
    ],
  }]);
}

async function showCourseMenu(to) {
  return sendList(to, "Which course are you interested in?", "Select course", [{
    title: "Courses",
    rows: [
      { id: "course_coding", title: "Coding / Programming" },
      { id: "course_robotics", title: "Robotics" },
      { id: "course_autocad", title: "AutoCAD" },
      { id: "course_civil", title: "Civil Engineering" },
      { id: "course_other", title: "Other course" },
    ],
  }]);
}

async function askDemo(to) {
  return sendButtons(to, "Would you like the Wisenery team to contact you about a free demo?", [
    { id: "demo_yes", title: "Yes, book a demo" },
    { id: "demo_details", title: "Course details first" },
    { id: "restart", title: "Start again" },
  ]);
}

function valueFromId(id, prefix, map) {
  if (!id.startsWith(prefix)) return null;
  return map[id] || id.slice(prefix.length).replace(/_/g, " ");
}

async function saveLead(conversation) {
  await WhatsAppLead.create({
    waId: conversation.waId,
    name: conversation.name,
    category: conversation.category,
    grade: conversation.grade,
    board: conversation.board,
    course: conversation.course,
    wantsDemo: conversation.wantsDemo,
  });
}

async function processMessage(from, profileName, incoming) {
  if (!incoming || !incoming.text) {
    await sendText(from, "Please choose an option from the menu or send a text message. Type MENU to see the options again.");
    return;
  }

  const raw = incoming.text;
  const text = raw.toLowerCase();
  if (["menu", "hi", "hello", "hey", "start"].includes(text) || raw === "restart") {
    const conversation = await WhatsAppConversation.findOneAndUpdate(
      { waId: from },
      { $set: { name: profileName || "", step: "category", category: "", grade: "", board: "", course: "", wantsDemo: "", lastMessageAt: new Date() } },
      { upsert: true, new: true, setDefaultsOnInsert: true }
    );
    return showCategoryMenu(from);
  }

  const conversation = await WhatsAppConversation.findOneAndUpdate(
    { waId: from },
    { $set: { lastMessageAt: new Date(), ...(profileName ? { name: profileName } : {}) } },
    { upsert: true, new: true, setDefaultsOnInsert: true }
  );

  if (raw.startsWith("category_")) {
    const categories = {
      category_school: "School education",
      category_coding: "Coding",
      category_robotics: "Robotics",
      category_engineering: "Engineering",
      category_autocad: "AutoCAD",
      category_teaching: "Other learning",
    };
    conversation.category = categories[raw] || raw.replace("category_", "");
    if (raw === "category_school") {
      conversation.step = "grade";
      await conversation.save();
      return showGradeMenu(from);
    }
    conversation.step = "course";
    await conversation.save();
    return showCourseMenu(from);
  }

  if (raw.startsWith("grade_")) {
    const grades = { grade_1_5: "Classes 1–5", grade_6_8: "Classes 6–8", grade_9_10: "Classes 9–10", grade_11_12: "Classes 11–12" };
    conversation.grade = grades[raw] || raw;
    conversation.step = "board";
    await conversation.save();
    return showBoardMenu(from);
  }

  if (raw.startsWith("board_")) {
    const boards = { board_cbse: "CBSE", board_state: "State Board", board_icse: "ICSE", board_nios: "NIOS", board_other: "Other / not sure" };
    conversation.board = boards[raw] || raw;
    conversation.step = "demo";
    await conversation.save();
    return askDemo(from);
  }

  if (raw.startsWith("course_")) {
    const courses = { course_coding: "Coding / Programming", course_robotics: "Robotics", course_autocad: "AutoCAD", course_civil: "Civil Engineering", course_other: "Other course" };
    conversation.course = courses[raw] || raw;
    conversation.step = "demo";
    await conversation.save();
    return askDemo(from);
  }

  if (raw === "demo_yes" || raw === "demo_details") {
    conversation.wantsDemo = raw === "demo_yes" ? "Yes" : "Course details first";
    await saveLead(conversation);
    conversation.step = "complete";
    await conversation.save();
    if (raw === "demo_yes") {
      return sendText(from, "Wonderful! 🎉 We've saved your enquiry. The Wisenery team will follow up with you. If you'd like, reply with your name so the team knows whom to ask for. You can also type MENU to start again.");
    }
    return sendText(from, "Thanks! We've saved your course enquiry. The Wisenery team can share more details with you. Reply with your name if you'd like to add it, or type MENU to explore another course.");
  }

  if (conversation.step === "complete" && raw.length <= 100) {
    conversation.name = raw;
    await conversation.save();
    await WhatsAppLead.findOneAndUpdate(
      { waId: from, status: "new" },
      { $set: { name: raw } },
      { sort: { createdAt: -1 } }
    );
    return sendText(from, `Thank you, ${raw}! Your details have been added to your Wisenery enquiry. Type MENU any time to explore other courses.`);
  }

  await sendText(from, "Sorry, I didn't understand that. Please choose an option from the menu, or type MENU to start again.");
}

// Meta sends POST events to this webhook. Return 200 quickly to acknowledge the event.
router.post("/webhook", (req, res) => {
  res.sendStatus(200);

  (async () => {
    const body = req.body;
    if (body?.object !== "whatsapp_business_account") return;

    for (const entry of body.entry || []) {
      for (const change of entry.changes || []) {
        const value = change.value || {};
        const contacts = value.contacts || [];
        for (const message of value.messages || []) {
          const incoming = getIncomingMessage(message);
          const contact = contacts.find((item) => item.wa_id === message.from);
          try {
            await processMessage(message.from, contact?.profile?.name || "", incoming);
          } catch (error) {
            console.error("WhatsApp webhook processing failed:", error.message);
            try {
              await sendText(message.from, "Sorry, we're having a temporary issue. Please try again in a moment or contact the Wisenery team directly.");
            } catch (sendError) {
              console.error("Unable to send WhatsApp error reply:", sendError.message);
            }
          }
        }
      }
    }
  })().catch((error) => console.error("WhatsApp webhook error:", error.message));
});

module.exports = router;
