import React, { useContext } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";

const Layout = () => {
  const { user } = useContext(UserContext);
  return (
    <>
      <div className="w-full h-16 bg-dark text-light-100">user: {user}</div>
      <Outlet />
    </>
  );
};

export default Layout;
