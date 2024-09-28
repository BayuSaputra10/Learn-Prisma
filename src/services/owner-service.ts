import { Prisma, PrismaClient } from "@prisma/client";
import ownerType from "../types/owner-type";


const prisma = new PrismaClient()

export const createOwner = async (owner: ownerType) => {
    const result = await prisma.owner.create({
        data: {
            name:owner.name,
            bidang:owner.bidang
        }
    })
    return result
}

export const getOwner = async () =>{
    const result = await prisma.owner.findMany()
    return result;
}

export const getOwnerById = async (id: string) =>{
    const result = await prisma.owner.findUnique({
        where: {id: id}
    })

    if(id !== result?.id){
        return {
            message: `Owner Dengan id: ${id} Tidak Ditemukan`
        }
    }
    return result;
}

export const updateOwner = async (id: string, data: ownerType) => {
    const result = await prisma.owner.update({
        where: { id: id },
        data: {
            name: data.name,
            bidang: data.bidang
        }
    });
    return result;
};

export const deleteOwner = async (id: string) => {
    await prisma.owner.delete({
        where: { id: id }
    });
    return "Succes Delete Owner";
}