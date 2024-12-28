import { createUser, getUserByEmail } from '../models/userModel.js';

export const registerUser = async (req, res) => {
  try {
    const { email, username } = req.body;
    
    const existingUser = await getUserByEmail(email);
    if (existingUser) {
      return res.status(400).json({ error: 'Email already exists' });
    }

    await createUser(email, username);
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ error: 'Registration failed' });
  }
};