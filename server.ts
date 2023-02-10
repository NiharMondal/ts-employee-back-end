import cookieParser from "cookie-parser";

// ================== import app ==============
import app from "./app";

app.use(cookieParser());
//import router
import userRouter from "./routes/usersRoute";
import authRouter from "./routes/authRouts";

// ===========use router =================
//user router
app.use("/api/v1/user", userRouter);

//auth router
app.use("/api/v1/auth", authRouter);
