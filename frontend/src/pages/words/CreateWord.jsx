import { useContext, useEffect, useState } from "react";
import { WordListContext } from "../../contexts/WordListContext";
import { createWord } from "../../controllers/wordListControllers.js";
import { enqueueSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";

const CreateWord = ({ disabled = false }) => {
  useEffect(() => {
    if (disabled) return;
    document.title = "Create Word";
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
    if (disabled) return;

    try {
      const newWordPair = await createWord(
        formData.original,
        formData.translation
      );
      setWordList((previousWordList) => [newWordPair, ...previousWordList]);
      enqueueSnackbar(`${formData.original} has been added to your list.`, {
        variant: "success",
        className: "!bg-green-700",
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
        <div className="relative">
          <input
            className="form-input peer"
            type="text"
            autoFocus={!disabled}
            placeholder=" "
            name="original"
            id="original"
            value={formData.original}
            onChange={(e) =>
              setFormData({ ...formData, original: e.target.value })
            }
            disabled={disabled}
          />
          <label htmlFor="original" className="form-label">
            Word
          </label>
        </div>

        <div className="relative">
          <input
            className="form-input peer"
            type="text"
            placeholder=" "
            name="translation"
            id="translation"
            value={formData.translation}
            onChange={(e) =>
              setFormData({ ...formData, translation: e.target.value })
            }
            disabled={disabled}
          />
          <label htmlFor="translation" className="form-label">
            Translation
          </label>
        </div>

        <button className="form-btn" disabled={disabled}>
          Create Word
        </button>
      </form>
    </section>
  );
};

export default CreateWord;
