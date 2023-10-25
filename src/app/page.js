import Card from "./components/card/card";
import { gql } from "@apollo/client";
import {apolloClient} from '../../graphql/apollo';

async function getData() {
  const {data} = await apolloClient.query({
      query: gql`
      query {
        cars {
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
      }`,
  });

  return {  cars: data ? data.cars : [] }

}

export default async function Home() {
  const carData = await getData();

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl mb-8 mt-8">Available cars ({carData.cars.length})</h1>
      {carData.cars.map((car, id) => (
        <Card data={car} key={id} />
      ))}
    </div>
  );
}
