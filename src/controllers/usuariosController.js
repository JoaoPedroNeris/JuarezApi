import { prisma } from "../utils/index.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
async function buscar() {
    try {
        return await prisma.usuarios.findMany({
            include: {
                niveis: {
                    omit: {
                        id: true
                    }
                }
            }
        });
    } catch (error) {
        return {
            tipo: 'error',
            mensagem: error.message
        }
    }
}

async function criar(dados) {
    try {
        const senhaCripto = await bcrypt.hash(dados.senha, 10);
        const request = await prisma.usuarios.create({
            data: {...dados, senha: senhaCripto}
        })

        if (request) {
            return {
                tipo: "success",
                mensagem: "registro criado com sucesso"
            }
        }

    } catch (error) {
        return {
            tipo: 'error',
            mensagem: error.message
        }
    }

}
async function editar(dados, id) {
    try {
        const senhaCripto = await bcrypt.hash(dados.senha, 10);
        const request = await prisma.usuarios.update(
            {
                data:  {...dados, senha: senhaCripto},
                where: {
                    id: Number(id)
                }
            })
            if (request) {
            return {
                tipo: "success",
                mensagem: "registro criado com sucesso"
            }
        }
    }    catch (error) {
        return {
            tipo: 'error',
            mensagem: error.message
        }
    }
}
async function deletar(id) {
    try {
        const request = await prisma.usuarios.delete(
            {
                where: {
                    id: Number(id)
                }
            })
            if (request) {
            return {
                tipo: "success",
                mensagem: "registro apagado com sucesso"
            }
        }
    }    catch (error) {
        return {
            tipo: 'error',
            mensagem: error.message
        }
    }
}
async function login(dados) {
    try {
        const usuario = await prisma.usuarios.findFirst({
            where: {
                email:dados.email
            }
        });
        if(!usuario){
            return{
                tipo: "warning",
                mensagem: "Email ou senha envalidos"
            }
        }
        const senhaCorreta = await bcrypt.compare(dados.senha, usuario.senha);
        if(!senhaCorreta){
            return {
                tipo:'warning',
                mensagem: "Email ou senha invalidos"
            }
        }

        const token = await jwt.sign(usuario, process.env.SEGREDO, {expiresIn: '1h'});

        return{
            usuario,
            token
        }
    }    catch (error) {
        return {
            tipo: 'error',
            mensagem: error.message
        }
    }
}
export {
    buscar,
    criar,
    editar,
    deletar,
    login
} 