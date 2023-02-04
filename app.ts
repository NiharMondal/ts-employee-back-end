// ================== app starts ==============

import express, { Application } from "express";
import cors from "cors";
import dotenv from "dotenv";

//import db
import connectDB from "./db/db";

dotenv.config();
connectDB();


// ========== initializing app ============
const app: Application = express();

//middlewares
app.use(cors());
app.use(express.json());

//root route
app.get("/", (req, res): void => {
  res.send("Hello world");
});

const port = process.env.SERVER_PORT || 5000;

app.listen(port, (): void => {
  
  console.log(`[Server]: app listening at http://localhost:${port}`);
});

export default app;
