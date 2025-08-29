import { FaRegTrashAlt } from "react-icons/fa";

const CartItemList = ({ items, handleUpdateQuantity, handleRemoveItem }) => {
    if (!items || items.length === 0) {
        return (
            <div className="py-6 text-center text-gray-500">
                Your Favourite List is Empty
            </div>
        );
    }

    return (
        <div className="space-y-4">
            <h2 className="text-xl font-semibold px-4">My Favourite List</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th className="text-right">Price</th>
                            <th>Quantity</th>
                            <th className="text-right">Total</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map((item) => (
                            <tr key={item.id}>
                                <td className="font-medium">{item.pet.name}</td>
                                <td className="text-right">{item.pet.price}</td>
                                <td>
                                    <div className="flex items-center join">
                                        {/* Decrease */}
                                        <button
                                            className="btn btn-xs btn-outline join-item"
                                            onClick={() => handleUpdateQuantity(item.id, Math.max(1, item.quantity - 1))}
                                        >
                                            -
                                        </button>

                                        {/* Input */}
                                        <input
                                            type="number"
                                            min="1"
                                            max="5"
                                            value={item.quantity}
                                            onChange={(e) => handleUpdateQuantity(item.id, e.target.value)}
                                            className="input input-xs input-bordered join-item w-12 text-center [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:outline-0"
                                        />

                                        {/* Increase */}
                                        <button
                                            className="btn btn-xs btn-outline join-item"
                                            onClick={() => handleUpdateQuantity(item.id, Math.min(5, item.quantity + 1))}
                                        >
                                            +
                                        </button>
                                    </div>
                                </td>
                                <td className="text-right font-medium">{item.total_price}</td>
                                <td>
                                    <button
                                        className="btn btn-ghost btn-xs btn-circle"
                                        aria-label={`Remove ${item.pet.name} from cart`}
                                        onClick={() => handleRemoveItem(item.id)}
                                    >
                                        <FaRegTrashAlt className="h-4 w-4" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CartItemList;
