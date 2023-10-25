"use client"

import FormSelect from "../ui/form/select/formSelect";
import FormCheckbox from "../ui/form/checkbox/formCheckbox";
import Button from "../ui/button/button";
import { useRouter } from 'next/navigation';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLocation, setEquipment, setCar, setDuration, setPrice } from "@/redux/configuratorSlice";


export default function PriceCalculator({car}) {

  const router = useRouter()
  const dispatch = useDispatch();

  const configurator = useSelector((state) => state.configurator);

  useEffect(() => {
    dispatch(setCar(car))
  }, [])

  const locationList = [
    {value: 1, label: "Location 1, Riga"},
    {value: 2, label: "Location 2, Riga"},
    {value: 3, label: "Location 3, Riga"}
  ];

  const rentDurationList = [
    {value: 1, label: "1 day", price: car.price},
    {value: 2, label: "3 days", price: car.price * 3},
    {value: 3, label: "1 week", price: car.price *  7},
    {value: 4, label: "2 weeks", price: car.price *  14},
    {value: 5, label: "3 weeks", price: car.price *  21},
    {value: 6, label: "1 month", price: car.price * 30},
  ];

  const equipmentList = [
    { 
      value: 1,
      label: "Infant seat (0-1 year)",
      price: 5
    },
    {
      value: 2,
      label: "Child seat with seat belts (1-5 years)",
      price: 6
    },
    {
      value: 3,
      label: "PS navigation system with local maps",
      price: 10
    },
    {
      value: 4,
      label: "4G WiFi",
      price: 15
    },
    {
      value: 5,
      label: "Extra driver",
      price: 45
    },
    {
      value: 6,
      label: "Full insurance without liability",
      price: 25
    }
  ];

  const [selectedData, setSelectedData] = useState({location: "", duration: "", equipment: []});
  const [errors, setErrors] = useState({});

  const validateConfig = () => {
    const emptyFields = Object.keys(selectedData).filter(key => selectedData[key] === "")

    emptyFields.forEach((field) => {
      setErrors(prevState => ({...prevState, [field]: true }))
    })
    
    if(!emptyFields.length && Object.keys(errors).length === 0) {
      dispatch(setLocation(selectedData.location))
      dispatch(setDuration(selectedData.duration))
      dispatch(setEquipment(selectedData.equipment))
      router.push('/apply')
    }
  }

  const onSelectUpdate = (field, option) => {
    const {value, price} = option;
    setErrors(({[field]: value, ...errors }) => errors);
    setSelectedData(prevState => ({...prevState, [field]: value }))
    if(price) {
      const totalEquipmentPrice  = selectedData.equipment.reduce((acc, value) => acc + value.price, 0);
      dispatch(setPrice(price + totalEquipmentPrice))
    }
  }

  const onCheckUpdate = (isChecked, value) => {

    const selectedItem = equipmentList.find((item) => item.value === value);

    if(isChecked){
      setSelectedData(prevState => ({ ...prevState, equipment: [...prevState.equipment, selectedItem ] }))
      dispatch(setPrice(configurator.price + selectedItem.price))

    } else {
      setSelectedData(prevState => ({... prevState, equipment: selectedData.equipment.filter((item) => item.value !== value )}))
      dispatch(setPrice(configurator.price - selectedItem.price))
    }
  }

  return (
    <div>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 bg-primary p-6 rounded-t">
        <div>
          <FormSelect error={errors?.location} label="Pick-up location" list={locationList} onSelectUpdate={(option) => onSelectUpdate("location", option)}/>
        </div>
        <div>
          <FormSelect error={errors?.duration} label="Rent duration" list={rentDurationList} onSelectUpdate={(option) => onSelectUpdate("duration", option)}/>
        </div>
      </div>
      <div className="bg-white p-6 py-10">
        <h2 className="text-2xl mb-2">Additional equipment and services</h2>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
          {equipmentList.map((equipment, id) => (
            <div key={id}>
              <FormCheckbox value={equipment.value} label={`${equipment.label} ${equipment.price} €`} onCheckUpdate={(isChecked, value) => onCheckUpdate(isChecked, value)} />
            </div>
          ))}
        </div>
      </div>
      <div className="bg-gray-200 rounded-b p-6">
        <Button size="md" classes={"bg-secondary text-white"} onClick={() => validateConfig()}>Apply for a car</Button>
        </div>
    </div>
  );
}
