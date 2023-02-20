import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import EmployeeDashboard from "./Employee/EmployeeDashboard";
import EmployeeRegistration from "./Employee/EmployeeRegistration";
import AdminRegistration from "./Admin/AdminRegistration";
import AdminDashboard from "./Admin/AdminDashboard";
import RegistrationEmployeeOriginal from "./Employee/RegistrationEmployeeOtriginal";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/employee_registration"
            element={<EmployeeRegistration />}
          />
          <Route
            path="/employee_registration"
            element={<RegistrationEmployeeOriginal />}
          />
          <Route path={`/employee_dashboard`} element={<EmployeeDashboard />} />
          <Route path="/admin_registration" element={<AdminRegistration />} />
          <Route path="/admin_dashboard" element={<AdminDashboard />} />
        </Routes>
      </BrowserRouter>

      <br />
    </>
  );
}

export default App;
