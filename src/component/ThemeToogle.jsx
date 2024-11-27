import { FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "../hooks/useThem";



const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button onClick={toggleTheme}>
            {theme === "light" ? <FaSun className="sun" /> : <FaMoon className="moon" />}
        </button>
    );
};

export default ThemeToggle;
