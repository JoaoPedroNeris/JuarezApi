import { prisma } from "../utils/index.js";

async function buscar() {
    try {
        return await prisma.niveis.findMany();
    } catch (error) {
        return {
            tipo: 'error',
            mensagem: error.messsage
        }
    }
}
export {
    buscar 
}