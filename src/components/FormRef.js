import React, { useRef } from "react";
import Card from "./Card";

const FormRef = () => {
  const fullNameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const passwordConfirmationRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const fullName = fullNameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const passwordConfirmation = passwordConfirmationRef.current.value;

    if (password !== passwordConfirmation) {
      alert("Passwords do not match");
      return;
    }

    alert(`Submitted!\nName: ${fullName}\nEmail: ${email}`);
  };

  return (
    <Card title="Section 2 - useRef Handling">
      <form id="info-form" onSubmit={handleSubmit}>
        <div>
          <label>Full Name:</label>
          <input type="text" id="full_name" ref={fullNameRef} />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" id="email" ref={emailRef} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" id="password" ref={passwordRef} />
        </div>
        <div>
          <label>Password Confirmation:</label>
          <input
            type="password"
            id="password_confirmation"
            ref={passwordConfirmationRef}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </Card>
  );
};

export default FormRef;
