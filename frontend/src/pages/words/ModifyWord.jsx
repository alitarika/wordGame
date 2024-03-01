import { enqueueSnackbar } from "notistack";
import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { updateWord } from "../../controllers/wordListControllers";
import { WordListContext } from "../../contexts/WordListContext";

const ModifyWord = () => {
  useEffect(() => {
    document.title = `Modify '${location.state.original}'`;
  });

  const location = useLocation();

  const [formData, setFormData] = useState({
    original: location.state.original,
    translation: location.state.translation,
  });

  const navigate = useNavigate();

  const { wordList, setWordList } = useContext(WordListContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = await updateWord(
        location.state._id,
        formData.original,
        formData.translation
      );

      const filteredList = wordList.filter((w) => w._id !== location.state._id);
      setWordList([data.updatedWord, ...filteredList]);
      navigate("/userswords");
      enqueueSnackbar(data.success, { variant: "success" });
    } catch (error) {
      enqueueSnackbar(error.message, { variant: "error" });
      console.error("Error arised when updating word", error.message);
    }
  };
  return (
    <section className="form-card">
      <h1 className="form-title">Modify word</h1>
      <form onSubmit={handleSubmit}>
        <input
          className="form-input"
          type="text"
          autoFocus
          placeholder={location.state.original}
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
          placeholder={location.state.translation}
          name="translation"
          id="translation"
          value={formData.translation}
          onChange={(e) =>
            setFormData({ ...formData, translation: e.target.value })
          }
        />
        <button className="form-btn">Modify Word</button>
      </form>
    </section>
  );
};

export default ModifyWord;
