import { Link, NavLink } from "react-router-dom";
interface Footer {
  userType: string
  children?: JSX.Element[] | JSX.Element;
}
export const Footer =({userType}:Footer)=> {
  return(
    <footer id="page-footer" className="py-6">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-6 col-sm-2">
            <Link to="/">logo.</Link>    
          </div>
          <div className="col-xs-6 col-sm-10">
            <div className="flex justify-end">
              <p className="mx-4">Created with &#10084; by: <span className="">Nick A. Flores</span></p>
            </div>
          </div>
        </div>
      </div>    
    </footer>
  )
}