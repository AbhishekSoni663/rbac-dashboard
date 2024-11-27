import { useNavigate } from "react-router-dom";
import ThemeToggle from "./ThemeToogle";



const Navbar = () => {
    const navigate = useNavigate();

    const handleLogout = () => {

        localStorage.removeItem("isLoggedIn");
        navigate("/");
    };

    return (
        <nav className="navbar topbar flex justify-between items-center z-30 relative">
            <h1 className="nav-h1 md:text-xl text-sm font-semibold">Admin Dashboard</h1>
            <div>
                <button className="nav-btn md:text-lg text-sm font-semibold" onClick={handleLogout}>Logout</button>
                <ThemeToggle />
            </div>
        </nav>
    );
};

export default Navbar;
