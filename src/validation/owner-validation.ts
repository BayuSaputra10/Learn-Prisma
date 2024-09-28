import Joi from "joi";
import ownerType from "../types/owner-type";

export const inputOwner = (payload:ownerType ): Joi.ValidationResult<ownerType> => {
const schema = Joi.object({
    name: Joi.string().required().messages({
        "any.required": "Name Harus Diisi",
        "string.empty": "Name Tidak Boleh Kosong"
    }) ,
    bidang: Joi.string().required().messages({
        "any.required": "Bidang Harus Diisi",
        "string.empty": "Bidang Tidak Boleh Kosong"
    })
})
return schema.validate(payload)
}


export const updateOwnerValid = (payload:ownerType ): Joi.ValidationResult<ownerType> => {
    const schema = Joi.object({
        name: Joi.string().required().messages({
            "any.required": "Name Harus Diisi",
            "string.empty": "Name Tidak Boleh Kosong"
        }).regex(/^[a-zA-Z\s]*$/) ,
        bidang: Joi.string().messages({
            "string.empty": "Bidang Tidak Boleh Kosong",
            "any.required": "Bidang Harus Diisi"
        })
    })
    return schema.validate(payload)
}

