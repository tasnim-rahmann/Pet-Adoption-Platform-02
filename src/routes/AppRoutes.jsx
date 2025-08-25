import { Route, Routes } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import FaQ from "../components/FaQ";
import Pets from "../components/Pets/Pets";

const AppRoutes = () => {
    return (
        <Routes>
            <Route element={<MainLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/pets" element={<Pets />} />
                <Route path="/faq" element={<FaQ />} />
            </Route>
        </Routes>
    );
};

export default AppRoutes;