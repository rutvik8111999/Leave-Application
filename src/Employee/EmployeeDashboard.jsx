import React, { useState, useEffect } from "react";
import EmployeeHeader from "./EmployeeHeader";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import {Table} from '@material-ui/core';
import {TableBody} from '@material-ui/core';
import {TableCell} from '@material-ui/core';
import{ TableContainer} from '@material-ui/core';
import {TableHead} from '@material-ui/core';
import {TableRow} from '@material-ui/core';
import {Typography} from '@material-ui/core';
import {Paper} from '@material-ui/core';
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import { teal } from "@mui/material/colors";
import ApplyLeaveForm from "./ApplyLeaveForm"; 
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles({
  root: {
    width: "100%",
    overflowX: "auto",
  },
  table: {
    minWidth: 350,
  },
});

export default function EmployeeDashboard() {
  const [openLogInForm, setOpenLogInForm] = useState(false);
  const [leaveList, setleaveList] = React.useState([]);
  useEffect(()=>{
    fetchData()
  },[])

  const dataLoaded = [];
  const handleClickOpenLogInForm = () => {
    setOpenLogInForm(true);
  };

  const handleCloseLogInForm = () => {
    setOpenLogInForm(false);
  };
  const name = JSON.parse(localStorage.getItem("employeeName"));
  const fetchData = async () => {
    const data = await fetch(
      "https://leave-app-7ae4f-default-rtdb.firebaseio.com/EmployeeLeave.json"
    );
    const resdata = await data.json();
    for (const key in resdata) {
      dataLoaded.push({
        id: key,
        name: resdata[key].name,
        date: resdata[key].date,
        days: resdata[key].days,
        leaveType: resdata[key].leaveType,
        reason: resdata[key].reason,
        toDate: resdata[key].toDate,
      });
    }
    setleaveList(dataLoaded);
  };
 
  const ClLeaves = leaveList.filter((data) => {
    return data.leaveType === "Casual Leave";
  });
  const SlLeaves = leaveList.filter((data) => {
    return data.leaveType === "Sick Leave";
  });
  const OlLeaves = leaveList.filter((data) => {
    return data.leaveType === "Optional Holiday";
  });
  const LeaveWP = leaveList.filter((data) => {
    return data.leaveType === "Leave Without Pay";
  });
  const ColorButton = styled(Button)(({ theme }) => ({
    fontSize: 22,
    color: theme.palette.getContrastText(teal[500]),
    backgroundColor: teal[500],
    "&:hover": {
      backgroundColor: teal[900],
    },
  }));
  const classes = useStyles();
  const rows = [
    createData("Casual Leave", 5, 3, 2, ClLeaves),
    createData("Sick Leave", 5, 2, 3, SlLeaves),
    createData("Optional Leave", 5, 1, 4, OlLeaves),
    createData("Leave Without Pay", 5, 0, 5, LeaveWP),
  ];

  return (
    <div>
      {name != null ? (
        <>
          <EmployeeHeader />
          <br />
          <br />
          <div className="employee-leaveHistory">
            <h2>Leave History</h2>
            <br />
            <br />
            <TableContainer component={Paper} className={classes.root}>
              <Table className={classes.table} aria-label="collapsible table">
                <TableHead>
                  <TableRow>
                    <TableCell padding="checkbox" />
                    <TableCell>Types Of Leaves</TableCell>
                    <TableCell align="right">Toatal Leaves</TableCell>
                    <TableCell align="right">Taken Leaves</TableCell>
                    <TableCell align="right">Remaining Leaves</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <React.Fragment>
                      <ExpandableTableRow
                        key={row.LeaveType}
                        expandComponent={
                          <TableCell colSpan="5">
                            <Box sx={{ margin: 1 }}>
                              <Typography
                                key={row.LeaveType}
                                variant="h6"
                                gutterBottom
                                component="div"
                              >
                                {row.LeaveType} History
                              </Typography>
                              <Table size="small" aria-label="purchases">
                                <TableHead>
                                  <TableRow>
                                    <TableCell>Date</TableCell>
                                    <TableCell>Reason</TableCell>
                                    <TableCell align="right">Days</TableCell>
                                    <TableCell align="right">Aproval</TableCell>
                                  </TableRow>
                                </TableHead>
                                <TableBody>
                                  {row.history.map((historyRow) => (
                                    <TableRow key={historyRow.date}>
                                      <TableCell component="th" scope="row">
                                        {historyRow.date}
                                      </TableCell>
                                      <TableCell>{historyRow.reason}</TableCell>
                                      <TableCell align="right">
                                        {historyRow.days}
                                      </TableCell>
                                      <TableCell align="right">
                                        {historyRow.aproved}
                                      </TableCell>
                                    </TableRow>
                                  ))}
                                </TableBody>
                              </Table>
                            </Box>
                          </TableCell>
                        }
                      >
                        <TableCell component="th" scope="row">
                          {row.LeaveType}
                        </TableCell>
                        <TableCell align="right">{row.total}</TableCell>
                        <TableCell align="right">{row.taken}</TableCell>
                        <TableCell align="right">{row.remaining}</TableCell>
                      </ExpandableTableRow>
                      {/* <TableRow>
                     <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                       <Collapse in={open} timeout="auto" unmountOnExit>
                         <Box sx={{ margin: 1 }}>
                           <Typography variant="h6" gutterBottom component="div">
                             History
                           </Typography>
                           <Table size="small" aria-label="purchases">
                             <TableHead>
                               <TableRow>
                                 <TableCell>Date</TableCell>
                                 <TableCell>Reason</TableCell>
                                 <TableCell align="right">Days</TableCell>
                                 <TableCell align="right">Aproval</TableCell>
                               </TableRow>
                             </TableHead>
                             <TableBody>
                               {row.history.map((historyRow) => (
                                 <TableRow key={historyRow.date}>
                                   <TableCell component="th" scope="row">
                                     {historyRow.date}
                                   </TableCell>
                                   <TableCell>{historyRow.reason}</TableCell>
                                   <TableCell align="right">{historyRow.days}</TableCell>
                                   <TableCell align="right">{historyRow.aproved}</TableCell>
                                 </TableRow>
                               ))}
                             </TableBody>
                           </Table>
                         </Box>
                       </Collapse>
                     </TableCell>
                   </TableRow> */}
                    </React.Fragment>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <br />
            <br />
            <ColorButton variant="contained" onClick={handleClickOpenLogInForm}>
              Apply For Leave
            </ColorButton>
            <Dialog open={openLogInForm} onClose={handleCloseLogInForm}>
              <DialogContent>
                <ApplyLeaveForm handleCloseLogInForm={handleCloseLogInForm} />
              </DialogContent>
            </Dialog>
          </div>
          {/* <Footer /> */}
        </>
      ) : (
        <h1>Sorry You Cannot Access This Page..</h1>
      )}
    </div>
  );
}
const aproved = "Yes";
function createData(LeaveType, total, taken, remaining, history) {
  return {
    LeaveType,
    total,
    taken,
    remaining,
    history
  };
}

const ExpandableTableRow = ({ children, expandComponent, ...otherProps }) => {
  const [isExpanded, setIsExpanded] = React.useState(false);
  return (
    <>
      <TableRow {...otherProps}>
        <TableCell padding="checkbox">
          <IconButton onClick={() => setIsExpanded(!isExpanded)}>
            {isExpanded ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        {children}
      </TableRow>
      {isExpanded && (
        <TableRow>
          <TableCell padding="checkbox" />
          {expandComponent}
        </TableRow>
      )}
    </>
  );
};
