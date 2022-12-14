import pool from '../database'
import bcrypt from 'bcrypt'
import { CredentialsEntry } from '../types'

const createUser: any = (credentials: CredentialsEntry) => {
  const SALT_ROUNDS = 10

  bcrypt.hash(credentials.password, SALT_ROUNDS, async function (_err, hash) {
    return await pool.query('INSERT INTO users (username, password) VALUES($1, $2)', [credentials.username, hash])
  })
}

const loginUser: any = async (username: string) => {
  return await pool.query('SELECT * FROM users WHERE username = $1', [username])
}

const deleteUser: any = async (id: number) => {
  return await pool.query('DELETE FROM users WHERE ID = $1', [id])
}

export { createUser, deleteUser, loginUser }
