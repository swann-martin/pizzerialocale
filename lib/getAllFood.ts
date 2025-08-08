import { sql } from "@vercel/postgres";
import { drizzle } from "drizzle-orm/vercel-postgres";
import { drinks, foods } from "../src/db/schema";
import "dotenv/config";
import { asc } from "drizzle-orm";

export default async function getAllFoods() {
  const db = drizzle(sql);

  const dbfood = await db.select().from(foods).orderBy(asc(foods.name));
  const dbdrinks = await db
    .select()
    .from(drinks)
    .orderBy(asc(drinks.typeDrink));

  return {
    foods: dbfood,
    drinks: dbdrinks,
  };
}
