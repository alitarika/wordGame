import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "../src/assets/app.css";
import { SnackbarProvider } from "notistack";
import UserProvider from "./contexts/UserContext.jsx";
import WordListProvider from "./contexts/WordListContext.jsx";
import { MdDeleteForever } from "react-icons/md";
import { PiHandWavingFill } from "react-icons/pi";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SnackbarProvider
      autoHideDuration={4000}
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      maxSnack={2}
      className="text-light"
      iconVariant={{
        delete: <MdDeleteForever className="mr-1.5 size-[18.67px]" />,
        welcome: <PiHandWavingFill className=" mr-2 size-[16.67px]" />,
      }}
    >
      <UserProvider>
        <WordListProvider>
          <App />
        </WordListProvider>
      </UserProvider>
    </SnackbarProvider>
  </React.StrictMode>
);
