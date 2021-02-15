import { createContext, useContext, useEffect, useState } from "react";
import createPersistedState from "use-persisted-state";

const AppContext = createContext(null);
const useTokenState = createPersistedState("token");
const useUserState = createPersistedState("user");

export function AppWrapper({ children }) {
  const [token, settoken] = useTokenState(null);
  const [user, setuser] = useState({});

  return (
    <AppContext.Provider value={{ token, settoken, user, setuser }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
