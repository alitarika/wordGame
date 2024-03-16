import { useContext, useState, useEffect } from "react";
import { WordListContext } from "../contexts/WordListContext.jsx";

const RandomWordCard = () => {
  const { wordList, loading } = useContext(WordListContext);

  // Random word index state init as null
  const [randomWordIndex, setRandomWordIndex] = useState(null);

  // Derive random word based on current list (respects current sorting)
  useEffect(() => {
    if (wordList.length > 0) {
      setRandomWordIndex(Math.floor(Math.random() * wordList.length));
    }
  }, [wordList]);

  const randomWord = wordList[randomWordIndex];

  // Update random word index on specific action (e.g., button click)
  const updateRandomWordIndex = () => {
    setRandomWordIndex(Math.floor(Math.random() * wordList.length));
  };
  return (
    <>
      {loading ? (
        <div className="relative flex text-center flex-col  bg-light-50 shadow-custom bg-clip-border rounded-lg w-72 mx-auto">
          <div className="px-8 pt-8 pb-4 animate-pulse">
            <div className="block w-40 mx-auto py-4 h-5 mb-2 font-sans text-5xl antialiased font-semibold leading-tight tracking-normal bg-dark-900/50 rounded-lg text-inherit animate-pulse">
              &nbsp;
            </div>
            <div className="block w-32 mx-auto py-2 h-2 mt-4 mb-2 font-sans text-base antialiased font-light leading-relaxed bg-primary-600/50  rounded-lg text-inherit animate-pulse">
              &nbsp;
            </div>
            <div className="block w-24 mx-auto  py-2 h-2 mb-2 font-sans text-base antialiased font-light leading-relaxed bg-dark-900/30  rounded-lg text-inherit animate-pulse">
              &nbsp;
            </div>
          </div>
          <div className="pb-8 mx-auto animate-pulse">
            <div className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-5 px-16 rounded-lg text-light shadow-gray-900/10 hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none h-8 w-20 bg-primary-600/50 shadow-none hover:shadow-none animate-pulse">
              &nbsp;
            </div>
          </div>
        </div>
      ) : (
        <div className="relative flex text-center flex-col  bg-light-50 shadow-custom bg-clip-border rounded-lg w-72 mx-auto">
          <div className="px-6 pt-8 pb-4">
            <h5 className=" mb-2 text-xl antialiased font-bold leading-snug tracking-normal text-dark-900">
              Word to Practice
            </h5>
            <p className="text-base antialiased font-semibold leading-relaxed text-primary-600 py-1">
              {randomWord?.original || ":your word here:"} <br />
              <span className="text-sm font-light text-dark-900">
                {randomWord?.translation || ":translation here:"}
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
      )}
    </>
  );
};

export default RandomWordCard;
