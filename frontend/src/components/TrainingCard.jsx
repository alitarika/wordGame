import React from "react";

const TrainingCard = ({ children, onClick }) => {
  return (
    <div
      onClick={onClick}
      role="button"
      tabIndex={0}
      className=" active:bg-dark-950 w-40 h-24 bg-gradient-to-bl from-dark-950 to-dark-600 hover:from-dark-900 hover:to-dark-500 shadow-inner shadow-dark-500 text-light p-2 active:from-primary-950 active:to-dark-600 text-center rounded-lg"
    >
      <p className="pt-7">{children}</p>
    </div>
  );
};

export default TrainingCard;
