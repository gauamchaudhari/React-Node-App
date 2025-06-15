import { useEffect, useState } from "react";
import { getUsers } from "../services/userService";
import { FaEdit, FaTrash, FaDownload } from "react-icons/fa";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true); // 🔁 Loading state

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    try {
      const userData = await getUsers();
      setUsers(userData);
    } catch (err) {
      console.error("Failed to fetch users", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-800">
          Users Management
        </h1>
        <button className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-md shadow-md transition">
          + Create User
        </button>
      </div>

      {/* Loader */}
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="w-16 h-16 border-[6px] border-pink-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : (
        <>
          {/* Table Card */}
          <div className="bg-white shadow-lg rounded-xl overflow-hidden">
            <table className="min-w-full text-sm text-gray-700 border border-gray-200">
              <thead className="bg-gray-100 text-xs font-bold uppercase text-gray-600">
                <tr>
                  <th className="border border-gray-200 px-6 py-3 text-left">
                    First Name
                  </th>
                  <th className="border border-gray-200 px-6 py-3 text-left">
                    Last Name
                  </th>
                  <th className="border border-gray-200 px-6 py-3 text-left">
                    Email
                  </th>
                  <th className="border border-gray-200 px-6 py-3 text-left">
                    Phone
                  </th>
                  <th className="border border-gray-200 px-6 py-3 text-left">
                    Address
                  </th>
                  <th className="border border-gray-200 px-6 py-3 text-left">
                    Gender
                  </th>
                  <th className="border border-gray-200 px-6 py-3 text-left">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr
                    key={user.id}
                    className="hover:bg-gray-100 transition duration-200 border-b border-gray-200"
                  >
                    <td className="px-6 py-3 border border-gray-200">
                      {user.first_name}
                    </td>
                    <td className="px-6 py-3 border border-gray-200">
                      {user.last_name}
                    </td>
                    <td className="px-6 py-3 border border-gray-200">
                      {user.email}
                    </td>
                    <td className="px-6 py-3 border border-gray-200">
                      {user.phone}
                    </td>
                    <td className="px-6 py-3 border border-gray-200">
                      {user.address}
                    </td>
                    <td className="px-6 py-3 border border-gray-200">
                      <span
                        className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${
                          user.gender === "female"
                            ? "bg-pink-100 text-pink-800"
                            : "bg-blue-100 text-blue-800"
                        }`}
                      >
                        {user.gender}
                      </span>
                    </td>
                    <td className="px-6 py-3 border border-gray-200 flex gap-3">
                      <button
                        className="text-blue-600 hover:text-blue-800 transition"
                        title="Edit"
                      >
                        <FaEdit />
                      </button>
                      <button
                        className="text-red-600 hover:text-red-800 transition"
                        title="Delete"
                      >
                        <FaTrash />
                      </button>
                      <button
                        className="text-gray-600 hover:text-gray-800 transition"
                        title="Download"
                      >
                        <FaDownload />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Footer */}
            <div className="p-4 text-sm text-gray-500 border-t">
              Showing {users.length} of {users.length} entries
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Users;
