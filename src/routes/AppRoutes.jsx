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
import Order from "../pages/Order";
import AddPet from "../pages/AddPet";
import PaymentSuccess from "../pages/PaymentSuccess";
import AddCategory from "../pages/AddCategories";
import CategoryPage from "../pages/Categories";
import UsersPage from "../pages/Users";

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
                <Route path="orders" element={<Order />} />
                <Route path="pets/add" element={<AddPet />} />
                <Route path="categories" element={<CategoryPage />} />
                <Route path="categories/add" element={<AddCategory />} />
                <Route path="users" element={<UsersPage />} />
                <Route path="payment/success/" element={<PaymentSuccess />} />
            </Route>
        </Routes>
    );
};

export default AppRoutes;