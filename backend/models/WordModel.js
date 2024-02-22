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
    mistaken: {
      type: Boolean,
    },
  },
  { timestamps: true }
);

const Word = model("Word", WordSchema);

export default Word;
