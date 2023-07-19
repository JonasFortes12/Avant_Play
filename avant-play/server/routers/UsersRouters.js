import { Router } from 'express';
import UsersController from '../controllers/UsersControllers.js';

const usersRoutes = Router();

usersRoutes.get('/list', UsersController.listUsers);
usersRoutes.get('/:id', UsersController.showUser);
usersRoutes.post('/create', UsersController.createUser);
usersRoutes.put('/update/:id', UsersController.updateUser);
usersRoutes.delete('/delete/:id', UsersController.deleteUser);


export default usersRoutes;