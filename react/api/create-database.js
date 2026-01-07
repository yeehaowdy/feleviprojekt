/**Get /api/create-database */
import {Pool} from '@neondatabase/serverless'
var pool = new Pool({connectionString: process.env.DATABASE_URL})
export default async function handler(req, res) {
    const sql = 'CREATE TABLE IF NOT EXISTS public.messages (id SERIAL PRIMARY KEY, name VARCHAR(255) NOT NULL, sent_at TIMESTAMP DEFAULT NOW())'
    const queryResult = await pool.query(sql)
    return res.status(200).json({queryResult})
}