import { useEffect, useContext } from "react";
import RandomWordCard from "../../components/RandomWordCard";
import { UserContext } from "../../contexts/UserContext";

const Home = () => {
  useEffect(() => {
    document.title = "Home";
  });

  return (
    <div className="flex-col">
      <RandomWordCard />
      {/* Your mistaken words/total words
      Your mistaken word list: ... */}
    </div>
  );
};

export default Home;
