function ErrorBox({messages}){
  console.log(messages);
  return (
    <div className="ErrorBox">
      {messages.map(error => (<p>{error.message}</p>) )}
    </div>
  );

}

export default ErrorBox;