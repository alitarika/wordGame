import React, { useContext } from "react";
import { WordListContext } from "../../contexts/WordListContext";

const Home = () => {
  const { wordList } = useContext(WordListContext);
  return (
    <div className="bg-primary size-32 flex flex-col">
      Home
      <div>
        {wordList.map((a) => (
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
