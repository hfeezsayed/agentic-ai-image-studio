"use client";

import { useState } from "react";

import PromptForm from "../components/PromptForm";
import ImageCard from "../components/ImageCard";
import AgentStatus from "../components/AgentStatus";

import { generateImage } from "../services/api";
import { ImageResponse } from "../types/image";

export default function Home() {
  const [loading, setLoading] = useState(false);

  const [imageResult, setImageResult] = useState<ImageResponse | null>(null);

  const handleGenerate = async (prompt: string) => {
    try {
      setLoading(true);

      const result = await generateImage(prompt);

      setImageResult(result);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        <h1 className="text-4xl font-bold">Agentic AI Image Studio</h1>

        <div className="grid md:grid-cols-2 gap-6">
          <PromptForm onGenerate={handleGenerate} loading={loading} />

          <AgentStatus />
        </div>

        {imageResult && <ImageCard data={imageResult} />}
      </div>
      <footer className="text-center mt-30 mb-2">
        <p className="italic text-gray-500 text-sm">Developed By Hafeez Ali</p>
      </footer>
    </main>
  );
}
