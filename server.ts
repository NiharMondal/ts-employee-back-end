// ================== import app ==============
import app from "./app";

//import router
import userRouter from "./routes/usersRoute";
import authRouter from "./routes/authRouts";

//use router
//user router
app.use("/api/v1/users/", userRouter);

app.use("/api/v1/auth", authRouter);
