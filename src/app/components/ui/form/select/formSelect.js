"use client"

import { useEffect, useState } from "react";
import {useRef} from "react"

export default function FormSelect(props) {
  
  const dropdown = useRef(null)
  
  const [isOpen, setIsOpen] = useState(false);

  const [selectedOption, setSelectedOption] = useState(null);

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = value => () => {
    setSelectedOption(value);
    setIsOpen(false);
  };

  const closeWhenClickOutside = (e)=>{
    if(dropdown.current && !dropdown.current.contains(e.target)){
      setIsOpen(false)
    }
  }

  useEffect(() => {

    document.addEventListener('click',closeWhenClickOutside)

  }, [])

    return (
        <div className="relative">
        <span className="text-white block mb-2 text-sm">{props.label}</span>
        <div onClick={toggling} className="bg-white text-gray-500 px-4 py-2 cursor-pointer border" ref={dropdown}>
          {selectedOption || "Please select..."}
        </div>
        {isOpen && (
          <div className="bg-white border-t-2 border-slate-100 shadow-lg absolute w-full z-10">
            <ul>
              {props.list.map(option => (
                <li onClick={onOptionClicked(option)} key={Math.random()} className="py-2 cursor-pointer px-4 hover:bg-gray-100">
                  {option}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    )
}