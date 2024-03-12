const GameCard = ({ children, onClick }) => {
  return (
    <div
      onClick={onClick}
      role="button"
      tabIndex={0}
      className="truncate active:bg-dark-950 w-40 h-24 my-3 md:my-6 bg-gradient-to-bl from-dark-950 to-dark-600 hover:from-dark-900 hover:to-dark-500 shadow-inner shadow-dark-500 text-light p-2 active:from-primary-950 active:to-dark-600 text-center rounded-lg"
    >
      <div className="pt-7">{children}</div>
    </div>
  );
};

export default GameCard;
