import UsuarioModel from "../models/UsuarioModel.js";

class UsuarioController {

    static async ListarUsuarios (req, res) {
        try {
            const ListaUsuarios = await UsuarioModel.find({});
            res.status(200).json({status : 200, content : ListaUsuarios});
        } catch (error) {
            console.log(error);
            res.status(500).json({status : 500, message : "Ocorreu um erro ao tentar carregar usuários."});
            return
        };
    };
};

export default UsuarioController