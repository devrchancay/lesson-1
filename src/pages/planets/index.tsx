import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import Header from "@/components/Header";
import Skeleton from "@/components/Skeleton";
import Item from "@/components/Item";
import Link from "next/link";
import Layout from "@/components/Layout";
import { fetchResource } from "../../utils";

function Planets() {
  const [page, setPage] = useState(1);

  const { data, isLoading, isPlaceholderData } = useQuery({
    queryKey: ["planets", page],
    queryFn: () => fetchResource(`/planets?page=${page}`),
  });

  return (
    <Layout>
      <Header title="Planetas" description="Planetas de StarWars" />
      <div className="container">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-2 lg:gap-4">
          <>
            {isLoading && <Skeleton numberOfSkeletons={10} />}
            {data &&
              data.results &&
              data.results.map((planet: any) => {
                const id = planet.url.split("/")[5];

                return (
                  <Link key={planet.name} href={`/planets/${id}`}>
                    <Item
                      key={planet.name}
                      name={planet.name}
                      created={planet.created}
                    />
                  </Link>
                );
              })}
          </>
        </div>
        {!isLoading && (
          <div className="w-full py-20">
            <div className="flex justify-between w-full">
              <button
                className={` text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800 ${
                  page == 1 ? "opacity-30 pointer-events-none" : ""
                }`}
                onClick={() => {
                  if (!isPlaceholderData && data.next) {
                    setPage((old) => old + 1);
                  }
                }}
                disabled={page === 1}
              >
                Anterior
              </button>

              <button
                className={`text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800 ${
                  isPlaceholderData || !data?.next
                    ? "opacity-30 pointer-events-none"
                    : ""
                }`}
                onClick={() => {
                  if (!isPlaceholderData && data.next) {
                    setPage((old) => old + 1);
                  }
                }}
                disabled={isPlaceholderData || !data?.next}
              >
                Siguiente
              </button>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}

export default Planets;
