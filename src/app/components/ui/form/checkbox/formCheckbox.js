"use client"

import { useState } from "react";

export default function FormCheckbox(props) {

    const [isChecked, setIsChecked] = useState(false);
    
    return (
        <div className="checkbox-wrapper mt-6">
          <label className="cursor-pointer">
            <input type="checkbox" checked={isChecked} onChange={() => setIsChecked((prev) => !prev)} />
            <span className="ml-2">{props.label}</span>
          </label>
          <p className={`text-sm mt-2 ${isChecked ? "text-green-500": "text-gray-400"}`}>{isChecked ? "Selected" : "Unchecked"}</p>
        </div>
      );
}