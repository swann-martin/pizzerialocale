import { drizzle } from 'drizzle-orm/node-postgres';
import { Client } from 'pg';
import { foods } from '../src/db/schema';
import 'dotenv/config';

export default async function getAllFoods() {
  const client = new Client({
    host: process.env.DBHOST,
    port: !!process.env?.DBPORT ? parseInt(process.env?.DBPORT) : 5432,
    user: process.env.DBUSER,
    password: process.env.DBPASSWORD,
    database: process.env.DBNAME
  });

  await client.connect();
  const db = drizzle(client);
  console.log('db ', db);

  const results = await db
    .select({
      name: foods.name,
      ingredients: foods.ingredients,
      price: foods.price,
      type: foods.type,
      id: foods.foods_id,
      veg: foods.veg
    })
    .from(foods);
  console.info('results ', results);
  return results;
}
