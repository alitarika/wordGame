import { useEffect } from "react";
import { Link } from "react-router-dom";
import RandomWordCard from "../../components/RandomWordCard";
import CreateWord from "./CreateWord";
import WordCardSkeleton from "../../components/WordCardSkeleton";
import WordCard from "../../components/WordCard";
import GameCard from "../../components/GameCard";

const Home = () => {
  useEffect(() => {
    document.title = "Word Game";
  });

  return (
    <div className="flex-col">
      <h1 className="gradient-text text-[5vh] md:text-[7vh] lg:text-[11vh] xl:text-[14vh] text-balance text-center p-2 drop-shadow-lg custom-text-shadow mb-4">
        Practice Your OWN Words with Word Game
      </h1>
      <div className="home-col flex-col-reverse md:flex-row">
        <div className="splash"></div>
        <div className="home-row-p">
          <p>Create Your Words First</p>
        </div>
        <div className="home-row-component">
          <CreateWord disabled />
        </div>
      </div>
      <div className="home-col flex-col md:flex-row">
        <div className="splash right-0"></div>
        <div className="home-row-component">
          <div className="max-w-[440px] min-w-[300px] bg-light-50 p-4 m-auto rounded-lg shadow-custom">
            <h2 className="text-center my-3 text-primary">
              <span className="font-bold text-lg">XXX</span> words
            </h2>
            <WordCardSkeleton />
            <WordCardSkeleton />
            <WordCardSkeleton />
          </div>
        </div>
        <div className="home-row-p">
          <p>Your words will be saved in your personal word list.</p>
        </div>
      </div>
      <div className="home-col flex-col-reverse md:flex-row">
        <div className="splash"></div>
        <div className="home-row-p">
          <p>Create Your Words First</p>
        </div>
        <div className="home-row-component">
          <div className="relative grid grid-cols-2 gap-y-4 md:gap-y-2 justify-items-center max-w-xl mx-auto">
            <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 -z-10">
              <div className="truncate w-40 h-24 bg-gradient-to-bl from-primary-600 to-primary-400   shadow-inner shadow-primary-300 text-light p-2 text-center rounded-lg">
                <div className="pt-7">
                  <p className="px-4 text-center truncate ">Hallo</p>
                </div>
              </div>
            </div>
            <GameCard number={1}>
              <p className="text-red-400">Good Bye</p>
            </GameCard>
            <GameCard number={2}>
              <p className="text-red-400">Welcome</p>
            </GameCard>
            <GameCard number={3}>
              <p className="text-green-400">Hello</p>
            </GameCard>
            <GameCard number={4}>
              <p className="text-red-400">World</p>
            </GameCard>
          </div>
        </div>
      </div>
      <div className="home-col flex-col md:flex-row">
        <div className="splash right-0"></div>

        <div className="home-row-component">
          <RandomWordCard />
        </div>
        <div className="home-row-p">
          <p>
            You can get a random word from your Word List that you have created
          </p>
        </div>
      </div>

      <div className="home-col flex-col-reverse md:flex-row">
        <div className="splash"></div>
        <div className="home-row-p">
          <p>
            You can get a random word from your Word List that you have created
          </p>
        </div>

        <div className="home-row-component">
          <div className="max-w-[440px] bg-light-50 p-4 m-auto rounded-lg shadow-custom">
            <h2 className="text-center my-3 text-primary">
              You answered <span className=" font-bold text-lg">3</span> words
              wrong
            </h2>
            <h2 className="text-center text-sm mb-3 -mt-2 text-primary">
              (Find those words in word game to correct)
            </h2>
            <WordCard
              word={{ mistaken: true, original: "woord", translation: "word" }}
              disabled
            />
            <WordCard
              word={{ mistaken: true, original: "spel", translation: "game" }}
              disabled
            />
            <WordCard
              word={{ mistaken: true, original: "leuk", translation: "fun" }}
              disabled
            />
            <div className=" h-px w-full bg-gradient-to-r from-light-50 via-light-200/90 to-light-50"></div>
          </div>
        </div>
      </div>
      <div className="text-center text-lg">
        <Link to="/register">
          Register to Word Game by{" "}
          <span className="text-primary hover:opacity-90 active:text-primary-600">
            clicking here
          </span>
        </Link>
        !
      </div>
    </div>
  );
};

export default Home;
