import { useEffect } from "react";
import { Link } from "react-router-dom";
import RandomWordCard from "../../components/RandomWordCard";
import CreateWord from "./CreateWord";
import WordCardSkeleton from "../../components/WordCardSkeleton";
import WordCard from "../../components/WordCard";
import GameCard from "../../components/GameCard";
import logo from "../../assets/logo.svg";

const Home = () => {
  useEffect(() => {
    document.title = "Word Game";
  }, []);

  return (
    <div className="flex-col">
      <h1 className="gradient-text text-[10vw] md:text-[8vw] lg:text-[8vw] xl:text-[7vw] text-balance text-center p-2 drop-shadow-lg custom-text-shadow mb-4">
        <img
          className=" inline-block size-[10vw] md:size-[8vw] lg:size-[8vw] xl:size-[7vw] -mt-[1vh] md:-mt-[2vh] mr-[1vh] md:mr-[2vh] shadow-custom shadow-primary rounded-full bg-primary opacity-90"
          src={logo}
        />
        Practice Your OWN Words with Word Game
      </h1>
      <div className="home-col flex-col-reverse md:flex-row">
        <div className="splash"></div>
        <div className="home-row-p">
          <p>
            <img
              src={logo}
              alt="Logo"
              className="float-left bg-primary size-[48px] rounded-r-full mr-2"
            />
            You can create your word/translation pairs from Create Word Page.
            You can also access the page by pressing{" "}
            <span className="key bg-dark-50 border border-dark-300 shadow-sm shadow-dark">
              C
            </span>{" "}
            +{" "}
            <span className="key bg-dark-50 border border-dark-300 shadow-sm shadow-dark">
              W
            </span>{" "}
            at the same time once you are logged in. Do not worry if you have
            made a typo, you can modify the word easily later.
          </p>
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
            <div className=" h-px w-full bg-gradient-to-r from-light-50 via-light-200/90 to-light-50"></div>
          </div>
        </div>
        <div className="home-row-p">
          <p>
            <img
              src={logo}
              alt="Logo"
              className="float-left bg-primary size-[48px] rounded-r-full mr-2"
            />{" "}
            The words you have created will be saved in your personal word list.
            In this list you can see each of your words, how many words you have
            as well as if you answered the word correctly or incorrectly the
            last time you have played Word Game. You can navigate to your word
            list by pressing{" "}
            <span className="key bg-dark-50 border border-dark-300 shadow-sm shadow-dark">
              W
            </span>{" "}
            +{" "}
            <span className="key bg-dark-50 border border-dark-300 shadow-sm shadow-dark">
              L
            </span>{" "}
            at the same time.
          </p>
        </div>
      </div>
      <div className="home-col flex-col-reverse md:flex-row">
        <div className="splash"></div>
        <div className="home-row-p">
          <p>
            <img
              src={logo}
              alt="Logo"
              className="float-left bg-primary size-[48px] rounded-r-full mr-2"
            />{" "}
            In Word Game, word will appear on orange box in the middle and you
            will answer which one is the correct translation of the word. You
            may use numbers to answer. On correct answer background will flash
            green and on wrong answer red. Then, new set of words will appear on
            your page. Navigate to Word Game by pressing{" "}
            <span className="key bg-dark-50 border border-dark-300 shadow-sm shadow-dark">
              W
            </span>{" "}
            +{" "}
            <span className="key bg-dark-50 border border-dark-300 shadow-sm shadow-dark">
              G
            </span>{" "}
            at the same time.
          </p>
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
            <img
              src={logo}
              alt="Logo"
              className="float-left bg-primary size-[48px] rounded-r-full mr-2"
            />{" "}
            Everytime you visit your homepage, you will see a random word from
            your word list with the word and its translation. You can press
            'Change Word' to get a new word/translation pair.
          </p>
        </div>
      </div>

      <div className="home-col flex-col-reverse md:flex-row">
        <div className="splash"></div>
        <div className="home-row-p">
          <p>
            <img
              src={logo}
              alt="Logo"
              className="float-left bg-primary size-[48px] rounded-r-full mr-2"
            />{" "}
            You will also see all the words you answered wrong in your homepage
            to make you aware of the words you have failed to recall correctly.
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
      <div className="text-center text-lg text-primary-950">
        <Link to="/register">
          Register to Word Game by{" "}
          <span className="text-primary hover:text-primary-600 active:text-primary-600">
            clicking here
          </span>
        </Link>
        !
      </div>
    </div>
  );
};

export default Home;
