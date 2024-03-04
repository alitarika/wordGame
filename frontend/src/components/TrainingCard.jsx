import React from "react";

const TrainingCard = ({ children, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="hover:cursor-pointer hover:text-primary active:opacity-90 active:bg-dark-950 sm:w-40 w-32 h-24 bg-dark shadow-inner shadow-light text-light p-2  text-center rounded-lg"
    >
      <p className="pt-7">{children}</p>
    </div>
  );
};

export default TrainingCard;
