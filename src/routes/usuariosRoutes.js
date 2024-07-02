import express from "express";
import UsuarioController from "../controllers/usuariosController.js";

const usuariosRoutes = express.Router();

usuariosRoutes.get('/usuarios', UsuarioController.ListarUsuarios);

export default usuariosRoutes