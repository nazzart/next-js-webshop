"use client"

import { FC, useEffect, useState } from "react";
import {useRef} from "react"
import { clsx } from "clsx";
import ArrowIcon from "../../icons/arrowIcon";
import { SelectOption } from "@/models/selectOption.interface";

interface FormSelect {
  error?: boolean;
  disabled?: boolean
  label?: string;
  list: {label: string, value: string}[];
  onSelectUpdate: (option: {label: string; value: string}) => void
}

interface FormStyles {
  base: string;
  state: {
    error: string;
    disabled: string;
  }
}

const FormSelect: FC<FormSelect> = ({error, disabled, label, list, onSelectUpdate}) => {
  
  const styles: FormStyles = {
    base: "bg-white text-gray-500 pl-4 pr-10 py-2 cursor-pointer border relative",
    state: {
      error: "py-30 border-red-500 focus:border-red-500 text-red-500",
      disabled: "cursor-not-allowed bg-gray-100 text-gray-400",
    },
  };

  const dropdown = useRef<HTMLDivElement>(null)
  
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const [selectedOption, setSelectedOption] = useState<SelectOption>({value: "", label: ""});

  const toggling = () => { 
    if(!disabled){
      setIsOpen(!isOpen);
    }
  }

  const handleSelect = (option: SelectOption) => {
    setSelectedOption(option);
    setIsOpen(false);
    onSelectUpdate(option);
  };

  const closeWhenClickOutside = (e: MouseEvent )=> {
    if(dropdown.current && !dropdown.current.contains(e.target as Node)){
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
          {selectedOption.label || "Please select..."}
          <ArrowIcon size={24} direction={isOpen ? "up" : "down"} className="absolute top-0 bottom-0 right-3 m-auto" />
        </div>
        {isOpen && (
          <div className="bg-white border-t-2 border-slate-100 shadow-lg absolute w-full z-10">
            <ul>
              {list.map(option => (
                <li onClick={() => handleSelect(option)} key={Math.random()} className="py-2 cursor-pointer px-4 hover:bg-gray-100">
                  {option.label || option.value}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    )
}

export default FormSelect;