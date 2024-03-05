import React, { useEffect } from "react";
import RandomWordCard from "../../components/RandomWordCard";

const Home = () => {
  useEffect(() => {
    document.title = "Homepage";
  });

  return (
    <div>
      <h1 className="gradient-text">
        ASDASDASD ASDASD <br />
        ASDASD ASDASD
      </h1>
      <RandomWordCard />
    </div>
  );
};

export default Home;
