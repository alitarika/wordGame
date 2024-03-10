import React, { useEffect } from "react";
import RandomWordCard from "../../components/RandomWordCard";

const Home = () => {
  useEffect(() => {
    document.title = "Home";
  });

  return (
    <div className="flex-col">
      <RandomWordCard />
    </div>
  );
};

export default Home;
