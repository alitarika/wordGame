import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts/UserContext.jsx";
import { loginUser } from "../../controllers/userControllers.js";
import { useNavigate } from "react-router-dom";

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
      <h1>qweQWEQDAS</h1>
      <form onSubmit={handleLogin}>
        <input
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
          type="password"
          placeholder="Password"
          name="password"
          id="password"
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
        />
        <button>Login</button>
      </form>
      {/* Display error message if error state is not empty */}
      {error && <p>{error}</p>}
    </section>
  );
};

export default Login;
