import React, { useContext, useState } from "react";
import { WordListContext } from "../../contexts/WordListContext";

const Home = () => {
  const { wordList } = useContext(WordListContext);
  const [alphabetical, setAlphabetical] = useState(false);

  const alphabeticallySortedWordList = [...wordList].sort((a, b) => {
    return a.original.localeCompare(b.original);
  });

  const myWordList = alphabetical ? alphabeticallySortedWordList : wordList;

  const handleClick = () => {
    setAlphabetical(!alphabetical);
  };

  const myRandNumb = Math.floor(Math.random() * wordList.length);
  const randomWord = wordList[myRandNumb];
  console.log("myrand", randomWord);

  return (
    <div>
      <p className="bg-red-500">Random: {randomWord?.original}</p>
      Home
      <button onClick={handleClick}>alphabetical</button>
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
