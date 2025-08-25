import { useEffect, useState } from "react";
import apiClient from "../../services/api-client";
import SinglePet from "./SinglePet";
import ErrorAlert from "../ErrorAlert";

const Pet = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [pets, setPets] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {
        setIsLoading(true);
        apiClient
            .get('/pets/')
            .then((response) => setPets(response.data.results))
            .catch((err) => setError(err.message))
            .finally(() => setIsLoading(false));
    }, []);

    return (
        <div className="px-4 lg:px-40 my-12 lg:my-30">
            {isLoading ? (
                <div className="h-screen flex justify-center">
                    <div className="w-12 h-12 border-4 border-gray-300 border-t-[#1C4A2A] rounded-full animate-spin"></div>
                </div>
            ) : error ? (
                <ErrorAlert />
            ) : (
                <>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-12">
                        {pets.map((pet) => (
                            <SinglePet key={pet.id} pet={pet} />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default Pet;