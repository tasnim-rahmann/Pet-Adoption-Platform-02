import {
    FiBarChart2,
    FiPackage,
    FiPlusCircle,
    FiShoppingCart,
    FiStar,
    FiTag,
    FiUsers
} from "react-icons/fi";
import { LuListOrdered } from "react-icons/lu";
import { Link } from "react-router";

const SideBar = () => {
    const menuItems = [
        { to: "/dashboard", icon: FiBarChart2, label: "Dashboard" },
        { to: "/pets", icon: FiPackage, label: "Pets" },
        { to: "/pets/add", icon: FiPlusCircle, label: "Add Pets" },
        { to: "/categories", icon: FiTag, label: "Categories" },
        { to: "/categories/add", icon: FiPlusCircle, label: "Add Categories" },
        { to: "/dashboard/cart/", icon: FiShoppingCart, label: "My Favourite" },
        { to: "/dashboard/orders/", icon: LuListOrdered, label: "Orders" },
        { to: "/reviews", icon: FiStar, label: "Reviews" },
        { to: "/users", icon: FiUsers, label: "Users" }
    ];
    return (
        <div className="drawer-side z-10">
            <label
                htmlFor="drawer-toggle"
                aria-label="close sidebar"
                className="drawer-overlay"
            ></label>
            <aside className="menu bg-base-200 w-64 min-h-full p-4 text-base-content">
                <div className="flex items-center gap-2 mb-6 px-2 ml-3">
                    <FiShoppingCart className="h-6 w-6" />
                    <Link to="/"><h1 className="text-xl font-bold">Pet Lagbe</h1></Link>
                </div>

                <ul className="menu menu-md gap-2">
                    {menuItems.map((item, index) => (
                        <li key={index}>
                            <Link to={item.to} className="flex items-center">
                                <item.icon className="h-4 w-4" />
                                <span>{item.label}</span>
                            </Link>
                        </li>
                    ))}
                </ul>

                <div className="mt-auto pt-6 text-xs text-base-content/70">
                    © 2025 Pet Lagbe Admin
                </div>
            </aside>
        </div>
    );
};

export default SideBar;