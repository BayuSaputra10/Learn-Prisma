import { Router } from "express";
import { Request, Response } from "express";
const routerNotFound: Router = Router();

export default routerNotFound.all("*", (req: Request, res: Response) => {
    res.status(404).json({
      status: "fail",
      message: `Can't find ${req.originalUrl} on this server!`,
    });
  });
