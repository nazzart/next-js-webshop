import Card from "./components/card/card";
import { gql } from "@apollo/client";
import { apolloClient } from "../../graphql/apollo";
import Filter from "./components/filters/filter";

async function getData(searchParams) {
  const { data } = await apolloClient.query({
    query: gql`
    query cars($filter: FilterInput) {
      cars(filter: $filter) {
        brand
        model
        seoTitle
        seoUrl
        imageUrl
        attributes {
          name
          value
          topParameter
        }
        price
      }
    }
    `,
    variables: {filter: searchParams}
  });

  return { cars: data ? data.cars : [] };
}

export default async function Home({ searchParams }) {
  
  const carData = await getData(searchParams);

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl mb-8 mt-8">
        Available cars ({carData.cars.length})
      </h1>
      <Filter />
      {carData.cars.map((car, id) => (
        <Card data={car} key={id} />
      ))}
    </div>
  );
}
