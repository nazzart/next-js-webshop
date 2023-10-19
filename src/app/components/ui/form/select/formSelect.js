"use client"

import { useEffect, useState } from "react";
import {useRef} from "react"
import { clsx } from "clsx";


export default function FormSelect({error, disabled, label, list, onSelectUpdate}) {
  
  const styles = {
    base: "bg-white text-gray-500 px-4 py-2 cursor-pointer border",
    state: {
      error: "py-30 border-red-500 focus:border-red-500 text-red-500",
      disabled: "cursor-not-allowed bg-gray-100 text-gray-400",
    },
  };

  const dropdown = useRef(null)
  
  const [isOpen, setIsOpen] = useState(false);

  const [selectedOption, setSelectedOption] = useState(null);

  const toggling = () => { 
    if(!disabled){
      setIsOpen(!isOpen);
    }
  }

  const handleSelect = value => () => {
    setSelectedOption(value);
    setIsOpen(false);
    onSelectUpdate(value);
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
        <span className="text-white block mb-2 text-sm">{label}</span>
        <div onClick={toggling} className={clsx([
          styles.base,
          error && styles.state.error,
          disabled && styles.state.disabled,
        ])} ref={dropdown}>
          {selectedOption || "Please select..."}
        </div>
        {isOpen && (
          <div className="bg-white border-t-2 border-slate-100 shadow-lg absolute w-full z-10">
            <ul>
              {list.map(option => (
                <li onClick={handleSelect(option)} key={Math.random()} className="py-2 cursor-pointer px-4 hover:bg-gray-100">
                  {option}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    )
}