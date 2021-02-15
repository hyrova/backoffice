import { createContext, useContext, useEffect, useState } from "react";
import createPersistedState from 'use-persisted-state';


const AppContext = createContext(null);
const useCounterState = createPersistedState('count');

export function AppWrapper({ children }) {
  const [user, setuser] = useState({});
  const [count, setcount] = useCounterState(0);

  return (
    <AppContext.Provider value={{ user, setuser, count, setcount }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
