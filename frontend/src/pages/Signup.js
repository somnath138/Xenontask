import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { handleError, handleSuccess } from "../utils";
import "./signup.css";
function Signup() {
  const [signupInfo, setsignupInfo] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    const copysignupInfo = { ...signupInfo };
    copysignupInfo[name] = value;
    setsignupInfo(copysignupInfo);
  };
  console.log("loginInfo ->", signupInfo);

  const handleSignup = async (e) => {
    e.preventDefault();
    const { name, email, password } = signupInfo;
    if (!name || !email || !password) {
      return handleError("All fills are required");
    }
    try {
      const url = "https://xenontask.onrender.com/auth/signup";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(signupInfo),
      });
      const result = await response.json();
      const { success, message, error } = result;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          navigate("/login");
        }, 1000);
      } else if (error) {
        const details = error?.details[0].message;
        handleError(details);
      } else if (!success) {
        handleError(message);
      }
      console.log(result);
    } catch (err) {
      handleError(err);
    }
  };
  return (
    <div className="wrappingsignup">
      <div className="container">
        <h1 className="signupfont relative">signup</h1>
        <form onSubmit={handleSignup}>
          <div>
            <label htmlFor="name">Name</label>
            <input
              onChange={handleChange}
              type="text"
              name="name"
              autoFocus
              placeholder="Enter your name....."
              value={signupInfo.name}
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              onChange={handleChange}
              type="email"
              name="email"
              autoFocus
              placeholder="Enter your email....."
              value={signupInfo.email}
            />
          </div>
          <div>
            <label htmlFor="password">password</label>
            <input
              onChange={handleChange}
              type="password"
              name="password"
              placeholder="Enter your password....."
              value={signupInfo.password}
            />
          </div>
          <button type="submit">signup</button>
          <span className=" flex justify-center items-center">
            Already have an account?
            <Link to="/login" className=" text-[1.3rem] ml-1 font-semibold">
              login
            </Link>
          </span>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
}

export default Signup;
