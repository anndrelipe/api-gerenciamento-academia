import express from "express";
import connectaDb from "../database/dbConnection.js";

const app = express();
const connection = await connectaDb();

app.use(express.json());

connection.on("error", () => {
    console.log("erro ao conectar com o banco de dados");
});

connection.once("open", () => {
    console.log("Sucesso ao conectar com o banco de dados!")
})

app.get('/', (req, res) => {
    res.status(200).json({message:"Funcionando."})
})

export default app