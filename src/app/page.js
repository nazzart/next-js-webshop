import Image from 'next/image'
import Card from './components/card/card'

export default function Home() {

  const carData = [
    {
      brand: "Opel",
      model: "Crossland",
      seoTitle: "Opel Crossland 1.2 Turbo",
      attributes: [{
        name: "Engine",
        value: "Petrol"
      },
      {
        name: "Gearbox",
        value: "Automatic"
      },
      {
        name: "Power",
        value: "136 hp"
      },
      {
        name: "Mileage",
        value: "54500 km"
      }
    ]
    },
    {
      brand: "Opel",
      model: "Crossland",
      seoTitle: "Opel Crossland 1.2 Turbo",
      attributes: [{
        name: "Engine",
        value: "Petrol"
      },
      {
        name: "Gearbox",
        value: "Automatic"
      },
      {
        name: "Power",
        value: "136 hp"
      },
      {
        name: "Mileage",
        value: "54500 km"
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
