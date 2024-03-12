import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { enqueueSnackbar } from "notistack";
import GameCard from "../../components/GameCard";
import { WordListContext } from "../../contexts/WordListContext";
import Flash from "../../components/Flash";
import {
  markWordAsMistaken,
  markWordAsNotMistaken,
} from "../../controllers/wordListControllers";

const WordGame = () => {
  useEffect(() => {
    document.title = "Word Game";
  });
  const { wordList, setWordList, loading } = useContext(WordListContext);

  if (!loading && wordList.length < 4) {
    return (
      <h1 className="text-center my-3 text-dark-600 w-[90%] md:w-[70%] mx-auto p-6 rounded-lg bg-light-50">
        You have only{" "}
        <span className="underline decoration-primary decoration-2">
          {wordList.length} {wordList.length == 1 ? "word" : "words"}
        </span>{" "}
        yet! To play the game you need at least 4 words. Go to{" "}
        <Link className="text-primary" to="/create-word" title="Create Word">
          Create Word
        </Link>{" "}
        Page to create a word/translation pair!
      </h1>
    );
  }

  const [centerWord, setCenterWord] = useState(null);
  const [options, setOptions] = useState([]);
  const [correctIndex, setCorrectIndex] = useState(null);
  const [flashGreen, setFlashGreen] = useState(false);
  const [flashRed, setFlashRed] = useState(false);
  const [streakCount, setStreakCount] = useState(0);
  const [correctAnswerCount, setCorrectAnswerCount] = useState(0);
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    nextRound();
  }, [wordList, loading]);

  const nextRound = () => {
    if (wordList.length < 3) return; // Guard clause in case wordList is not large enough to play

    // Select a random word for the center
    const newCenterWord = wordList[Math.floor(Math.random() * wordList.length)];
    setCenterWord(newCenterWord);

    // Select 3 incorrect answers
    const incorrectOptions = wordList
      .filter((w) => w.original !== newCenterWord.original)
      .sort(() => 0.5 - Math.random())
      .slice(0, 3)
      .map((w) => w.translation);

    // Select the position for the correct answer
    const correctPosition = Math.floor(Math.random() * 4);
    setCorrectIndex(correctPosition);

    // Insert correct answer into incorrect options to form all options
    incorrectOptions.splice(correctPosition, 0, newCenterWord.translation);
    setOptions(incorrectOptions);
  };

  const handleOptionClick = async (index) => {
    if (index === correctIndex) {
      setFlashGreen(true);
      setTimeout(() => setFlashGreen(false), 500);
      setStreakCount((prev) => prev + 1);
      setCorrectAnswerCount((prev) => prev + 1);
      try {
        if (centerWord.mistaken) {
          const data = await markWordAsNotMistaken(centerWord._id);
          const filteredList = wordList.filter((w) => w._id !== centerWord._id);
          setWordList([data.word, ...filteredList]);
        }
      } catch (error) {
        enqueueSnackbar(error.message, { variant: "error" });
      }
    } else {
      setFlashRed(true);
      setTimeout(() => setFlashRed(false), 500);
      setStreakCount(0);
      enqueueSnackbar(
        `${centerWord.original.toUpperCase()} means ${centerWord.translation.toUpperCase()}`,
        {
          variant: "error",
        }
      );
      try {
        if (!centerWord.mistaken) {
          const data = await markWordAsMistaken(centerWord._id);
          const filteredList = wordList.filter((w) => w._id !== centerWord._id);
          setWordList([data.word, ...filteredList]);
        }
      } catch (error) {
        enqueueSnackbar(error.message, { variant: "error" });
      }
    }
    setTotalCount((prev) => prev + 1);
    nextRound(); // Set up the next round
  };

  return (
    <>
      {loading ? (
        <div className="relative grid grid-cols-2 justify-items-center max-w-xl mx-auto animate-pulse">
          <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 -z-10">
            <div className="truncate w-40 h-24 bg-gradient-to-bl from-primary-600 to-primary-400   shadow-inner shadow-primary-300 text-light p-2 text-center rounded-lg">
              <p className="pt-7">
                <p className="px-4 font-bold truncate rounded-lg bg-light-50/40 h-3 w-24 mx-auto mt-2 mb-1 animate-pulse"></p>
              </p>
            </div>
          </div>
          <GameCard>
            <p className="px-4 font-bold truncate rounded-lg bg-light-50/40 h-3 w-24 mx-auto mt-2 mb-1 animate-pulse"></p>
          </GameCard>
          <GameCard>
            <p className="px-4 font-bold truncate rounded-lg bg-light-50/40 h-3 w-24 mx-auto mt-2 mb-1 animate-pulse"></p>
          </GameCard>
          <GameCard>
            <p className="px-4 font-bold truncate rounded-lg bg-light-50/40 h-3 w-24 mx-auto mt-2 mb-1 animate-pulse"></p>
          </GameCard>
          <GameCard>
            <p className="px-4 font-bold truncate rounded-lg bg-light-50/40 h-3 w-24 mx-auto mt-2 mb-1 animate-pulse"></p>
          </GameCard>
        </div>
      ) : (
        <>
          <p
            aria-live="polite"
            className="absolute bottom-4 left-4 text-primary bg-light-50 p-2 rounded-lg"
          >
            Streak: {streakCount}
          </p>
          <p
            aria-live="polite"
            className="absolute bottom-4 right-4 text-primary bg-light-50 p-2 rounded-lg"
          >
            Total: {correctAnswerCount} / {totalCount}
          </p>
          {flashGreen && <Flash bg={"bg-green-600"} />}
          {flashRed && <Flash bg={"bg-red-600"} />}
          <div className="relative grid grid-cols-2 justify-items-center max-w-xl mx-auto">
            <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 -z-10">
              <div className="truncate w-40 h-24 bg-gradient-to-bl from-primary-600 to-primary-400   shadow-inner shadow-primary-300 text-light p-2 text-center rounded-lg">
                <p className="pt-7">{centerWord?.original}</p>
              </div>
            </div>

            {options.map((translation, index) => (
              <GameCard key={index} onClick={() => handleOptionClick(index)}>
                {translation}
              </GameCard>
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default WordGame;
