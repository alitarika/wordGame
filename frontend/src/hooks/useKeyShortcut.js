import { useState, useEffect } from "react";

export const useKeyShortcut = (user, navigate) => {
  const [pressedKeys, setPressedKeys] = useState({
    c: false,
    w: false,
    l: false,
    g: false,
  });

  useEffect(() => {
    if (!user) {
      return;
    } // for performance when not logged in

    const downHandler = ({ key }) => {
      // Adjusted to check for 'l' and 'g' keys as well
      if (["c", "w", "l", "g"].includes(key)) {
        setPressedKeys((prevKeys) => ({ ...prevKeys, [key]: true }));
      }
    };

    const upHandler = ({ key }) => {
      if (["c", "w", "l", "g"].includes(key)) {
        setPressedKeys((prevKeys) => ({ ...prevKeys, [key]: false }));
      }
    };

    window.addEventListener("keydown", downHandler);
    window.addEventListener("keyup", upHandler);

    return () => {
      window.removeEventListener("keydown", downHandler);
      window.removeEventListener("keyup", upHandler);
    };
  }, [user]);

  useEffect(() => {
    if (user) {
      // Ensure user is logged in before allowing navigation
      if (pressedKeys.c && pressedKeys.w) {
        navigate("/create-word");
        setPressedKeys({ c: false, w: false, l: false, g: false });
      } else if (pressedKeys.w && pressedKeys.l) {
        navigate("/userswords");
        setPressedKeys({ c: false, w: false, l: false, g: false });
      } else if (pressedKeys.w && pressedKeys.g) {
        navigate("/wordgame");
        setPressedKeys({ c: false, w: false, l: false, g: false });
      }
    }
  }, [pressedKeys, navigate, user]);
};
