import { useState } from "react";
import { FaCheck, FaShoppingCart } from "react-icons/fa";
import { FaMinus, FaPlus } from "react-icons/fa6";

const AddToCartButton = ({ pet }) => {
    const [quantity, setQuantity] = useState(1);
    const [isAdding, setIsAdding] = useState(false);
    const [isAdded, setIsAdded] = useState(false);

    const increaseQuantity = () => {
        if (quantity < 5) setQuantity(quantity + 1);
    };
    const decreaseQuantity = () => {
        if (quantity > 1) setQuantity(quantity - 1);
    };

    const addToCart = () => {
        console.log("hello world!");
    };
    return (
        <div className="space-y-4">
            <div className="join">
                <button
                    className="btn btn-outline join-item"
                    onClick={decreaseQuantity}
                >
                    <FaMinus className="h-4 w-4" />
                </button>
                <input
                    type="number"
                    min={1}
                    max={5}
                    value={quantity}
                    className="input input-bordered join-item w-16 text-center [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none focus:outline-0"
                />
                <button
                    className="btn btn-outline join-item"
                    onClick={increaseQuantity}
                >
                    <FaPlus className="h-4 w-4" />
                </button>
            </div>
            <button
                className="btn bg-[#1C4A2A] text-white w-full"
                disabled={!pet.availability || isAdded || isAdding}
                onClick={addToCart}
            >
                {isAdding ? (
                    <span className="flex items-center">
                        <span className="loading loading-spinner loading-sm mr-2">
                            Adding...
                        </span>
                    </span>
                ) : isAdded ? (
                    <span className="flex items-center">
                        <FaCheck className="h-4 w-4 mr-2" />
                        Added To Favourite
                    </span>
                ) : (
                    <span className="flex items-center">
                        <FaShoppingCart className="h-4 w-4 mr-2" />
                        Add To Favourite
                    </span>
                )}
            </button>
        </div>
    );
};

export default AddToCartButton;