import express from "express"
import { buscar, criar, deletar, editar } from "../controllers/sorvetesController.js";

const router = express.Router();

router.get("/", async (req, res) => {
    // #swagger.description = "Busca todos os sorvetes"
    /* #swagger.responses[200] = {
            description: 'Retorna lista de sorvetes',
            schema: [{
                id: 1,
                nome: "texto",
                status: "texto"
            }]
    } */
    res.json(await buscar());
});

router.post("/", async (req, res) => {// #swagger.description = "Cria um sorvetes"
    /* #swagger.parameters['obj'] = {
            in: 'body',
            schema: {
                $nome: "texto",
                $status: "texto"
            }
    } */
    /* #swagger.responses[200] = {
            description: 'Resposta',
            schema: {
                type: 'success',
                description: 'Registro criado com sucesso.',
            }
    } */
    res.json(await criar(req.body));
})
router.put("/:id", async (req, res) => {// #swagger.description = "Edita um nível"
    /* #swagger.parameters['obj'] = {
            in: 'body',
            schema: {
                $nome: "texto",
                $status:  "texto"
            }
    } */
    /* #swagger.responses[200] = {
            description: 'Resposta',
            schema: {
                type: 'success',
                description: 'Registro atualizado com sucesso.',
            }
    } */
    res.json(await editar(req.body, req.params.id));
});

router.delete("/:id", async (req, res) => {
    // #swagger.description = "Deleta um nível"
    /* #swagger.responses[200] = {
            description: 'Resposta',
            schema: {
                type: 'success',
                description: 'Registro deletado com sucesso.',
            }
    } */
    res.json(await deletar(req.params.id));
})
export default router;