const FilterSection = ({
    priceRange,
    handlePriceChange,
    categories,
    selectedCategory,
    handleCategoryChange,
    searchFor,
    handleSearchFor,
    ordering,
    handleSorting
}) => {
    return (
        <div className="my-6 lg:my-12">
            <h1 className="text-2xl lg:text-4xl font-medium">Adopt Your Favourite Pet</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-12">
                <div className="mt-4 border-1 rounded-sm p-4 shadow-lg">
                    <div className="flex flex-col gap-4">
                        <label htmlFor="price" className="text-gray-500">Price Range</label>
                        <div className="flex items-center gap-4">
                            <input
                                type="number"
                                min="0"
                                max={priceRange[1]}
                                value={priceRange[0]}
                                id="price"
                                className="border-1 outline-0 p-2 rounded-sm w-1/2 text-sm"
                                onChange={(e) => handlePriceChange(0, e.target.value)}
                            />
                            <input
                                type="range"
                                min="0"
                                max={priceRange[1]}
                                value={priceRange[0]}
                                step="10"
                                className="w-full"
                                onChange={(e) => handlePriceChange(0, e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="flex items-center gap-4 mt-4">
                        <input
                            type="number"
                            id="price"
                            min={priceRange[0]}
                            max="1000"
                            value={priceRange[1]}
                            className="border-1 outline-0 p-2 rounded-sm w-1/2 text-sm"
                            onChange={(e) => handlePriceChange(1, e.target.value)}
                        />
                        <input
                            type="range"
                            min={priceRange[0]}
                            max="1000"
                            value={priceRange[1]}
                            step="10"
                            className="w-full"
                            onChange={(e) => handlePriceChange(1, e.target.value)}
                        />
                    </div>
                </div>
                <div className="mt-4 border-1 rounded-sm p-4 shadow-lg">
                    <div className="flex flex-col gap-4">
                        <label htmlFor="category" className="text-gray-500">Category</label>
                        <div className="flex items-center gap-4">
                            <select
                                value={selectedCategory}
                                className="border-1 w-full p-2 rounded-sm outline-0"
                                onChange={(e) => handleCategoryChange(e.target.value)}
                            >
                                <option value="">All Categories</option>
                                {categories.map((category) => (
                                    <option key={category.id} value={category.id}>{category.name}</option>
                                ))}
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
                                value={searchFor}
                                onChange={(e) => handleSearchFor(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
                <div className="mt-4 border-1 rounded-sm p-4 shadow-lg">
                    <div className="flex flex-col gap-4">
                        <label htmlFor="sort" className="text-gray-500">Sort By Price</label>
                        <div className="flex items-center gap-4">
                            <select
                                value={ordering}
                                className="border-1 w-full p-2 rounded-sm outline-0"
                                onChange={(e) => handleSorting(e.target.value)}
                            >
                                <option value="">Default</option>
                                <option value="price">Low To High</option>
                                <option value="-price">High To Low</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FilterSection;