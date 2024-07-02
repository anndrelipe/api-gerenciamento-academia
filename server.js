import "dotenv/config"
import app from "./src/config/app.js";

const PORT = process.env.SERVER_PORT;
const HOST = process.env.SERVER_HOST;

app.listen(PORT, HOST, () => {
    console.log(`Server listening at http://${HOST}:${PORT}`)
})