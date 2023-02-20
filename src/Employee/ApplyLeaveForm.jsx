import React, {useState} from "react";
import {TextField} from '@material-ui/core';
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import MenuItem from "@mui/material/MenuItem";
import {Select} from '@material-ui/core';
import InputLabel from "@mui/material/InputLabel";
import "./ApplyLeaveForm.css";



const theme = createTheme({
  palette: {
    neutral: {
      main: "#009688",
    },
  },
});



export default function ApplyLeaveForm({ handleCloseLogInForm }) {
  const [days, setDays] = useState('');
  const [inputValue,setInputValues]= useState(
    {
      leaveType:'',
      fromDate:'',
      toDate:'',
      reason:''
     
    }
  )
  const  date =  inputValue.toDate.length>0 ?  `${inputValue.fromDate} to ${inputValue.toDate}`:`${inputValue.fromDate}`
 
  const name = JSON.parse(localStorage.getItem("employeeName"));
  const LeaveFormDtata = async()=>{
    const response = await fetch('https://leave-app-7ae4f-default-rtdb.firebaseio.com/EmployeeLeave.json',{
      method: 'POST',
      body: JSON.stringify({
        leaveType:inputValue.leaveType,
        days: days,
        name: name,
      date:date,
      reason:inputValue.reason
      })
    })
    if (response.ok) {
      console.log(response);
    } else {
      throw new Error("Error.....");
    }
  }
  async function handleSubmitForm (){
    await LeaveFormDtata()
       console.log(inputValue, days)
    handleCloseLogInForm()
   }
  
  return (
    <div className="Leave-apply-form">
      <h1 className="">Apply For Leave</h1>
      <br/>
      <ThemeProvider theme={theme}>
        <InputLabel id="demo-simple-select-label">Leave Type</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          color="neutral"
          variant="outlined"
          value={inputValue.leaveType}
          onChange={e=>setInputValues({...inputValue, leaveType:e.target.value})}
        >
          <MenuItem value="Casual Leave">Casual Leave</MenuItem>
          <MenuItem value="Sick Leave">Sick Leave</MenuItem>
          <MenuItem value="Optional Holiday">Optional Holiday</MenuItem>
          <MenuItem value="Leave Without Pay">Leave Without Pay</MenuItem>
        </Select>

        <br />
        <InputLabel id="demo-simple-select-label">No Of Days</InputLabel>
      <TextField
        id="outlined-basic margin-normal"
        color="neutral"
        type="number"
        variant="outlined"
        value={days}
        onChange={(e) => {
          setDays(e.target.value)
        }}
      />
      <br />
      {days > 1 ? (
        <>
          <InputLabel id="demo-simple-select-label">From Date</InputLabel>
          <TextField
            id="outlined-basic margin-normal"
            color="neutral"
            type="date"
            variant="outlined"
            value={inputValue.fromDate}
            onChange={e=>setInputValues({...inputValue, fromDate:e.target.value})}
          />
          <InputLabel id="demo-simple-select-label">To Date</InputLabel>
          <TextField
            id="outlined-basic margin-normal"
            color="neutral"
            type="date"
            variant="outlined"
            value={inputValue.toDate}
            onChange={e=>setInputValues({...inputValue, toDate:e.target.value})}
          />
        </>
      ) : (
        <>
          <InputLabel id="demo-simple-select-label">Date</InputLabel>
          <TextField
            id="outlined-basic margin-normal"
            color="neutral"
            type="date"
            variant="outlined"
            value={inputValue.fromDate}
            onChange={e=>setInputValues({...inputValue, fromDate:e.target.value})}
          />
        </>
      )}

        <br />
        <InputLabel id="demo-simple-select-label">Reason</InputLabel>
        <TextField
          id="outlined-basic margin-normal"
          color="neutral"
          variant="outlined"
          value={inputValue.reason}
          onChange={e=>setInputValues({...inputValue, reason:e.target.value})}
          rows={3}
          multiline
        />
        <br />
        <Button
          variant="outlined"
          onClick={handleSubmitForm}
          color="neutral"
        >
          Apply Leave
        </Button>
      </ThemeProvider>
    </div>
  );
}
