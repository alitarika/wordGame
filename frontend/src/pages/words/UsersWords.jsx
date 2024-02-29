import { useContext } from "react";
import { WordListContext } from "../../contexts/WordListContext.jsx";

const UsersWords = () => {
  const { wordList } = useContext(WordListContext);

  return (
    <div>
      <h1>Your words:</h1>
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
