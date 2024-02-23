import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({ message: "Hi from user" });
});

export { router as userRoutes };
