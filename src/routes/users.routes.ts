import { Router } from 'express';
import {
  getAllUsers,
  createUser,
  getUserByID,
  getUserAndEdit,
  loginUserAdmin,
  deleteUser,
} from '../controllers/users.controller';
import { validateEditUserDataBody } from '../validations/user.validations';
import { isAdmin } from '../middleware/user.middleware';

const router = Router();

router.get('/', getAllUsers);
router.get('/:ID', getUserByID);
router.post('/create', createUser);
router.delete('/:ID', deleteUser);
router.put('/edit/:ID', validateEditUserDataBody(), getUserAndEdit);

// Dashboard Admin
router.post('/dashboard/:ID', isAdmin, loginUserAdmin);

export default router;
