import React, { useState } from "react";
import { Link } from "react-router-dom";

function Form() {
  const [firstName, setfirsName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [confirmpassword, setconfirmpassword] = useState("");
  const [error, seterror] = useState(false);

  const Submit = (e) => {
    e.preventDefault();
    if (
      firstName.length == 0 ||
      lastName.length == 0 ||
      email.length == 0 ||
      password.length == 0 ||
      confirmpassword.length == 0
    ) {
      seterror(true);
    }
    console.log(firstName, lastName, email, password, confirmpassword);
  };
  return (
    <form onSubmit={Submit} className="register-form-container">
      <div className="Register-form">
        <div className="field-container">
          <label className="label" htmlFor="firstName">
            First Name:{" "}
          </label>
          <input
            type="text"
            id="firstName"
            className="input"
            placeholder="First Name"
            onChange={(e) => setfirsName(e.target.value)}
          />
          {error && firstName.length === 0 ? (
            <label htmlFor="firstname" className="error">
              This Field required
            </label>
          ) : (
            ""
          )}
        </div>

        <div className="field-container">
          <label className="label" htmlFor="lastName">
            Last Name:{" "}
          </label>

          <input
            type="text"
            id="lastName"
            className="input"
            placeholder="Last Name"
            onChange={(e) => setlastName(e.target.value)}
          />
          {error && lastName.length <= 0 ? (
            <label htmlFor="lastname" className="error">
              This Field required
            </label>
          ) : (
            ""
          )}
        </div>
        <div className="field-container">
          <label className="label" htmlFor="email">
            Email:{" "}
          </label>

          <input
            type="email"
            id="email"
            className="input"
            placeholder="Email"
            onChange={(e) => setemail(e.target.value)}
          />
          {error && email.length <= 0 ? (
            <label htmlFor="email" className="error">
              This Field required
            </label>
          ) : (
            ""
          )}
        </div>
        <div className="field-container">
          <label className="label" htmlFor="password">
            Password:{" "}
          </label>
          <input
            type="password"
            id="password"
            className="input"
            placeholder="Password"
            onChange={(e) => setpassword(e.target.value)}
          />
          {error && password.length <= 0 ? (
            <label htmlFor="password" className="error">
              This Field required
            </label>
          ) : (
            ""
          )}
        </div>
        <div className="field-container">
          <label className="label" htmlFor="confirmpassword">
            Confirm Password:{" "}
          </label>
          <input
            type="password"
            id="confirmpassword"
            className="input"
            placeholder="Confirm Password"
            onChange={(e) => setconfirmpassword(e.target.value)}
          />
          {error && confirmpassword.length <= 0 ? (
            <label htmlFor="confirmpassword" className="error">
              This Field required
            </label>
          ) : (
            ""
          )}
        </div>
        <button type="submit" className="btn">
          Submit
        </button>
      </div>
    </form>
  );
}
export default Form;
