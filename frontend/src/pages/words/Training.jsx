import React, { useContext, useEffect, useState } from "react";
import TrainingCard from "../../components/TrainingCard";
import { WordListContext } from "../../contexts/WordListContext";
import { enqueueSnackbar } from "notistack";
import Flash from "../../components/Flash";

const Training = () => {
  const { wordList } = useContext(WordListContext);

  const [centerWord, setCenterWord] = useState(null);
  const [options, setOptions] = useState([]);
  const [correctIndex, setCorrectIndex] = useState(null);
  const [flashGreen, setFlashGreen] = useState(false);
  const [flashRed, setFlashRed] = useState(false);
  const [streakCount, setStreakCount] = useState(0);
  const [correctAnswerCount, setCorrectAnswerCount] = useState(0);

  useEffect(() => {
    nextRound();
  }, []);

  const nextRound = () => {
    if (wordList.length === 0) return; // Guard clause in case wordList is empty

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

  const handleOptionClick = (index) => {
    if (index === correctIndex) {
      setFlashGreen(true);
      setTimeout(() => setFlashGreen(false), 500);
      setStreakCount(streakCount + 1);
      setCorrectAnswerCount(correctAnswerCount + 1);
    } else {
      setFlashRed(true);
      setTimeout(() => setFlashRed(false), 500);
      setStreakCount(0);
      enqueueSnackbar(
        `${centerWord.original.toUpperCase()} means ${centerWord.translation.toUpperCase()}`,
        {
          variant: "error",
          className: "bg-red-700",
        }
      );
    }

    nextRound(); // Set up the next round
  };

  return (
    <>
      <p className="absolute bottom-4 left-4 text-primary bg-light-50 p-2 rounded-lg">
        Streak: {streakCount}
      </p>
      <p className="absolute bottom-4 right-4 text-primary bg-light-50 p-2 rounded-lg">
        Total: {correctAnswerCount}
      </p>
      {flashGreen && <Flash bg={"bg-green-600"} />}
      {flashRed && <Flash bg={"bg-red-600"} />}
      <div className="my-auto sm:w-[500px] m-auto h-full relative">
        <div className="absolute left-[116px] top-12 m-4 -z-10">
          <TrainingCard>{centerWord?.original}</TrainingCard>
        </div>

        <div className="grid grid-cols-2 gap-8 z-10">
          {options.map((translation, index) => (
            <TrainingCard key={index} onClick={() => handleOptionClick(index)}>
              {translation}
            </TrainingCard>
          ))}
        </div>
      </div>
    </>
  );
};

export default Training;
