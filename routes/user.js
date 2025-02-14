import express from "express";
import signupController from "../controllers/user/signup.js";
import loginController from "../controllers/user/login.js";
import getUserController from "../controllers/user/getUser.js";
import logoutController from "../controllers/user/logout.js";

const userRouter = express.Router();

// Register Route
userRouter.post("/signup", signupController);
userRouter.post("/login", loginController);
userRouter.get("/get", getUserController);
userRouter.get("/logout", logoutController);

export default userRouter;
