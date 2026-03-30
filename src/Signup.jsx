import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";

function Signup() {
  const [signUpData, setSignUpData] = useState({
    name: "",
    email: "",
    password: "",
  });

  function handlechange(e) {
    const { name, value } = e.target;
    setSignUpData((prev) => ({ ...prev, [name]: value }));
  }
  console.log(signUpData);

  function handleSignup() {
    axios
      .post("http://localhost:7000/signup", signUpData)
      .then((res) => {
        if (res.status === 200) {
          alert(res.data);
        } else {
          alert("error creating account");
        }
      })
      .catch();
  }

  return (
    <div className="signupContainer">
      <div className="signUpSection">
        <div className="signupForm">
          <h2>Sign Up</h2>
          <TextField
            variant="outlined"
            size="small"
            id="outlined-textarea"
            label="User Name"
            placeholder="User Name"
            name="name"
            onChange={handlechange}
          />
          <TextField
            variant="outlined"
            size="small"
            id="outlined-textarea"
            label="User Email"
            placeholder="User Email"
            name="email"
            onChange={handlechange}
          />
          <TextField
            variant="outlined"
            size="small"
            id="outlined-textarea"
            label="Password"
            placeholder="Password"
            name="password"
            onChange={handlechange}
          />
          <Button variant="contained" onClick={handleSignup}>
            Sign Up
          </Button>
        </div>
        <div className="SignupImg"></div>
      </div>
    </div>
  );
}

export default Signup;
