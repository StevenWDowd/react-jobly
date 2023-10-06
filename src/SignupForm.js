import { useState } from "react";
import ErrorBox from "./ErrorBox";
import { useNavigate } from "react-router-dom";

/**
 * Renders Signup form for new users
 *
 * props: signup function
 * state:
 * -formData {username, password}
 * -errors [{error}, ...]
 *
 *  App -> RoutesList -> SignupForm
 */
function SignupForm({ signup }) {

  const initialFormData = {
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: "",
  };
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState(null);
  const navigate = useNavigate();

  /** Updates input field data */
  function handleChange(evt) {
    const { value, name } = evt.target;
    setFormData(f => ({
      ...f,
      [name]: value,
    }));

  }
  /** Handles form submission*/
  async function handleSubmit(evt) {
    evt.preventDefault();

    try {
      await signup(formData);
      navigate("/");
    } catch (err) {
      console.log("error thrown");
      setErrors(err);
    }
  }

  return (
    <form className="SignupForm" onSubmit={handleSubmit}>
      <input name="username"
        value={formData.username}
        className="username-field"
        placeholder="Username"
        onChange={handleChange} />
      <input name="password"
        value={formData.password}
        className="password-field"
        placeholder="Password"
        type="password"
        onChange={handleChange} />
      <input name="firstName"
        value={formData.firstName}
        className="firstName-field"
        placeholder="First Name"
        onChange={handleChange} />
      <input name="lastName"
        value={formData.lastName}
        className="lastName-field"
        placeholder="Last Name"
        onChange={handleChange} />
      <input name="email"
        value={formData.email}
        className="email-field"
        placeholder="Email"
        onChange={handleChange} />
      {errors ? (<ErrorBox messages={errors} />) : ""}
      <button className="SignupForm-submit-btn" type="submit">Sign Up</button>
    </form>
  );
}

export default SignupForm;