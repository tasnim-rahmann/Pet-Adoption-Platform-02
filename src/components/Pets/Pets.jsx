import { useState } from "react";
import ErrorAlert from "../ErrorAlert";
import PetList from "./PetList";
import Pagination from "./Pagination";
import useFetchPets from "../../hooks/useFetchPets";
import FilterSection from "./FilterSection";

const Pet = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const { pets, isLoading, error, totalPage } = useFetchPets(currentPage);

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
                    <FilterSection />
                    <PetList pets={pets} />
                    <Pagination totalPage={totalPage} currentPage={currentPage} handlePageChange={setCurrentPage} />
                </>
            )}
        </div>
    );
};

export default Pet;