import { Link, NavLink } from "react-router-dom";
interface Header {
  userType: string
  children?: JSX.Element[] | JSX.Element;
}
export const Header =({userType}:Header)=> {
  return(
    <header id="page-header" className="py-6">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-6 col-sm-2">
            <Link to="/">logo.</Link>    
          </div>
          <div className="col-xs-6 col-sm-10">
            <nav>
              <ul className="flex justify-end">
                <li className=""><NavLink className={({ isActive }) => `py-2 mx-4 ${ isActive ? "pointer-events-none" : "" }`} to={`/`}>home</NavLink></li>
                <li className=""><NavLink className={({ isActive }) => `py-2 mx-4 ${ isActive ? "pointer-events-none" : "" }`} to={`/about`}>about</NavLink></li>
                <li className=""><NavLink className={({ isActive }) => `py-2 mx-4 ${ isActive ? "pointer-events-none" : "" }`} to={`/contact`}>contact</NavLink></li>
              </ul>
            </nav>
          </div>
        </div>
      </div> 
    </header>
  )
}