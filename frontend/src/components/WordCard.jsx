import React from "react";

const WordCard = ({ word }) => {
  const cardTextColorClassName = word.mistaken
    ? "text-primary-700 hover:bg-[linear-gradient(90deg,#f9cfaf,5%,#fef5ee,95%,#f9cfaf)]"
    : "hover:bg-[linear-gradient(90deg,#e7e7d8,5%,#f7f7f3,95%,#e7e7d8)]";
  return (
    <>
      <div className=" h-px w-full bg-gradient-to-r from-light-50 via-light-200/90 to-light-50"></div>
      <div
        className={`p-2 text-center hover:shadow-md hover:shadow-light hover:cursor-pointer rounded-lg ${cardTextColorClassName}`}
      >
        <p className="font-bold">{word.original}</p>
        <p className=" saturate-[.8] opacity-80 text-sm">{word.translation}</p>
      </div>
    </>
  );
};
// hover:bg-[linear-gradient(110deg,#f7f7f3,25%,#e7e7d8,75%,#f7f7f3)]
export default WordCard;
