import { createContext, useEffect, useState } from "react";

const UserContext = createContext();

export function UserProvider({ children }) {
  const localData = JSON.parse(localStorage.getItem("user"));
  const [user, setUser] = useState(localData);

  const [dropdown, setDropdown] = useState(false);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  return (
    <UserContext.Provider value={{ user, setUser, dropdown, setDropdown }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserContext;
