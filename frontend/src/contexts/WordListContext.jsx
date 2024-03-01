import { createContext, useState, useEffect, useContext } from "react";
import { UserContext } from "./UserContext";
import { getUserWordList } from "../controllers/wordListControllers";
import { enqueueSnackbar } from "notistack";

// Create word context to share posts throughout site/app
export const WordListContext = createContext();

const WordListProvider = ({ children }) => {
  console.log();
  // word list state that will be shared to context
  const [wordList, setWordList] = useState([]);
  const [loading, setLoading] = useState(true);

  // parse user from context
  const { user } = useContext(UserContext);

  // Fetch and set wordList on login/register(if user)
  useEffect(() => {
    if (user) {
      getUserWordList()
        .then((data) => {
          setWordList(data);
          setLoading(false);
          console.log("wordList is fetched:", data);
        })
        .catch((error) => {
          enqueueSnackbar(`Failed to fetch your words: ${error.message}`, {
            variant: "error",
          });
          console.error("Failed to fetch user's words:", error.message);
        });
    } else {
      setWordList([]);
      setLoading(false);
      console.log("User logged out. word list is cleared.");
    }
  }, [user]); // Put user in dependency array to fetch on login and clear on logout

  // Provider wrapper for wordlist context
  return (
    <WordListContext.Provider value={{ wordList, setWordList, loading }}>
      {children}
    </WordListContext.Provider>
  );
};

export default WordListProvider;
