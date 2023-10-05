import { useState } from "react";

function LoginForm({login}){

  const [formData, setFormData] = useState({});

  function handleChange(evt){
    const {value, name} = evt.target;
    setFormData(f => ({
      ...f,
      [name]:value,
    }));

  }

  function handleSubmit(evt){
    evt.preventDefault();
    login(formData);
  }

  return (
    <form className="LoginForm">
      <input name="username"
             value={formData.username}
             className="username-field"
             onChange={handleChange}/>
      <input name="password"
             value={formData.password}
             className="password-field"
             onChange={handleChange}/>
      <button className="LoginForm-submit-btn" type="submit">Log In</button>
    </form>
  )
}

export default LoginForm;