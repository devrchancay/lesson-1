import { useQuery } from "@tanstack/react-query";
import Header from "@/components/Header";
import { GetServerSideProps } from "next";
import Layout from "../../components/Layout";
import { fetchResource } from "../../utils";

function People({ id }: any) {
  const { data, isLoading } = useQuery({
    queryKey: ["person", id],
    queryFn: () => fetchResource(`/planets/${id}`),
  });

  return (
    <Layout>
      <Header title="Planetas" description="Planetas de StarWars" />
      <div className="container">
        {isLoading && <p>Cargando...</p>}
        {!isLoading && data && (
          <div className="container">
            <div className="w-full px-4">
              <div className="py-8">
                <div className="flex items-center justify-center h-40 bg-gray-300 rounded dark:bg-gray-700 max-w-sm">
                  <h2 className="text-5xl">{data.name[0]}</h2>
                </div>
              </div>
              <h1 className="text-4xl">{data.name}</h1>

              <p className="text-lg">{data.rotation_period}</p>
              <p className="text-lg">{data.orbital_period}</p>
              <p className="text-lg">{data.diameter}</p>
              <p className="text-lg">{data.climate}</p>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context.params?.id;

  return {
    props: {
      id,
    },
  };
};

export default People;
