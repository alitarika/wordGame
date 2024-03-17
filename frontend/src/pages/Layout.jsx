import { useContext, useState, useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import { logoutUser } from "../controllers/userControllers.js";
import logo from "../assets/logo.svg";
import { enqueueSnackbar } from "notistack";
import { MdAddCircle } from "react-icons/md";
import { useKeyShortcut } from "../hooks/useKeyShortcut.js";

const Layout = () => {
  // Get user state and user setter function from the user context
  const { user, setUser } = useContext(UserContext);

  // To access navigation functions init useNavigation hook
  const navigate = useNavigate();

  useKeyShortcut(user, navigate);

  const handleLogout = () => {
    if (confirm("Do you really want to Log out?")) {
      logoutUser();
      setUser(null);
      navigate("/home");
      enqueueSnackbar("Come back soon! Your Words will miss you!", {
        variant: "welcome",
        className: "!bg-primary-700 !text-light",
      });
    }
  };

  return (
    <>
      <header className="bg-dark text-light w-full">
        <nav className="flex items-center justify-between px-4 py-2 max-w-screen-xl mx-auto">
          <Link
            className="nav-link-logo"
            title="Homepage"
            to={user ? "/" : "/home"}
          >
            <img src={logo} />
          </Link>
          {user ? (
            <div className="flex items-center">
              <Link
                className="nav-link-icon"
                title="Add new word (Press 'W' and 'C')"
                to="/create-word"
              >
                <MdAddCircle />
              </Link>
              <Link
                className="nav-link-text"
                title="Word Game (Press 'W' and 'G')"
                to="/wordgame"
              >
                Game
              </Link>
              <Link
                className="nav-link-text"
                title="Word List (Press 'W' and 'L')"
                to="/userswords"
              >
                List
              </Link>
              <button
                className="nav-link-text"
                title="Log Out"
                to="/home"
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
      <div className="sm:p-8 p-4 mx-auto w-full max-w-screen-xl">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
