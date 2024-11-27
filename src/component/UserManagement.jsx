import { useState } from "react";
import { mockUsers } from "../service/api";
import UserModal from "./UserModal";
import Pagination from "./Pagination"


const UserManagement = () => {
    const [users, setUsers] = useState(mockUsers);
    const [search, setSearch] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [editingUser, setEditingUser] = useState(null);

    const handleAddEditUser = (user) => {
        if (user.id) {
            setUsers((prev) =>
                prev.map((u) => (u.id === user.id ? { ...u, ...user } : u))
            );
        } else {
            setUsers((prev) => [
                ...prev,
                { ...user, id: Date.now(), status: "Active" },
            ]);
        }
        setShowModal(false);
        setEditingUser(null);
    };

    const handleAddUser = () => {
        setEditingUser(null);
        setShowModal(true);
    };

    const handleEditUser = (user) => {
        setEditingUser(user);
        setShowModal(true);
    };

    const filteredUsers = users.filter((user) =>
        user.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="md:p-6 p-2  min-h-72 flex flex-col items-center">
            <div className="w-full max-w-3xl  shadow rounded-lg md:p-6 p-2">
                {/* Header Section */}
                <div className="sm:flex justify-between items-center border-b pb-4 mb-4">
                    <h2 className="md:text-xl text-md font-bold">User Management</h2>
                    <div className="flex flex-wrap items-center gap-3 md:mt-0 mt-3">
                        <input
                            className="sm:px-4 px-2 sm:w-auto w-full md:py-2 py-1 border  focus:outline-none focus:ring-2 focus:ring-blue-500"
                            type="text"
                            placeholder="Search users..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                        <button
                            className="bg-blue-500 sm:w-auto w-full text-white px-4 md:py-2 py-1 md:text-lg text-md  hover:bg-blue-600"
                            onClick={handleAddUser}
                        >
                            Add User
                        </button>
                    </div>
                </div>

                {/* User List */}
                <ul className="space-y-3">
                    {filteredUsers.map((user) => (
                        <li
                            className="flex items-center justify-between bg-gray-100 p-3 rounded-lg"
                            key={user.id}
                        >
                            <div className="flex flex-col">
                                <span className="font-semibold md:text-lg text-sm text-gray-800">{user.name}</span>
                                <span className="text-sm text-gray-600">{user.role}</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <span
                                    className={`md:text-lg text-xs cursor-pointer font-medium ${user.status === "Active"
                                        ? "text-green-500"
                                        : "text-red-500"
                                        }`}
                                    onClick={() =>
                                        setUsers((prev) =>
                                            prev.map((u) =>
                                                u.id === user.id
                                                    ? {
                                                        ...u,
                                                        status:
                                                            u.status === "Active"
                                                                ? "Inactive"
                                                                : "Active",
                                                    }
                                                    : u
                                            )
                                        )
                                    }
                                >
                                    {user.status}
                                </span>
                                <button
                                    className="text-blue-500 md:text-lg text-sm hover:underline"
                                    onClick={() => handleEditUser(user)}
                                >
                                    Edit
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>

                {/* Pagination */}
                <div className="mt-6">
                    <Pagination total={filteredUsers.length} />
                </div>
            </div>

            {/* Modal */}
            {showModal && (
                <UserModal
                    onClose={() => {
                        setShowModal(false);
                        setEditingUser(null);
                    }}
                    onSave={handleAddEditUser}
                    user={editingUser}
                />
            )}
        </div>
    );
};

export default UserManagement;
