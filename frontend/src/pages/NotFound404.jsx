import { useEffect } from "react";
import { MdAssignmentReturn } from "react-icons/md";
import { Link } from "react-router-dom";

const NotFound404 = () => {
  useEffect(() => {
    document.title = "404 - Not Found";
  }, []);
  return (
    <div className="form-card text-center">
      The Page you are looking for does not exist.
      <Link to="/">
        Turn Back to{" "}
        <span className="text-primary hover:text-primary-600 active:saturate-[120%]">
          Home Page
        </span>
        .
      </Link>
      <Link to="/">
        <MdAssignmentReturn className="size-20 mx-auto mt-6 text-primary hover:text-primary-600 active:saturate-[120%]" />
      </Link>
    </div>
  );
};

export default NotFound404;
