import { createContext, useContext, useState } from "react";

const AppContext = createContext(null);

export function AppWrapper({ children }) {
  const [user, setuser] = useState({});
  const [count, setcount] = useState(0);

  return (
    <AppContext.Provider value={{ user, setuser, count, setcount }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
