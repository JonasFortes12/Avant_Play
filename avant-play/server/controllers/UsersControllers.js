import { PrismaClient } from "@prisma/client";
//import Zod

const prisma = new PrismaClient();
class UsersController {

    static listUsers = async(req, res) => {
        res.status(200).send("Listar todos os usuários")
    }

    static showUser = async(req, res) => {
        res.status(200).send("Mostra usuário por ID")
    }

    static createUser = async (req, res) =>{
        const {name, email, password} = req.body;

        try {
            await prisma.user.create({
                data: {
                    name,
                    email,
                    password
                }
            });
            
            res.status(200).send("Novo usuário cadastrado!")
        } catch (err) {
            res.status(500).json({ message: 'Erro ao cadastrar usuário', error: err.message });
        }

    }

    static updateUser = async (req, res) =>{
        res.status(200).send("Atualizar usuário!")
    }

    static deleteUser = async (req, res) =>{
        res.status(200).send("Deletar usuário!")
    }
     

}


export default UsersController;


