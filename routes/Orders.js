import express from 'express';
const router = express.Router();
import OrderController from '../controllers/OrderController'
import authentication from '../middlewares/authentication'

router.post('/', authentication, OrderController.OrderCreate);
router.delete('/:_id', OrderController.OrderDelete);

export default 