import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="flex">
            {/* Sidebar for Larger Screens */}
            <div className="hidden md:block w-64 bg-gray-800 text-white h-full">
                <div className="p-4 bg-gray-900">
                    <h1 className="text-lg font-semibold">Dashboard</h1>
                </div>
                <nav className="mt-4">
                    <Link
                        to="/dashboard"
                        className="block px-4 py-2 text-sm hover:bg-gray-700"
                    >
                        User Management
                    </Link>
                    <Link
                        to="/role-management"
                        className="block px-4 py-2 text-sm hover:bg-gray-700"
                    >
                        Role Management
                    </Link>
                    <Link
                        to="/audit-log"
                        className="block px-4 py-2 text-sm hover:bg-gray-700"
                    >
                        Audit Log
                    </Link>
                </nav>
            </div>

            {/* Navbar and Dropdown for Smaller Screens */}
            <div className="w-full md:hidden bg-gray-900 text-white">
                <div className="flex justify-between items-center p-4">
                    <h1 className="md:text-lg text-sm font-semibold">Dashboard</h1>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-white text-xl focus:outline-none"
                    >
                        {isOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>

                {/* Dropdown Menu */}
                <div
                    className={`transition-all duration-300 overflow-hidden ${isOpen ? "max-h-96" : "max-h-0"
                        } bg-gray-800`}
                >
                    <nav className="flex flex-col p-4 space-y-2">
                        <Link
                            to="/dashboard"
                            className="block px-4 py-2 text-sm hover:bg-gray-700"
                            onClick={() => setIsOpen(false)}
                        >
                            User Management
                        </Link>
                        <Link
                            to="/role-management"
                            className="block px-4 py-2 text-sm hover:bg-gray-700"
                            onClick={() => setIsOpen(false)}
                        >
                            Role Management
                        </Link>
                        <Link
                            to="/audit-log"
                            className="block px-4 py-2 text-sm hover:bg-gray-700"
                            onClick={() => setIsOpen(false)}
                        >
                            Audit Log
                        </Link>
                    </nav>
                </div>
            </div>

        </div>
    );
};

export default Sidebar;
