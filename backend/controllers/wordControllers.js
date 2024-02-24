import mongoose from "mongoose";
import Word from "../models/WordModel.js";
import User from "../models/UserModel.js";

// Get User's words. (In chronological order)
export const getUserWords = async (req, res) => {
  // Parse authenticated user from req.user
  // req.user is provided via auth.js middleware
  const user = await User.findById(req.user._id);

  // Get user's words sorted as last created at top and send as json response.
  try {
    const userWords = await Word.find({ user_id: user._id }).sort({
      createdAt: "desc",
    });
    res.status(200).json(userWords);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get User's words which was guessed wrong last time.
export const getUserMistakenWords = async (req, res) => {
  // Parse authenticated user from req.user
  // req.user is provided via auth.js middleware
  const user = await User.findById(req.user._id);

  try {
    const userMistakenWords = await Word.find({
      user_id: user._id,
      mistaken: true,
    }).sort({
      updatedAt: "desc",
    });
    res.status(200).json(userMistakenWords);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Create a new word.
export const createWord = async (req, res) => {
  // Parse the (original) word and translation from request body
  const { original, translation } = req.body;

  // Check if both of the fields are filled by the user.
  // If not return 400 with an error message
  if (!original || !translation) {
    return res.status(400).json({
      error:
        "Please fill in both of the fields as they are both necessary to create your word-translation pair.",
    });
  }

  // Parse authenticated user from req.user
  // req.user is provided via auth.js middleware
  const user = await User.findById(req.user._id);

  // Create the word-translation pair.
  try {
    const word = await Word.create({
      user_id: user._id,
      original,
      translation,
    });
    res.status(200).json(word);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Modify word by ID.
export const updateWord = async (req, res) => {
  // Parse word's id from url/request parameters.
  const { id } = req.params;

  // Parse updated (original) word and translation
  const { original, translation } = req.body;

  // Check if both of the fields are filled by the user.
  // If not return 400 with an error message
  if (!original || !translation) {
    return res.status(400).json({
      error:
        "Please fill in both of the fields as they are both necessary to create your word-translation pair.",
    });
  }

  // Check whether or not ID is of valid type.
  // If not return error.
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({
      error: "No word is found with this ID. (ID is invalid type.)",
    });
  }

  // Check whether the word with that ID exists.
  const word = await Word.findById(id);
  if (!word) {
    return res.status(400).json({ error: "No word is found with this ID." });
  }

  // Parse authenticated user from req.user
  // req.user is provided via auth.js middleware
  const user = await User.findById(req.user._id);

  // Check whether the word belongs to the user
  if (!word.user_id.equals(user._id)) {
    return res.status(401).json({
      error:
        "Not authorized to modify this word since this word is not created by you.",
    });
  }

  // Update word and send updated word and success message
  try {
    await word.updateOne({ original, translation });
    return res.status(200).json({
      success: `You successfully modified your word-translation pair as ${original}/${translation}`,
      word,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete word by ID.
export const deleteWord = async (req, res) => {
  // Parse word's id from url/request parameters.
  const { id } = req.params;

  // Check whether or not ID is of valid type.
  // If not return error.
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({
      error: "No word is found with this ID. (ID is invalid type.)",
    });
  }

  // Check whether the word with that ID exists.
  const word = await Word.findById(id);
  if (!word) {
    return res.status(400).json({ error: "No word is found with this ID." });
  }

  // Parse authenticated user from req.user
  // req.user is provided via auth.js middleware
  const user = await User.findById(req.user._id);

  // Check whether the word belongs to the user
  if (!word.user_id.equals(user._id)) {
    return res.status(401).json({
      error:
        "Not authorized to modify this word since this word is not created by you.",
    });
  }

  try {
    const { original, translation } = word;
    await word.deleteOne();
    return res
      .status(200)
      .json({
        success: `Word-translation pair of ${original}/${translation} is successfully deleted.`,
      });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
