import React, { useState } from "react";
import { useHistory } from "react-router";
import { TextField } from "@material-ui/core";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import { Select } from "@material-ui/core";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const theme = createTheme({
  palette: {
    neutral: {
      main: "#209041",
    },
  },
});
const initialVAlues = {};
export default function RegistrationEmployeeOriginal() {
  const [inputValue, setInputValue] = useState({
    name: "",
    email: "",
    phoneNo: "",
    password: "",
    organisation: "",
    department: "",
    designation: "",
    joining: "",
    dob: "",
    education: "",
    passing: "",
    role: "",
  });

  const navigate = useNavigate();
  const SendEmployeeData = async () => {
    const response = await fetch(
      "https://leave-app-7ae4f-default-rtdb.firebaseio.com/employee.json",
      {
        method: "POST",
        body: JSON.stringify({
          name: inputValue.name,
          email: inputValue.email,
          phoneNo: inputValue.phoneNo,
          password: inputValue.password,
          organisation: inputValue.organisation,
          department: inputValue.department,
          designation: inputValue.designation,
          joining: inputValue.joining,
          dob: inputValue.dob,
          education: inputValue.education,
          passing: inputValue.passing,
          role: inputValue.role,
          aproved: "ok",
        }),
      }
    );
    if (response.ok) {
      console.log(response);
    } else {
      throw new Error("Error.....");
    }
  };

  const employeeSubmitHandler = () => {
    SendEmployeeData();
    navigate("/");
  };
  return (
    <div>
      <div className="employee-details-form">
        <h1 className="employee-form-heading">Employee Registration</h1>
        <ThemeProvider theme={theme}>
          <InputLabel id="demo-simple-select-label">Name</InputLabel>
          <TextField
            id="outlined-basic margin-normal name"
            type="text"
            color="neutral"
            variant="outlined"
            value={inputValue.name}
            required
            onChange={(e) =>
              setInputValue({
                ...inputValue,
                name: e.target.value,
                role: "employee",
              })
            }
          />
          <br />
          <InputLabel id="demo-simple-select-label">Email</InputLabel>
          <TextField
            id="outlined-basic margin-normal email"
            type="email"
            color="neutral"
            variant="outlined"
            value={inputValue.email}
            required
            onChange={(e) =>
              setInputValue({ ...inputValue, email: e.target.value })
            }
          />
          <br />
          <InputLabel id="demo-simple-select-label">Phone No</InputLabel>
          <TextField
            id="outlined-basic margin-normal phno"
            type="text"
            color="neutral"
            variant="outlined"
            value={inputValue.phoneNo}
            required
            onChange={(e) =>
              setInputValue({ ...inputValue, phoneNo: e.target.value })
            }
          />
          <br />
          <InputLabel id="demo-simple-select-label">Password</InputLabel>
          <TextField
            id="outlined-basic margin-normal password"
            type="password"
            color="neutral"
            variant="outlined"
            value={inputValue.password}
            required
            onChange={(e) =>
              setInputValue({ ...inputValue, password: e.target.value })
            }
          />

          <br />
          <InputLabel id="demo-simple-select-label">
            Name of Organisation
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            color="neutral"
            variant="outlined"
            value={inputValue.organisation}
            onChange={(e) =>
              setInputValue({ ...inputValue, organisation: e.target.value })
            }
          >
            <MenuItem value="Softcoding Solutions">
              Softcoding Solutions
            </MenuItem>
            <MenuItem value="Print revolution">Print revolution</MenuItem>
            <MenuItem value="Ecommerce Company">Ecommerce Company</MenuItem>
            <MenuItem value="Product Company">Product Company</MenuItem>
          </Select>

          <br />
          <InputLabel id="demo-simple-select-label">
            Name of Department
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            color="neutral"
            variant="outlined"
            value={inputValue.department}
            onChange={(e) =>
              setInputValue({ ...inputValue, department: e.target.value })
            }
          >
            <MenuItem value="IT Department">IT Department</MenuItem>
            <MenuItem value="Sales Department">Sales Department</MenuItem>
            <MenuItem value="HR Department">HR Department</MenuItem>
            <MenuItem value="Account Department">Account Department</MenuItem>
            <MenuItem value="Testing Department">Testing Department</MenuItem>
            <MenuItem value="Admin Department">Admin Department</MenuItem>
          </Select>

          <br />
          <InputLabel id="demo-simple-select-label">Designation</InputLabel>
          <TextField
            id="outlined-basic margin-normal name"
            type="text"
            color="neutral"
            variant="outlined"
            value={inputValue.designation}
            onChange={(e) =>
              setInputValue({ ...inputValue, designation: e.target.value })
            }
            required
          />

          <br />
          <InputLabel id="demo-simple-select-label">Date of Joining</InputLabel>
          <TextField
            id="outlined-basic margin-normal name"
            type="date"
            color="neutral"
            variant="outlined"
            value={inputValue.joining}
            onChange={(e) =>
              setInputValue({ ...inputValue, joining: e.target.value })
            }
            required
          />

          <br />
          <InputLabel id="demo-simple-select-label">Birth Date</InputLabel>
          <TextField
            id="outlined-basic margin-normal name"
            type="date"
            color="neutral"
            variant="outlined"
            value={inputValue.dob}
            onChange={(e) =>
              setInputValue({ ...inputValue, dob: e.target.value })
            }
            required
          />

          <br />
          <InputLabel id="demo-simple-select-label">Education </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            color="neutral"
            value={inputValue.education}
            onChange={(e) =>
              setInputValue({ ...inputValue, education: e.target.value })
            }
            variant="outlined"
          >
            <MenuItem value="Degree in Computer Engineering">
              Degree in Computer Engineering
            </MenuItem>
            <MenuItem value="Degree in Information and Technology">
              Degree in Information and Technology
            </MenuItem>
            <MenuItem value="Graduate (any stream)">
              Graduate (any stream)t
            </MenuItem>
          </Select>

          <br />
          <InputLabel id="demo-simple-select-label">
            Select Passing Month and Year
          </InputLabel>
          <TextField
            type="month"
            id="demo-simple-select"
            value={inputValue.passing}
            onChange={(e) =>
              setInputValue({ ...inputValue, passing: e.target.value })
            }
            color="neutral"
            variant="outlined"
          />
          <br />
          <Button
            variant="outlined"
            color="neutral"
            onClick={employeeSubmitHandler}
          >
            Register
          </Button>
        </ThemeProvider>
      </div>
    </div>
  );
}
