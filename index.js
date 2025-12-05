import express from "express";
import niveisRoutes from "./src/routes/niveisRoutes.js";
import usuariosRoutes from "./src/routes/usuariosRoutes.js"
import { login } from "./src/controllers/usuariosController.js";
import { rotaProtegida } from "./src/utils/index.js";
import swaggerUi from "swagger-ui-express";
import swaggerDoc from "./src/docs/documentation.json" with {type: "json"}
import sorvetesRoutes from "./src/routes/sorvetesRoutes.js"
const app = express();

app.use(express.json())

app.get('/', (req, res) => {
    res.redirect("/docs")
});

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

app.post("/login", async (req, res) => {
    // #swagger.description = "Login"
    /* #swagger.parameters['obj'] = {
            in: 'body',
            schema: {
                $email: "texto",
                $senha:  "texto"
            }
    } */
    /* #swagger.responses[200] = {
            description: 'Resposta',
            schema: {
                usuario: {
                id:1,
                nome: "texto",
                email: "texto",
                senha: "texto",
                nivel: {
                nome: "texto"
}
                },
                {token: 'token',
            }
    } */
    res.json(await login(req.body));
});
app.use("/niveis", rotaProtegida,
    // #swagger.description = "Acesso não autorizado"
    /* #swagger.responses[401] = {
            description: 'Resposta',
            schema: {
                type: 'Warning',
                description: 'Token invalido.',
            }
    } */ niveisRoutes);
     app.use("/sorvetes", rotaProtegida,
    // #swagger.description = "Acesso não autorizado"
    /* #swagger.responses[401] = {
            description: 'Resposta',
            schema: {
                type: 'Warning',
                description: 'Token invalido.',
            }
    } */ sorvetesRoutes);
app.use("/usuarios", rotaProtegida,
    // #swagger.description = "Acesso não autorizado"
    /* #swagger.responses[401] = {
            description: 'Resposta',
            schema: {
                type: 'Warning',
                description: 'Token invalido.',
            }
    } */ usuariosRoutes);

app.listen(8000, () => {
    console.log("serviço on: http://localhost:8000")
});

