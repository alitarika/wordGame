import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({ message: "Hi from word" });
});

export { router as wordRoutes };
