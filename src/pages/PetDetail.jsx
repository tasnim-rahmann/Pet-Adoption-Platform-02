import { Link, useParams } from 'react-router';
import AddToCartButton from '../components/PetDetail/AddToCartButton';
import PetImageGallary from '../components/PetDetail/PetImageGallary';
import { FaArrowLeft } from "react-icons/fa6";
import { Suspense, useEffect, useState } from 'react';
import apiClient from '../services/api-client';
import ReviewSection from '../components/Reviews/ReviewSection';

const PetDetail = () => {
    const [pet, setPet] = useState(null);
    const { petId } = useParams();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchPet = async () => {
            setIsLoading(true);
            try {
                const response = await apiClient.get(`/pets/${petId}/`);
                setPet(response.data);
            } catch (error) {
                console.error("Error fetching pet:", error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchPet();
    }, [petId]);

    if (!pet && !isLoading) {
        return <div className="text-center h-screen mt-12 text-xl font-medium">No Product Found!</div>;
    }
    if (isLoading) {
        return (
            <div className="h-screen flex justify-center items-center lg:-mt-20">
                <div className="w-12 h-12 border-4 border-gray-300 border-t-[#1C4A2A] rounded-full animate-spin"></div>
            </div>
        );
    }
    return (
        <div className='px-6 py-4 lg:px-60 lg:py-10'>
            <Link to="/pets">
                <h1 className="text-lg font-medium mb-4 flex items-center gap-2 hover:text-gray-500 cursor-pointer"><FaArrowLeft /> Back To Pets</h1>
            </Link>
            <div>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12'>
                    <Suspense
                        fallback={<div className='aspect-square bg-base-300 animate-pulse rounded-lg'></div>}
                    >
                        <PetImageGallary images={pet.images} petName={pet.name} />
                    </Suspense>
                    <div className='flex flex-col justify-between'>
                        <div className='space-y-1'>
                            <h1 className='text-2xl font-medium'>Name: {pet.name}</h1>
                            <p>Age: {pet.age}</p>
                            <p>Breed: {pet.breed}</p>
                            <p>Category: {pet.category?.name}</p>
                            <p>Description: {pet.description}</p>
                            <p>Availablity: {pet.availability ? "In Stock" : "Not Available"}</p>
                            <p>Price: {pet.price}</p>
                        </div>
                        <AddToCartButton pet={pet} />
                    </div>
                </div>
                <ReviewSection />
            </div>
        </div>
    );
};

export default PetDetail;