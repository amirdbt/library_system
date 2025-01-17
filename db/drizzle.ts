import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import config from "@/lib/config";

const databaseUrl = config.env.databaseUrl || ""; // Provide a default value if undefined
const sql = neon(databaseUrl);
export const db = drizzle({ client: sql });
