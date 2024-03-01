import { useContext, useEffect } from "react";
import { WordListContext } from "../../contexts/WordListContext.jsx";
import WordCard from "../../components/WordCard.jsx";
import { UserContext } from "../../contexts/UserContext.jsx";

const UsersWords = () => {
  const { user } = useContext(UserContext);

  useEffect(() => {
    document.title = `${user}'s words`;
  }, [user]);

  const { wordList, loading } = useContext(WordListContext);

  return (
    <div className="max-w-[440px] bg-light-50 p-4 m-auto rounded-lg">
      {loading ? (
        <p className="text-center">loading...</p>
      ) : (
        <>
          <h2 className="text-center my-3 text-primary-700">
            <span className=" font-bold text-lg">{wordList.length}</span> words
          </h2>
          {wordList.map((word) => (
            <WordCard key={word._id} word={word} />
          ))}
          <div className=" h-px w-full bg-gradient-to-r from-light-50 via-light-200/90 to-light-50"></div>
        </>
      )}
    </div>
  );
};

export default UsersWords;
