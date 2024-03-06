import React, { useEffect } from "react";
import RandomWordCard from "../../components/RandomWordCard";

const Home = () => {
  useEffect(() => {
    document.title = "Homepage";
  });

  return (
    <div className="flex-col">
      <h1 className="gradient-text text-[10vmin] text-balance text-center p-4 ">
        Practicing Your Words Has Never Been This Fun
      </h1>
      <RandomWordCard />
    </div>
  );
};

export default Home;
