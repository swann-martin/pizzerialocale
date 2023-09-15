import { Pool } from 'pg';
import 'dotenv/config';
import { drizzle } from 'drizzle-orm/node-postgres';
import { migrate } from 'drizzle-orm/node-postgres/migrator';

const pool = new Pool({
  host: process.env.DBHOST,
  port: !!process.env?.DBPORT ? parseInt(process.env?.DBPORT) : 5432,
  user: process.env.DBUSER,
  password: process.env.DBPASSWORD,
  database: process.env.DBNAME
});

const db = drizzle(pool);

async function main() {
  console.info('Migration started...');
  await migrate(db, { migrationsFolder: 'drizzle' });
  console.info('Migration ended...');
  process.exit(0);
}

main().catch((err) => {
  console.error(err);
  process.exit(0);
});
