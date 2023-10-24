"use client"

import FormSelect from "../ui/form/select/formSelect";
import FormCheckbox from "../ui/form/checkbox/formCheckbox";
import Button from "../ui/button/button";
import { useRouter } from 'next/navigation';
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setLocation, setEquipment, setCar } from "@/redux/configuratorSlice";


export default function PriceCalculator({car}) {

  const router = useRouter()
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCar(car))
  }, [])

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

  const equipmentList = [
    {
      label: "Infant seat (0-1 year)",
      price: "5€"
    },
    {
      label: "Child seat with seat belts (1-5 years)",
      price: "5€"
    },
    {
      label: "PS navigation system with local maps",
      price: "5€"
    },
    {
      label: "4G WiFi",
      price: "5€"
    },
    {
      label: "Extra driver",
      price: "5€"
    },
    {
      label: "Full insurance without liability",
      price: "5€"
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
      dispatch(setEquipment(selectedData.equipment))
      router.push('/apply')
    }
  }

  const onSelectUpdate = (field, value) => {
    setErrors(({[field]: value, ...errors }) => errors);
    setSelectedData(prevState => ({...prevState, [field]: value }))
  }

  const onCheckUpdate = (isChecked, value) => {
    if(isChecked){
      setSelectedData(prevState => ({ ...prevState, equipment: [...prevState.equipment, value ] }))
    } else {
      setSelectedData(prevState => ({... prevState, equipment: selectedData.equipment.filter(function(item) { 
          return item !== value 
      })}));
    }
  }

  return (
    <div>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 bg-primary p-6 rounded-t">
        <div>
          <FormSelect error={errors?.location} label="Pick-up location" list={locationList} onSelectUpdate={(value) => onSelectUpdate("location", value)}/>
        </div>
        <div>
          <FormSelect error={errors?.duration} label="Rent duration" list={rentDurationList} onSelectUpdate={(value) => onSelectUpdate("duration", value)}/>
        </div>
      </div>
      <div className="bg-white p-6 py-10">
        <h2 className="text-2xl mb-2">Additional equipment and services</h2>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
          {equipmentList.map((equipment, id) => (
            <div key={id}>
              <FormCheckbox value={equipment.label} label={equipment.label+" "+equipment.price} onCheckUpdate={(isChecked, value) => onCheckUpdate(isChecked, value)} />
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
