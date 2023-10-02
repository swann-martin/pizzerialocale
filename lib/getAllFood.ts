import { sql } from '@vercel/postgres';
import { drizzle } from 'drizzle-orm/vercel-postgres';
import { drizzle as dz } from 'drizzle-orm/node-postgres';
import { drinks, foods } from '../src/db/schema';
import 'dotenv/config';
import { asc, desc, eq } from 'drizzle-orm';
import { Client } from 'pg';

export default async function getAllFoods() {
  const env = process.env?.NODE_ENV;
  let db = drizzle(sql);
  if (env === 'development') {
    const client = new Client({
      host: process.env.DBHOST,
      port: !!process.env?.DBPORT ? parseInt(process.env?.DBPORT) : 5432,
      user: process.env.DBUSER,
      password: process.env.DBPASSWORD,
      database: process.env.DBNAME
    });

    await client.connect();

    db = dz(client);
  }

  const dbfood = await db.select().from(foods).orderBy(asc(foods.name));
  const dbdrinks = await db
    .select()
    .from(drinks)
    .orderBy(asc(drinks.typeDrink));

  return {
    foods: dbfood,
    drinks: dbdrinks
  };
}
