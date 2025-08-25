import defaultImage from "../../assets/default_product.jpg";

const SinglePet = ({ pet }) => {
    return (
        <div className="border border-gray-200 p-4 shadow-lg rounded-lg" >
            <img src={pet.image || defaultImage} alt={pet.name} className="w-full" />
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
    );
};


export default SinglePet;