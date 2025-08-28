import { useState } from "react";
import { Outlet } from "react-router";
import NavBar from "../components/Dashboard/NavBar";
import SideBar from "../components/Dashboard/SideBar";

const DashboardLayout = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <div className="drawer lg:drawer-open">
            {/* Mobile drawer checkbox */}
            <input
                id="drawer-toggle"
                type="checkbox"
                className="drawer-toggle"
                checked={sidebarOpen}
                onChange={toggleSidebar}
            />

            {/* Page content */}
            <div className="drawer-content flex flex-col">
                {/* Navbar */}
                <NavBar sidebarOpen={sidebarOpen} />

                {/* Main content */}
                <main className="p-6">
                    <Outlet />
                </main>
            </div>

            {/* Side Bar */}
            <SideBar />
        </div>
    );
};

export default DashboardLayout;