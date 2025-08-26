import { useEffect, useState } from "react";
import apiClient from "../../../services/api-client";

const Category = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        apiClient
            .get('/categories')
            .then((res) => setCategories(res.data));
    }, []);

    return (
        <div>

        </div>
    );
};

export default Category;