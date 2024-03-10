import { enqueueSnackbar } from "notistack";
import React, { useContext } from "react";
import { MdDeleteForever, MdChangeCircle } from "react-icons/md";
import { Link } from "react-router-dom";
import { deleteWord } from "../controllers/wordListControllers";
import { WordListContext } from "../contexts/WordListContext";

const WordCard = ({ word }) => {
  const cardTextColorClassName = word.mistaken
    ? "text-primary-700 hover:shadow-primary-200 hover:bg-[linear-gradient(90deg,#f9cfaf,5%,#fef5ee,95%,#f9cfaf)]"
    : "hover:shadow-light hover:bg-[linear-gradient(90deg,#e7e7d8,5%,#f7f7f3,95%,#e7e7d8)]";

  const { wordList, setWordList } = useContext(WordListContext);

  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      await deleteWord(word._id);
      const newWordList = wordList.filter((w) => w._id !== word._id);
      setWordList(newWordList);
      enqueueSnackbar(`${word.original} has been deleted from your list.`, {
        variant: "delete",
        className: "bg-primary-800",
      });
    } catch (error) {
      enqueueSnackbar(console.error, {
        variant: "error",
      });
      console.error("Error while delete:", error.message);
    }
  };
  return (
    <div className="relative">
      <button
        onClick={handleDelete}
        title="Delete Word"
        className="absolute rounded-full size-5 text-primary-700 top-5 left-5  hover:size-7 hover:top-4 hover:left-4"
      >
        <MdDeleteForever className="mx-auto text-xl hover:text-3xl" />
      </button>
      <Link title="Modify Word" to="/modify-word" state={word}>
        <MdChangeCircle className="absolute size-5 hover:size-7 hover:right-4 hover:top-4 text-dark bg-light rounded-full top-5 right-5" />
      </Link>
      <div className=" h-px w-full bg-gradient-to-r from-light-50 via-light-200/90 to-light-50"></div>
      <div
        className={`p-2 text-center hover:shadow-custom rounded-lg ${cardTextColorClassName}`}
      >
        <p className="px-12 font-bold truncate">{word.original}</p>
        <p className="px-12 saturate-[.8] opacity-80 text-sm truncate">
          {word.translation}
        </p>
      </div>
    </div>
  );
};
export default WordCard;
