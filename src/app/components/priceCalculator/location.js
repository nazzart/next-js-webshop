"use client"

import FormSelect from "../ui/form/select/formSelect";
import { useState } from "react";

export default function Location() {

  const locationList = [
    "Location 1, Riga",
    "Location 2, Riga",
    "Location 3, Riga",
  ];
  
  const [selectedData, setSelectedData] = useState({location: ""});
  const [errors, setErrors] = useState({});

  const onSelectUpdate = (field, value) => {
    setErrors(({[field]: value, ...errors }) => errors);
    setSelectedData(prevState => ({...prevState, [field]: value }))
  }

  return (
        <FormSelect error={errors?.location} label="Pick-up location" list={locationList} onSelectUpdate={(value) => onSelectUpdate("location", value)}/>
  );
}
