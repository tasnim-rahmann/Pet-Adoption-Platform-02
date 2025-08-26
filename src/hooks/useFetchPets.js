import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

const useFetchPets = (currentPage) => {
    const [isLoading, setIsLoading] = useState(false);
    const [pets, setPets] = useState([]);
    const [error, setError] = useState("");
    const [totalPage, setTotalPage] = useState(0);

    useEffect(() => {
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
        fetchPets();
    }, [currentPage]);

    return { pets, isLoading, error, totalPage };
};

export default useFetchPets;