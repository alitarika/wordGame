import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/words/Home";
import Login from "./pages/users/Login";
import Register from "./pages/users/Register";
import UsersWords from "./pages/words/UsersWords";
import CreateWord from "./pages/words/CreateWord";
import ModifyWord from "./pages/words/ModifyWord";
import Training from "./pages/words/Training";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="userswords" element={<UsersWords />} />
          <Route path="create-word" element={<CreateWord />} />
          <Route path="modify-word" element={<ModifyWord />} />
          <Route path="training" element={<Training />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
