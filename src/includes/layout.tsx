import { Footer } from "./footer"
import { Header } from "./header"

interface types {
  children: JSX.Element[] | JSX.Element;
}
export const Layout =({children}: types)=> {
  return(
    <div id="page-content">
      <Header/>
      <div id="main-content">
        {children}
      </div>
      <Footer/>
    </div>
  )
}