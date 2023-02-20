import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./Employee.css";

const theme = createTheme({
  palette: {
    neutral: {
      main: "#032b2c",
    },
  },
});

export default function Admin() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const SendAdminData = async () => {
    const response = await fetch(
      "https://leave-app-7ae4f-default-rtdb.firebaseio.com/user.json",
      {
        method: "POST",
        body: JSON.stringify({
          name,
          email,
          phoneNo,
          password,
          role,
        }),
      }
    );
    if (response.ok) {
      alert("succesfull");
      console.log(response);
    } else {
      throw new Error("Error.....");
    }
  };

  const adminSubmitHandler = () => {
    SendAdminData();
    setEmail("");
    setName("");
    setPhoneNo("");
    setPassword("");
  };

  return (
    <>
      <br />
      <br />
      <div className="admin-form">
        <h1 className="admin-form-heading">Admin Registration</h1>
        <ThemeProvider theme={theme}>
          <TextField
            id="outlined-basic margin-normal name"
            type="text"
            margin="normal"
            color="neutral"
            label="Name"
            variant="outlined"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
          />

          <TextField
            id="outlined-basic margin-normal email"
            type="email"
            margin="normal"
            color="neutral"
            label="Email"
            variant="outlined"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            id="outlined-basic margin-normal phno"
            type="number"
            margin="normal"
            color="neutral"
            label="Phone No:"
            variant="outlined"
            value={phoneNo}
            required
            onChange={(e) => setPhoneNo(e.target.value)}
          />

          <TextField
            id="outlined-basic margin-normal password"
            type="password"
            margin="normal"
            color="neutral"
            label="Password"
            variant="outlined"
            value={password}
            required
            onChange={(e) => {
              setPassword(e.target.value);
              setRole("Admin");
            }}
          />

          <Button
            variant="outlined"
            color="neutral"
            onClick={adminSubmitHandler}
          >
            Register
          </Button>
        </ThemeProvider>
      </div>
    </>
  );
}
