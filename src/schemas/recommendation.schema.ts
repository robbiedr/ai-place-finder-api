import { Type } from "@sinclair/typebox";

export const RecommendationSchema = Type.Object({
  location: Type.String(),
  category: Type.String(),
});
