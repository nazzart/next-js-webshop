import Image from "next/image";
import PriceCalculator from "@/app/components/priceCalculator/priceCalculator";
import { gql } from "@apollo/client";
import {apolloClient} from '../../../../graphql/apollo';

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
    <div class="container mx-auto mt-8">
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
        <div className="xl:pl-6 pb-10 pr-20 static xl:sticky self-start top-0">
          <h1 className="text-4xl font-bold">{carData.car.seoTitle}</h1>
          <p className="text-6xl font-bold text-secondary mt-6">{carData.car.price} €</p>

          <ul className="mt-10">
            {carData.car.attributes?.map((attribute, id) => (
              <li className="mt-2" key={id}>{attribute.name}: <span className="text-gray-500">{attribute.value}</span></li>
            ))}
          </ul>
        </div>
      </div>      
    </div>
  );
}

