import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UserManagement from "../component/UserManagement";

import Sidebar from "../component/Sidebar";




const Dashboard = () => {
    const navigate = useNavigate();

    useEffect(() => {

        const isLoggedIn = localStorage.getItem("isLoggedIn");
        if (!isLoggedIn) {
            navigate("/");
        }
    }, [navigate]);

    return (
        <div className="md:flex">
            <Sidebar/>
            <div className="flex-1 p-4">
                {/* <h1 className="text-xl font-semibold mb-4">Dashboard</h1> */}
                <div className="grid grid-cols-1 lg:grid-cols-1 gap-4">
                    <UserManagement />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
