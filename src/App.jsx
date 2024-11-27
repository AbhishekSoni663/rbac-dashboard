import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Navbar from "./component/Navbar";
import AuditLog from "./component/AuditLog";
import RolePage from "./pages/RolePage";
import AuditPage from "./pages/AuditPage";
const App = () => {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/role-management" element={<RolePage />} />
          <Route path="/audit-log" element={<AuditPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App