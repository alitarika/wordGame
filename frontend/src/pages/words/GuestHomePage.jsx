import React, { useEffect } from "react";
import RandomWordCard from "../../components/RandomWordCard";
import CreateWord from "./CreateWord";

const Home = () => {
  useEffect(() => {
    document.title = "Word Game";
  });

  return (
    <div className="flex-col border-2 border-black">
      <h1 className="gradient-text text-[10vmin] text-balance text-center p-4 drop-shadow-lg custom-text-shadow border-2 border-black">
        Practicing Your Words Has Never Been This Fun
      </h1>
      <div>
        <p> asd</p>
        <CreateWord disabled />
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
