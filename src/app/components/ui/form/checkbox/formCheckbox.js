"use client"

import { useState } from "react";
import Info from "../../icons/infoIcon";

export default function FormCheckbox({label, value, onCheckUpdate}) {

    const [isChecked, setIsChecked] = useState(false);

    const handleCheck = (e, value) => {
      setIsChecked((prev) => !prev)
      onCheckUpdate(e.target.checked, value);
    }
    
    return (
        <div className="checkbox-wrapper mt-6">
          <label className="cursor-pointer">
            <input type="checkbox" checked={isChecked} onChange={(e) => handleCheck(e, value)} value={value}/>
            <span className="ml-2">{label}</span>
          </label>
          <div className={`flex pl-5 text-sm mt-1 ${isChecked ? "text-green-500": "text-gray-400"}`}>
            <Info className={"fill-current"} />

            <span className="pl-1">{isChecked ? "Selected" : "Unchecked"}</span>
            </div>
        </div>
      );
}