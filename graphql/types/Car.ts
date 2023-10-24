import { builder } from "../builder";

builder.prismaObject('Car', {
  fields: (t) => ({
    id: t.exposeInt('id'),
    brand: t.exposeString('brand'),
    model: t.exposeString('model'),
    seoTitle: t.exposeString('seoTitle'),
    seoUrl: t.exposeString('seoUrl'),
    imageUrl: t.exposeString('imageUrl'),
    attributes: t.relation('attributes'),
    price: t.exposeInt('price')
  })
})

builder.queryField("cars", (t) =>
  t.prismaField({
    type: ['Car'],
    resolve: (query, _parent, _args, _ctx, _info) =>
      prisma.car.findMany({ ...query })
  })
)

builder.queryField("car", (t) =>
  t.prismaField({
    type: 'Car',
    args: {
      seoUrl: t.arg.string({required: true}),
    },
    resolve: async (query, _parent, args, _ctx, _info) => {

      const car = await prisma.car.findFirst({ 
        where: {
          seoUrl: args.seoUrl, 
        },
       })

       if (!car) throw new Error('Car was not found!')
      
       return car;

    }
  })
)