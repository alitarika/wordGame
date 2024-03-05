import { useContext, useState } from "react";
import { WordListContext } from "../contexts/WordListContext.jsx";

const RandomWordCard = ({ ...rest }) => {
  const { wordList } = useContext(WordListContext);

  // Use useState and useEffect to manage and stabilize random word selection
  const [randomWordIndex, setRandomWordIndex] = useState(
    Math.floor(Math.random() * wordList.length)
  );
  // Derive random word based on current list (respects current sorting)
  const randomWord = wordList[randomWordIndex];

  // Update random word index on specific action (e.g., button click)
  const updateRandomWordIndex = () => {
    setRandomWordIndex(Math.floor(Math.random() * wordList.length));
  };
  return (
    <div className="relative flex text-center flex-col  bg-light-50 shadow-lg bg-clip-border rounded-lg w-72">
      <div className="px-6 pt-8 pb-4">
        <h5 className=" gradient-text mb-2 text-xl antialiased font-bold leading-snug tracking-normal text-dark-950">
          Word to Practice
        </h5>
        <p className="text-base antialiased font-semibold leading-relaxed text-primary-600 py-1">
          {randomWord?.original} <br />
          <span className="text-sm font-light text-dark-800">
            {randomWord?.translation}
          </span>
        </p>
      </div>
      <div className="pb-8 mx-auto">
        <button
          className="align-middle select-none font-bold text-center  duration-200 transition-all text-xs py-3 px-6 rounded-lg bg-primary-600 text-white shadow-md shadow-primary-950/20 hover:shadow-lg hover:shadow-primary-600/20 focus:opacity-[0.9] active:opacity-[0.85] active:shadow-none"
          type="button"
          onClick={updateRandomWordIndex}
        >
          Change Word
        </button>
      </div>
    </div>
  );
};

export default RandomWordCard;
