import { useContext } from "react";
import userContext from "./userContext";
import { Link } from "react-router-dom";
import "./Homepage.css";

/** Function to render a homepage for the app and welcomes logged in user
 *  props: none
 *  state: none
 *
 *  App -> RoutesList -> Homepage
 */
function Homepage() {
  const { currentUser } = useContext(userContext);

  return (
    <div className="Homepage">
      <h1>Jobly</h1>
      <p>All the jobs in one, barren place</p>
      {currentUser ? (<p>Welcome Back {currentUser.username}</p>) :
        <>
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign Up</Link>
        </>
      }
    </div>
  );
};

export default Homepage;