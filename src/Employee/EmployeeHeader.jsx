
import "../Header.css";
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


export default function EmployeeHeader() {
  const name =JSON.parse(localStorage.getItem('employeeName'))
  const RemoveEmployee = () => {
    localStorage.removeItem('employeeID')
    localStorage.removeItem('employeeName')
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

       

        <ul className="header-buttons">
          
          <li  className="header-navlink">
          <ModeEditOutlineIcon fontSize='medium'/> 
          <br/>
          Edit Profile
           
            </li>
          <li  className="header-navlink">
          <AccountCircleIcon fontSize='medium'/> 
           <br/>
          {name}
            </li>
          <li>
            <button className="header-login" onClick={RemoveEmployee}>
              Log Out
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}
