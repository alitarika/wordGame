import React, { useContext, useState, useMemo, useEffect } from "react";
import { WordListContext } from "../../contexts/WordListContext";

const Home = () => {
  useEffect(() => {
    document.title = "Homepage";
  });
  const { wordList } = useContext(WordListContext);
  const [alphabetical, setAlphabetical] = useState(false);
  // Use useMemo to optimize sorting operation
  const alphabeticallySortedWordList = useMemo(
    () => [...wordList].sort((a, b) => a.original.localeCompare(b.original)),
    [wordList] // Dependency array ensures sorting only reruns when wordList changes
  );

  const myWordList = alphabetical ? alphabeticallySortedWordList : wordList;

  const handleClick = () => {
    setAlphabetical(!alphabetical);
  };

  // Use useState and useEffect to manage and stabilize random word selection
  const [randomWordIndex, setRandomWordIndex] = useState(
    Math.floor(Math.random() * wordList.length)
  );
  // Derive random word based on current list (respects current sorting)
  const randomWord = myWordList[randomWordIndex];

  // Update random word index on specific action (e.g., button click)
  const updateRandomWordIndex = () => {
    setRandomWordIndex(Math.floor(Math.random() * myWordList.length));
  };

  return (
    <div>
      <p className="bg-red-500">Random: {randomWord?.original}</p>{" "}
      {/* Safe access in case list is empty */}
      Home
      <button onClick={handleClick}>Toggle Alphabetical</button>
      <button onClick={updateRandomWordIndex}>New Random Word</button>{" "}
      {/* Button to get a new random word */}
      <div>
        {myWordList.map((a) => (
          <div key={a._id}>
            <p>
              {a.original}-{a.translation}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
