import express from "express";
import auth from "../middlewares/auth.js";
import {
  createWord,
  getUserWords,
  getUserMistakenWords,
  updateWord,
  deleteWord,
  markWordAsMistaken,
  markWordAsNotMistaken,
} from "../controllers/wordControllers.js";

const router = express.Router();

router.use(auth);

// Create new (original)word-translation pair.
router.post("/", createWord);

// Get user's all words in chronological order
router.get("/", getUserWords);

// Get user's mistaken (guessed wrong last time) words
router.get("/mistaken", getUserMistakenWords);

// Modify/update a (original)word-translation pair
router.put("/:id", updateWord);

// Delete a (original)word-translation pair
router.delete("/:id", deleteWord);

// Modify word as mistaken
router.put("/mistaken/:id", markWordAsMistaken);

// Modify word as NOT mistaken
router.put("/notmistaken/:id", markWordAsNotMistaken);

export { router as wordRoutes };
