import Image from "next/image";
import FormInput from "../components/ui/form/input/formInput";
import Button from "../components/ui/button/button";
import FormTextarea from "../components/ui/form/textarea/formTextarea";

export default function Apply() {
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
      <div className="flex flex-col xl:flex-row flex-col-reverse">
        <div className="basis-3/5">
          <div className="bg-white rounded">
            <form>
              <div className="p-6">
                <h1 className="text-2xl mb-8">Please fill the form</h1>
                <div className="mb-4">
                  <FormInput type="text" label="First name" required />
                </div>
                <div className="mb-4">
                  <FormInput type="text" label="Last name" required />
                </div>
                <div className="mb-4">
                  <FormInput type="text" label="E-mail" required />
                </div>
                <div>
                  <FormTextarea
                    label="Message"
                    placeholder="Add something what we should know..."
                    rows="10"
                  />
                </div>
              </div>
              <div className="bg-gray-200 rounded-b p-6">
                <Button size="md" classes={"bg-secondary text-white"}>
                  Apply
                </Button>
              </div>
            </form>
          </div>
        </div>
        <div className="xl:pl-6 pb-10 pr-20 static xl:sticky self-start top-0">
          <h1 className="text-4xl font-bold">{carData.seoTitle}</h1>
          <p className="text-6xl font-bold text-secondary mt-6">55 €</p>

          <ul className="mt-10">
            {carData.attributes.map((attribute, id) => (
              <li className="mt-2" key={id}>
                {attribute.name}:{" "}
                <span className="text-gray-500">{attribute.value}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}