import React from "react";
import { NavLink } from "react-router-dom";
import "../Header.css";

export default function AdminHeader() {
  const name = localStorage.getItem("adminName");
  
  const RemoveAdmin = () => {
    localStorage.removeItem('adminID')
    localStorage.removeItem('adminName')
    window.location.reload();
  };
   
 

  return (
    <div className="header-wrapper">
      <nav className="header-nav-wrapper">
        <ul className="header-logo-ul">
          <li>
            <h3>
              Leave App<span className="header-logo-i"></span>
            </h3>
          </li>
        </ul>

        <ul className="header-nav">
          {/* <li>
            <NavLink
              to="/admin_registration"
              activeclassname="active"
              className="header-navlink"
            >
              Leave Approval
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/employee_registration"
              activeclassname="active"
              className="header-navlink"
            >
              Staff Leave History
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/employee_registration"
              activeclassname="active"
              className="header-navlink"
            >
              Staff Applications
            </NavLink>
          </li> */}
           

        </ul>

        <ul className="header-buttons">
          <li className="header-navlink">{name}</li>
          <li>
            <button className="header-login" onClick={RemoveAdmin}>
              Log Out
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}
