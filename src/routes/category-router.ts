import { Router } from "express";
import { categoryDelete, create, show, showById, update} from "../controllers/category-controller";

const RouterCategory:Router = Router();

RouterCategory.get('/categories',show);
RouterCategory.post('/categories',create);
RouterCategory.get('/categories/:id',showById);
RouterCategory.put('/categories/:id',update)
RouterCategory.delete('/categories/:id',categoryDelete)

export default RouterCategory