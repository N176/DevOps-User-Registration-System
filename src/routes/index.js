import { Router } from 'express';
import { healthRouter } from './health.js';
import { userRouter } from './users.js';

export const router = Router();

router.use('/health', healthRouter);
router.use('/users', userRouter);