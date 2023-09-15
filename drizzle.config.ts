import type { Config } from 'drizzle-kit';
import dotenv from 'dotenv';
dotenv.config({ path: './.env.local' });

export default {
  schema: './src/db/schema.ts',
  out: './src/db/migrations',
  driver: 'pg',
  dbCredentials: {
    connectionString: !!process.env.POSTGRES_URL ? process.env.POSTGRES_URL : ''
  }
} satisfies Config;
