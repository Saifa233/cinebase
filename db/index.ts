// CONNECT TO DATABASE
import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';

const NEXT_PUBLIC_DATABASE_URL = 'postgresql://neondb_owner:npg_AShKvqjo17dG@ep-noisy-sunset-a8runxwh-pooler.eastus2.azure.neon.tech/neondb?sslmode=require'
if (!NEXT_PUBLIC_DATABASE_URL) {
    throw Error('NEXT_PUBLIC_DATABASE_URL is not defined');
}
const sql = neon(NEXT_PUBLIC_DATABASE_URL);
export const db = drizzle(sql);