import express from 'express';
const router = express.Router();
import CategoriesController from '../controllers/CategoriesController.js'


//routes. 
router.get('/all',CategoriesController.getAllCategories);
router.post('/create', CategoriesController.CategoryCreate);
router.get('/:_id', CategoriesController.getCategoryById);

export default router;
