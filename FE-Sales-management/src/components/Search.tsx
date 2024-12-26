const SearchBar = () => {
  return (
    <div>
      <form className="flex items-center max-w-xs rounded-md bg-gray-50">
        <div className="relative w-full">
          <input
            type="text"
            placeholder="Cari data..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md text-gray-500  focus:outline-none"
          />
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.293 4.293l4.853 4.853a1 1 0 01-1.414 1.414l-4.853-4.853A6 6 0 012 8z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
