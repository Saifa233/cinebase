// CONNECT TO DATABASE
import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';

if (!process.env.NEXT_PUBLIC_DATABASE_URL) {
    throw Error('NEXT_PUBLIC_DATABASE_URL is not defined');
}
const sql = neon(process.env.NEXT_PUBLIC_DATABASE_URL);
export const db = drizzle(sql);