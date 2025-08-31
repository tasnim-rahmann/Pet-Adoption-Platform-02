import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import authApiClient from "../services/auth-apiclient";
import apiClient from "../services/api-client";

const AddPet = () => {
    const [categories, setCategories] = useState([]);
    const [pets, setPets] = useState([]);
    const [images, setImages] = useState([]);
    const [pagination, setPagination] = useState({ next: null, previous: null });
    const [loading, setLoading] = useState(false); // loading state for pagination

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    // Fetch categories
    useEffect(() => {
        apiClient.get("/categories/").then((res) => setCategories(res.data));
    }, []);

    // Fetch pets with pagination
    const fetchPets = async (url = "/pets/") => {
        if (!url) return;
        try {
            setLoading(true);
            const res = await authApiClient.get(url);
            setPets(res.data.results || []);
            setPagination({ next: res.data.next, previous: res.data.previous });
        } catch (err) {
            console.error("Error fetching pets:", err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchPets();
    }, []);

    // Add Pet
    const handlePetAdd = async (data) => {
        try {
            const payload = {
                name: data.name,
                age: Number(data.age),
                price: Number(data.price),
                breed: data.breed,
                availability: data.availability === "true",
                category_id: Number(data.category_id),
                description: data.description,
            };

            // Create pet
            const res = await authApiClient.post("/pets/", payload);
            const petId = res.data.id;

            // Upload images to /pets/pet_pk/images/
            if (images.length > 0) {
                const formData = new FormData();
                images.forEach((img) => formData.append("image", img)); // "image" matches backend
                await authApiClient.post(`/pets/${petId}/images/`, formData, {
                    headers: { "Content-Type": "multipart/form-data" },
                });
            }


            alert("Pet added successfully!");
            reset();
            setImages([]);
            fetchPets(); // refresh current page
        } catch (err) {
            console.error(err);
            alert("Failed to add pet.");
        }
    };

    // Delete Pet
    const handleDelete = async (id) => {
        if (!window.confirm("Are you sure you want to delete this pet?")) return;
        try {
            await authApiClient.delete(`/pets/${id}/`);
            alert("Pet deleted successfully!");
            fetchPets(); // refresh current page
        } catch (err) {
            console.error(err);
            alert("Failed to delete pet.");
        }
    };

    return (
        <div className="max-w-4xl mx-auto mt-5 p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Add New Pet</h2>

            {/* Add Pet Form */}
            <form className="space-y-4 mb-8" onSubmit={handleSubmit(handlePetAdd)}>
                {/* Pet Name */}
                <div>
                    <label className="block text-sm font-medium">Pet Name</label>
                    <input
                        {...register("name", { required: true })}
                        className="input input-bordered w-full focus:outline-0 mt-2"
                        placeholder="Pet Name"
                    />
                    {errors.name && (
                        <p className="text-red-500 text-xs">This field is required</p>
                    )}
                </div>

                {/* Age */}
                <div>
                    <label className="block text-sm font-medium">Age</label>
                    <input
                        {...register("age", { required: true })}
                        type="number"
                        min="0"
                        className="input input-bordered w-full focus:outline-0 mt-2"
                        placeholder="Age"
                    />
                    {errors.age && (
                        <p className="text-red-500 text-xs">This field is required</p>
                    )}
                </div>

                {/* Breed */}
                <div>
                    <label className="block text-sm font-medium">Breed</label>
                    <input
                        {...register("breed", { required: true })}
                        className="input input-bordered w-full focus:outline-0 mt-2"
                        placeholder="Breed"
                    />
                    {errors.breed && (
                        <p className="text-red-500 text-xs">This field is required</p>
                    )}
                </div>

                {/* Price */}
                <div>
                    <label className="block text-sm font-medium">Price</label>
                    <input
                        {...register("price", { required: true })}
                        min="0"
                        type="number"
                        className="input input-bordered w-full focus:outline-0 mt-2"
                        placeholder="Price"
                    />
                    {errors.price && (
                        <p className="text-red-500 text-xs">This field is required</p>
                    )}
                </div>

                {/* Availability */}
                <div>
                    <label className="block text-sm font-medium">Availability</label>
                    <select
                        {...register("availability", { required: true })}
                        className="select select-bordered w-full focus:outline-0 mt-2"
                    >
                        <option value="">Select availability</option>
                        <option value="true">Available</option>
                        <option value="false">Not Available</option>
                    </select>
                    {errors.availability && (
                        <p className="text-red-500 text-xs">This field is required</p>
                    )}
                </div>

                {/* Category Dropdown */}
                <div>
                    <label className="block text-sm font-medium">Category</label>
                    <select
                        {...register("category_id", { required: true })}
                        className="select select-bordered w-full focus:outline-0 mt-2"
                    >
                        <option value="">Select a category</option>
                        {categories.map((cat) => (
                            <option key={cat.id} value={cat.id}>
                                {cat.name}
                            </option>
                        ))}
                    </select>
                    {errors.category_id && (
                        <p className="text-red-500 text-xs">This field is required</p>
                    )}
                </div>

                {/* Description */}
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

                {/* Image Upload */}
                <div>
                    <label className="block text-sm font-medium">Upload Images</label>
                    <input
                        type="file"
                        multiple
                        accept="image/*"
                        className="file-input file-input-bordered w-full focus:outline-0 mt-2"
                        onChange={(e) => setImages(Array.from(e.target.files))}
                    />
                </div>

                <button type="submit" className="btn bg-green-700 text-white w-full">
                    Add Pet
                </button>
            </form>

            {/* Pet List */}
            <h2 className="text-2xl font-semibold mb-4">Existing Pets</h2>
            {pets.length === 0 ? (
                <p className="text-gray-500">No pets found.</p>
            ) : (
                <>
                    <table className="table-auto w-full border-collapse border border-gray-200">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="border px-4 py-2">ID</th>
                                <th className="border px-4 py-2 text-left">Name</th>
                                <th className="border px-4 py-2 text-left">Breed</th>
                                <th className="border px-4 py-2 text-left">Price</th>
                                <th className="border px-4 py-2">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {pets.map((pet) => (
                                <tr key={pet.id}>
                                    <td className="border px-4 py-2">{pet.id}</td>
                                    <td className="border px-4 py-2">{pet.name}</td>
                                    <td className="border px-4 py-2">{pet.breed}</td>
                                    <td className="border px-4 py-2">${pet.price}</td>
                                    <td className="border px-4 py-2 text-center">
                                        <button
                                            onClick={() => handleDelete(pet.id)}
                                            className="btn btn-sm bg-red-600 text-white"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    {/* Pagination Controls */}
                    <div className="flex justify-between mt-4">
                        <button
                            onClick={() => fetchPets(pagination.previous)}
                            disabled={!pagination.previous || loading}
                            className="btn btn-sm bg-gray-300 text-black"
                        >
                            {loading && pagination.previous ? "Loading..." : "Previous"}
                        </button>
                        <button
                            onClick={() => fetchPets(pagination.next)}
                            disabled={!pagination.next || loading}
                            className="btn btn-sm bg-gray-300 text-black"
                        >
                            {loading && pagination.next ? "Loading..." : "Next"}
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};

export default AddPet;
