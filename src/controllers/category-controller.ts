import { Request,Response } from "express";
import { getCategory,createCatogory,getCategoryById, updateCategory,deleteCategory } from "../services/category-service";

export const create = async (req:Request, res:Response) => {
try {
    const category = await createCatogory({
        name: req.body.name
    });

    return res.status(201).json({
        message: "Success Create Category",
        data: category
    })
} catch (error) {
    return res.status(400).json({
        message: error
    })
}
}

export const show = async (req:Request, res:Response) => {
    const category = await getCategory();
    return res.status(200).json({
        message: "Success Show Category",
        data: category
    })
}

export const showById = async (req:Request, res:Response) => {
try {
    const id = req.params.id
    const result = await getCategoryById(parseInt(id));
    return res.status(200).json({
        message: "Success Show Category",
        data: result
    })
} catch (error) {
    return res.status(400).json({
        message: error
    })
}
}

export const update = async (req:Request, res:Response) => {
    try {
        const id = req.params.id
        const result = await updateCategory(parseInt(id),{
            name: req.body.name
        })
        return res.status(201).json({
            message: "Succes Update Category",
            data: result
        })
    } catch (error) {
        return res.status(400).json({
            message:"Id Tidak Ditemukan",
            data:error
        })
    }
}

export const categoryDelete = async (req:Request, res:Response) => {
    try {
        const id = req.params.id
        const result = await deleteCategory(parseInt(id))
        return res.status(201).json({
            message: "Succes Remove Category",
            data: result
        })
    } catch (error) {
        return res.status(400).json({
            message:"Id Tidak Ditemukan",
            data:error
        })
    }
}