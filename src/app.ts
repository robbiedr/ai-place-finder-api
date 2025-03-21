import { Elysia } from "elysia";
import { swagger } from "@elysiajs/swagger";
import { recommendationRoutes } from "./routes/recommendation.route";

export const app = new Elysia()
  .use(swagger())
  .use(recommendationRoutes)
  .get("/", () => "Welcome to the Elysia API! 🚀");
