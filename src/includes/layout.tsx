import React from 'react';
import { Footer } from "./footer"
import { Header } from "./header"

interface types {
  children: JSX.Element[] | JSX.Element;
}
export const Layout =({children}: types)=> {
  return(
    <div id="page-content">
      <Header/>
      <main id="main-content">
        {children}
      </main>
      <Footer/>
    </div>
  )
}