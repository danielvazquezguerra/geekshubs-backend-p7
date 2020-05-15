import express from 'express';
import SkateboardController from '../controllers/SkateboardController.js';
const router = express.Router();

router.get('/all', SkateboardController.getAll);
router.get('/category/:_id', SkateboardController.getById);
router.post('/create', SkateboardController.SkateAdd);

export default router;