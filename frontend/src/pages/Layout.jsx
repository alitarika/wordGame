import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <div className="w-full h-16 bg-dark "></div>
      <Outlet />
    </>
  );
};

export default Layout;
