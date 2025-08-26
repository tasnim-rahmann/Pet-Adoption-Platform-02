import { useEffect, useState } from "react";
import apiClient from "../../services/api-client";
import ErrorAlert from "../ErrorAlert";
import PetList from "./PetList";
import Pagination from "./Pagination";

const Pet = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [pets, setPets] = useState([]);
    const [error, setError] = useState("");
    const [totalPage, setTotalPage] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);

    const fetchPets = async () => {
        setIsLoading(true);
        try {
            const response = await apiClient.get(`/pets/?page=${currentPage}`);
            const data = await response.data;
            setPets(data.results);
            setTotalPage(Math.ceil(data.count / 10));
        } catch (err) {
            setError(err);
            console.log(err);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchPets();
    }, [currentPage]);

    return (
        <div className="px-4 lg:px-40 my-8 lg:my-12">
            {isLoading ? (
                <div className="h-screen flex justify-center">
                    <div className="w-12 h-12 border-4 border-gray-300 border-t-[#1C4A2A] rounded-full animate-spin"></div>
                </div>
            ) : error ? (
                <ErrorAlert />
            ) : (
                <>
                    <PetList pets={pets} />
                    <Pagination totalPage={totalPage} currentPage={currentPage} handlePageChange={setCurrentPage} />
                </>
            )}
        </div>
    );
};

export default Pet;