import { Link } from "react-router-dom";

//TODO: Do we need parent nav links or ul with li wrapped Links?
//TODO: Use NavLink comps here

/** Renders a nav bar with links to the homepage, companies page, and jobs
 *  page
 *
 *  App -> Nav
 */
function Nav() {
  return (
    <nav>

      <Link to="/" >Jobly</Link>
      <Link to="/companies">Companies</Link>
      <Link to="/jobs">Jobs</Link>
    </nav>
  );
}

export default Nav;