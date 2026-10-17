import React, { useState } from "react";
import Card from "./Card";

const FormState = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== passwordConfirmation) {
      alert("Passwords do not match");
      return;
    }

    alert(`Submitted!\nName: ${fullName}\nEmail: ${email}`);
  };

  return (
    <Card title="Section 3 - useState Handling">
      <form id="info-form" onSubmit={handleSubmit}>
        <div>
          <label>Full Name:</label>
          <input
            type="text"
            id="full_name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <label>Password Confirmation:</label>
          <input
            type="password"
            id="password_confirmation"
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </Card>
  );
};

export default FormState;
