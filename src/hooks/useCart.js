import { useCallback, useEffect, useState } from "react";
import authApiClient from "../services/auth-apiclient";

const useCart = () => {
    const [cart, setCart] = useState(null);
    const [cartId, setCartId] = useState(() => localStorage.getItem("cartId"));
    const [isLoading, setIsLoading] = useState(false);

    // Create a new Cart
    const createOrGetCart = useCallback(
        async () => {
            setIsLoading(true);
            try {
                const response = await authApiClient.post("/carts/");
                if (!cartId) {
                    localStorage.setItem("cartId", response.data.id);
                    setCartId(response.data.id);
                }
                setCart(response.data);
                setIsLoading(false);
            } catch (err) {
                console.log(err);
            }
        }, [cartId]
    );

    // Add Cart Items
    const AddCartItems = useCallback(
        async (pet_id, quantity) => {
            setIsLoading(true);
            if (!cartId) await createOrGetCart();
            try {
                const response = await authApiClient.post(`/carts/${cartId}/items/`, { pet_id, quantity });
                return response.data;
            } catch (err) {
                console.log(err);
            } finally {
                setIsLoading(false);
            }
        }, [cartId, createOrGetCart]
    );

    // Update Item Quantity
    const updateCartItemQuantity = useCallback(
        async (itemId, quantity) => {
            try {
                await authApiClient.patch(`/carts/${cartId}/items/${itemId}`, { quantity });
            } catch (err) {
                console.log("Error Updating Cart", err);
            }
        }, [cartId]
    );

    // Delete Cart Items
    const deleteCartItems = useCallback(async (itemId) => {
        try {
            await authApiClient.delete(`/carts/${cartId}/items/${itemId}/`);
        } catch (err) {
            console.log(err);
        }
    }, [cartId]);

    useEffect(() => {
        const initializeCart = async () => {
            setIsLoading(true);
            await createOrGetCart();
            setIsLoading(false);
        };
        initializeCart();
    }, [createOrGetCart]);

    return { cart, isLoading, createOrGetCart, AddCartItems, updateCartItemQuantity, deleteCartItems };
};

export default useCart;