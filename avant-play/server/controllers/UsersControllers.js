import { PrismaClient } from "@prisma/client";
//import Zod

const prisma = new PrismaClient();
class UsersController {

    static listUsers = async (req, res) => {
        try {
            const allUsers = await prisma.user.findMany()
            res.status(200).send(allUsers)

        } catch (err) {
            res.status(500).json({ message: 'Erro ao listar usuários', error: err.message });
        }
    }

    static showUser = async (req, res) => {
        const userID = parseInt(req.params.id)
        try {
            const userFound = await prisma.user.findUnique({
                where: {
                    id: userID,
                },
            })
            res.status(200).send(userFound)

        } catch (err) {
            res.status(500).json({ message: 'Erro ao cadastrar usuário', error: err.message });
        }

    }

    static createUser = async (req, res) => {
        const { name, email, password } = req.body;

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

    static updateUser = async (req, res) => {
        const userID = parseInt(req.params.id)
        const { name, email, password } = req.body;
        try {
            const updateUser = await prisma.user.update({
                where: {
                  id: userID,
                },
                data: { 
                  name: name,
                  email: email,
                  password: password,
                },
              })
            res.status(200).send(updateUser) 
        } catch (err) {
            res.status(500).json({ message: 'Erro ao atualizar usuário', error: err.message });
        }
    }

    static deleteUser = async (req, res) => {
        const userID = parseInt(req.params.id)
        try {
            await prisma.user.delete({
                where: {
                  id: userID
                }
              })
            res.status(200).send('Usuário deletado!') 
        } catch (err) {
            res.status(500).json({ message: 'Erro ao deletar usuário', error: err.message });
        }
    }


}


export default UsersController;


