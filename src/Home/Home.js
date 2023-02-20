import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import "./Home.css";
import Login from "./LogIn";

export default function Home() {
  const [openLogInForm, setOpenLogInForm] = useState(false);

  const handleClickOpenLogInForm = () => {
    setOpenLogInForm(true);
  };

  const handleCloseLogInForm = () => {
    setOpenLogInForm(false);
  };
  return (
    <div className="home-body">
      <h2 className="leave-heading">
        <div className="home-login" onClick={handleClickOpenLogInForm}>Login</div>
        <Dialog open={openLogInForm} onClose={handleCloseLogInForm}>
          <DialogContent>
            <Login />
          </DialogContent>
        </Dialog>
        
      </h2>
      <div className="register cards">
        <div className="employee register">
        <NavLink to="/employee_registration" className="employee register" >
          <img
            className="employee-img"
            src="https://uploads-ssl.webflow.com/602250ed045ee75512d753ec/614476add8871e0e1227de3d_rXPk6PrkK_9iKRTy7g9ycVdNUBiC2jeVAGJ3o8nH5QyD-kUElKOAZL_zG2yeJXdK5Ue5e3C4_Frqk-nFcCuB0ynVYhZFyGhYrVRZzHw-WoDfrQuWsdgu-x0VLLayDl2vLLvYjy_5%3Ds0.png"
            alt=""
          />
          <div className="navlink"> Register As Employee </div>
        </NavLink>
        </div>
        <div className="admin register">
        <NavLink to="/admin_registration" className="admin register">
          <img
            className="admin-img"
            src="https://cdn.hifives.in/wp-content/uploads/2022/05/WfH.png"
            alt=""
          />
          <div> Register As Admin</div>
        </NavLink>
        </div>
      </div>
      Don't Have An Account ?
    </div>
  );
}
