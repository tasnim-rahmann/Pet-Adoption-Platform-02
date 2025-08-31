import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

const CategoryPage = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const res = await apiClient.get("/categories/");
                setCategories(res.data);
            } catch (err) {
                console.error("Error fetching categories:", err);
            }
        };

        fetchCategories();
    }, []);

    return (
        <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-semibold mb-6">Categories</h2>

            {categories.length === 0 ? (
                <p className="text-gray-500">No categories found.</p>
            ) : (
                <ul className="space-y-4">
                    {categories.map((cat) => (
                        <li
                            key={cat.id}
                            className="p-4 border rounded-lg hover:shadow-md transition"
                        >
                            <h3 className="text-lg font-semibold">{cat.name}</h3>
                            <p className="text-gray-600">{cat.description}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default CategoryPage;
