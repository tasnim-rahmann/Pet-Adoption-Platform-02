import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

const useAuth = () => {
    const [user, setUser] = useState(null);
    const [errorMessege, setError] = useState("");

    const getToken = () => {
        const token = localStorage.getItem("authToken");
        return token ? JSON.parse(token) : null;
    };
    const [authToken, setAuthToken] = useState(getToken());


    useEffect(() => {
        if (authToken) fetchUserProfile();
    }, [authToken]);

    // Fetch User
    const fetchUserProfile = async () => {
        try {
            const response = await apiClient.get("/auth/users/me/", {
                headers: { Authorization: `JWT ${authToken.access}` }
            });
            setUser(response.data);
        } catch (err) {
            console.log("Fetch user error:", err.response?.data || err.message);
        }
    };

    // Login User
    const loginUser = async (userData) => {
        setError("");
        try {
            const response = await apiClient.post("/auth/jwt/create/", userData);
            setAuthToken(response.data);
            localStorage.setItem("authToken", JSON.stringify(response.data));

            // after login featch user
            await fetchUserProfile();
        } catch (err) {
            setError(err.response?.data.detail);
        }
    };

    // Register User

    return { user, errorMessege, loginUser };
};

export default useAuth;