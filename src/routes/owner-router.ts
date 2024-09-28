import { Router } from "express";
import { create, deleteById, show, showById, update } from "../controllers/owner-controller";


export const routerOwner:Router = Router()

routerOwner.post('/owners',create);
routerOwner.get('/owners',show);
routerOwner.get('/owners/:id',showById);
routerOwner.put('/owners/:id',update);
routerOwner.delete('/owners/:id',deleteById);
