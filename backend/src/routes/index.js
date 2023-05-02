import express from "express";
import homeRoute from "./home.js";
import userRoute from "./userRoutes.js";
import authRoute from "./authRoutes.js";

const router = express.Router();

router.use("/", homeRoute);
router.use("/auth", authRoute);
router.use("/user", userRoute);

export default router;
