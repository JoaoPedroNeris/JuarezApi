import express from "express";
import niveisRoutes from "./src/routes/niveisRoutes.js";

const app = express();

app.get('/', (req, res) => {
    res.send('hello world!')
});

app.use("/niveis", niveisRoutes);

app.listen(8000, () => {
    console.log("serviço on: http://localhost:8000")
});
