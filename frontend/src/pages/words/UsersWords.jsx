import { useContext, useEffect, useState } from "react";
import { WordListContext } from "../../contexts/WordListContext.jsx";
import WordCard from "../../components/WordCard.jsx";
import { UserContext } from "../../contexts/UserContext.jsx";
import { Link } from "react-router-dom";
import { MdAbc } from "react-icons/md";
import { MdAccessTimeFilled } from "react-icons/md";

const UsersWords = () => {
  const { user } = useContext(UserContext);

  const [alphabeticallySorted, setAlphabeticallySorted] = useState(false);

  useEffect(() => {
    document.title = `${user}'s words`;
  }, [user]);

  const { wordList, loading } = useContext(WordListContext);

  const alphabeticallySortedWordList = [...wordList].sort((a, b) => {
    return a.original.localeCompare(b.original);
  });

  const handleClick = () => {
    setAlphabeticallySorted(!alphabeticallySorted);
  };

  const renderedWordList = alphabeticallySorted
    ? alphabeticallySortedWordList
    : wordList;

  return (
    <div className="max-w-[440px] bg-light-50 p-4 m-auto rounded-lg">
      {loading ? (
        <p className="text-center">loading...</p>
      ) : (
        <div className="relative">
          {renderedWordList.length > 0 ? (
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
          ) : (
            <h2 className="text-center my-3 text-dark-600">
              You have no words yet! Go to{" "}
              <Link
                className="text-primary"
                to="/create-word"
                title="Create Word"
              >
                Create Word
              </Link>{" "}
              Page to create a word/translation pair!
            </h2>
          )}
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
