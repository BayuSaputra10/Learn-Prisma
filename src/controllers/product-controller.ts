import { Request, Response } from "express";
import { createProduct, deleteProduct, showProducts, updateProduct,showProductById } from "../services/product-service";

export const create = async (req: Request, res: Response) => {

    try {
        const product = await createProduct({
            name: req.body.name,
            price: req.body.price,
            categoryId: req.body.categoryId,
            ownerId: req.body.ownerId
          });
      
          return res.status(201).json({
              message: "Success Create Prdouct",
              data: product
          })
    } catch (error) {
        return res.status(400).json({ error })
    }
}  

export const show = async (req: Request, res: Response) => {
    const product = await showProducts();

    return res.status(200).json({
        message: "Succes Show Prdouct",
        data: product
    })

}

export const showById = async (req:Request, res:Response) => {
    const id = req.params.id
    const result = await showProductById(parseInt(id));
    
    return res.status(200).json({
        message: "Succes Show Prdouct",
        data: result
    })
}


export const update = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const product = await updateProduct(id,{
        name:req.body.name,
        price:req.body.price
    })

    return res.status(201).json({
        message: "Succes Update Prdouct",
        data: product
    })
}

export const remove = async (req:Request, res:Response) => {
    const id = parseInt(req.params.id);
    const product = await deleteProduct(id);
    return res.status(201).json({
        message: "Succes Remove Prdouct",
        data: product
    })
}