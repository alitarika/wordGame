import { useState, createContext } from "react";

// Create user context
export const UserContext = createContext();

const UserProvider = ({ children }) => {
  // user state that will be sent to context
  const [user, setUser] = useState(localStorage.getItem("username"));

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
