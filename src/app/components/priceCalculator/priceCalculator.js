import FormSelect from "../ui/form/select/formSelect";

export default function PriceCalculator() {
    return (
        <div className="rounded bg-primary p-6 grid gap-4 grid-cols-2">
            <div>
                <FormSelect label="Pick-up location" />
            </div>
            <div>
                <FormSelect label="Rent duration" />
            </div>
        </div>
    )
}