const FilterSection = () => {
    return (
        <div className="my-6 lg:my-12">
            <h1 className="text-2xl lg:text-4xl font-medium">Adopt Your Favourite Pet</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-12">
                <div className="mt-4 border-1 rounded-sm p-4 shadow-lg">
                    <div className="flex flex-col gap-4">
                        <label htmlFor="price" className="text-gray-500">Price Range</label>
                        <div className="flex items-center gap-4">
                            <input
                                type="text"
                                id="price"
                                className="border-1 outline-0 p-2 rounded-sm w-30 text-sm"
                                placeholder="Minimum Price"
                            />
                            <input type="range" className="w-full" />
                        </div>
                    </div>
                    <div className="flex items-center gap-4 mt-4">
                        <input
                            type="text"
                            id="price"
                            className="border-1 outline-0 p-2 rounded-sm w-30 text-sm"
                            placeholder="Maximum Price"
                        />
                        <input type="range" className="w-full" />
                    </div>
                </div>
                <div className="mt-4 border-1 rounded-sm p-4 shadow-lg">
                    <div className="flex flex-col gap-4">
                        <label htmlFor="category" className="text-gray-500">Category</label>
                        <div className="flex items-center gap-4">
                            <select name="category" id="category" className="border-1 w-full p-2 rounded-sm outline-0">
                                <option>Selete Your Category</option>
                                <option>Dog</option>
                                <option>Cat</option>
                                <option>Rabit</option>
                                <option>Bird</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="mt-4 border-1 rounded-sm p-4 shadow-lg">
                    <div className="flex flex-col gap-4">
                        <label htmlFor="search" className="text-gray-500">Search Here</label>
                        <div className="flex items-center gap-4">
                            <input
                                type="search"
                                className="border-1 w-full outline-0 rounded-sm p-2"
                                placeholder="Search Your Pet Here"
                            />
                        </div>
                    </div>
                </div>
                <div className="mt-4 border-1 rounded-sm p-4 shadow-lg">
                    <div className="flex flex-col gap-4">
                        <label htmlFor="sort" className="text-gray-500">Sort By Price</label>
                        <div className="flex items-center gap-4">
                            <select id="sort" className="border-1 w-full p-2 rounded-sm outline-0">
                                <option>Default</option>
                                <option>Low To High</option>
                                <option>High To Low</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FilterSection;