import "dotenv/config";
import { z } from "zod/v4";

const envSchema = z.object({
  ENVIRONMENT: z.enum(["development", "production"]),
});

const env = envSchema.parse(process.env);
export default env;
