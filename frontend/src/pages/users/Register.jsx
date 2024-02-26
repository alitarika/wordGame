import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts/UserContext.jsx";
import { registerUser } from "../../controllers/userControllers.js";
import { useNavigate } from "react-router-dom";

const Register = () => {
  // Set html title on the first render of page/ on mount
  useEffect(() => {
    document.title = "Register";
  }, []);

  const navigate = useNavigate();

  const { setUser } = useContext(UserContext);

  const [formData, setFormData] = useState({
    username: "",
    password: "",
    passwordConfirm: "",
  });

  const [error, setError] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      await registerUser(
        formData.username,
        formData.password,
        formData.passwordConfirm
      );
      setUser(formData.username);
      navigate("/");
    } catch (error) {
      setError(error.message);
      console.log(error);
    }
  };
  return (
    <div>
      <form onSubmit={handleRegister}>
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
        <input
          type="password"
          placeholder="Confirm Password"
          name="passwordConfirm"
          id="passwordConfirm"
          value={formData.passwordConfirm}
          onChange={(e) =>
            setFormData({ ...formData, passwordConfirm: e.target.value })
          }
        />
        <button>Register</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default Register;
