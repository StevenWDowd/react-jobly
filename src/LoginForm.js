import { useState } from "react";
import { useNavigate } from "react-router-dom";


//TODO: error before login: "Input elements should have autocomplete attributes"
function LoginForm({ login }) {
  const initialFormData = {
    username: "",
    password: ""
  };
  const [formData, setFormData] = useState(initialFormData);
  const navigate = useNavigate();

  function handleChange(evt) {
    const { value, name } = evt.target;
    setFormData(f => ({
      ...f,
      [name]: value,
    }));

  }

  function handleSubmit(evt) {
    evt.preventDefault();
    login(formData);
    navigate("/");
  }

  return (
    <form className="LoginForm" onSubmit={handleSubmit}>
      <input name="username"
        value={formData.username}
        className="username-field"
        onChange={handleChange} />
      <input name="password"
        value={formData.password}
        className="password-field"
        type="password"
        onChange={handleChange} />
      <button className="LoginForm-submit-btn" type="submit">Log In</button>
    </form>
  );
}

export default LoginForm;