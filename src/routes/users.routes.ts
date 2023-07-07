import { Router } from 'express';
import { getAllUsers, createUser } from '../controllers/users.controller';

const router = Router();

router.get('/', getAllUsers);
router.post('/create', createUser);

export default router;
