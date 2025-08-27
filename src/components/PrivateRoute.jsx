import { Navigate } from "react-router";
import useAuthContext from "../hooks/useAuthContext";

const PrivateRoute = ({ children }) => {
    const { user } = useAuthContext();
    const token = localStorage.getItem("authToken");

    if (token && user === null) {
        return (
            <div className="h-screen flex justify-center mt-12">
                <div className="w-12 h-12 border-4 border-gray-300 border-t-[#1C4A2A] rounded-full animate-spin"></div>
            </div>
        );
    }

    if (user) return children;

    return <Navigate to="/login" replace />;
};

export default PrivateRoute;
