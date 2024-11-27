import { useState, useEffect } from "react";

const RoleModal = ({ role, onClose, onSave }) => {
    const [formData, setFormData] = useState({ name: "", permissions: [] });

    // Populate form data if editing a role
    useEffect(() => {
        if (role) setFormData(role);
    }, [role]);

    // Handle text input changes
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle checkbox changes for permissions
    const handleCheckboxChange = (permission) => {
        setFormData((prev) => ({
            ...prev,
            permissions: prev.permissions.includes(permission)
                ? prev.permissions.filter((p) => p !== permission)
                : [...prev.permissions, permission],
        }));
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
                        {role ? "Edit Role" : "Add Role"}
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
                    {/* Role Name Input */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Role Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter role name"
                            value={formData.name}
                            onChange={handleChange}
                            className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            required
                        />
                    </div>

                    {/* Permissions Section */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Permissions
                        </label>
                        <div className="mt-2 grid grid-cols-3 gap-3">
                            {["Read", "Write", "Delete"].map((perm) => (
                                <label
                                    key={perm}
                                    className="flex items-center text-sm text-gray-700"
                                >
                                    <input
                                        type="checkbox"
                                        checked={formData.permissions.includes(perm)}
                                        onChange={() => handleCheckboxChange(perm)}
                                        className="mr-2 h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                                    />
                                    {perm}
                                </label>
                            ))}
                        </div>
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

export default RoleModal;
