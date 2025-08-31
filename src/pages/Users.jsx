import { useEffect, useState } from "react";
import authApiClient from "../services/auth-apiclient";

const UsersPage = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [deleteLoading, setDeleteLoading] = useState(null);
    const [error, setError] = useState("");

    const fetchUsers = async () => {
        setLoading(true);
        setError("");
        try {
            const response = await authApiClient.get("/auth/users/");
            setUsers(response.data);
        } catch (err) {
            console.error(err);
            setError("Failed to fetch users.");
        }
        setLoading(false);
    };

    const deleteUser = async (id) => {
        if (!window.confirm("Are you sure you want to delete this user?")) return;

        setDeleteLoading(id);
        try {
            await authApiClient.delete(`/auth/users/${id}/`);
            setUsers(users.filter((user) => user.id !== id));
        } catch (err) {
            console.error("Delete failed:", err.response || err);
            alert("Failed to delete user.");
        }
        setDeleteLoading(null);
    };


    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">All Users</h1>

            {loading ? (
                <p className="text-center text-gray-600">Loading users...</p>
            ) : error ? (
                <p className="text-center text-red-500">{error}</p>
            ) : (
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
                        <thead className="bg-blue-600 text-white">
                            <tr>
                                <th className="py-3 px-6 text-left">ID</th>
                                <th className="py-3 px-6 text-left">Email</th>
                                <th className="py-3 px-6 text-left">Name</th>
                                <th className="py-3 px-6 text-left">Address</th>
                                <th className="py-3 px-6 text-left">Phone</th>
                                <th className="py-3 px-6 text-left">Staff</th>
                                <th className="py-3 px-6 text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user, idx) => (
                                <tr
                                    key={user.id}
                                    className={idx % 2 === 0 ? "bg-gray-50" : "bg-white"}
                                >
                                    <td className="py-3 px-6">{user.id}</td>
                                    <td className="py-3 px-6">{user.email}</td>
                                    <td className="py-3 px-6">{user.first_name} {user.last_name}</td>
                                    <td className="py-3 px-6">{user.address || "-"}</td>
                                    <td className="py-3 px-6">{user.phone_number || "-"}</td>
                                    <td className="py-3 px-6">{user.is_staff ? "Yes" : "No"}</td>
                                    <td className="py-3 px-6 text-center">
                                        <button
                                            onClick={() => deleteUser(user.id)}
                                            disabled={deleteLoading === user.id}
                                            className={`px-4 py-2 rounded-md text-white ${deleteLoading === user.id
                                                ? "bg-gray-400 cursor-not-allowed"
                                                : "bg-red-500 hover:bg-red-600"
                                                }`}
                                        >
                                            {deleteLoading === user.id ? "Deleting..." : "Delete"}
                                        </button>
                                    </td>
                                </tr>
                            ))}
                            {users.length === 0 && (
                                <tr>
                                    <td colSpan="7" className="text-center py-4 text-gray-500">
                                        No users found.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default UsersPage;
