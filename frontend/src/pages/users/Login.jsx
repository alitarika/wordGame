import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts/UserContext.jsx";
import { loginUser } from "../../controllers/userControllers.js";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  // Set document title on the first render of page/ on mount as 'Log In'
  useEffect(() => {
    document.title = "Log In";
  }, []);

  // To access navigation functions init useNavigation hook
  const navigate = useNavigate();

  // Parse setUser setter from user context
  const { setUser } = useContext(UserContext);

  // Form Data state
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  // Error state to store error message if any
  const [error, setError] = useState("");

  // Handle Function for login form submission
  const handleLogin = async (e) => {
    // Prevent default behaviour of form submission
    e.preventDefault();

    try {
      // Api call to /api/users/login
      await loginUser(formData.username, formData.password);
      // Set user state of user context as the users username
      setUser(formData.username);
      // Navigate to homepage on successful login
      navigate("/");
    } catch (error) {
      setError(error.message); // set error state as state message string
      console.log(error); // Log the error
    }
  };

  return (
    <section className="form-card">
      <h1 className="form-title">Log In to your account</h1>
      <form onSubmit={handleLogin}>
        <input
          className="form-input"
          type="text"
          autoFocus
          autoComplete="username"
          placeholder="Username"
          name="username"
          id="username"
          value={formData.username}
          onChange={(e) =>
            setFormData({ ...formData, username: e.target.value })
          }
        />
        <input
          className="form-input"
          type="password"
          placeholder="Password"
          name="password"
          id="password"
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
        />
        <button className="form-btn">Login</button>
      </form>
      <div className="h-px w-full bg-gradient-to-r from-primary-50 via-primary-500/70 to-primary-50 mt-8 mb-6"></div>
      <p className=" text-sm px-1">
        Don't have an account?{" "}
        <Link to="/register">
          Click to{" "}
          <span className="text-primary hover:opacity-90 active:text-primary-600">
            Register!
          </span>
        </Link>
      </p>

      {/* Display error message if error state is not empty */}
      {error && <p>{error}</p>}
    </section>
  );
};

export default Login;
