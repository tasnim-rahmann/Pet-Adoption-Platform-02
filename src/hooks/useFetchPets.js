import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

const useFetchPets = (currentPage, priceRange, selectedCategory, searchFor, ordering) => {
    const [isLoading, setIsLoading] = useState(false);
    const [pets, setPets] = useState([]);
    const [error, setError] = useState("");
    const [totalPage, setTotalPage] = useState(0);

    useEffect(() => {
        const fetchPets = async () => {
            const url = `/pets/?category_id=${selectedCategory}&price__gt=${priceRange[0]}&price__lt=${priceRange[1]}&page=${currentPage}&search=${searchFor}&ordering=${ordering}`;
            setIsLoading(true);
            try {
                const response = await apiClient.get(url);
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
        fetchPets();
    }, [currentPage, priceRange, selectedCategory, searchFor, ordering]);

    return { pets, isLoading, error, totalPage };
};

export default useFetchPets;