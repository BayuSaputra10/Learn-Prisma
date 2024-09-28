import express, { Express, Request, Response, Application } from "express";
import dotenv from "dotenv";
import router from "./routes/index";
import cors from "cors";

dotenv.config();

const app: Application = express();
const port = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());
app.use(router);


app.listen(port, () => {
  console.log(`In Server listening on http://localhost:${port}`);
});