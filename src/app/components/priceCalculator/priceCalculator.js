"use client"

import FormSelect from "../ui/form/select/formSelect";
import FormCheckbox from "../ui/form/checkbox/formCheckbox";
import Button from "../ui/button/button";
import { useRouter } from 'next/navigation';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLocation, setEquipment, setCar, setDuration, setPrice } from "@/redux/configuratorSlice";
import { equipmentList, locationList, rentDurationList } from "@/app/mocked-data";


export default function PriceCalculator({car}) {

  const router = useRouter()
  const dispatch = useDispatch();

  const configurator = useSelector((state) => state.configurator);

  useEffect(() => {
    dispatch(setEquipment(""));
    dispatch(setCar(car))
  }, [])


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
          <FormSelect error={errors?.duration} label="Rent duration" list={rentDurationList(car)} onSelectUpdate={(option) => onSelectUpdate("duration", option)}/>
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
