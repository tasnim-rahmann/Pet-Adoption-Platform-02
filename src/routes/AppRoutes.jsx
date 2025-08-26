import { Route, Routes } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import FaQ from "../pages/FaQ";
import PetPage from "../pages/PetPage";

const AppRoutes = () => {
    return (
        <Routes>
            <Route element={<MainLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/pets" element={<PetPage />} />
                <Route path="/faq" element={<FaQ />} />
            </Route>
        </Routes>
    );
};

export default AppRoutes;