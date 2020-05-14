import express from 'express';
const router = express.Router();
import OrderController from '../controllers/OrderController.js'
import authentication from '../middlewares/authentication.js'

router.post('/', authentication, OrderController.OrderCreate);
router.delete('/:_id', OrderController.OrderDelete);

export default router;