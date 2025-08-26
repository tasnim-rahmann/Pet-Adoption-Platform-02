import SinglePet from "./SinglePet";

const PetList = ({ pets }) => {
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-12">
                {pets.map((pet) => (
                    <SinglePet key={pet.id} pet={pet} />
                ))}
            </div>
        </>
    );
};

export default PetList;