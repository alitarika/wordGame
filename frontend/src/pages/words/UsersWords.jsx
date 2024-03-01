import { useContext, useEffect } from "react";
import { WordListContext } from "../../contexts/WordListContext.jsx";
import WordCard from "../../components/WordCard.jsx";
import { UserContext } from "../../contexts/UserContext.jsx";

const UsersWords = () => {
  const { user } = useContext(UserContext);

  useEffect(() => {
    document.title = `${user}'s words`;
  });
  const { wordList } = useContext(WordListContext);

  return (
    <div className="max-w-[440px] bg-light-50 p-4 m-auto rounded-lg">
      <h2 className="text-center my-3 text-primary-700">
        Total of <span className=" font-bold text-lg">{wordList.length}</span>{" "}
        words
      </h2>
      {wordList.map((word) => (
        <WordCard key={word._id} word={word} />
      ))}
      <div className="h-px w-full bg-gradient-to-r from-primary-50 via-primary-500/90 to-primary-50"></div>
    </div>
  );
};

export default UsersWords;
