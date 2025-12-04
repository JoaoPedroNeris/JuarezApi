import express from "express";
import niveisRoutes from "./src/routes/niveisRoutes.js";
import usuariosRoutes from "./src/routes/usuariosRoutes.js"
import { login } from "./src/controllers/usuariosController.js";
import { rotaProtegida } from "./src/utils/index.js";

const app = express();

app.use(express.json())

app.get('/', (req, res) => {
    res.send('hello world!')
});

app.post("/login", async (req, res) => {
    res.json(await login(req.body));
});
app.use("/niveis", rotaProtegida, niveisRoutes);
app.use("/usuarios", rotaProtegida, usuariosRoutes);

app.listen(8000, () => {
    console.log("serviço on: http://localhost:8000")
});
