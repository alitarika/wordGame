import express from "express";
import { registerUser, loginUser } from "../controllers/userControllers.js";

const router = express.Router();

// Register user
router.post("/register", registerUser);

// Register user
router.post("/login", loginUser);

export { router as userRoutes };
