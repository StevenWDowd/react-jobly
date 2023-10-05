import { useState } from "react";

function ProfileForm({ editProfile }) {
  return (
    <form className="SignupForm" onSubmit={handleSubmit}>
      <input name="username"
        value={formData.username}
        className="username-field"
        placeholder="Username"
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
      <button className="SignupForm-submit-btn" type="submit">Sign Up</button>
    </form>);
}

export default ProfileForm;