import { useState, useEffect } from "react";

const UserModal = ({ user, onClose, onSave }) => {
    const [formData, setFormData] = useState({ name: "", role: "" });

    // Populate form data if editing a user
    useEffect(() => {
        if (user) setFormData(user);
    }, [user]);

    // Handle input changes
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Submit form data
    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(formData);
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white w-full max-w-md rounded-lg shadow-lg p-6">
                {/* Modal Header */}
                <div className="flex justify-between items-center border-b pb-4 mb-4">
                    <h2 className="text-lg font-bold text-gray-800">
                        {user ? "Edit User" : "Add User"}
                    </h2>
                    <button
                        className="text-gray-500 hover:text-gray-800"
                        onClick={onClose}
                    >
                        ✕
                    </button>
                </div>

                {/* Modal Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Name Input */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter user name"
                            value={formData.name}
                            onChange={handleChange}
                            className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            required
                        />
                    </div>

                    {/* Role Input */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Role
                        </label>
                        <input
                            type="text"
                            name="role"
                            placeholder="Enter user role"
                            value={formData.role}
                            onChange={handleChange}
                            className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            required
                        />
                    </div>

                    {/* Form Buttons */}
                    <div className="flex justify-end gap-3">
                        <button
                            type="button"
                            className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300"
                            onClick={onClose}
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                        >
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UserModal;
