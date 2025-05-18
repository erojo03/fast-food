const Categories = () => {
  return (
    <section className="flex max-w-md flex-col gap-3 rounded-2xl border-2 border-amber-300 bg-white p-3 shadow-2xs sm:max-w-full sm:p-5">
      <header className="flex items-center justify-between">
        <h1 className="text-lg font-semibold sm:text-2xl">Categorias</h1>
        <button className="flex items-center rounded-lg bg-amber-600 px-3 py-1.5 text-sm text-white shadow-md transition-all hover:bg-amber-700 hover:shadow md:px-4 md:py-2 md:text-base">
          View All{' '}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="ml-1">
            <path d="m9 18 6-6-6-6"></path>
          </svg>
        </button>
      </header>

      <ul className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7">
        <li className="flex cursor-pointer flex-col items-center rounded-2xl border-2 border-amber-300 bg-white p-2 shadow-md transition-all hover:shadow-lg">
          <div className="flex size-12 items-center justify-center rounded-full border-2 border-amber-400 bg-amber-100 text-2xl sm:size-14 sm:text-3xl">
            🍔
          </div>
          <span className="text-center text-sm font-medium text-amber-900 sm:text-base">
            Burgers
          </span>
          <span className="text-xs text-amber-700 sm:text-sm">X items</span>
        </li>
      </ul>
    </section>
  );
};

export default Categories;
