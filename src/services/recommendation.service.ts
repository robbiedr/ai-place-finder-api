import { openai } from "../configs/openai.config";

export async function getRecommendations(location: string, category: string) {
  const prompt = `
    You are an AI that provides structured recommendations in JSON format.
    Recommend the top 3 places for ${category} in ${location}. 
    Respond ONLY in valid JSON, with the following structure:

    {
      "success": true,
      "meta": {
        "location": "<location>",
        "category": "<category>",
        "totalResults": 3
      },
      "data": [
        {
          "name": "<place_name>",
          "recommendedOrders": ["<order_1>", "<order_2>"],
          "reasonsToVisit": ["<reason_1>", "<reason_2>"],
          "address": "<address>",
          "contact": "<contact>"
        }
      ]
    }

    Do not include any explanations or extra text before or after the JSON.
  `;

  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo", // Use "gpt-3.5-turbo" for cheaper requests
    messages: [{ role: "user", content: prompt }],
  });

  // Ensure we extract a valid JSON response
  const jsonResponse = response?.choices[0]?.message?.content.trim();

  try {
    return JSON.parse(jsonResponse);
  } catch (error) {
    console.error("Invalid JSON from OpenAI:", jsonResponse);
    return { success: false, error: "Failed to parse OpenAI response" };
  }
}
