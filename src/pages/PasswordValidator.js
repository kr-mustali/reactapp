import React, { useState } from "react";
import "./github.css";
// import validator from "validator";

export default function PasswordValidator() {
  const [error, setError] = useState([]);

  function customValidator(value) {
    let errors = [];

    if (value.length < 8) {
      errors.push("Minimum length of 8 characters");
    }

    const lowercaseRegex = /[a-z]/;
    if (!lowercaseRegex.test(value)) {
      errors.push("At least 1 lowercase letter");
    }

    const uppercaseRegex = /[A-Z]/;
    if (!uppercaseRegex.test(value)) {
      errors.push("At least 1 uppercase letter");
    }

    const numberRegex = /[0-9]/;
    if (!numberRegex.test(value)) {
      errors.push("At least 1 number");
    }

    const symbolRegex = /[!@#$%^&*(),.?":{}|<>]/;
    if (!symbolRegex.test(value)) {
      errors.push("At least 1 symbol");
    }

    return errors;
  }

  function validate(value) {
    const errors = customValidator(value);

    if (errors.length === 0) {
      setError([]);
    } else {
      setError(errors);
    }
  }

  return (
    <div className="app">
      <form className="search-form">
        <label style={{ marginRight: "10px" }}>
          Enter Password to validate :{" "}
        </label>
        <input type="text" onChange={(e) => validate(e.target.value)} />
        {error.length === 0 ? null : (
          <ul
            style={{
              fontWeight: "bold",
              color: "red",
            }}
          >
            {error.map((e, index) => {
              return <li key={index}>{e}</li>;
            })}
          </ul>
        )}
      </form>
    </div>
  );
}
