import { ThemeContext, UserContext } from "../contexts/main.context";
import { Footer } from "./footer"
import { Header } from "./header"

interface types {
  children: JSX.Element[] | JSX.Element;
}
export const Layout =({children}: types)=> {
  return(
    <ThemeContext.Consumer>
      {theme => (
        <UserContext.Consumer>
          {user => (
            <div id="page-content" className={`theme-${theme}`}>
              <Header userType={user.name}/>
              <main id="main-content">
                {children}
              </main>
              <Footer userType={user.name}/>
            </div>
          )}
        </UserContext.Consumer>
      )}
    </ThemeContext.Consumer>
  )
}