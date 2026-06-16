import { ImageResponse } from "../types/image";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function generateImage(
  prompt: string
): Promise<ImageResponse> {
  const response = await fetch(
    `${API_URL}/generate-image`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt,
      }),
    }
  );

  return response.json();
}