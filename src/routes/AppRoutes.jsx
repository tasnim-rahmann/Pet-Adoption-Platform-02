import { Route, Routes } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import FaQ from "../pages/FaQ";
import PetPage from "../pages/PetPage";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import PrivateRoute from "../components/PrivateRoute";
import DashboardLayout from "../layouts/DashboardLayout";
import Profile from "../pages/Profile";
import PetDetail from "../pages/PetDetail";
import Cart from "../pages/Cart";

const AppRoutes = () => {
    return (
        <Routes>
            {/* Public Routes */}
            <Route element={<MainLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="pets" element={<PetPage />} />
                <Route path="faq" element={<FaQ />} />
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
                <Route path="pets/:petId" element={<PetDetail />} />
            </Route>
            {/* Private Routes */}
            <Route
                path="dashboard"
                element={
                    <PrivateRoute>
                        <DashboardLayout />
                    </PrivateRoute>
                }>
                <Route index element={<Dashboard />} />
                <Route path="profile" element={<Profile />} />
                <Route path="cart" element={<Cart />} />
            </Route>
        </Routes>
    );
};

export default AppRoutes;