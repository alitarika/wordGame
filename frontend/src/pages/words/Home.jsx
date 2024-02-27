import React from "react";
import { enqueueSnackbar } from "notistack";

const Home = () => {
  const handleClick = () => {
    enqueueSnackbar("Snack Bar Delete", {
      variant: "success",
    });
  };
  const handleCl = () => {
    enqueueSnackbar("Snack Bar Delete", {
      variant: "delete",
      className: "bg-red-500",
    });
  };
  return (
    <div className="bg-primary size-32 flex flex-col">
      Home
      <button onClick={handleClick}>Click me!</button>
      <button onClick={handleCl}>---CL!</button>
    </div>
  );
};

export default Home;
