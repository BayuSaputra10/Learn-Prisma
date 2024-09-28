import { Request,Response } from "express";

import { createOwner, getOwner, getOwnerById, updateOwner, deleteOwner} from "../services/owner-service";
import { inputOwner, updateOwnerValid } from "../validation/owner-validation";

export const create = async (req: Request, res: Response) => {
    const { error,value } = inputOwner(req.body)
    if(error != null){
        return res.status(400).json({
            error: error.details[0].message,
            message: "Input Owner Validation Gagal"
        })
        
    }


return res.status(201).json({
    message: "Success Create Owner",
    data: await createOwner({
        name: value.name,
        bidang: value.bidang
    })
})
} 

export const show = async (req: Request, res: Response) => {
    const owner = await getOwner();
    return res.status(200).json({
        message: "Succes Show Owner",
        data: owner
    })
}

export const showById = async (req:Request, res:Response) => {
    const id = req.params.id;
    const owner = await getOwnerById(id);
    return res.status(200).json({
        message: "Succes Show Owner",
        data: owner
    })
}


export const update = async (req: Request, res: Response) => {
    const id = req.params.id;
    const { error,value } = updateOwnerValid(req.body)
    if(error != null){
        return res.status(400).json({
            error: error.details[0].message,
            message: "Input Owner Validation Gagal"
        })       
    }
try {
    const owner = await updateOwner(id,{
        name: value.name,
        bidang: value.bidang
    })
    return res.status(201).json({
        message: "Succes Update Owner",
        data: owner
    })
} catch (error) {
    return res.status(400).json({
        message: "Id Tidak Ditemukan",
        data: error
    })
}
}

export const deleteById = async (req: Request, res: Response) => {
    const id = req.params.id;
try {
    const owner = await deleteOwner(id);
    return res.status(201).json({
        message: "Succes Remove Owner",
    })
} catch (error) {
    return res.status(400).json({
        message: "Id Tidak Ditemukan",
    })
}
    // const { error } = deleteOwnerValid(req.params.id)
// if(error != null){
//     return res.status(400).json({
//         error: error,
//         message: "Input Owner Validation Gagal"
//     })
// }
// return res.status(201).json({
//     message: "Succes Remove Owner",
//     data: await deleteOwner(req.params.id)
// })
}