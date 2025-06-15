import { FaUsers, FaUserShield, FaLock, FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

const Sidebar = ({ isOpen }) => {
    return (
      <div
        className={`${
          isOpen ? "w-64" : "w-16"
        } min-h-screen bg-gray-900 dark:bg-gray-800 text-white fixed shadow-lg transition-all duration-300`}
      >
        <div className="p-4 text-xl font-bold">
          {isOpen ? "🚀 Spark Admin" : "🚀"}
        </div>
        <nav className="mt-4 space-y-2 text-sm">
          <SidebarLink to="/dashboard" icon={<FaHome />} label="Dashboard" isOpen={isOpen} />
          <SidebarLink to="/users" icon={<FaUsers />} label="Users" isOpen={isOpen} />
          <SidebarLink to="/roles" icon={<FaUserShield />} label="Roles" isOpen={isOpen} />
          <SidebarLink to="/permissions" icon={<FaLock />} label="Permissions" isOpen={isOpen} />
        </nav>
      </div>
    );
  };
  
  const SidebarLink = ({ to, icon, label, isOpen }) => (
    <Link
      to={to}
      className="flex items-center gap-3 px-4 py-2 hover:bg-gray-800 dark:hover:bg-gray-700 rounded"
    >
      {icon}
      {isOpen && label}
    </Link>
  );
  
  export default Sidebar;
  