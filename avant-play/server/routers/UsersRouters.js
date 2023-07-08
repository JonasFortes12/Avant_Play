import { Router } from 'express';
import UsersController from '../controllers/UsersControllers.js';

const usersRouters = Router();


usersRouters.post('/create', UsersController.registerUser);

export default usersRouters;