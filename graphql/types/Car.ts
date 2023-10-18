import { builder } from "../builder";

builder.prismaObject('Car', {
  fields: (t) => ({
    id: t.exposeString('id'),
    brand: t.exposeString('brand'),
    model: t.exposeString('model'),
    seoTitle: t.exposeString('seoTitle'),
    seoUrl: t.exposeString('seoUrl'),
    imageUrl: t.exposeString('imageUrl'),
    attributes: t.relation('attributes')
  })
})

builder.queryField("cars", (t) =>
  t.prismaField({
    type: ['Car'],
    resolve: (query, _parent, _args, _ctx, _info) =>
      prisma.car.findMany({ ...query })
  })
)