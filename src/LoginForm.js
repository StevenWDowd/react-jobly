import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import ErrorBox from "./ErrorBox";



//TODO: error before login: "Input elements should have autocomplete attributes"
function LoginForm({ login }) {
  const initialFormData = {
    username: "",
    password: ""
  };
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState(null);
  const navigate = useNavigate();

  function handleChange(evt) {
    const { value, name } = evt.target;
    setFormData(f => ({
      ...f,
      [name]: value,
    }));

  }

  async function handleSubmit(evt) {
    evt.preventDefault();

    try {
      await login(formData);
      navigate("/");
    } catch (err) {
      console.log("error thrown");
      setErrors(err);
    }
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
      {errors ? (<ErrorBox messages={errors} />) : ""}
      <button className="LoginForm-submit-btn" type="submit">Log In</button>
    </form>
  );
}

export default LoginForm;