import React, { useState } from "react";
import "./LoginForm.css";

function LoginForm({ Login }) {
  const [details, setDetails] = useState({ email: "", password: "" });

  const submitHandler = (e) => {
    e.preventDefault();
    Login(details);
  };

  return (
    <center>
      <div className="container">
        <div className="signin">
          <form>
            <h1 style={{ fontFamily: "Montserrat", marginTop: "1cm" }}>
              Sign in
            </h1>
            <div className="social-container">
              <a href="http://www.google.com">
                <img
                  src="google.webp"
                  alt="googlelogo"
                  width="35px"
                  height="35px"
                />
              </a>{" "}
              &nbsp;
              <a href="http://www.facebook.com">
                <img
                  src="facebook.png"
                  alt="facebooklogo"
                  width="35px"
                  height="35px"
                />
              </a>{" "}
              &nbsp;
              <a href="http://www.linkedin.com">
                <img
                  src="linkedin.webp"
                  alt="linkedinlogo"
                  width="35px"
                  height="35px"
                />
              </a>
            </div>
            <p style={{ fontFamily: "Montserrat" }}>
              {" "}
              or use your e-mail to sign in{" "}
            </p>
            <input
              style={{ fontFamily: "Montserrat" }}
              className="email"
              type="email"
              placeholder="E-mail"
              onChange={(e) =>
                setDetails({ ...details, email: e.target.value })
              }
              value={details.email}
            />
            <br />
            <input
              style={{ fontFamily: "Montserrat" }}
              className="password"
              type="password"
              placeholder="Password"
              onChange={(e) =>
                setDetails({ ...details, password: e.target.value })
              }
              value={details.password}
            />
            <br />
            <br />
            <br />
            <input
              onClick={reset}
              style={{ textDecoration: "none", fontFamily: "Montserrat" }}
              className="forgot"
              type="button"
              value="Forgot your password?"
            />
            <br />
            <br />
            <button onClick={submitHandler} className="signinbtn">
              {" "}
              SIGN IN{" "}
            </button>
          </form>
        </div>
        <div className="signup">
          <form>
            <h1
              style={{
                color: "#FFF",
                fontFamily: "Montserrat",
                marginTop: "3.5cm",
              }}
            >
              {" "}
              Hello, Friend!{" "}
            </h1>
            <p style={{ color: "#FFF", fontFamily: "Montserrat" }}>
              {" "}
              Enter your personal details and start
              <br />
              journey with us!{" "}
            </p>
            <button className="signupbtn"> SIGN UP </button>
          </form>
        </div>
      </div>
    </center>
  );
}

function reset() {
  prompt("Enter your e-mail and we will send you a reset link");
}

export default LoginForm;
