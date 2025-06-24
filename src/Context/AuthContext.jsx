import { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({
    Name: "",
    password: "",
  });

  function login(newUser) {
    setUser(newUser);
  }

  function logout() {
    setUser({
      Name: "",
      password: ""
    });
  }


  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export {AuthProvider};
