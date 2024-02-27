import { createContext, useState } from "react";

// Create word context to share posts throughout site/app
export const WordListContext = createContext();

const WordListProvider = ({ children }) => {
  // word list state that will be shared to context
  const [wordList, setWordList] = useState([]);

  // Provider wrapper for wordlist context
  return (
    <WordListContext.Provider value={{ wordList, setWordList }}>
      {children}
    </WordListContext.Provider>
  );
};

export default WordListProvider;
