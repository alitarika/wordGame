import React from "react";
import { enqueueSnackbar } from "notistack";

const Home = () => {
  const handleClick = () => {
    enqueueSnackbar("Snack Bar Created", {
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
    <div className="bg-primary size-96">
      Home
      <button onClick={handleClick}>Click me!</button>
      <button onClick={handleCl}>---CL!</button>
    </div>
  );
};

export default Home;
