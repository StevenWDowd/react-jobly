/** Renders a box with a message upon a successful operation, such as editing
 *  a user profile.
 *
 *  props:
 *    -messageString: A string of the message to display
 *  state:
 *    none
 *
 *  App -> RoutesList -> ProfileForm -> SuccessBox
 */
function SuccessBox({messageString}) {
  return <div className="SuccessBox"><p>{messageString}</p></div>
}

export default SuccessBox;