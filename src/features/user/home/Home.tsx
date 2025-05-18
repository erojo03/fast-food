import Search from "./components/Search.tsx";
import Categories from "./components/Categories";

const Home = () => {
  return (
    <main className="flex size-full flex-col gap-4 p-6">
      <Search />
      <Categories />
    </main>
  );
};

export default Home;
