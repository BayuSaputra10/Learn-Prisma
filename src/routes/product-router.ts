import { Router } from 'express';
import { create, show,update,remove, showById } from '../controllers/product-controller';

export const routerProduct:Router = Router();

routerProduct.get('/products',show);
routerProduct.post('/products',create);
routerProduct.put('/products/:id',update);
routerProduct.delete('/products/:id',remove);
routerProduct.get('/products/:id',showById)