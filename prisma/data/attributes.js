// first, import the Prisma client to access Prisma methods
const { PrismaClient } = require("@prisma/client");
// initialize the Prisma client for the application
const prisma = new PrismaClient();

// create an asynchronous main function
async function main() {
  // connect to the database using Prisma connect() method
  await prisma.$connect();

  // using the Prisma create() method, add data based on the model fields
  // Note: other fields as autogenerated, and no need to specify them here
  await prisma.attribute.create({
    data: {
      id: 1,
      name: "Engine",
      value: "Petrol",
      filter: true,
      topParameter: true,
    },
  });
  await prisma.attribute.create({
    data: {
      id: 2,
      name: "Engine",
      value: "Diesel",
      filter: true,
      topParameter: true,
    },
  });

  await prisma.attribute.create({
    data: {
      id: 3,
      name: "Gearbox",
      value: "Manual",
      filter: true,
      topParameter: true,
    },
  });

  await prisma.attribute.create({
    data: {
      id: 4,
      name: "Gearbox",
      value: "Automatic",
      filter: true,
      topParameter: true,
    },
  });
  await prisma.attribute.create({
    data: {
      id: 5,
      name: "Seats",
      value: "5",
      filter: false,
      topParameter: false,
    },
  });

  await prisma.attribute.create({
    data: {
      id: 6,
      name: "AC",
      value: "yes",
      filter: false,
      topParameter: false,
    },
  });

  await prisma.attribute.create({
    data: {
      id: 7,
      name: "Drivetrain",
      value: "AWD",
      filter: true,
      topParameter: true,
    },
  });

  await prisma.attribute.create({
    data: {
      id: 8,
      name: "Drivetrain",
      value: "RWD",
      filter: true,
      topParameter: true,
    },
  });

  await prisma.attribute.create({
    data: {
      id: 9,
      name: "Drivetrain",
      value: "FWD",
      filter: true,
      topParameter: true,
    },
  });

  await prisma.attribute.create({
    data: {
      id: 10,
      name: "Consumption",
      value: "10 l",
      filter: false,
      topParameter: true,
    },
  });

  await prisma.attribute.create({
    data: {
      id: 11,
      name: "Consumption",
      value: "5 l",
      filter: false,
      topParameter: true,
    },
  });

  await prisma.attribute.create({
    data: {
      id: 12,
      name: "Consumption",
      value: "15 l",
      filter: false,
      topParameter: true,
    },
  });

  await prisma.attribute.create({
    data: {
      id: 13,
      name: "Consumption",
      value: "8 l",
      filter: false,
      topParameter: true,
    },
  });

  // you can find the added fields using findMany() method
  const attributes = await prisma.attribute.findMany();

  // log these added fields to the console
  console.dir(attributes, {
    depth: Infinity,
  });
}

main()
  // catch any erroes
  .catch(console.error)
  // disconnect the prisma client once all processes are executed
  .finally(() => prisma.$disconnect());
