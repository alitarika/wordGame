import React from "react";

const WordCard = ({ word }) => {
  const cardBgClass = word.mistaken
    ? "bg-primary-100 hover:bg-primary-200"
    : "hover:bg-light-100";
  return (
    <>
      <div className="h-px w-full bg-gradient-to-r from-primary-50 via-primary-500/90 to-primary-50"></div>
      <div
        className={`p-2 text-center hover:cursor-pointer rounded-lg ${cardBgClass}`}
      >
        <p className="font-bold">{word.original}</p>
        <p className="text-dark-500 text-sm">{word.translation}</p>
      </div>
    </>
  );
};

export default WordCard;
