const Search = () => {
  return (
    <>
      <div className="relative max-w-2xl">
        <input
          placeholder="Busca por comida..."
          className="w-full rounded-full border-2 border-amber-300 bg-white px-6 py-3 pr-12 shadow-md transition-all focus:ring-2 focus:ring-amber-500 focus:outline-none"
          type="text"
        />
        <button className="absolute top-1/2 right-4 -translate-y-1/2 text-amber-500 transition-colors hover:text-amber-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </svg>
        </button>
      </div>
    </>
  );
};

export default Search;
