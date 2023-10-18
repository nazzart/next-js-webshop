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
          attributes {
            name
            value
            topParameter
          }
        }
      }`,
  });

  return {  cars: data ? data.cars : [] }

}

export default async function Home() {
  const carData = await getData();

  // const carData = [
  //   {
  //     brand: "Opel",
  //     model: "Crossland",
  //     seoTitle: "Opel Crossland 1.2 Turbo",
  //     seoUrl: "/products/opel-crossland-turbo",
  //     attributes: [
  //       {
  //         name: "Engine",
  //         value: "Petrol",
  //         topParameter: true,
  //       },
  //       {
  //         name: "Gearbox",
  //         value: "Automatic",
  //         topParameter: true,
  //       },
  //       {
  //         name: "Power",
  //         value: "136 hp",
  //         topParameter: true,
  //       },
  //       {
  //         name: "Mileage",
  //         value: "54500 km",
  //         topParameter: true,
  //       },
  //     ],
  //   },
  //   {
  //     brand: "Opel",
  //     model: "Crossland",
  //     seoTitle: "Opel Crossland 1.2 Turbo",
  //     seoUrl: "/products/opel-crossland-turbo",
  //     attributes: [
  //       {
  //         name: "Engine",
  //         value: "Petrol",
  //         topParameter: true,
  //       },
  //       {
  //         name: "Gearbox",
  //         value: "Automatic",
  //         topParameter: true,
  //       },
  //       {
  //         name: "Power",
  //         value: "136 hp",
  //         topParameter: true,
  //       },
  //       {
  //         name: "Mileage",
  //         value: "54500 km",
  //         topParameter: true,
  //       },
  //     ],
  //   },
  //   {
  //     brand: "Opel",
  //     model: "Crossland",
  //     seoTitle: "Opel Crossland 1.2 Turbo",
  //     seoUrl: "/products/opel-crossland-turbo",
  //     attributes: [
  //       {
  //         name: "Engine",
  //         value: "Petrol",
  //         topParameter: true,
  //       },
  //       {
  //         name: "Gearbox",
  //         value: "Automatic",
  //         topParameter: true,
  //       },
  //       {
  //         name: "Power",
  //         value: "136 hp",
  //         topParameter: true,
  //       },
  //       {
  //         name: "Mileage",
  //         value: "54500 km",
  //         topParameter: true,
  //       },
  //     ],
  //   },
  //   {
  //     brand: "Opel",
  //     model: "Crossland",
  //     seoTitle: "Opel Crossland 1.2 Turbo",
  //     seoUrl: "/products/opel-crossland-turbo",
  //     attributes: [
  //       {
  //         name: "Engine",
  //         value: "Petrol",
  //         topParameter: true,
  //       },
  //       {
  //         name: "Gearbox",
  //         value: "Automatic",
  //         topParameter: true,
  //       },
  //       {
  //         name: "Power",
  //         value: "136 hp",
  //         topParameter: true,
  //       },
  //       {
  //         name: "Mileage",
  //         value: "54500 km",
  //         topParameter: true,
  //       },
  //     ],
  //   },
  //   {
  //     brand: "Opel",
  //     model: "Crossland",
  //     seoTitle: "Opel Crossland 1.2 Turbo",
  //     seoUrl: "/products/opel-crossland-turbo",
  //     attributes: [
  //       {
  //         name: "Engine",
  //         value: "Petrol",
  //         topParameter: true,
  //       },
  //       {
  //         name: "Gearbox",
  //         value: "Automatic",
  //         topParameter: true,
  //       },
  //       {
  //         name: "Power",
  //         value: "136 hp",
  //         topParameter: true,
  //       },
  //       {
  //         name: "Mileage",
  //         value: "54500 km",
  //         topParameter: true,
  //       },
  //     ],
  //   },
  //   {
  //     brand: "Opel",
  //     model: "Crossland",
  //     seoTitle: "Opel Crossland 1.2 Turbo",
  //     seoUrl: "/products/opel-crossland-turbo",
  //     attributes: [
  //       {
  //         name: "Engine",
  //         value: "Petrol",
  //         topParameter: true,
  //       },
  //       {
  //         name: "Gearbox",
  //         value: "Automatic",
  //         topParameter: true,
  //       },
  //       {
  //         name: "Power",
  //         value: "136 hp",
  //         topParameter: true,
  //       },
  //       {
  //         name: "Mileage",
  //         value: "54500 km",
  //         topParameter: true,
  //       },
  //     ],
  //   },
  // ];
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl mb-8 mt-8">Available cars</h1>
      {carData.cars.map((car, id) => (
        <Card data={car} key={id} />
      ))}
    </div>
  );
}
