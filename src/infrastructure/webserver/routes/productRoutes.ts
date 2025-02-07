import { Router } from 'express';
import "reflect-metadata";
import { ProductController } from '../../../application/controllers/ProductController';
import { container } from 'tsyringe';
import '../../../shared/dependencyInjection';

const router = Router();
const productController = container.resolve(ProductController);

router.post('/product', productController.store);
router.get('/product', productController.getProduct);

export { router as productRoutes };