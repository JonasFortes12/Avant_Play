import { Router } from "express";
import usersRouters from "./UsersRouters.js";

const routes = Router();

routes.get('/', (req, res) =>{
    res.status(200).send("Página Inicial Avant Play")
})

routes.use('/users', usersRouters);

export default routes;

