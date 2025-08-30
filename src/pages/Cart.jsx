import { useEffect, useState } from "react";
import useCartContext from "../hooks/useCartContext";
import CartItemList from "../components/Cart/CartItemList";
import CartSummary from "../components/Cart/CartSummary";

const Cart = () => {
    const { cart, isLoading, createOrGetCart, updateCartItemQuantity, deleteCartItems } = useCartContext();
    const [localCart, setLocalCart] = useState({ items: [], total_price: 0 });

    useEffect(() => {
        createOrGetCart();
    }, [createOrGetCart]);

    useEffect(() => {
        setLocalCart(cart);
    }, [cart]);

    const handleUpdateQuantity = async (itemId, newQuantity) => {
        const prevLocalCartCopy = JSON.parse(JSON.stringify(localCart));

        setLocalCart((prevLocalCart) => {
            const updatedItems = prevLocalCart.items.map((item) =>
                item.id === itemId
                    ? {
                        ...item,
                        quantity: newQuantity,
                        total_price: item.pet.price * newQuantity,
                    }
                    : item
            );

            return {
                ...prevLocalCart,
                items: updatedItems,
                total_price: updatedItems.reduce((sum, item) => sum + item.total_price, 0),
            };
        });

        try {
            await updateCartItemQuantity(itemId, newQuantity);
        } catch (err) {
            console.log(err);
            setLocalCart(prevLocalCartCopy);
        }
    };

    const handleRemoveItem = async (itemId) => {
        setLocalCart((prevLocalCart) => {
            const updatedItems = prevLocalCart.items.filter((item) => item.id !== itemId);

            return {
                ...prevLocalCart,
                items: updatedItems,
                total_price: updatedItems.reduce((sum, item) => sum + item.total_price, 0),
            };
        });

        try {
            await deleteCartItems(itemId);
        } catch (err) {
            console.log(err);
        }
    };


    if (isLoading) {
        return (
            <div className="h-screen flex justify-center mt-12 lg:mt-20">
                <div className="w-12 h-12 border-4 border-gray-300 border-t-[#1C4A2A] rounded-full animate-spin"></div>
            </div>
        );
    }


    return (
        <div className="flex flex-col lg:flex-row gap-6">
            <div className="w-full lg:w-2/3">
                <CartItemList
                    items={localCart?.items || []}
                    handleUpdateQuantity={handleUpdateQuantity}
                    handleRemoveItem={handleRemoveItem}
                />
            </div>
            <div className="w-full lg:w-1/3">
                <CartSummary
                    totalPrice={localCart?.total_price || 0}
                    itemCount={localCart?.items?.length || 0}
                />
            </div>
        </div>
    );
};

export default Cart;