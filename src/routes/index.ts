import { Router } from "express";

import notfoundRouter from "./notfound-router";
import { routerProduct } from "./product-router";
import { routerOwner } from "./owner-router";
import RouterCategory from "./category-router";

const router: Router = Router();

router.use("/api/", routerProduct);
router.use("/api/", routerOwner);
router.use("/api/", RouterCategory);
router.use(notfoundRouter)
export default router;