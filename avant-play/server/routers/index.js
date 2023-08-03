import { Router } from "express";
import usersRoutes from "./UsersRouters.js";
import managerRoutes from "./ManagersRouters.js";

const routes = Router();

routes.get('/', (req, res) =>{
    res.status(200).send("Página Inicial Avant Play")
})

routes.use('/users', usersRoutes);
routes.use('/manager', managerRoutes);

export default routes;

