import { Router } from 'express';
import { homePage } from '../controllers/root.controller';

const router = Router();

router.get('/', homePage);

export default router;
