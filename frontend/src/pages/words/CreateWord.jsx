import React, { useContext, useEffect, useState } from "react";
import { WordListContext } from "../../contexts/WordListContext";
import { createWord } from "../../controllers/wordListControllers.js";
import { enqueueSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";

const CreateWord = () => {
  useEffect(() => {
    document.title = "Add Word";
  });
  // form data state
  const [formData, setFormData] = useState({
    original: "",
    translation: "",
  });

  // Parse wordList setter from the word list context
  const { setWordList } = useContext(WordListContext);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const newWordPair = await createWord(
        formData.original,
        formData.translation
      );
      setWordList((previousWordList) => [newWordPair, ...previousWordList]);
      enqueueSnackbar("Your word has successfully been added to your list.", {
        variant: "success",
      });
      navigate("/userswords");
    } catch (error) {
      console.error("Could not create your word pair: ", error.message);
      enqueueSnackbar(error.message || "Failed to add word", {
        variant: "error",
      });
    }
  };

  return (
    <section className="form-card">
      <h1 className="form-title">Create a word</h1>
      <form onSubmit={handleSubmit}>
        <input
          className="form-input"
          type="text"
          autoFocus
          placeholder="word"
          name="original"
          id="original"
          value={formData.original}
          onChange={(e) =>
            setFormData({ ...formData, original: e.target.value })
          }
        />
        <input
          className="form-input"
          type="text"
          placeholder="translation"
          name="translation"
          id="translation"
          value={formData.translation}
          onChange={(e) =>
            setFormData({ ...formData, translation: e.target.value })
          }
        />
        <button className="form-btn">Create Word</button>
      </form>
    </section>
  );
};

export default CreateWord;
