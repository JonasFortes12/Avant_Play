

class ManagersController {

    static listManagers = async (req, res) =>{

        try {
            res.status(200).send('List All Managers')
        } catch (err) {
            res.status(500).send(err.message)
        }
    }

    static showManager = async (req, res) =>{

        try {
            res.status(200).send('Show Managers by Id')
        } catch (err) {
            res.status(500).send(err.message)
        }
    }

    static createManager = async (req, res) =>{

        try {
            res.status(200).send('Create Manager')
        } catch (err) {
            res.status(500).send(err.message)
        }
    }

    static updateManager = async (req, res) =>{

        try {
            res.status(200).send('Update Manager')
        } catch (err) {
            res.status(500).send(err.message)
        }
    }

    static deleteManager = async (req, res) =>{

        try {
            res.status(200).send('Delete Manager')
        } catch (err) {
            res.status(500).send(err.message)
        }
    }

}


export default ManagersController;