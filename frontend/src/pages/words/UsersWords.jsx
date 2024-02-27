import { useContext, useEffect } from "react";
import { WordListContext } from "../../contexts/WordListContext.jsx";
import { getUserWordList } from "../../controllers/wordListControllers";

const UsersWords = () => {
  const { wordList, setWordList } = useContext(WordListContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getUserWordList();
        setWordList(data);
        console.log(data); // Log the fetched data instead of wordList which might not be updated immediately
      } catch (error) {
        console.error("Error fetching user word list:", error);
      }
    };

    fetchData(); // Call fetchData directly inside useEffect
  }, []); // Empty dependency array to run the effect only once on mount

  return (
    <div>
      {wordList.map((a) => (
        <div key={a._id}>
          <p>
            {a.original}-{a.translation}
          </p>
        </div>
      ))}
    </div>
  );
};

export default UsersWords;
