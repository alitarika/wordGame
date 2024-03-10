import { MdDeleteForever } from "react-icons/md";
import { MdChangeCircle } from "react-icons/md";
import { Link } from "react-router-dom";

const WordCardSkeleton = () => {
  return (
    <div className="relative">
      <button className="absolute rounded-full size-5 text-primary-700 top-5 left-5  hover:size-7 hover:top-4 hover:left-4">
        <MdDeleteForever className="mx-auto text-xl hover:text-3xl" />
      </button>
      <Link title="Modify Word">
        <MdChangeCircle className="absolute size-5 hover:size-7 hover:right-4 hover:top-4 text-dark bg-light rounded-full top-5 right-5" />
      </Link>
      <div className=" h-px w-full bg-gradient-to-r from-light-50 via-light-200/90 to-light-50"></div>
      <div className="p-2 text-center hover:shadow-custom hover:cursor-pointer rounded-lg hover:shadow-light hover:bg-[linear-gradient(90deg,#e7e7d8,5%,#f7f7f3,95%,#e7e7d8)]">
        <p className="px-8 font-bold truncate rounded-lg bg-dark-900/50 h-3 w-36 mx-auto mt-2 animate-pulse"></p>
        <p className="px-4 font-bold truncate rounded-lg bg-dark-900/40 h-2 w-24 mx-auto mt-3 mb-1 animate-pulse"></p>
      </div>
    </div>
  );
};

export default WordCardSkeleton;
