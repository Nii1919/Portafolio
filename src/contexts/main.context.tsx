import {useState} from 'react';
import { createContext, useContext} from "react";

const MainContext = createContext({})
export const useMainContext =()=> useContext(MainContext)

interface types {
  children: JSX.Element[] | JSX.Element;
}
export const MainContextProvider =({children}: types)=> {

  const [dark, setDark] = useState<boolean>(false);

  <MainContext.Provider value={{dark, setDark}}>
    {children}
  </MainContext.Provider>
}