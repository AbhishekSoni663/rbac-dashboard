import { mockAuditLogs } from "../service/api";

const AuditLog = () => {
    return (
        <div className="p-6 min-h-screen flex flex-col items-center">
            <div className="w-full max-w-4xl shadow rounded-lg p-6">
                {/* Header */}
                <div className="border-b pb-4 mb-4">
                    <h2 className="md:text-xl text-sm font-bold text-gray-800">Audit Log</h2>
                    <p className="text-sm text-gray-600">Track user actions and system activities</p>
                </div>

                {/* Audit Logs List */}
                <ul className="divide-y divide-gray-200 flex flex-col gap-3">
                    {mockAuditLogs.map((log) => (
                        <li
                            key={log.id}
                            className="py-4 flex justify-between items-start bg-gray-50 hover:bg-gray-100 rounded-lg p-3"
                        >
                            <div>
                                <p className="text-sm font-medium text-gray-800">
                                    {log.action}
                                </p>
                                <p className="text-sm text-gray-600">
                                    By <span className="font-semibold md:text-md text-sm">{log.user}</span>
                                </p>
                            </div>
                            <p className="md:text-md text-xs text-gray-500">{log.timestamp}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default AuditLog;
