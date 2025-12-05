import { prisma } from "../utils/index.js";

async function buscar() {
    try {
        return await prisma.sorvetes.findMany();
    } catch (error) {
        return {
            tipo: 'error',
            mensagem: error.message
        }
    }
}

async function criar(dados) {
    try {
        const request = await prisma.sorvetes.create({
            data: dados
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
        const request = await prisma.sorvetes.update(
            {
                data: dados,
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
        const request = await prisma.sorvetes.delete(
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
export {
    buscar,
    criar,
    editar,
    deletar
} 