import express from 'express';
import SkateboardController from '../controllers/SkateboardController';
const router = express.Router();

router.get('/', SkateboardController.getAll);
router.get('/:_id', SkateboardController.getById);
router.post('/create', SkateboardController.SkateAdd);

