import { Prisma,PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createProduct = async (product: {
    name: string;
    price: number;
    categoryId: number;
    ownerId: string;
  }) => {
    try {
      if (!product.name || !product.price || !product.categoryId || !product.ownerId) {
        throw new Error('All fields (name, price, categoryId, ownerId) are required');
      }
      const category = await prisma.category.findUnique({
        where: { id: product.categoryId },
      })
  
      if (!category) {
        throw new Error('Category not found');
      }
  
      const owner = await prisma.owner.findUnique({
        where: { id: product.ownerId },
      });
  
      if (!owner) {
        throw new Error('Owner not found');
      }
  
      const result = await prisma.product.create({
        data: {
          name: product.name,
          price: product.price,
          category: {
            connect: { id: product.categoryId },
          },
          owner: {
            connect: { id: product.ownerId },
          },
        },
      });
  
      return result;
    } catch (error) {
      console.error('Error creating product:', error);
      throw new Error(`Error creating product: ${error}`);
    }
  };

export const showProductById = async (id: number) => {
    const result = await prisma.product.findUnique({
        where: { id: id },
        include: {
            category: true
        }
    })

    const response = {
        id: result?.id,
        name: result?.name,
        price: result?.price,
        categoryName: result?.category?.name
    }
    return response;
}

export const showProducts = async () => { 
    const result = await prisma.product.findMany({
        include: {
            category: true
        },
        orderBy: {
            id: 'asc'
        }
    });
    const responseDto = result.map((product) => {
        return {
            id: product.id,
            name: product.name,
            price: product.price,
            categoryName: product.category?.name
        }
    })
    return responseDto;
}

export const updateProduct = async (id: number, data: Prisma.ProductUpdateInput) => {
    const result = await prisma.product.update({
        where: { id: id },
        data: {
            name: data.name,
            price: data.price
        }
    });
    return result;
};

export const deleteProduct = async (id: number) => {
    const result = await prisma.product.delete({
        where: { id: id }
    });
    return result;
}