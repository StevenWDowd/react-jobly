/**
 * Renders error messages from failed login/signup
 *
 * props: array of error messages
 */
function ErrorBox({ messages }) {
  return (
    <div className="ErrorBox">
      {messages.map(error => (<p>{error.message}</p>))}
    </div>
  );

}

export default ErrorBox;