import { Link } from "react-router-dom";

//TODO: Do we need parent nav links or ul with li wrapped Links?
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