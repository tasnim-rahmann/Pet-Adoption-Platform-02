import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

const useAuth = () => {
    const [user, setUser] = useState(null);
    const [errorMessage, setErrorMessage] = useState("");

    // Get token from localStorage
    const getToken = () => {
        const token = localStorage.getItem("authToken");
        return token ? JSON.parse(token) : null;
    };

    const [authToken, setAuthToken] = useState(getToken());

    // Fetch user whenever token changes
    useEffect(() => {
        if (authToken) fetchUserProfile(authToken);
    }, [authToken]);

    // Fetch user profile using a token
    const fetchUserProfile = async (token = authToken) => {
        if (!token) return;
        try {
            const response = await apiClient.get("/auth/users/me/", {
                headers: { Authorization: `JWT ${token.access}` },
            });
            setUser(response.data);
        } catch (err) {
            console.log("Fetch user error:", err.response?.data || err.message);
            setErrorMessage("Failed to fetch user profile.");
        }
    };

    // Update User Profile
    const updateUserProfile = async (data) => {
        setErrorMessage("");
        try {
            await apiClient.put("/auth/users/me/", data, {
                headers: { Authorization: `JWT ${authToken?.access}` }
            });
        } catch (err) {
            const message =
                err.response?.data
                    ? Object.entries(err.response.data)
                        .map(([key, value]) => `${key}: ${value.join(" ")}`)
                        .join(" | ")
                    : err.message;
            setErrorMessage(message);
            throw err;
        }
    };

    // Password Change
    const changePassword = async ({ current_password, new_password, re_new_password }) => {
        setErrorMessage("");
        try {
            const response = await apiClient.post(
                "/auth/users/set_password/",
                { current_password, new_password, re_new_password },
                { headers: { Authorization: `JWT ${authToken?.access}` } }
            );
            // Optionally, return success info
            return response.data;
        } catch (err) {
            const message =
                err.response?.data
                    ? Object.entries(err.response.data)
                        .map(([key, value]) => `${key}: ${value.join(" ")}`)
                        .join(" | ")
                    : err.message;
            setErrorMessage(message);
            throw err;
        }
    };


    // Login user
    const loginUser = async (userData) => {
        setErrorMessage("");
        try {
            const response = await apiClient.post("/auth/jwt/create/", userData);
            const token = response.data;

            // Save token to state and localStorage
            setAuthToken(token);
            localStorage.setItem("authToken", JSON.stringify(token));

            // Fetch user using the returned token
            await fetchUserProfile(token);
        } catch (err) {
            const message = err.response?.data?.detail || JSON.stringify(err.response?.data) || err.message;
            setErrorMessage(message);
            throw err;
        }
    };

    // Register user
    const registerUser = async (userData) => {
        setErrorMessage("");
        try {
            // Register user
            await apiClient.post("/auth/users/", userData);

            // Auto-login after registration
            await loginUser({ email: userData.email, password: userData.password });
        } catch (err) {
            const message =
                err.response?.data
                    ? Object.entries(err.response.data)
                        .map(([key, value]) => `${key}: ${value.join(" ")}`)
                        .join(" | ")
                    : err.message;
            setErrorMessage(message);
            throw err;
        }
    };

    // Logout user
    const logoutUser = () => {
        setUser(null);
        setAuthToken(null);
        localStorage.removeItem("cartId");
        localStorage.removeItem("authToken");
        window.location.reload();
    };

    return {
        user,
        errorMessage,
        loginUser,
        registerUser,
        logoutUser,
        updateUserProfile,
        changePassword
    };
};

export default useAuth;