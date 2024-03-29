import mongoose from "mongoose";
import Word from "../models/WordModel.js";
import User from "../models/UserModel.js";

// Get User's words. (In chronological order based on update)
export const getUserWords = async (req, res) => {
  // Parse authenticated user from req.user
  // req.user is provided via auth.js middleware
  const user = await User.findById(req.user._id);

  // Get user's words sorted as last created at top and send as json response.
  try {
    const userWords = await Word.find({ user_id: user._id }).sort({
      updatedAt: "desc",
    });
    res.status(200).json(userWords);
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
    if (error.code === 11000) {
      // Handle duplicate key error
      res.status(400).json({ error: "This word already exists in your list." });
    } else {
      res.status(500).json({ error: error.message });
    }
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
        "Please fill in both of the fields as they are both necessary to modify your word-translation pair.",
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

  // If there is no modification on neither word nor translation - warn user
  if (original === word.original && translation === word.translation) {
    return res.status(400).json({
      error:
        "You need to make a change in at least one of the fields to modify your word/translation pair.",
    });
  }

  // Update word, fetch updated word and send updated word and success message
  try {
    await word.updateOne({ original, translation });
    const updatedWord = await Word.findById(id);
    return res.status(200).json({
      success: `You successfully modified your word-translation pair as ${original} / ${translation}`,
      updatedWord,
    });
  } catch (error) {
    {
      if (error.code === 11000) {
        // Handle duplicate key error
        res.status(400).json({
          error: "This word already exists within your list.",
        });
      } else {
        res.status(500).json({ error: error.message });
      }
    }
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
    return res.status(200).json({
      success: `Word-translation pair of ${original}/${translation} is successfully deleted.`,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const markWordAsMistaken = async (req, res) => {
  // Parse word's id from url/request parameters.
  const { id } = req.params;

  // Check whether or not ID is of valid type.
  // If not return error.
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({
      error: "No word is found with this ID. (ID is invalid type.)",
    });
  }

  try {
    const word = await Word.findById(id);
    if (!word) {
      return res.status(404).json({ error: "Word not found." });
    }

    const user = await User.findById(req.user._id);
    if (!word.user_id.equals(user._id)) {
      return res.status(401).json({
        error: "Not authorized to mark this word as mistaken.",
      });
    }

    word.mistaken = true;
    await word.save();

    res.status(200).json({
      message: "Word marked as mistaken successfully.",
      word,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const markWordAsNotMistaken = async (req, res) => {
  // Parse word's id from url/request parameters.
  const { id } = req.params;

  // Check whether or not ID is of valid type.
  // If not return error.
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({
      error: "No word is found with this ID. (ID is invalid type.)",
    });
  }

  try {
    const word = await Word.findById(id);
    if (!word) {
      return res.status(404).json({ error: "Word not found." });
    }

    const user = await User.findById(req.user._id);
    if (!word.user_id.equals(user._id)) {
      return res.status(401).json({
        error: "Not authorized to mark this word as NOT mistaken.",
      });
    }

    word.mistaken = false;
    await word.save();

    res.status(200).json({
      message: "Word marked as NOT mistaken successfully.",
      word,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
