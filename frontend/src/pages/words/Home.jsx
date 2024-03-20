import { useEffect, useContext } from "react";
import RandomWordCard from "../../components/RandomWordCard";
import { WordListContext } from "../../contexts/WordListContext";
import WordCard from "../../components/WordCard";
import WordCardSkeleton from "../../components/WordCardSkeleton";

const Home = () => {
  useEffect(() => {
    document.title = "Home";
  }, []);

  const { wordList, loading } = useContext(WordListContext);

  const mistakenWordList = wordList.filter((w) => w.mistaken);

  return (
    <div className="flex-col mt-4">
      <RandomWordCard />
      {loading ? (
        <div className="max-w-[440px] bg-light-50 p-4 m-auto rounded-lg mt-12 shadow-custom">
          <h2 className="text-center mx-auto my-4 text-primary rounded-full w-52 h-5 bg-primary/60 animate-pulse"></h2>
          <h2 className="text-center mx-auto -mt-1 mb-3 text-primary rounded-full w-64 h-4 bg-primary/40 animate-pulse"></h2>
          {[...Array(20)].map((_, index) => (
            <WordCardSkeleton key={index} />
          ))}
        </div>
      ) : (
        <>
          {mistakenWordList.length > 0 ? (
            <div className="max-w-[440px] bg-light-50 p-4 m-auto rounded-lg mt-12 shadow-custom">
              <h2 className="text-center my-3 text-primary">
                You answered{" "}
                <span className=" font-bold text-lg">
                  {mistakenWordList.length}
                </span>{" "}
                words wrong
              </h2>
              <h2 className="text-center text-sm mb-3 -mt-2 text-primary">
                (Find those words in word game to correct)
              </h2>
              {mistakenWordList.map((w) => (
                <WordCard word={w} key={w._id}></WordCard>
              ))}
            </div>
          ) : (
            <div className="max-w-[440px] bg-light-50 p-4 m-auto rounded-lg mt-12 shadow-custom">
              <h2 className="text-center my-3 text-primary">
                You do not have a mistaken word yet! <br /> The words you
                answered wrong will appear here!
              </h2>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Home;
