import mongoose from "mongoose";

const UsuarioSchema = new mongoose.Schema({
    id : {type : mongoose.Schema.Types.ObjectId},
    nome : String,
    cpf : String,
    possui_deficiencia : Boolean,
    idade : Number,
    plano : String,
    data_matricula : Date,
    data_vencimento : Date
}, {versionKey : false});

const UsuarioModel = mongoose.model('usuarios', UsuarioSchema);

export default UsuarioModel;