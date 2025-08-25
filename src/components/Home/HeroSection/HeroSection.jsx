import heroImage from "../../../assets/hero_1.jpg";

const HeroSection = () => {
    return (
        <>
            <div className="flex flex-col lg:flex-row">
                <div className="w-full lg:w-1/2 h-[300px] lg:h-[800px] bg-[#1C4A2A] text-white pt-8 lg:pt-36 px-4">
                    <h1 className="max-w-[650px] mx-auto text-3xl lg:text-6xl font-medium lg:font-bold leading-tight p-2">
                        Embrace Endless Love with Your New Furry Best Friend.
                    </h1>
                    <p className="max-w-[650px] md:w-full mx-auto p-2">
                        Embrace endless love with your new furry best friend.
                        Adopt now and start creating unforgettable memories together.
                    </p>
                </div>

                <div className="w-full lg:w-1/2 h-[300px] lg:h-[800px]">
                    <img
                        src={heroImage}
                        alt="Hero Image"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
            {/* Absolute Centered Box */}
            <div className="absolute top-150 left-1/2 -translate-x-1/2 hidden 2xl:block">
                <div className="px-20 py-10 w-[1600px] rounded-md bg-white shadow-lg">
                    <h1 className="text-3xl font-bold mb-10">Find Your New Best Friend</h1>
                    <div className="flex justify-between gap-6">
                        <div className="flex flex-col gap-2 w-full">
                            <label htmlFor="location" className="px-2 text-gray-500">Your Location</label>
                            <input
                                type="text"
                                placeholder="Enter Your Location"
                                id="location"
                                className="p-2 rounded-md text-black bg-gray-100 text-sm outline-0"
                            />
                        </div>
                        <div className="flex flex-col gap-2 w-full">
                            <label htmlFor="pet" className="px-2 text-gray-500">Pet Type</label>
                            <input
                                type="text"
                                placeholder="Dog"
                                id="pet"
                                className="p-2 rounded-md text-black bg-gray-100 text-sm outline-0"
                            />
                        </div>
                        <div className="flex flex-col gap-2 w-full">
                            <label htmlFor="breed" className="px-2 text-gray-500">Breed</label>
                            <input
                                type="text"
                                placeholder="All"
                                id="breed"
                                className="p-2 rounded-md text-black bg-gray-100 text-sm outline-0"
                            />
                        </div>
                        <div className="flex flex-col gap-2 w-full">
                            <label htmlFor="gender" className="px-2 text-gray-500">Gender</label>
                            <input
                                type="text"
                                placeholder="Female"
                                id="gender"
                                className="p-2 rounded-md text-black bg-gray-100 text-sm outline-0"
                            />
                        </div>
                        <div className="flex flex-col gap-2 w-full">
                            <label htmlFor="age" className="px-2 text-gray-500">Age</label>
                            <input
                                type="text"
                                placeholder="1-5"
                                id="age"
                                className="p-2 rounded-md text-black bg-gray-100 text-sm outline-0"
                            />
                        </div>
                        <div className="flex items-end">
                            <button className="bg-[#1C4A2A] text-white px-6 py-2 rounded-sm transition-all cursor-pointer">
                                Search
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeroSection;