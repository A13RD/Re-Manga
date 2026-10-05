import { defineConfig } from "@prisma/config";
import dotenv from "dotenv";
dotenv.config();

export default defineConfig({
  schema: "src/infrastructure/prisma/schema.prisma",
  datasource: {
    url: process.env.DATABASE_URL,
  },
  migrations: {
    path: "src/infrastructure/prisma/migrations",
  },
});
