import { Router } from "express";
import ManagersController from '../controllers/ManagersControllers.js' // import the manager controller

const managerRoutes = Router();

managerRoutes.get('/list', ManagersController.listManagers);
managerRoutes.get('/:id', ManagersController.showManager);
managerRoutes.post('/create', ManagersController.createManager);
managerRoutes.put('/update/:id', ManagersController.updateManager);
managerRoutes.delete('/delete/:id', ManagersController.deleteManager);


export default managerRoutes;
