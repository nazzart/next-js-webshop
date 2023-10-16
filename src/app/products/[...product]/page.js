import Image from "next/image";
import PriceCalculator from "@/app/components/priceCalculator/priceCalculator";

export default function Product() {
  const carData = {
    brand: "Opel",
    model: "Crossland",
    seoTitle: "Opel Crossland 1.2 Turbo",
    seoUrl: "/products/opel-crossland-turbo",
    attributes: [
      {
        name: "Engine",
        value: "Petrol",
        topParameter: true,
      },
      {
        name: "Gearbox",
        value: "Automatic",
        topParameter: true,
      },
      {
        name: "Power",
        value: "136 hp",
        topParameter: true,
      },
      {
        name: "Mileage",
        value: "54500 km",
        topParameter: true,
      },
    ],
  };

  return (
    <div class="container mx-auto mt-8">
      <div className="flex flex-row">
        <div className="basis-3/5">
          <div className="bg-white rounded">
          <Image
            src="/images/Opel-Crossland.jpg"
            width={800}
            height={800}
            alt={carData.seoTitle}
            className="m-auto"
          />
          </div>
          
          <div className="pt-6">
          <PriceCalculator/>
          </div>

        </div>
        <div className="p-6 pr-20">
          <h1 className="text-4xl font-bold">{carData.seoTitle}</h1>
          <p className="text-6xl font-bold text-secondary mt-6">55 €</p>

          <ul className="mt-10">
            {carData.attributes.map((attribute, id) => (
              <li className="mt-2" key={id}>{attribute.name}: <span className="text-gray-500">{attribute.value}</span></li>
            ))}
          </ul>
        </div>
      </div>      
    </div>
  );
}
