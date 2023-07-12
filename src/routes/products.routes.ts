import { Router } from 'express';
import {
  getAllProducts,
  createProduct,
  getProductAndEdit,
  deleteProduct,
} from '../controllers/products.controller';

const router = Router();

router.get('/', getAllProducts);
router.post('/', createProduct);
router.put('/edit/:ID', getProductAndEdit);
router.delete('/:ID', deleteProduct);

export default router;
