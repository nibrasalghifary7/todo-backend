import { Router } from 'express';
import authRoutes from './authRoutes';
import todoRoutes from './todoRoutes';
import { verifyToken } from '../middlewares/authMiddleware';

const router = Router();

// Auth Routes
router.use('/auth', authRoutes);

// Todo Routes (Protected)
router.use('/todos', verifyToken, todoRoutes);

export default router;