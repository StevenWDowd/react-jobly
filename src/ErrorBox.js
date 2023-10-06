/**
 * Renders error messages from failed login/signup
 *
 * props: array of error messages
 *
 * App -> RoutesList -> LoginForm/SignupForm -> ErrorBox
 */
function ErrorBox({ messages }) {
  return (
    <div className="ErrorBox">
      {messages.map((error, i) => (<p key={i}>{error.message}</p>))}
    </div>
  );

}

export default ErrorBox;