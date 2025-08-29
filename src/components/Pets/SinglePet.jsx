import { Link } from "react-router";
import defaultImage from "../../assets/default_product.jpg";

const SinglePet = ({ pet }) => {
    console.log(pet);
    return (
        <Link to={`/pets/${pet.id}`}>
            <div className="border border-gray-200 p-4 shadow-lg rounded-lg h-full flex flex-col justify-between" >
                <img
                    src={pet.images?.[0]?.image || defaultImage}
                    alt={pet.name}
                    className="w-full border-1 border-base-200 h-full object-contain"
                />
                <div className="flex justify-between mt-4">
                    <div>
                        <h1 className="text-xl font-medium">{pet.name}</h1>
                        <p>Age: {pet.age}</p>
                        <p>Breed: {pet.breed}</p>
                        <p>Availability: {pet.availability ? "In Stock" : "Adopted"}</p>
                    </div>
                    <div className="flex flex-col justify-between items-end">
                        <p className="font-medium">Price: ${pet.price}</p>
                        <button className="bg-[#1c4a2a] px-3 py-2 text-white rounded-sm hover:bg-green-900 transition-all cursor-pointer">
                            Adopt Now
                        </button>
                    </div>
                </div>
            </div >
        </Link>
    );
};


export default SinglePet;