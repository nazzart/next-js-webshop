import Image from 'next/image'
import Card from './components/card/card'

export default function Home() {
  
  const carData = [
    {
      brand: "Opel",
      model: "Crossland",
      seoTitle: "Opel Crossland 1.2 Turbo",
      seoUrl: "/products/opel-crossland-turbo",
      attributes: [{
        name: "Engine",
        value: "Petrol",
        topParameter: true
      },
      {
        name: "Gearbox",
        value: "Automatic",
        topParameter: true
      },
      {
        name: "Power",
        value: "136 hp",
        topParameter: true
      },
      {
        name: "Mileage",
        value: "54500 km",
        topParameter: true
      }
    ]
    },
    {
      brand: "Opel",
      model: "Crossland",
      seoTitle: "Opel Crossland 1.2 Turbo",
      seoUrl: "/products/opel-crossland-turbo",
      attributes: [{
        name: "Engine",
        value: "Petrol",
        topParameter: true
      },
      {
        name: "Gearbox",
        value: "Automatic",
        topParameter: true
      },
      {
        name: "Power",
        value: "136 hp",
        topParameter: true
      },
      {
        name: "Mileage",
        value: "54500 km",
        topParameter: true
      }
    ]
    }
  ]
  return (
    <div className="container mx-auto">
      {carData.map((car, id) => (
        <Card car={car} key={id} />
      ))}
    </div>
  )
}
