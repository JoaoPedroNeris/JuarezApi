import { PrismaClient } from "../../generated/prisma/index.js";
import jwt from "jsonwebtoken"
export const prisma = new PrismaClient();

export const rotaProtegida = (req, res, next) => {
    const token = req.headers.authorization
    if (!token) {
        res.status(401).send({
            tipo: "warning",
            mensagem: "token é necessário"
        });
        return;
    }
    jwt.verify(token.split(" ")[1], process.env.SEGREDO, (error) => {
        if (error) {
            res.status(401).send(
                {
                    tipo: "warning",
                    mensagem: "Token inválido"
                }
            )
        }
    })

    next()
}