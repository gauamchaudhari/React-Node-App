import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaBars, FaMoon, FaSun } from "react-icons/fa";

const Topbar = ({ toggleSidebar, toggleTheme, isDarkMode }) => {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <header className="h-16 bg-white dark:bg-gray-800 border-b dark:border-gray-700 shadow-sm flex justify-between items-center px-6">
      <div className="flex items-center space-x-4">
        <button
          onClick={toggleSidebar}
          className="text-gray-700 dark:text-gray-300 text-lg hover:text-blue-600"
        >
          <FaBars />
        </button>
        <button className="text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600">
          Home
        </button>
        <button className="text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600">
          All Users
        </button>
        <button className="text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600">
          Pricing
        </button>
      </div>

      <div className="flex items-center gap-4">
        {/* Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          className="text-gray-700 dark:text-yellow-300 hover:text-blue-600"
          title="Toggle Theme"
        >
          {isDarkMode ? <FaSun /> : <FaMoon />}
        </button>

        {/* User Dropdown */}
        <div className="relative">
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="flex items-center gap-2 text-sm font-medium text-gray-800 dark:text-gray-200 hover:text-blue-600"
          >
            👤 Admin ▾
          </button>

          {showMenu && (
            <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-800 border dark:border-gray-700 rounded shadow-lg z-50">
              <button
                onClick={handleLogout}
                className="w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                🚪 Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Topbar;
