import { useState, useContext } from "react";
import userContext from "./userContext";
import ErrorBox from "./ErrorBox";
import SuccessBox from "./SuccessBox";


/** Renders a form for editing the user's profile (password and username
 *  cannot be edited).
 *  props:
 *    -editProfile, a function passed from App
 *  state:
 *    -formData
 *    -errors (if edit fails on back end)
 *
 */

function ProfileForm({ editProfile }) {
  const { currentUser } = useContext(userContext);

  const initialFormData = {
    username: currentUser.username,
    firstName: currentUser.firstName,
    lastName: currentUser.lastName,
    email: currentUser.email,
  };

  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState(null);
  const [updateSuccess, setUpdateSuccess] = useState(false);

  /**
  * Updates form data
  */
  function handleChange(evt) {
    const { value, name } = evt.target;
    setFormData(f => ({
      ...f,
      [name]: value,
    }));
  }

  /**
  * Handles form submission
 */
  async function handleSubmit(evt) {
    evt.preventDefault();

    try {
      await editProfile(formData);
      setUpdateSuccess(true);
    } catch (err) {
      setErrors(err);
    }
  }

  return (
    <form className="ProfileForm" onSubmit={handleSubmit}>
      <input name="username"
        value={formData.username}
        className="profile-input"
        disabled />
      <input name="firstName"
        value={formData.firstName}
        className="profile-input"
        placeholder="First Name"
        onChange={handleChange} />
      <input name="lastName"
        value={formData.lastName}
        className="profile-input"
        placeholder="Last Name"
        onChange={handleChange} />
      <input name="email"
        value={formData.email}
        className="profile-input"
        placeholder="Email"
        onChange={handleChange} />
      {errors ? <ErrorBox messages={errors} /> : ""}
      {updateSuccess ?
        <SuccessBox messageString="Profile updated successfully" /> : ""}
      <button className="ProfileForm-submit-btn" type="submit">Save</button>
    </form>);
}

export default ProfileForm;