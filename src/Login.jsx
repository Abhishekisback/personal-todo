import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

function Login() {

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  function handlechange(e)
  {
     const {name,value}=e.target;
     setLoginData((prev)=>({...prev,
        [name]:value
     }))
  }
console.log(loginData);

  return (
    <div className="LoginWrapper">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "30px",
          width: "30%",
          backgroundColor: "#ffffff",
          boxShadow: "0px 0px 3px 3px #f1f1f1",
          padding: "40px",
          borderRadius: "10px",
        }}
      >
        <h1>Login</h1>
        <TextField
          id="outlined-textarea"
          label="User Name"
          placeholder="User Name"
          name="email"
          onChange={handlechange}
        />
        <TextField
          id="outlined-textarea"
          label="Password"
          placeholder="Password"
          name="password"
          onChange={handlechange}
        />
        <Button variant="contained" color="primary" size="large">
          Login
        </Button>
      </Box>
    </div>
  );
}

export default Login;
