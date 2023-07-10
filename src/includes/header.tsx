import React from 'react';
import { Link, NavLink } from "react-router-dom";
interface Header {
  userType?: string
  children?: JSX.Element[] | JSX.Element;
}
export const Header =({userType}:Header)=> {
  return(
    <header id="page-header" className="">
      <div className="container">
        <div className="row">
          <div className="col-xs-6 col-sm-2">
            <Link to="/">logo.</Link>    
          </div>
          <div className="col-xs-6 col-sm-10">
            <nav className="header-nav">
              <ul className="nav-list">
                <li className="nav-element"><NavLink className={({ isActive }) => `${ isActive ? "active" : "" }`} to={`/`}>home</NavLink></li>
                <li className="nav-element"><NavLink className={({ isActive }) => `${ isActive ? "active" : "" }`} to={`/about`}>about</NavLink></li>
                <li className="nav-element"><NavLink className={({ isActive }) => `${ isActive ? "active" : "" }`} to={`/contact`}>contact</NavLink></li>
              </ul>
            </nav>
          </div>
        </div>
      </div> 
    </header>
  )
}