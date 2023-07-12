import React from 'react';
import { NavLink } from "react-router-dom";
import { useLinkClick } from '../contexts';
interface FooterPropType {
  userType?: string
  children?: JSX.Element[] | JSX.Element;
}
export const Footer: React.FC<FooterPropType> =()=> {

  return(
    <footer id="page-footer" className="py-6">
      <div className="container">
        <div className="row">
          <div className="col-xs-6 col-sm-2">
            <NavLink to="/" onClick={() => useLinkClick("/")}>logo.</NavLink>
          </div>
          <div className="col-xs-6 col-sm-10">
            <p className="copyright">Created with &#10084; by: <span className="">Nick A. Flores</span></p>
          </div>
        </div>
      </div>    
    </footer>
  )
}