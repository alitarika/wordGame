const GameCard = ({ children, number, onClick }) => {
  return (
    <div
      onClick={onClick}
      role="button"
      tabIndex={0}
      className="relative truncate p-2 text-center text-light rounded-lg w-40 h-24 my-3 md:my-6 bg-gradient-to-bl from-dark-950 to-dark-600 shadow-dark-500 game-card-hover-active"
    >
      <div
        title="Press this number on keybord to choose this option"
        className="absolute border opacity-90 bg-primary/30 border-primary w-5 h-5 right-2 top-2 text-xs rounded-full"
      >
        {number}
      </div>
      <div className="pt-7">{children}</div>
    </div>
  );
};

export default GameCard;
