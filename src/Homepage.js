import { useContext } from "react";
import userContext from "./userContext";

/** Function to render a homepage for the app.
 *  props: none
 *  state: none
 *
 *  App -> RoutesList -> Homepage
 */
function Homepage() {
  const { currentUser } = useContext(userContext);

  return (
    <div>
      <h1>Jobly</h1>
      <p>All the jobs in one, barren place</p>
      {currentUser ? (<p>Welcome Back {currentUser.username}</p>) : ""}
    </div>
  );
};

export default Homepage;