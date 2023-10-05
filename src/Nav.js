import { Link, NavLink } from "react-router-dom";
import "./Nav.css";
import ProfileForm from "./ProfileForm";

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
      <NavLink to="/login">Log In</NavLink>
      <NavLink to="/signup">Sign Up</NavLink>
      <NavLink to="/profile">Profile</NavLink>
    </nav>
  );
}

export default Nav;