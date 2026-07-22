import { useState } from "react";

export const useAnalysis = () => {
  const [analysis, setAnalysis] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const analyzeProject = async (idea) => {
    setLoading(true);
    setError("");
    setAnalysis("");

    const apiKey = "";
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

  return { analysis, loading, error, analyzeProject };
};
