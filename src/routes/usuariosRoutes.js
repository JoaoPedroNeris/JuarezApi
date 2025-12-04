import express from "express"
import { buscar, criar, deletar, editar } from "../controllers/usuariosController.js";

const router = express.Router();

router.get("/", async (req, res) => {
    res.json(await buscar());
});

router.post("/", async (req, res) => {
    res.json(await criar(req.body));
})
router.put("/:id", async (req, res) => {
    res.json(await editar(req.body, req.params.id));
});

router.delete("/:id", async (req, res) => {
    res.json(await deletar(req.params.id));
})
export default router;