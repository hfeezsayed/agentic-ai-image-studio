"use client";

import { useState } from "react";

interface PromptFormProps {
  onGenerate: (prompt: string) => void;
  loading: boolean;
}

export default function PromptForm({ onGenerate, loading }: PromptFormProps) {
  const [prompt, setPrompt] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!prompt.trim()) return;

    onGenerate(prompt);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-xl shadow-md p-6 space-y-4"
    >
      <h2 className="text-2xl font-bold">Create AI-Powered Images</h2>

      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Describe the image you want..."
        className="w-full border rounded-lg p-4 h-32"
      />

      <button
        type="submit"
        disabled={loading}
        className="bg-black text-white px-6 py-3 rounded-lg"
      >
        {loading ? "Generating Image..." : "Generate Image"}
      </button>
    </form>
  );
}
