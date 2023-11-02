import { builder } from "../builder";

const FilterInput = builder.inputType("FilterInput", {
  fields: (t) => ({
    engine: t.string(),
    gearbox: t.string(),
    drivetrain: t.string(),
  }),
});

builder.prismaObject("Car", {
  fields: (t) => ({
    id: t.exposeInt("id"),
    brand: t.exposeString("brand"),
    model: t.exposeString("model"),
    seoTitle: t.exposeString("seoTitle"),
    seoUrl: t.exposeString("seoUrl"),
    imageUrl: t.exposeString("imageUrl"),
    attributes: t.relation("attributes"),
    price: t.exposeInt("price"),
  }),
});

builder.queryField("cars", (t) =>
  t.prismaField({
    type: ["Car"],
    args: {
      filter: t.arg({
        type: FilterInput,
      }),
    },
    resolve: (query, _parent, _args, _ctx, _info) => {
      let queryArgs = [];

      if (_args.filter.engine) {
        queryArgs.push({
          attributes: {
            some: {
              name: "Engine",
              value:
                _args.filter.engine.charAt(0).toUpperCase() +
                _args.filter.engine.slice(1),
            },
          },
        });
      }

      if (_args.filter.gearbox) {
        queryArgs.push({
          attributes: {
            some: {
              name: "Gearbox",
              value:
                _args.filter.gearbox.charAt(0).toUpperCase() +
                _args.filter.gearbox.slice(1),
            },
          },
        });
      }

      if (_args.filter.drivetrain) {
        queryArgs.push({
          attributes: {
            some: {
              name: "Drivetrain",
              value: _args.filter.drivetrain.toUpperCase(),
            },
          },
        });
      }

      return prisma.car.findMany({
        where: { AND: queryArgs },
      });
    },
  })
);

builder.queryField("car", (t) =>
  t.prismaField({
    type: "Car",
    args: {
      seoUrl: t.arg.string({ required: true }),
    },
    resolve:  (query, _parent, _args, _ctx, _info) => {
      const car =  prisma.car.findFirst({
        where: {
          seoUrl: _args.seoUrl,
        },
      });

      if (!car) throw new Error("Car was not found!");

      return car;
    },
  })
);

builder.queryField("searchCar", (t) =>
  t.prismaField({
    type: ["Car"],
    args: {
      keyword: t.arg.string({ required: true }),
    },
    resolve: (query, _parent, _args, _ctx, _info) =>
      prisma.car.findMany({
        where: {
          seoTitle: {
            contains: _args.keyword,
          },
        },
      }),
  })
);
