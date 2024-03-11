import React, { useEffect } from "react";
import RandomWordCard from "../../components/RandomWordCard";
import CreateWord from "./CreateWord";
import WordCardSkeleton from "../../components/WordCardSkeleton";

const Home = () => {
  useEffect(() => {
    document.title = "Word Game";
  });

  return (
    <div className="flex-col border-2 border-black">
      <h1 className="gradient-text text-[10vmin] text-balance text-center p-4 drop-shadow-lg custom-text-shadow border-2 border-black">
        Practicing Your Words Has Never Been This Fun - TRY
      </h1>
      <div className="border-2  border-black flex flex-col-reverse sm:flex-row">
        <div className="border-2 border-black">
          <p>text</p>
        </div>
        <div className="sm:w-[440px]">
          <CreateWord disabled />
        </div>
      </div>
      <div>
        <div className="max-w-[440px] bg-light-50 p-4 m-auto rounded-lg">
          <h2 className="text-center my-3 text-primary">
            <span className=" font-bold text-lg">XXX</span> words
          </h2>
          <WordCardSkeleton />
          <WordCardSkeleton />
          <WordCardSkeleton />
        </div>
        <div>
          <p>asd</p>
        </div>
      </div>
      <div className="sm:flex  sm:m-2 gap-10 border-2 border-black sm:justify-around">
        <div className="flex border-2 border-black">
          <div className="mx-auto border-2 border-black">
            <RandomWordCard />
          </div>
        </div>
        <div>
          <p>
            You can get a random word from your Word List that you have created
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
