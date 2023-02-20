import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "../Employee.css";
import { useNavigate } from "react-router-dom";

const theme = createTheme({
  palette: {
    neutral: {
      main: "#209041",
    },
  },
});

export default function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, seterror] = useState(false);
  // const [error, seterror] = useState(false);
  const navigate = useNavigate();
  const dataLoaded = [];
  const FetchData = async () => {
    const data = await fetch(
      "https://leave-app-7ae4f-default-rtdb.firebaseio.com/user.json"
    );
    const resdata = await data.json();
    for (const key in resdata) {
      dataLoaded.push({
        id: key,
        name: resdata[key].name,
        email: resdata[key].email,
        password: resdata[key].password,
        role: resdata[key].role,
      });
    }
    console.log(dataLoaded);
  };
  const artistSubmitHandler = async () => {
    await FetchData();

    if (dataLoaded.length > 0) {
      dataLoaded.map((data, i) => {
        return name === data.name &&
          email === data.email &&
          password === data.password &&
          data.role === "employee"
          ? (console.log(name, email, password),
            localStorage.setItem("employeeID", JSON.stringify(data.id)),
            localStorage.setItem("employeeName", JSON.stringify(data.name)),
            navigate(`/employee_dashboard`))
          : // navigate(`/employee_${data.id}`)
          name === data.name &&
            email === data.email &&
            password === data.password &&
            data.role === "admin"
          ? (console.log(name, email, password),
            localStorage.setItem("adminID", data.id),
            localStorage.setItem("adminName", data.name),
            navigate(`/admin_dashboard`))
          : seterror((prev) => !prev);
      });
    }
  };

  return (
    <div className="login-form">
      {error === true ? "Please Enter Valid Details" : ""}
      <h1 className="login-form-heading">Log In</h1>
      <ThemeProvider theme={theme}>
        <TextField
          id="outlined-basic margin-normal"
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
          id="outlined-basic margin-normal"
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
          id="outlined-basic margin-normal"
          type="password"
          margin="normal"
          color="neutral"
          label="Password"
          variant="outlined"
          value={password}
          required
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />

        <Button
          variant="outlined"
          color="neutral"
          onClick={artistSubmitHandler}
        >
          login
        </Button>
      </ThemeProvider>
    </div>
  );
}
