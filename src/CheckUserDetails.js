import React from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "./components/LoginForm";

function CheckUserDetails() {
  // mock admin details just for testing
  const adminUser = {
    email: "admin@admin",
    password: "1234",
  };

  const navigate = useNavigate();

  const Login = (details) => {
    console.log(details);

    // If user is logged in
    if (checkUserDetails(details)) {
      console.log("Signed in");
      // save user to local storage with it's mail (it's not secure!)
      localStorage.setItem("user", details.email);
      // navigate to 'to-do-list' page
      navigate("/to-do-list");
    } else {
      // If user is not logged in
      console.log("Details do not match!");
      throwError();
    }
  };

  return (
    <div className="Test">
      <LoginForm Login={Login} />
    </div>
  );

  // This function checks if given details matches the correct admin data
  function checkUserDetails(details) {
    return (
      details.email === adminUser.email &&
      details.password === adminUser.password
    );
  }
}

function throwError() {
  alert("Details do not match!");
}

export default CheckUserDetails;
