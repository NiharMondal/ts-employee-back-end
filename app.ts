// ================== app starts ==============

import express, { Application,Request,Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

//import db
import connectDB from "./db/db";

dotenv.config();

// ========== initializing app ============
const app: Application = express();
connectDB();
//middlewares
app.use(cors());
app.use(express.json());
app.use(cookieParser());
//root route
app.get("/", (req:Request, res:Response): void => {
  res.send("Hello world");
});

const port = process.env.SERVER_PORT || 5000;

app.listen(port, (): void => {
  console.log(`[Server]: app listening at http://localhost:${port}`);
  
});

export default app;
