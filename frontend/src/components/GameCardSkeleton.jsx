import GameCard from "./GameCard";

const GameCardSkeleton = () => {
  return (
    <GameCard>
      <div className="absolute border opacity-90 bg-primary/30 border-primary w-5 h-5 right-2 top-2 text-xs rounded-full animate-pulse">
        ?
      </div>
      <p className="px-4 font-bold truncate rounded-lg bg-light-50/40 h-3 w-24 mx-auto mt-2 mb-1 animate-pulse"></p>
    </GameCard>
  );
};

export default GameCardSkeleton;
