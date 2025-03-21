import { getRecommendations } from "../services/recommendation.service";

export async function recommendationController({
  body,
}: {
  body: { location: string; category: string };
}) {
  try {
    if (!body?.location || !body?.category) {
      return {
        success: false,
        error: "Missing required fields: 'location' and 'category'.",
      };
    }

    const recommendations = await getRecommendations(
      body.location,
      body.category
    );

    return {
      success: true,
      data: recommendations,
    };
  } catch (error) {
    console.error("Error in recommendationController:", error);
    return {
      success: false,
      error: "Internal server error. Please try again later.",
    };
  }
}
