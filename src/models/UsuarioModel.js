import mongoose from "mongoose";

const UsuarioSchema = new mongoose.Schema({
    id : {type : mongoose.Schema.Types.ObjectId},
    nome : String,
    cpf : String,
    possui_deficiencia : Boolean,
    idade : Number,
    plano : String,
    data_matricula : String,
    data_vencimento : String
}, {versionKey : false});

const UsuarioModel = mongoose.model('usuarios', UsuarioSchema);

export default UsuarioModel;