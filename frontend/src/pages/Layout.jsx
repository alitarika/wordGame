import React, { useContext } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import { logoutUser } from "../controllers/userControllers.js";
import logo from "../assets/logo.svg";
import { enqueueSnackbar } from "notistack";

const Layout = () => {
  // Get user state and user setter function from the user context
  const { user, setUser } = useContext(UserContext);

  // To access navigation functions init useNavigation hook
  const navigate = useNavigate();

  const handleLogout = () => {
    if (confirm("Do you really want to Log out?")) {
      logoutUser();
      setUser(null);
      navigate("/");
      enqueueSnackbar("Come back soon! Your Words will miss you!", {
        variant: "welcome",
        className: "bg-primary-700 text-light",
      });
    }
  };

  return (
    <>
      <header className="bg-dark text-light-50 w-full">
        <nav className="flex items-center justify-between px-4 py-2">
          <Link className="nav-link-logo" title="Homepage" to="/">
            <img src={logo} />
          </Link>
          {user ? (
            <div>
              <Link className="nav-link-text" title="words" to="/userswords">
                words
              </Link>
              <button
                className="nav-link-text"
                title="Log Out"
                to="/"
                onClick={handleLogout}
              >
                Log Out
              </button>
            </div>
          ) : (
            <div className="flex gap-2">
              <Link className="nav-link-text" title="Log In" to="/login">
                Log In
              </Link>
              <Link className="nav-link-text" title="Register" to="/register">
                Register
              </Link>
            </div>
          )}
        </nav>
      </header>
      <div className="px-4 py-8 w-full">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
