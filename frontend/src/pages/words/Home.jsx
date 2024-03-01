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

  return (
    <div>
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
  // const [checked, setChecked] = useState(false);
  // return (
  //   <div className="App">
  //     Checked or not
  //     <input
  //       type="checkbox"
  //       onChange={(event) => setChecked(event.target.checked)}
  //     />
  //     <p>{checked ? "Yes" : "Not checked"}</p>
  //   </div>
  // );
};

export default Home;
