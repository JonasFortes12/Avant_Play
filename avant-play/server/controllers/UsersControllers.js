import { PrismaClient } from "@prisma/client";
//import Zod

const prisma = new PrismaClient();
class UsersController {

    static listUsers = async(req, res) => {
        const allUsers = await prisma.user.findMany()
        res.status(200).send(allUsers)
    }

    static showUser = async(req, res) => {
        const userID = parseInt(req.params.id)
        const userFound = await prisma.user.findUnique({
            where: {
              id: userID,
            },
          })
        res.status(200).send(userFound)
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


