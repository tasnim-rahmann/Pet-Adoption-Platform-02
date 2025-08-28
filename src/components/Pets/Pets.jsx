import { useState } from "react";
import ErrorAlert from "../ErrorAlert";
import PetList from "./PetList";
import Pagination from "./Pagination";
import useFetchPets from "../../hooks/useFetchPets";
import FilterSection from "./FilterSection";
import useFetchCategory from "../../hooks/useFetchCategory";

const Pet = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [priceRange, setPriceRange] = useState([0, 1000]);
    const [selectedCategory, setSelectedCategory] = useState("");
    const [searchFor, setSearchFor] = useState("");
    const [ordering, setOrdering] = useState("");
    const { pets, isLoading, error, totalPage } = useFetchPets(currentPage, priceRange, selectedCategory, searchFor, ordering);
    const categories = useFetchCategory();

    const handlePriceChange = (index, value) => {
        setPriceRange((prev) => {
            const newRange = [...prev];
            newRange[index] = value;
            return newRange;
        });
        setCurrentPage(1);
    };

    return (
        <div className="px-4 lg:px-40 my-8 lg:my-12">
            <FilterSection
                priceRange={priceRange}
                handlePriceChange={handlePriceChange}
                categories={categories}
                selectedCategory={selectedCategory}
                handleCategoryChange={setSelectedCategory}
                searchFor={searchFor}
                handleSearchFor={setSearchFor}
                ordering={ordering}
                handleSorting={setOrdering}
            />
            {isLoading ? (
                <div className="h-screen flex justify-center">
                    <div className="w-12 h-12 border-4 border-gray-300 border-t-[#1C4A2A] rounded-full animate-spin"></div>
                </div>
            ) : error ? (
                <div className="h-screen">
                    <ErrorAlert errorMessege={"Please Try Again!"} />
                </div>
            ) : (
                <>
                    <PetList
                        pets={pets}
                    />
                    <Pagination
                        totalPage={totalPage}
                        currentPage={currentPage}
                        handlePageChange={setCurrentPage}
                    />
                </>
            )}
        </div>
    );
};

export default Pet;