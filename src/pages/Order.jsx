import OrderCard from "../components/Orders/OrderCard";

const Order = () => {
    const orders = [
        {
            id: "f6569780-480d-4464-a094-d54a89bc0bc8",
            user: 3,
            items: [
                {
                    id: 11,
                    pet: {
                        id: 3,
                        name: "Dog3",
                        price: 22
                    },
                    quantity: 2,
                    price: 22,
                    total_price: 44
                },
                {
                    id: 12,
                    pet: {
                        id: 5,
                        name: "Dog5",
                        price: 40
                    },
                    quantity: 3,
                    price: 30,
                    total_price: 90
                }
            ],
            status: "Not Paid",
            total_price: 44,
            created_at: "2025-08-20T17:16:08.614734Z"
        },
        {
            id: "f6569780-480d-4464-a094-d54a89bc0bc8",
            user: 3,
            items: [
                {
                    id: 11,
                    pet: {
                        id: 3,
                        name: "Dog3",
                        price: 22
                    },
                    quantity: 2,
                    price: 22,
                    total_price: 44
                },
            ],
            status: "Not Paid",
            total_price: 44,
            created_at: "2025-08-20T17:16:08.614734Z"
        }
    ];
    return (
        <div className="">
            <h1 className="text-2xl font-bold mb-6">This is Order Details</h1>
            {orders.map((order, index) => (
                <OrderCard key={index} order={order} />
            ))}
        </div>
    );
};

export default Order;