import { Pool } from 'pg'
import dotenv from 'dotenv'

dotenv.config()

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'images_app',
  password: process.env.PG_PASSWORD
})

export default pool
