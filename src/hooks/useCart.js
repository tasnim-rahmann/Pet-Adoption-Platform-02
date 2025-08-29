import { useState } from "react";
import authApiClient from "../services/auth-apiclient";

const useCart = () => {
    const [authToken] = useState(() => JSON.parse(localStorage.getItem("authToken")).access);
    const [cart, setCart] = useState(null);
    const [cartId, setCartId] = useState(() => localStorage.getItem("cartId"));

    // Create a new Cart
    const createOrGetCart = async () => {
        try {
            const response = await authApiClient.post("/carts/");
            if (!cartId) {
                localStorage.setItem("cartId", response.data.id);
                setCartId(response.data.id);
            }
            setCart(response.data);
        } catch (err) {
            console.log(err);
        }
    };

    // Add Cart Items
    const AddCartItems = async (pet_id, quantity) => {
        if (!cartId) await createOrGetCart();
        try {
            const response = await authApiClient.post(`/carts/${cartId}/items/`, { pet_id, quantity });
            return response.data;
        } catch (err) {
            console.log(err);
        }
    };
    return { cart, createOrGetCart, AddCartItems };
};

export default useCart;