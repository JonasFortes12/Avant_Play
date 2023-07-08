import { Router } from "express";
import usersRoutes from "./UsersRouters.js";

const routes = Router();

routes.get('/', (req, res) =>{
    res.status(200).send("Página Inicial Avant Play")
})

routes.use('/users', usersRoutes);

export default routes;

