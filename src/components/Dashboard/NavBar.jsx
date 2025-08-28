import { FaUserCircle } from 'react-icons/fa';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-router';

const NavBar = ({ sidebarOpen }) => {
    return (
        <div className="navbar bg-base-100 border-b">
            <div className="flex-none lg:hidden">
                <label htmlFor="drawer-toggle" className="btn btn-square btn-ghost">
                    {sidebarOpen ? (
                        <FiX className="h-5 w-5" />
                    ) : (
                        <FiMenu className="h-5 w-5" />
                    )}
                </label>
            </div>
            <div className="flex-1 ml-5">
                <h2 className="text-lg font-semibold">Dashboard</h2>
            </div>
            <div className="flex-none mr-5">
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-circle">
                        <FaUserCircle size={20} />
                    </label>
                    <ul
                        tabIndex={0}
                        className="menu dropdown-content mt-3 z-[1] shadow bg-gray-100 rounded-box w-40"
                    >
                        <li>
                            <Link to="/dashboard/profile">Profile</Link>
                        </li>
                        <li>
                            <button>Logout</button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default NavBar;