"use client";

import { useSelector } from "react-redux";

export default function SidebarCheckout() {
  const configurator = useSelector((state) => state.configurator);
  const vat = 0.21;

  const getVatPrice = (nettoPrice) => {
    const vatPrice = nettoPrice * vat
    return Math.round(vatPrice * 100) / 100;
  }

  const getTotalPrice = (nettoPrice) => { 
    const brutto = getVatPrice(nettoPrice) + nettoPrice;
    return Math.round(brutto * 100) / 100;
  }


  return (
    <div className="basis-2/5 xl:pl-6 pb-10 static xl:sticky self-start top-5">
      <p className="text-lg mb-2 font-medium">Selected car</p>
      <h1 className="text-4xl font-bold">{configurator.car.seoTitle}</h1>

      {configurator.equipment.length > 0 && (
        <div className="mt-10">
          <p className="text-lg mb-2 font-medium">Selected equipment</p>
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
      <div>
        <p className="text-lg mb-2 mt-10 font-medium">Price</p>
            <div className="flex justify-between mt-3 text-sm">
                <p>Car and configuration (netto)</p>
                <p>{configurator.price} €</p>
            </div>
            <div className="flex justify-between border-b-2 border-gray-200 mt-5 pb-4 text-sm">
                <p>VAT (21 %)</p>
                <p>{getVatPrice(configurator.price)} €</p>
            </div>
            <div className="flex justify-between mt-6 text-sm font-bold">
                <p>Total price</p>
                <p>{getTotalPrice(configurator.price)} €</p>
            </div>
      </div>
    </div>
  );
}
