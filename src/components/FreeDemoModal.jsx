import { useEffect, useState } from "react";
import { X, ArrowUpRight } from "lucide-react";

function FreeDemoModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    grade: "",
    message: "",
  });

  // Prevent background scrolling while modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close with Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleEscape);
    }

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Free Demo Registration:", formData);

    // Add your API / backend submission here

    alert("Your free demo request has been submitted!");

    setFormData({
      name: "",
      email: "",
      phone: "",
      grade: "",
      message: "",
    });

    onClose();
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-6"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      {/* BACKDROP */}
      <div className="absolute inset-0 bg-black/45 backdrop-blur-[5px]" />

      {/* MODAL */}
      <div
        className="relative z-10 w-full max-w-[560px] overflow-hidden rounded-[28px] bg-[#fffdf9] shadow-[0_30px_100px_rgba(0,0,0,0.25)]"
        style={{
          animation: "freeDemoModalIn 0.35s ease-out forwards",
        }}
      >
        {/* ORANGE TOP ACCENT */}
        <div className="h-1.5 w-full bg-[#FF7A29]" />

        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-black/[0.04] text-gray-600 transition-all duration-200 hover:bg-black/[0.08] hover:text-black"
        >
          <X size={18} />
        </button>

        <div className="px-6 pb-7 pt-7 sm:px-9 sm:pb-9 sm:pt-8">
          {/* HEADER */}
          <div className="mb-7 pr-10">
            <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[#FF7A29]">
              WISENERY
            </p>

            <h2 className="text-[27px] font-bold leading-tight tracking-[-0.03em] text-[#151515] sm:text-[32px]">
              Book your free demo
            </h2>

            <p className="mt-2 max-w-[440px] text-sm leading-6 text-gray-500">
              Tell us a little about yourself and we'll help you get started
              with Wisenery.
            </p>
          </div>

          {/* FORM */}
          <form onSubmit={handleSubmit} className="space-y-4">

            {/* NAME */}
            <div>
              <label className="mb-1.5 block text-xs font-semibold text-[#222]">
                Full Name
              </label>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
                className="h-12 w-full rounded-xl border border-black/10 bg-white px-4 text-sm text-[#151515] outline-none transition-all placeholder:text-gray-400 focus:border-[#FF7A29] focus:ring-2 focus:ring-[#FF7A29]/10"
              />
            </div>

            {/* EMAIL + PHONE */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

              <div>
                <label className="mb-1.5 block text-xs font-semibold text-[#222]">
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  required
                  className="h-12 w-full rounded-xl border border-black/10 bg-white px-4 text-sm text-[#151515] outline-none transition-all placeholder:text-gray-400 focus:border-[#FF7A29] focus:ring-2 focus:ring-[#FF7A29]/10"
                />
              </div>

              <div>
                <label className="mb-1.5 block text-xs font-semibold text-[#222]">
                  Phone Number
                </label>

                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 98765 43210"
                  required
                  className="h-12 w-full rounded-xl border border-black/10 bg-white px-4 text-sm text-[#151515] outline-none transition-all placeholder:text-gray-400 focus:border-[#FF7A29] focus:ring-2 focus:ring-[#FF7A29]/10"
                />
              </div>

            </div>

            {/* GRADE */}
            <div>
              <label className="mb-1.5 block text-xs font-semibold text-[#222]">
                Student's Class / Grade
              </label>

              <select
                name="grade"
                value={formData.grade}
                onChange={handleChange}
                required
                className="h-12 w-full rounded-xl border border-black/10 bg-white px-4 text-sm text-[#151515] outline-none transition-all focus:border-[#FF7A29] focus:ring-2 focus:ring-[#FF7A29]/10"
              >
                <option value="">Select class / grade</option>
                <option value="Grade 1">Grade 1</option>
                <option value="Grade 2">Grade 2</option>
                <option value="Grade 3">Grade 3</option>
                <option value="Grade 4">Grade 4</option>
                <option value="Grade 5">Grade 5</option>
                <option value="Grade 6">Grade 6</option>
                <option value="Grade 7">Grade 7</option>
                <option value="Grade 8">Grade 8</option>
                <option value="Grade 9">Grade 9</option>
                <option value="Grade 10">Grade 10</option>
                <option value="Grade 11">Grade 11</option>
                <option value="Grade 12">Grade 12</option>
              </select>
            </div>

            {/* MESSAGE */}
            <div>
              <label className="mb-1.5 block text-xs font-semibold text-[#222]">
                Anything you'd like to ask?
                <span className="ml-1 font-normal text-gray-400">
                  (Optional)
                </span>
              </label>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us what you're looking for..."
                rows={3}
                className="w-full resize-none rounded-xl border border-black/10 bg-white px-4 py-3 text-sm text-[#151515] outline-none transition-all placeholder:text-gray-400 focus:border-[#FF7A29] focus:ring-2 focus:ring-[#FF7A29]/10"
              />
            </div>

            {/* SUBMIT */}
            <button
              type="submit"
              className="group mt-2 flex h-13 w-full items-center justify-center gap-2 rounded-xl bg-[#FF7A29] px-5 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#f26b18] hover:shadow-[0_10px_30px_rgba(255,122,41,0.25)]"
            >
              <span>REQUEST FREE DEMO</span>

              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </button>

            <p className="text-center text-[11px] leading-5 text-gray-400">
              We'll get in touch with you shortly.
            </p>

          </form>
        </div>
      </div>

      {/* MODAL ANIMATION */}
      <style>{`
        @keyframes freeDemoModalIn {
          0% {
            opacity: 0;
            transform: translateY(20px) scale(0.96);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </div>
  );
}

export default FreeDemoModal;