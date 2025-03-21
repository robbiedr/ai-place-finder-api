import OpenAI from "openai";

const openai = new OpenAI({ apiKey: Bun.env.OPENAI_API_KEY });

export async function getRecommendations(location: string, category: string) {
  const prompt = `Suggest 3 best ${category} places in ${location} with:
  - Name
  - Address
  - Rating (1-5)
  - Recommended orders (if applicable)
  - Why people go there
  - Best time to visit`;

  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo", // Use "gpt-3.5-turbo" for cheaper requests
    messages: [{ role: "user", content: prompt }],
  });

  return JSON.parse(response.choices[0].message?.content || "[]");
}
