import React, { useState } from 'react';

export const ThemeContext = React.createContext('dark');
export const UserContext = React.createContext({ name: 'admin' });
interface types {
  children: JSX.Element[] | JSX.Element;
}
export const MainContextProvider = ({children}: types)=> {
  
  const [signedInUser, setSignedInUser] = useState<any>()
  const [theme, setTheme] = useState<any>()
  
  return (
    <ThemeContext.Provider value={theme}>
      <UserContext.Provider value={signedInUser}>       
        {children}
      </UserContext.Provider>
    </ThemeContext.Provider>
  )
}