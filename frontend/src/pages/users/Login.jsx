import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts/UserContext.jsx";
import { loginUser } from "../../controllers/userControllers.js";
import { useNavigate } from "react-router-dom";

const Login = () => {
  // Set html title on the first render of page/ on mount
  useEffect(() => {
    document.title = "Log In";
  }, []);

  const navigate = useNavigate();

  const { setUser } = useContext(UserContext);

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await loginUser(formData.username, formData.password);
      setUser(formData.username);
      navigate("/");
    } catch (error) {
      setError(error.message);
      console.log(error);
    }
  };
  return (
    <div>
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
      {error && <p>{error}</p>}
    </div>
  );
};

export default Login;
