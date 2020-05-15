import express from 'express';
import UserController from '../controllers/UserController.js'
const router = express.Router();


router.get('/all', UserController.getAll);
router.post('/signup', UserController.signup);
router.post('/login', UserController.login);

export default router;
