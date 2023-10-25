import Image from "next/image";
import PriceCalculator from "@/app/components/priceCalculator/priceCalculator";
import { gql } from "@apollo/client";
import {apolloClient} from '../../../../graphql/apollo';
import Sidebar from "@/app/components/sidebar/sidebar";

async function getData(seoUrl) {
  const {data} = await apolloClient.query({
      query: gql`
      query findCarBySlug($seoUrl: String!) {
        car(seoUrl: $seoUrl) {
          id
          brand
          model
          seoUrl
          seoTitle
          imageUrl
          attributes {
            name
            value
          }
          price
        }
      }
    `,
    variables: {seoUrl: seoUrl},
  });

  return {  car: data ? data.car : [] }

}


export default async function Product({ params }) {

const carData = await getData(`/products/${params.product.shift()}`);

if(carData.car.length === 0) return ( <p>No car found!</p> ) ;


return (
    <div className="container mx-auto mt-12">
      <div className="flex flex-col xl:flex-row flex-col-reverse">
        <div className="basis-3/5">
          <div className="bg-white rounded">
          <Image
            src={carData.car.imageUrl}
            width={800}
            height={600}
            alt={carData.car.seoTitle}
            className="m-auto"
          />
          </div>
          
          <div className="pt-6">
          <PriceCalculator car={carData.car}/>
          </div>

        </div>
        <Sidebar title={carData.car.seoTitle} attributes={carData.car.attributes} price={carData.car.price}/>
      </div>      
    </div>
  );
}

