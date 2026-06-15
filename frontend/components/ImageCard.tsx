import { useState } from "react";
import { ImageResponse } from "../types/image";

interface ImageCardProps {
  data: ImageResponse;
}

export default function ImageCard({ data }: ImageCardProps) {
  const [copied, setCopied] = useState(false);

  const downloadImage = () => {
    const link = document.createElement("a");

    link.href = `data:image/png;base64,${data.image_data}`;

    link.download = "generated-image.png";

    link.click();
  };

  const copyPrompt = async () => {
    await navigator.clipboard.writeText(data.final_prompt);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6 space-y-4">
      <div>
        <h3 className="font-bold">Original Prompt</h3>

        <p>{data.original_prompt}</p>
      </div>

      <div>
        <h3 className="font-bold">Enhanced Prompt</h3>

        <p>{data.enhanced_prompt}</p>
      </div>

      <div>
        <h3 className="font-bold">Selected Style</h3>
        <p>{data.selected_style}</p>
      </div>

      <div>
        <h3 className="font-bold">Final Prompt</h3>
        <p>{data.final_prompt}</p>
      </div>

      <div>
        <button
          onClick={copyPrompt}
          className="mt-2 border px-4 py-2 rounded-lg flex items-center gap-2"
        >
          {copied ? "✅ Prompt Copied" : "📋 Copy Prompt"}
        </button>
      </div>

      <div>
        <h3 className="font-bold mb-3">Generated Image</h3>

        <img
          src={`data:image/png;base64,${data.image_data}`}
          alt="Generated"
          className="w-full rounded-lg"
        />

        <div>
          <button
            onClick={downloadImage}
            className="mt-4 bg-black text-white px-4 py-2 rounded-lg"
          >
            Download Image
          </button>
        </div>
      </div>
    </div>
  );
}
