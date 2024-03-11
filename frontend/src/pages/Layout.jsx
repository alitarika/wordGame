import React, { useContext } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import { logoutUser } from "../controllers/userControllers.js";
import logo from "../assets/logo.svg";
import { enqueueSnackbar } from "notistack";
import { MdAddCircle } from "react-icons/md";

const Layout = () => {
  // Get user state and user setter function from the user context
  const { user, setUser } = useContext(UserContext);

  // To access navigation functions init useNavigation hook
  const navigate = useNavigate();

  const handleLogout = () => {
    if (confirm("Do you really want to Log out?")) {
      logoutUser();
      setUser(null);
      navigate("/home");
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
                title="Add new word"
                to="/create-word"
              >
                <MdAddCircle />
              </Link>
              <Link className="nav-link-text" title="wordgame" to="/wordgame">
                wordgame
              </Link>
              <Link className="nav-link-text" title="words" to="/userswords">
                wrd
              </Link>
              <button
                className="nav-link-text"
                title="Log Out"
                to="/home"
                onClick={handleLogout}
              >
                LogOut
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
      <div className="sm:p-8 p-4 mx-auto w-full">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
