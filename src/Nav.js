import { Link, NavLink } from "react-router-dom";
import "./Nav.css";

//TODO: Do we need parent nav links or ul with li wrapped Links?
//TODO: Use NavLink comps here

/** Renders a nav bar with links to the homepage, companies page, and jobs
 *  page
 *
 *  App -> Nav
 */
function Nav() {
  return (
    <nav className="Nav">

      <NavLink to="/" >Jobly</NavLink>
      <NavLink to="/companies">Companies</NavLink>
      <NavLink to="/jobs">Jobs</NavLink>
    </nav>
  );
}

export default Nav;