import Navbar from "./components/Navbar/Navbar";
import Table from "./components/Table/Table";
import { Suspense } from "react";
import Spinner from "./components/Spinner";

const Home = async ({
  searchParams,
}: {
  searchParams?: { query?: string };
}) => {
  const query = searchParams?.query || "";
  return (
    <Suspense fallback={<Spinner />} key={query}>
      <main className="">
        <Navbar />
        <Table query={query} />
      </main>
    </Suspense>
  );
};

export default Home;
