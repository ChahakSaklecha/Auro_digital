import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from './schema'
const sql = neon("postgresql://neondb_owner:1tcqYfsSoPr5@ep-shiny-wind-a5okha48.us-east-2.aws.neon.tech/neondb?sslmode=require");
export const db = drizzle(sql,{schema});
