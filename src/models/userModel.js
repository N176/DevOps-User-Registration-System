import { pool } from '../config/database.js';

export const createUser = async (email, username) => {
  const [result] = await pool.execute(
    'INSERT INTO users (email, username) VALUES (?, ?)',
    [email, username]
  );
  return result;
};

export const getUserByEmail = async (email) => {
  const [rows] = await pool.execute(
    'SELECT * FROM users WHERE email = ?',
    [email]
  );
  return rows[0];
};