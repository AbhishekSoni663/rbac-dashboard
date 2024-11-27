import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    // Redirect if already logged in
    useEffect(() => {
        const isLoggedIn = localStorage.getItem("isLoggedIn");
        if (isLoggedIn) {
            navigate("/dashboard");
        }
    }, [navigate]);

    const handleLogin = (e) => {
        e.preventDefault();
        if (username === "admin" && password === "password") {
            localStorage.setItem("isLoggedIn", "true");
            navigate("/dashboard");
        } else {
            alert("Invalid credentials!");
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen ">
            <div className="w-full max-w-md p-8 login-box rounded-lg shadow-lg">
                {/* Header */}
                <h2 className="text-3xl font-bold text-center text-gray-800">
                    Welcome Back
                </h2>
                <p className="text-center text-gray-500 mb-6">
                    Please login to your account
                </p>

                {/* Form */}
                <form onSubmit={handleLogin} className="space-y-6 log-form">
                    {/* Username Input */}
                    <div>
                        <label
                            htmlFor="username"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Username
                        </label>
                        <input
                            type="text"
                            id="username"
                            placeholder="Enter your username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            required
                        />
                    </div>

                    {/* Password Input */}
                    <div>
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            required
                        />
                    </div>

                    {/* Login Button */}
                    <button
                        type="submit"
                        className="login-btn w-full px-4 py-2  hover:bg-indigo-700 rounded-lg shadow-md font-medium transition duration-200 ease-in-out"
                    >
                        Login
                    </button>
                </form>

                {/* Footer */}
                <p className=" login-foot mt-6 text-center text-sm text-gray-500">
                    Forgot your password?{" "}
                    <a
                        href="#"
                        className=" hover:text-indigo-800 font-medium"
                    >
                        Reset it here
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Login;
