import { createContext, useContext, useState } from "react";

const getInitialUser = () => {
  const savedUser = localStorage.getItem('user');
  return savedUser?.isLoggedIn? JSON.parse(savedUser) : {
        name: "",
        isLoggedIn: false,
      };
};

const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(getInitialUser);

const login = (username) => {
    const updatedUser = {
      ...user,        
      name: username,     
      isLoggedIn: true,   
    }
    setUser(updatedUser)
    localStorage.setItem("user", JSON.stringify(updatedUser)); 
  };

  const logout = () => {
    const clearUser = {
      name: '',
      isLoggedIn : false,
    };
    setUser(clearUser);
    localStorage.removeItem("user");
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUserContext must be used within UserProvider");
  }
  return context;
};
