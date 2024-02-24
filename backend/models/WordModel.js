import mongoose from "mongoose";
const { model, Schema } = mongoose;

const WordSchema = new Schema(
  {
    user_id: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    original: {
      type: String,
      required: true,
    },
    translation: {
      type: String,
      required: true,
    },
    // When user guessed the word last time
    // user was mistaken(guessed wrong).
    mistaken: {
      type: Boolean,
      default: false, // mistaken should only be true when it is explicitly said to be true
      required: true,
    },
  },
  { timestamps: true }
);

const Word = model("Word", WordSchema);

export default Word;
