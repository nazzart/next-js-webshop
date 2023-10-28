"use client"

export const locationList = [
  { value: 1, label: "Brīvības iela 43, Rīga, LV-1050" },
  { value: 2, label: "Talsu iela 1, Rīga, LV-1002 " },
  { value: 3, label: "Hipokrāta iela 22, Rīga, LV-1079" },
];

export const rentDurationList = (car) => {
  // Get the number of all days of a current month  
  const now = new Date();
  const days = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();

  return [
    { value: 1, label: "1 day", price: car.price },
    { value: 2, label: "3 days", price: car.price * 3 },
    { value: 3, label: "1 week", price: car.price * 7 },
    { value: 4, label: "2 weeks", price: car.price * 14 },
    { value: 5, label: "3 weeks", price: car.price * 21 },
    { value: 6, label: "1 month", price: car.price * days },
  ];
};

export const equipmentList = [
  {
    value: 1,
    label: "Infant seat (0-1 year)",
    price: 5,
  },
  {
    value: 2,
    label: "Child seat with seat belts (1-5 years)",
    price: 6,
  },
  {
    value: 3,
    label: "PS navigation system with local maps",
    price: 10,
  },
  {
    value: 4,
    label: "4G WiFi",
    price: 15,
  },
  {
    value: 5,
    label: "Extra driver",
    price: 45,
  },
  {
    value: 6,
    label: "Full insurance without liability",
    price: 25,
  },
];
