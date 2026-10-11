
import { useState, useRef, useEffect } from "react";

const MAIN_MENU = [
  { label: "School Boards", value: "boards" },
  { label: "Programming", value: "programming" },
  { label: "Robotics", value: "robotics" },
  { label: "Civil Engineering", value: "civil" },
];

const GRADES = Array.from({ length: 7 }, (_, i) => ({
  label: `Class ${i + 6}`,
  value: `grade-${i + 6}`,
}));

const SCHOOL_BOARDS = [
  { label: "CBSE Board", value: "cbse" },
  { label: "CISCE / ICSE Board", value: "cisce" },
  { label: "NIOS Board", value: "nios" },
  { label: "State Boards", value: "state-boards" },
  { label: "International Boards", value: "international" },
  { label: "Competitive Exams", value: "competitive" },
  { label: "← Main menu", value: "main" },
];

const BOARD_ROUTES = {
  cbse: "/teaching/boards/cbse",
  cisce: "/teaching/boards/cisce",
  nios: "/teaching/boards/nios",
  "state-boards": "/teaching/boards/state-boards",
  international: "/teaching/boards/international",
};

const botMessage = (text, options = []) => ({
  id: `${Date.now()}-${Math.random()}`,
  sender: "bot",
  text,
  options,
});

const userMessage = (text) => ({
  id: `${Date.now()}-${Math.random()}`,
  sender: "user",
  text,
});

export default function WiseneryChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");

  const [messages, setMessages] = useState([
    botMessage(
      "Hi! Welcome to Wisenery 👋\n\nI'm here to help you find the right learning path. What are you interested in?",
      MAIN_MENU
    ),
  ]);

  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isOpen]);

  const addBotMessage = (text, options = []) => {
    setMessages((prev) => [...prev, botMessage(text, options)]);
  };

  const addUserMessage = (text) => {
    setMessages((prev) => [...prev, userMessage(text)]);
  };

  const handleChoice = (choice) => {
    addUserMessage(choice.label);

    // School boards: navigate directly to the selected board page.
    if (BOARD_ROUTES[choice.value]) {
      window.location.href = BOARD_ROUTES[choice.value];
      return;
    }

    switch (choice.value) {
      case "boards":
        addBotMessage(
          "Which school board or exam are you interested in? 📚",
          SCHOOL_BOARDS
        );
        break;

      case "competitive":
        addBotMessage(
          "Which competitive exam are you preparing for?",
          [
            { label: "JEE", value: "jee" },
            { label: "NEET", value: "neet" },
            { label: "Other exams", value: "other-exam" },
            { label: "← Main menu", value: "main" },
          ]
        );
        break;

      case "programming":
        addBotMessage(
          "Explore programming with Wisenery! 💻\n\nLearn coding step by step, build your fundamentals, practise problem-solving, and work towards real projects.",
          [
            { label: "Explore Programming", value: "open-programming" },
            { label: "← Main menu", value: "main" },
          ]
        );
        break;

      case "robotics":
        addBotMessage(
          "Discover robotics! 🤖\n\nExplore robotics concepts, engineering ideas, and hands-on learning opportunities.",
          [
            { label: "Explore Robotics", value: "open-robotics" },
            { label: "← Main menu", value: "main" },
          ]
        );
        break;

      case "civil":
        addBotMessage(
          "Explore Civil Engineering! 🏗️\n\nDiscover construction concepts, engineering fundamentals, and practical learning resources.",
          [
            { label: "Explore Civil Engineering", value: "open-civil" },
            { label: "← Main menu", value: "main" },
          ]
        );
        break;

      case "main":
        addBotMessage(
          "What would you like to explore?",
          MAIN_MENU
        );
        break;

      case "open-programming":
        window.location.href = "/programming";
        break;

      case "open-robotics":
        window.location.href = "/robotics";
        break;

      case "open-civil":
        window.location.href = "/civil-engineering";
        break;

      case "jee":
      case "neet":
      case "other-exam":
        addBotMessage(
          "Thanks for sharing! Our available preparation resources can be explored on the website. Contact our team for guidance about the specific exam you're preparing for.",
          [
            { label: "Contact Wisenery", value: "contact" },
            { label: "← Main menu", value: "main" },
          ]
        );
        break;

      case "contact":
        addBotMessage(
          "You can contact the Wisenery team through the website's contact or enquiry section.",
          [
            { label: "Visit Wisenery", value: "home" },
            { label: "← Main menu", value: "main" },
          ]
        );
        break;

      case "home":
        window.location.href = "/home";
        break;

      default:
        if (choice.value.startsWith("grade-")) {
          const grade = choice.value.replace("grade-", "");

          addBotMessage(
            `You're looking for CBSE Class ${grade} resources. 📚\n\nYou can explore your class learning resources and available subjects on Wisenery.`,
            [
              { label: "Explore learning", value: "open-teaching" },
              { label: "Choose another class", value: "cbse" },
              { label: "← Main menu", value: "main" },
            ]
          );
        } else {
          addBotMessage(
            "Let's help you find the right learning path.",
            MAIN_MENU
          );
        }
    }
  };

  const handleSend = (event) => {
    event.preventDefault();

    const text = input.trim();
    if (!text) return;

    addUserMessage(text);
    setInput("");

    const normalized = text.toLowerCase();

    if (
      ["hi", "hello", "hey", "hi wisenery", "start"].includes(normalized)
    ) {
      addBotMessage(
        "Hello again! What would you like to explore?",
        MAIN_MENU
      );
    } else {
      addBotMessage(
        "I'm currently a menu-based assistant, so I work best with the options below. Please choose a category to continue.",
        MAIN_MENU
      );
    }
  };

  const handleOption = (choice) => {
    if (choice.value === "open-teaching") {
      addUserMessage(choice.label);
      window.location.href = "/teaching";
      return;
    }

    if (choice.value === "cbse") {
      // Return to the list of school boards.
      addUserMessage(choice.label);
      addBotMessage(
        "Choose a school board to continue.",
        SCHOOL_BOARDS
      );
      return;
    }

    handleChoice(choice);
  };

  return (
    <>
      {/* Floating chat launcher */}
{/* Floating chat launcher */}
<button
  type="button"
  onClick={() => setIsOpen((open) => !open)}
  aria-label={isOpen ? "Close Wisenery chat" : "Open Wisenery chat"}
  aria-expanded={isOpen}
  className="fixed bottom-5 right-5 z-[10000] flex h-[48px] w-[48px] items-center justify-center rounded-full bg-[#ff7a29] text-white shadow-lg transition hover:scale-105 hover:bg-[#ed681a] focus:outline-none focus:ring-4 focus:ring-orange-200 sm:h-[58px] sm:w-[58px]"
>
  {isOpen ? (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 sm:h-6 sm:w-6">
      <path
        d="m6 6 12 12M18 6 6 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  ) : (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6 sm:h-7 sm:w-7">
      <path
        d="M20 11.5a7.5 7.5 0 0 1-7.5 7.5H6l-3 2v-6.5A7.5 7.5 0 1 1 20 11.5Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M8 11h.01M12 11h.01M16 11h.01"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  )}
</button>

      {/* Chat window */}
      {isOpen && (
        <section
          aria-label="Wisenery chat assistant"
          className="fixed bottom-24 right-5 z-[10000] flex h-[min(590px,calc(100dvh-130px))] w-[min(390px,calc(100vw-32px))] flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl"
        >
          {/* Header */}
          <header className="flex items-center gap-3 bg-white px-4 py-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-50 font-bold text-[#ff7a29]">
              W
            </div>

            <div className="min-w-0 flex-1">
              <h2 className="font-semibold tracking-tight text-gray-900">
                Wisenery Assistant
              </h2>
              <p className="mt-0.5 flex items-center gap-1.5 text-xs text-gray-500">
                <span className="h-2 w-2 rounded-full bg-green-500" />
                Learning starts here
              </p>
            </div>

            <button
              type="button"
              onClick={() => {
                setMessages([
                  botMessage(
                    "Hi! Welcome to Wisenery 👋\n\nWhat are you interested in?",
                    MAIN_MENU
                  ),
                ]);
                setInput("");
              }}
              className="rounded-lg px-2 py-1.5 text-xs font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-900"
            >
              Restart
            </button>
          </header>

          <div className="h-px bg-gray-100" />

          {/* Messages */}
          <div className="flex-1 space-y-4 overflow-y-auto bg-[#fffdfa] p-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${
                  message.sender === "user"
                    ? "justify-end"
                    : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[88%] ${
                    message.sender === "user"
                      ? "rounded-2xl rounded-br-md bg-[#2463a6] px-3.5 py-2.5 text-white"
                      : "rounded-2xl rounded-bl-md border border-gray-100 bg-white px-3.5 py-3 text-gray-700 shadow-sm"
                  }`}
                >
                  <p className="whitespace-pre-line text-sm leading-6">
                    {message.text}
                  </p>

                  {message.sender === "bot" &&
                    message.options?.length > 0 && (
                      <div className="mt-3 flex flex-col gap-2">
                        {message.options.map((option) => (
                          <button
                            key={option.value}
                            type="button"
                            onClick={() => handleOption(option)}
                            className="w-full rounded-xl border border-orange-200 bg-white px-3 py-2.5 text-left text-sm font-medium text-gray-800 transition hover:border-[#ff7a29] hover:bg-orange-50 focus:outline-none focus:ring-2 focus:ring-orange-200"
                          >
                            <span className="flex items-center justify-between gap-2">
                              {option.label}
                              <span className="text-[#ff7a29]">›</span>
                            </span>
                          </button>
                        ))}
                      </div>
                    )}
                </div>
              </div>
            ))}

            <div ref={bottomRef} />
          </div>

          {/* Text input */}
          <form
            onSubmit={handleSend}
            className="flex items-center gap-2 border-t border-gray-100 bg-white p-3"
          >
            <input
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Type hi or choose an option..."
              aria-label="Type a message"
              className="min-w-0 flex-1 rounded-xl border border-gray-200 bg-gray-50 px-3.5 py-3 text-sm text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-orange-300 focus:bg-white focus:ring-2 focus:ring-orange-100"
            />

            <button
              type="submit"
              disabled={!input.trim()}
              aria-label="Send message"
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#ff7a29] text-white transition hover:bg-[#ed681a] disabled:cursor-not-allowed disabled:opacity-40"
            >
              <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
                <path
                  d="m22 2-7 20-4-9-9-4 20-7ZM22 2 11 13"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </form>
        </section>
      )}
    </>
  );
}
