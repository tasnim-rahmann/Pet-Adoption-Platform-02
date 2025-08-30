import { useEffect, useState } from "react";
import OrderCard from "../components/Orders/OrderCard";
import authApiClient from "../services/auth-apiclient";

const Order = () => {
    const [orders, setOrders] = useState([]);

    const handleCancelOrder = async (orderId) => {
        try {
            const response = await authApiClient.post(`/orders/${orderId}/cancel/`);
            if (response.status === 200) {
                setOrders(prevOrder => prevOrder.map((order) => order.id === orderId ? { ...order, status: "Canceled" } : order));
            }
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        authApiClient
            .get("/orders/")
            .then((res) => setOrders(res.data))
            .catch((err) => console.log(err));
    }, []);


    return (
        <div className="">
            <h1 className="text-2xl font-bold mb-6">This is Order Details</h1>
            {orders.length === 0 && <div className="text-md text-gray-500">Your Order List is Empty!</div>}
            {orders.map((order, index) => (
                <OrderCard key={index} order={order} onCancel={handleCancelOrder} />
            ))}
        </div>
    );
};

export default Order;