import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/words/Home";
import Login from "./pages/users/Login";
import Register from "./pages/users/Register";
import UsersWords from "./pages/words/UsersWords";
import CreateWord from "./pages/words/CreateWord";
import ModifyWord from "./pages/words/ModifyWord";
import WordGame from "./pages/words/WordGame";
import GuestHomePage from "./pages/words/GuestHomePage";
import GuestRoutes from "./routes/GuestRoutes";
import AuthRoutes from "./routes/AuthRoutes";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route element={<GuestRoutes />}>
            <Route path="home" element={<GuestHomePage />} />
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
          </Route>
          <Route element={<AuthRoutes />}>
            <Route index element={<Home />} />
            <Route path="userswords" element={<UsersWords />} />
            <Route path="create-word" element={<CreateWord />} />
            <Route path="modify-word" element={<ModifyWord />} />
            <Route path="wordgame" element={<WordGame />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
