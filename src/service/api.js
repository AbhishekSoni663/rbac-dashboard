export const mockUsers = [
    { id: 1, name: "Alice", role: "Admin", status: "Active" },
    { id: 2, name: "Bob", role: "Manager", status: "Inactive" },
    { id: 3, name: "Charlie", role: "User", status: "Active" },
];

export const mockRoles = [
    { id: 1, name: "Admin", permissions: ["Read", "Write", "Delete"] },
    { id: 2, name: "Manager", permissions: ["Read", "Write"] },
    { id: 3, name: "User", permissions: ["Read"] },
];

export const mockAuditLogs = [
    { id: 1, timestamp: "2024-11-25 10:00", action: "Added User Alice", user: "Admin" },
    { id: 2, timestamp: "2024-11-25 11:00", action: "Updated Role Manager", user: "Admin" },
    { id: 3, timestamp: "2024-11-25 12:00", action: "Deleted User Bob", user: "Admin" },
];
