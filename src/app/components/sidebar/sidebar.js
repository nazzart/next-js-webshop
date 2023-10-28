"use client";

import {useSelector } from "react-redux";

export default function Sidebar({ title, attributes }) {

  const configurator = useSelector((state) => state.configurator);



  return (
    <div className="basis-2/5 xl:pl-6 pb-10 pr-20 static xl:sticky self-start top-5">
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
    </div>
  );
}
