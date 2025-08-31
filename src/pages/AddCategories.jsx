import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import apiClient from "../services/api-client";
import authApiClient from "../services/auth-apiclient";

const CategoryPage = () => {
    const [categories, setCategories] = useState([]);
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    // Fetch categories
    const fetchCategories = async () => {
        try {
            const res = await apiClient.get("/categories/");
            setCategories(res.data);
        } catch (err) {
            console.error("Error fetching categories:", err);
        }
    };

    useEffect(() => {
        fetchCategories();
    }, []);

    // Add Category
    const handleCategoryAdd = async (data) => {
        try {
            const payload = {
                name: data.name,
                description: data.description,
            };

            await authApiClient.post("/categories/", payload);
            alert("Category added successfully!");
            reset();
            fetchCategories(); // refresh list
        } catch (err) {
            console.error("Error adding category:", err);
            alert("Failed to add category.");
        }
    };

    // Delete Category
    const handleDelete = async (id) => {
        if (!window.confirm("Are you sure you want to delete this category?")) return;
        try {
            await authApiClient.delete(`/categories/${id}/`);
            alert("Category deleted successfully!");
            fetchCategories();
        } catch (err) {
            console.error("Error deleting category:", err);
            alert("Failed to delete category.");
        }
    };

    return (
        <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-semibold mb-6">Category Management</h2>

            {/* Add Category Form */}
            <form
                className="space-y-4 mb-8"
                onSubmit={handleSubmit(handleCategoryAdd)}
            >
                <div>
                    <label className="block text-sm font-medium">Category Name</label>
                    <input
                        {...register("name", { required: true })}
                        className="input input-bordered w-full focus:outline-0 mt-2"
                        placeholder="Category Name"
                    />
                    {errors.name && (
                        <p className="text-red-500 text-xs">This field is required</p>
                    )}
                </div>

                <div>
                    <label className="block text-sm font-medium">Description</label>
                    <textarea
                        {...register("description", { required: true })}
                        className="textarea textarea-bordered w-full focus:outline-0 mt-2"
                        placeholder="Description"
                    ></textarea>
                    {errors.description && (
                        <p className="text-red-500 text-xs">This field is required</p>
                    )}
                </div>

                <button type="submit" className="btn bg-blue-600 text-white w-full">
                    Add Category
                </button>
            </form>

            {/* Category List */}
            <h3 className="text-xl font-semibold mb-4">All Categories</h3>
            {categories.length === 0 ? (
                <p className="text-gray-500">No categories found.</p>
            ) : (
                <table className="table-auto w-full border-collapse border border-gray-200">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="border px-4 py-2 text-left">#</th>
                            <th className="border px-4 py-2 text-left">Name</th>
                            <th className="border px-4 py-2 text-left">Description</th>
                            <th className="border px-4 py-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {categories.map((cat, index) => (
                            <tr key={cat.id}>
                                <td className="border px-4 py-2">{index + 1}</td>
                                <td className="border px-4 py-2">{cat.name}</td>
                                <td className="border px-4 py-2">{cat.description}</td>
                                <td className="border px-4 py-2 text-center">
                                    <button
                                        onClick={() => handleDelete(cat.id)}
                                        className="btn btn-sm bg-red-600 text-white"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default CategoryPage;
