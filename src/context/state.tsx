import { createContext, useContext, useState } from "react";
import createPersistedState from "use-persisted-state";

const AppContext = createContext(null);
const useTokenState = createPersistedState("token");

export function AppWrapper({ children }) {
  const [token, settoken] = useTokenState(null);
  const [user, setuser] = useState<User>(null);

  return (
    <AppContext.Provider value={{ token, settoken, user, setuser }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext(): {
  user: User,
  token: string,
  setuser: Function,
  settoken: Function,
} {
  return useContext(AppContext);
}
