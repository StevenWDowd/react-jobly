import { Link, NavLink } from "react-router-dom";
import "./Nav.css";
import userContext from "./userContext";
import { useContext } from "react";
import ProfileForm from "./ProfileForm";


/** Renders a nav bar with links to:
 * If Logged In
 *  -homepage
 *  -companies
 *  -jobs
 *  -Profile
 *  -Logout
 *
 * If Logged Out
 *  -Homepage
 *  -Login
 *  -Signup
 *
 * props: logout function
 *
 *  App -> Nav
 */

function Nav({ logout }) {
  const { currentUser } = useContext(userContext);

  return currentUser
    ? (
      <nav className="Nav">

        <NavLink to="/" >Jobly</NavLink>
        <NavLink to="/companies">Companies</NavLink>
        <NavLink to="/jobs">Jobs</NavLink>
        <NavLink to="/profile">Profile</NavLink>
        <button className="Nav-Logout-Button"
          onClick={logout}>Log out {currentUser.username}
        </button>
      </nav>
    )
    : (
      <nav className="Nav">
        <NavLink to="/">Jobly</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="signup">Sign Up</NavLink>
      </nav>
    );
}

export default Nav;