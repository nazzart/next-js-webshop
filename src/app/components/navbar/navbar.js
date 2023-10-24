"use client";

import Link from "next/link";
import Search from "./search/search";

export default function Navbar() {
  /**
   * Menu item data
   */
  const menuItems = [
    {
      name: "Home",
      url: "/",
    }
  ];

  return (
    <div className="bg-primary">
      <div className="container mx-auto flex flex-row">
        <Link href={"/"}>
          <div className="bg-secondary px-5 h-full flex items-center">
            <span className="text-white text-3xl tracking-wider">
              <span className="font-extralight">Rent</span>Car
              <strong>24</strong>
            </span>
          </div>
        </Link>


        <div className="flex flex-row justify-between w-full">
        {menuItems.length > 0 && (
            <ul>
              {menuItems.map((item, id) => (
                <li className="p-5 inline-block" key={id}>
                  <Link href={item.url} key={id} className="font-bold text-white">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        <Search />
        </div>
        
        
      </div>
    </div>
  );
}
