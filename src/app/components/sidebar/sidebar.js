"use client"

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPrice } from "@/redux/configuratorSlice";

export default function Sidebar({title, price, attributes}) {
    
    const dispatch = useDispatch();

    const configurator = useSelector((state) => state.configurator);

    useEffect(() => {
        dispatch(setPrice(price))
      }, [price])

    return (
        <div className="xl:pl-6 pb-10 pr-20 static xl:sticky self-start top-0">
          <h1 className="text-4xl font-bold">{title}</h1>
          <p className="text-6xl font-bold text-secondary mt-6">{configurator.price} €</p>

          <ul className="mt-10">
            {attributes?.map((attribute, id) => (
              <li className="mt-2" key={id}>{attribute.name}: <span className="text-gray-500">{attribute.value}</span></li>
            ))}
          </ul>
        </div>
    )

}