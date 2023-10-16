import FormSelect from "../ui/form/select/formSelect";
import FormCheckbox from "../ui/form/checkbox/formCheckbox";
import Button from "../ui/button/button";

export default function PriceCalculator() {
  const locationList = [
    "Location 1, Riga",
    "Location 2, Riga",
    "Location 3, Riga",
  ];
  const rentDurationList = [
    "1 day",
    "3 days",
    "1 week",
    "2 weeks",
    "3 weeks",
    "1 month",
  ];

  return (
    <div>
      <div className="grid gap-4 grid-cols-2 bg-primary p-6 rounded-t">
        <div>
          <FormSelect label="Pick-up location" list={locationList} />
        </div>
        <div>
          <FormSelect label="Rent duration" list={rentDurationList} />
        </div>
      </div>

      <div className="bg-white p-6 py-10">
        <h2 className="text-2xl mb-2">Additional equipment and services</h2>
        <div className="grid gap-4 grid-cols-2">
          <div>
            <FormCheckbox label="Infant seat (0-1 year) +5€" />
          </div>
          <div>
            <FormCheckbox label="Child seat with seat belts (1-5 years) +5€" />
          </div>
          <div>
            <FormCheckbox label="GPS navigation system with local maps +5€" />
          </div>
          <div>
            <FormCheckbox label="4G WiFi +5€" />
          </div>
          <div>
            <FormCheckbox label="Extra driver +5€" />
          </div>
          <div>
            <FormCheckbox label="Full insurance without liability +20€" />
          </div>
        </div>
      </div>
      <div className="bg-gray-200 rounded-b p-6">
        <Button size="md" classes={"bg-secondary text-white"}>Apply for a car</Button>
        </div>
    </div>
  );
}
