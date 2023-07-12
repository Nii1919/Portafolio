import React, { createContext, useCallback, useContext, startTransition } from "react";

type ContextPropTypes = (path: string) => void;
const MainContext = createContext<ContextPropTypes | null>(null);

const MainContextProvider = ({ children }) => {
  const handleLinkClick = useCallback((path: string) => {
    startTransition(() => {
      router.navigate(path);
    });
  }, []);

  return (
    <MainContext.Provider value={handleLinkClick}>
      {children}
    </MainContext.Provider>
  );
};

const useLinkClick = (props) => useContext(MainContext);
export { MainContextProvider, useLinkClick };
