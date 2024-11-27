import { useState } from "react";
import { mockRoles } from "../service/api";
import RoleModal from "./RoleModel";



const RoleManagement = () => {
    const [roles, setRoles] = useState(mockRoles); // List of roles
    const [editingRole, setEditingRole] = useState(null); // Role being edited
    const [showModal, setShowModal] = useState(false); // Modal visibility

    // Handle adding or editing a role
    const handleAddEditRole = (role) => {
        if (role.id) {
            // Edit existing role
            setRoles((prev) =>
                prev.map((r) => (r.id === role.id ? { ...r, ...role } : r))
            );
        } else {
            // Add new role
            setRoles((prev) => [...prev, { ...role, id: Date.now() }]);
        }
        setShowModal(false); // Close modal
        setEditingRole(null); // Reset editingRole
    };

    // Open the modal for adding a new role
    const handleAddRole = () => {
        setEditingRole(null); // Reset editingRole for new role
        setShowModal(true); // Open modal
    };

    // Open the modal for editing an existing role
    const handleEditRole = (role) => {
        setEditingRole(role); // Set the role to be edited
        setShowModal(true); // Open modal
    };

    return (
        <div className="md:p-6 p-2  min-h-72 flex flex-col items-center">
            <div className="w-full max-w-3xl  shadow rounded-lg md:p-6 p-3">
                {/* Header Section */}
                <div className="flex justify-between items-center border-b pb-4 mb-4">
                    <h2 className="md:text-xl text-sm font-bold">Role Management</h2>
                    <button
                        className="bg-blue-500 text-white md:px-4 px-2 md:text-lg text-sm py-2 hover:bg-blue-600"
                        onClick={handleAddRole}
                    >
                        Add Role
                    </button>
                </div>

                {/* Role List */}
                <ul className="space-y-3">
                    {roles.map((role) => (
                        <li
                            className="flex justify-between items-center bg-gray-100 p-3 rounded-lg"
                            key={role.id}
                        >
                            <div>
                                <span className="font-semibold md:text-lg text-md text-gray-800">{role.name}</span>
                                <p className="md:text-sm text-xs text-gray-600">
                                    Permissions: {role.permissions.join(", ")}
                                </p>
                            </div>
                            <button
                                className="text-blue-500 hover:underline md:text-md text-sm"
                                onClick={() => handleEditRole(role)}
                            >
                                Edit
                            </button>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Role Modal */}
            {showModal && (
                <RoleModal
                    onClose={() => {
                        setShowModal(false);
                        setEditingRole(null); // Reset editingRole when modal closes
                    }}
                    onSave={handleAddEditRole}
                    role={editingRole} // Pass editing role to modal
                />
            )}
        </div>
    );
};

export default RoleManagement;
