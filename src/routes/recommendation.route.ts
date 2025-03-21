import { Elysia } from "elysia";
import { Type } from "@sinclair/typebox";
import { recommendationController } from "../controllers/recommendation.controller";
import { RecommendationSchema } from "../schemas/recommendation.schema";

export const recommendationRoutes = new Elysia().post(
  "/recommendations",
  recommendationController,
  {
    body: RecommendationSchema,
  }
);
