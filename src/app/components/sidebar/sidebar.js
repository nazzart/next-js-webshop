"use client";

import {useSelector } from "react-redux";

export default function Sidebar({ title, price, attributes }) {

  const configurator = useSelector((state) => state.configurator);



  return (
    <div className="basis-2/5 xl:pl-6 pb-10 pr-20 static xl:sticky self-start top-0">
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="text-6xl font-bold text-secondary mt-6">
        {configurator.price} €
      </p>

      {attributes && (
        <ul className="mt-10">
          {attributes.map((attribute, id) => (
            <li className="mt-2" key={id}>
              {attribute.name}:{" "}
              <span className="text-gray-500">{attribute.value}</span>
            </li>
          ))}
        </ul>
      )}

      {configurator.equipment.length > 0 && (
        <div className="mt-10">
          <p className="text-lg mb-6">Selected equipment:</p>
          <ul>
            {configurator.equipment.map((equipment, id) => (
              <span
                className="mt-2 text-sm text-gray-500 after:content-[',_'] last:after:content-['']"
                key={id}
              >
                {equipment.label}
              </span>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
