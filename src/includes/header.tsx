import React from 'react';
import { NavLink } from "react-router-dom";
import { useLinkClick } from '../contexts';
interface HeaderProptype {
  userType?: string
  children?: JSX.Element[] | JSX.Element;
}
export const Header: React.FC<HeaderProptype> =()=> {
  return(
    <header id="page-header" className="">
      <div className="container">
        <div className="row">
          <div className="col-xs-6 col-sm-2">
            <NavLink to="/" onClick={() => useLinkClick("/")}>logo.</NavLink>
          </div>
          <div className="col-xs-6 col-sm-10">
            <nav className="header-nav">
              <ul className="nav-list">
                <li className="nav-element"><NavLink onClick={() => useLinkClick("/about")} className={({ isActive }) => `${ isActive ? "active" : "" }`} to={`/about`}>About</NavLink></li>
                <li className="nav-element"><NavLink onClick={() => useLinkClick("/contact")} className={({ isActive }) => `${ isActive ? "active" : "" }`} to={`/contact`}>Contact</NavLink></li>
                <li className="nav-element"><NavLink onClick={() => useLinkClick("/projects")} className={({ isActive }) => `${ isActive ? "active" : "" }`} to={`/projects`}>Projects</NavLink></li>
              </ul>
            </nav>
          </div>
        </div>
      </div> 
    </header>
  )
}