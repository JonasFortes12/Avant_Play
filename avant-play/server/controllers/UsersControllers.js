//import Prisma
//import Zod

class UsersController {

    static listUsers = async(req, res) => {
        res.status(200).send("Listar todos os usuários")
    }

    static showUser = async(req, res) => {
        res.status(200).send("Mostra usuário por ID")
    }

    static createUser = async (req, res) =>{
        res.status(200).send("Cadastrar novo usuário!")
    }

    static updateUser = async (req, res) =>{
        res.status(200).send("Atualizar usuário!")
    }

    static deleteUser = async (req, res) =>{
        res.status(200).send("Deletar usuário!")
    }
     

}


export default UsersController;


