const Pagination = ({ totalPage, currentPage, handlePageChange }) => {
    return (
        <div className="flex justify-center gap-4 mt-6 lg:mt-12">
            {Array.from({ length: totalPage }, (_, i) => (
                <button
                    key={i}
                    onClick={() => handlePageChange(i + 1)}
                    className={`px-3 py-1 rounded-sm cursor-pointer hover:bg-[#0D542B] hover:text-white transition-all duration-100 ${currentPage === i + 1 ? "bg-[#0D542B] text-white" : "bg-gray-300"}`}
                >
                    {i + 1}
                </button>
            ))}
        </div>
    );
};

export default Pagination;