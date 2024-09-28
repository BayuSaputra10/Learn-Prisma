import { Prisma,PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createCatogory = async (category: Prisma.CategoryCreateInput) => {
    const result = await prisma.category.create({
        data: {
            name: category.name
        } 

    })
    return result;
}

export const getCategory = async () => {
    const result = await prisma.category.findMany();
    return result
}

export const getCategoryById = async (id: number) => {
    const result = await prisma.category.findUnique({
        where: { id: id }
    })
    if(!result) {
        return {
            error: 'Category not found'
        }
    }
    return result;
}

export const updateCategory = async (idCategory:number ,category: Prisma.CategoryUpdateInput) => {
    const result = await prisma.category.update({
        where: {
            id: idCategory
        },
        data: {
            name: category.name
        }
    })
    return result
}

export const deleteCategory = async (id: number) => {
    const result = await prisma.category.delete({
        where: { id: id }
    })
    return result
}