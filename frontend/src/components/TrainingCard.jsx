import React from "react";

const TrainingCard = ({ children }) => {
  return (
    <div>
      <div className="h-14 max-w-[35%] w-40 bg-dark shadow-inner shadow-light text-light p-2 py-4 text-center rounded-lg">
        {children}
      </div>
    </div>
  );
};

export default TrainingCard;
