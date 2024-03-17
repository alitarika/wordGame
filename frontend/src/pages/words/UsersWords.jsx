import { useContext, useEffect, useState, useMemo } from "react";
import { WordListContext } from "../../contexts/WordListContext.jsx";
import WordCard from "../../components/WordCard.jsx";
import WordCardSkeleton from "../../components/WordCardSkeleton.jsx";
import { UserContext } from "../../contexts/UserContext.jsx";
import { Link } from "react-router-dom";
import { MdAbc, MdAccessTimeFilled } from "react-icons/md";

const UsersWords = () => {
  const { user } = useContext(UserContext);

  const [alphabeticallySorted, setAlphabeticallySorted] = useState(false);

  useEffect(() => {
    document.title = `${user}'s words`;
  }, [user]);

  const { wordList, loading } = useContext(WordListContext);

  // Catch if wordList is empty and return jsx as warning
  if (!loading && wordList == 0) {
    return (
      <h1 className="text-center my-3 text-dark-600 w-[90%] md:w-[70%] mx-auto py-6 px-4 md:px-6 rounded-lg bg-light-50">
        You have no words yet! Go to{" "}
        <Link className="text-primary" to="/create-word" title="Create Word">
          Create Word
        </Link>{" "}
        Page to create a word/translation pair!
      </h1>
    );
  }

  const alphabeticallySortedWordList = useMemo(() => {
    return [...wordList].sort((a, b) => a.original.localeCompare(b.original));
  }, [wordList]);

  const handleClick = () => {
    setAlphabeticallySorted(!alphabeticallySorted);
  };

  const renderedWordList = alphabeticallySorted
    ? alphabeticallySortedWordList
    : wordList;

  return (
    <div className="max-w-[440px] bg-light-50 p-4 m-auto rounded-lg shadow-custom">
      {loading ? (
        <>
          <div className="relative">
            <button className="absolute right-0 -top-9 text-primary-600 hover:text-primary-700">
              <MdAbc className="size-12 blur-[2px] opacity-80 animate-pulse" />
            </button>
            <h2 className="text-center mx-auto my-4 text-primary rounded-full w-28 h-5 bg-primary/60 animate-pulse"></h2>

            {[...Array(20)].map((_, index) => (
              <WordCardSkeleton key={index} />
            ))}
          </div>
        </>
      ) : (
        <div className="relative">
          <>
            <button
              onClick={handleClick}
              className="absolute right-0 -top-8 text-primary-600 hover:text-primary-700"
            >
              {alphabeticallySorted ? (
                <MdAccessTimeFilled className="size-8 p-px mt-2 mr-2" />
              ) : (
                <MdAbc className="size-12" />
              )}
            </button>
            <h2 className="text-center my-3 text-primary">
              <span className=" font-bold text-lg">
                {renderedWordList.length}
              </span>{" "}
              words
            </h2>
          </>
          {renderedWordList.map((word) => (
            <WordCard key={word._id} word={word} />
          ))}
          <div className="h-px w-full bg-gradient-to-r from-light-50 via-light-200/90 to-light-50"></div>
        </div>
      )}
    </div>
  );
};

export default UsersWords;
