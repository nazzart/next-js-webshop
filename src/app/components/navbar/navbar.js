"use client";

import Link from "next/link";

export default function Navbar() {
  /**
   * Menu item data
   */
  const menuItems = [
    {
      name: "Cars",
      url: "/cars",
    },
    {
      name: "Offers",
      url: "/offers",
    },
  ];

  return (
    <div className="bg-primary">
      <div class="container mx-auto flex flex-row">
        <Link href={"/"}>
          <div className="bg-secondary px-5 py-3">
            <span className="text-white text-3xl tracking-wider">
              <span className="font-extralight">Rent</span>Car
              <strong>24</strong>
            </span>
          </div>
        </Link>

        {menuItems.length > 0 && (
          <ul>
            {menuItems.map((item, id) => (
              <li className="p-5 inline-block">
                <Link href={item.url} key={id} className="font-bold text-white">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
