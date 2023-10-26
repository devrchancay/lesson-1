import { useQuery } from "@tanstack/react-query";
import Header from "@/components/Header";
import { GetServerSideProps } from "next";
import Layout from "../../components/Layout";
import { fetchResource } from "../../utils";

function People({ id }: any) {
  const { data, isLoading } = useQuery({
    queryKey: ["person", id],
    queryFn: () => fetchResource(`/people/${id}`),
  });

  return (
    <Layout>
      <Header title="Personas" description="Personas de StarWars" />
      <div className="container">
        {isLoading && <p>Cargando...</p>}
        {!isLoading && data && (
          <div className="container">
            <div className="w-full px-4">
              <div className="py-8">
                <div className="flex items-center justify-center h-40 bg-gray-300 rounded dark:bg-gray-700 max-w-sm">
                  <h2 className="text-5xl">AA</h2>
                </div>
              </div>
              <h1 className="text-4xl">{data.name}</h1>
              <p className="text-lg">Peso: {data.height}</p>
              <p className="text-lg">Genero: {data.gender}</p>
              <p className="text-lg">Color de Ojos: {data.eye_color}</p>
              <p className="text-lg">Color de Cabello: {data.hair_color}</p>
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
