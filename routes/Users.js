import express from 'express';
import UserController from '../controllers/UserController.js'
import authentication from '../middlewares/authentication.js'
const router = express.Router();

router.get('/all', UserController.getAll);
router.post('/signup', UserController.signup);
router.post('/login', UserController.login);
router.post('/logout', authentication, UserController.logout);

export default router;
