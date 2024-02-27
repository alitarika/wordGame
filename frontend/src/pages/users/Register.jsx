import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts/UserContext.jsx";
import { registerUser } from "../../controllers/userControllers.js";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  // Set document title on the first render of page/ on mount as 'Register'
  useEffect(() => {
    document.title = "Register";
  }, []);

  // To access navigation functions init useNavigation hook
  const navigate = useNavigate();

  // Parse setUser setter from user context
  const { setUser } = useContext(UserContext);

  // Form Data state
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    passwordConfirm: "",
  });

  // Error state to store error message if any
  const [error, setError] = useState("");

  // Handle Function for login form submission
  const handleRegister = async (e) => {
    // Prevent default behaviour of form submission
    e.preventDefault();
    try {
      // Api call to /api/users/register
      await registerUser(
        formData.username,
        formData.password,
        formData.passwordConfirm
      );
      // Set user state of user context as the users username
      setUser(formData.username);
      // Navigate to homepage on successful register
      navigate("/");
    } catch (error) {
      setError(error.message); // set error state as state message string
      console.log(error); // Log the error
    }
  };
  return (
    <section className="form-card">
      <h1 className="form-title">Create an account</h1>
      <form onSubmit={handleRegister}>
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
        <input
          className="form-input"
          type="password"
          placeholder="Confirm Password"
          name="passwordConfirm"
          id="passwordConfirm"
          value={formData.passwordConfirm}
          onChange={(e) =>
            setFormData({ ...formData, passwordConfirm: e.target.value })
          }
        />
        <button className="form-btn">Register</button>
      </form>
      <div className="h-px w-full bg-gradient-to-r from-primary-50 via-primary-500/70 to-primary-50 mt-8 mb-6"></div>
      <p className=" text-sm px-1">
        Already have an account?{" "}
        <Link to="/login">
          Click to{" "}
          <span className="text-primary hover:opacity-90 active:text-primary-600">
            {" "}
            Log In!
          </span>
        </Link>
      </p>
      {/* Display error message if error state is not empty */}
      {error && <p>{error}</p>}
    </section>
  );
};

export default Register;
