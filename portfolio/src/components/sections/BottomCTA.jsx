import React, { useState } from "react";
import { Sparkles, Loader2, Mail, MapPin, Briefcase } from "lucide-react";
import Button from "../common/Button";
import ContactModal from "./ContactModal";

const BottomCTA = () => {
  const [idea, setIdea] = useState("");
  const [analysis, setAnalysis] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const handleAnalyze = async () => {
    if (!idea.trim()) return;
    setLoading(true);
    setError("");
    setAnalysis("");

    // Replace with your Gemini API key
    const apiKey = "YOUR_GEMINI_API_KEY";
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`;
    const systemPrompt =
      "You are an expert technical architect and lead developer interacting with a potential freelance client. The client will describe their app idea. Provide a concise, professional, and encouraging project scoping analysis. Strictly use markdown. Include exactly 3 sections: 1. **Core Features** (3-4 bullet points), 2. **Recommended Tech Stack** (brief list), 3. **Estimated Timeline** (High-level phases). Keep it short and actionable.";

    const payload = {
      contents: [{ parts: [{ text: `Client's project idea: ${idea}` }] }],
      systemInstruction: { parts: [{ text: systemPrompt }] },
    };

    const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
    let retries = 5;
    let delay = 1000;
    let success = false;

    while (retries > 0 && !success) {
      try {
        const res = await fetch(url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        if (!res.ok) throw new Error("API Error");
        const data = await res.json();
        const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
        if (text) {
          setAnalysis(text);
          success = true;
        } else {
          throw new Error("Invalid response format");
        }
      } catch (err) {
        retries--;
        if (retries === 0) {
          setError(
            "Sorry, I couldn't analyze the project right now. Please try again later.",
          );
        } else {
          await sleep(delay);
          delay *= 2;
        }
      }
    }
    setLoading(false);
  };

  const formatAnalysis = (text) => {
    return text.split("\n").map((line, i) => {
      const cleanLine = line.trim();
      if (!cleanLine) return null;

      if (cleanLine.match(/^(#+ |\*\*)/)) {
        return (
          <strong
            key={i}
            className="block mt-4 mb-2 text-slate-800 dark:text-white text-sm">
            {cleanLine.replace(/#/g, "").replace(/\*\*/g, "").trim()}
          </strong>
        );
      } else if (cleanLine.startsWith("* ") || cleanLine.startsWith("- ")) {
        return (
          <li
            key={i}
            className="ml-4 text-slate-600 dark:text-slate-300 mb-1 text-xs list-disc">
            {cleanLine.substring(2).replace(/\*\*/g, "")}
          </li>
        );
      } else {
        return (
          <p
            key={i}
            className="text-slate-600 dark:text-slate-300 mb-2 text-xs">
            {cleanLine.replace(/\*\*/g, "")}
          </p>
        );
      }
    });
  };

  const handleSendScope = () => {
    setIsContactModalOpen(true);
  };

  return (
    <>
      <section
        id="contact"
        className="py-12 px-6 md:px-12 bg-white dark:bg-slate-900 transition-colors duration-200">
        <div className="max-w-7xl mx-auto bg-gradient-to-r from-violet-100 via-pink-50 to-blue-50 dark:from-violet-950/30 dark:via-pink-950/30 dark:to-blue-950/30 rounded-3xl p-8 md:p-12 border border-white dark:border-slate-700 shadow-xl relative overflow-hidden">
          <div className="absolute right-0 bottom-0 opacity-20 transform translate-x-1/4 translate-y-1/4 w-96 h-96 bg-gradient-to-tr from-violet-500 to-pink-500 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4 tracking-tight">
                Let's Build Something <br className="hidden md:block" /> Amazing
                Together
              </h2>
              <p className="text-slate-600 dark:text-slate-300 mb-8 max-w-md">
                Have a project in mind? Let's discuss and turn your ideas into
                reality. You can reach out directly, or use my AI assistant to
                get an instant technical scope!
              </p>

              <div className="flex flex-col flex-wrap gap-4 mb-8 text-sm">
                <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300 font-medium">
                  <div className="w-10 h-10 rounded-full bg-white dark:bg-slate-800 flex items-center justify-center shadow-sm text-violet-600 dark:text-violet-400">
                    <Mail size={18} />
                  </div>
                  email.ester@gmail.com
                </div>
                <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300 font-medium">
                  <div className="w-10 h-10 rounded-full bg-white dark:bg-slate-800 flex items-center justify-center shadow-sm text-violet-600 dark:text-violet-400">
                    <MapPin size={18} />
                  </div>
                  Pune, Maharashtra, India
                </div>
                <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300 font-medium">
                  <div className="w-10 h-10 rounded-full bg-white dark:bg-slate-800 flex items-center justify-center shadow-sm text-violet-600 dark:text-violet-400">
                    <Briefcase size={18} />
                  </div>
                  Available for Freelance / Full-time
                </div>
              </div>
            </div>

            {/* AI Project Scoper Card */}
            <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-white dark:border-slate-700">
              <h3 className="font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                <Sparkles size={18} className="text-violet-600" /> AI Project
                Scoper
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">
                Describe your app idea and get an instant technical breakdown,
                recommended stack, and timeline estimate.
              </p>

              {!analysis && !loading && (
                <>
                  <textarea
                    className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-3 text-sm focus:ring-2 focus:ring-violet-500 focus:outline-none min-h-[100px] mb-4 text-slate-700 dark:text-slate-300 placeholder:text-slate-400 dark:placeholder:text-slate-500"
                    placeholder="E.g., A marketplace platform for local bakers to sell custom cakes with a delivery tracking feature..."
                    value={idea}
                    onChange={(e) => setIdea(e.target.value)}
                  />
                  <Button onClick={handleAnalyze} className="w-full py-3">
                    ✨ Analyze My Project Idea
                  </Button>
                </>
              )}

              {loading && (
                <div className="flex flex-col items-center justify-center py-10 text-violet-600 dark:text-violet-400 gap-3">
                  <Loader2 size={28} className="animate-spin" />
                  <span className="text-sm font-medium">
                    Architecting your solution...
                  </span>
                </div>
              )}

              {error && (
                <div className="text-sm text-red-500 p-4 bg-red-50 dark:bg-red-900/20 rounded-xl border border-red-100 dark:border-red-800">
                  {error}
                </div>
              )}

              {analysis && (
                <div className="animate-in fade-in zoom-in duration-300">
                  <div className="bg-slate-50 dark:bg-slate-900 p-5 rounded-xl max-h-[300px] overflow-y-auto shadow-inner border border-slate-100 dark:border-slate-700">
                    {formatAnalysis(analysis)}
                  </div>
                  <div className="mt-4 flex gap-3">
                    <Button
                      onClick={() => {
                        setAnalysis("");
                        setIdea("");
                      }}
                      variant="secondary"
                      className="flex-1 py-2 text-xs">
                      Scope Another Idea
                    </Button>
                    <Button
                      onClick={handleSendScope}
                      className="flex-1 py-2 text-xs">
                      Send Me This Scope
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </>
  );
};

export default BottomCTA;
