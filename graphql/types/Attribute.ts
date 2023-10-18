import { builder } from "../builder";

builder.prismaObject('Attribute', {
  fields: (t) => ({
    id: t.exposeString('id'),
    name: t.exposeString('name'),
    value: t.exposeString('value'),
    topParameter: t.exposeString('topParameter'),
    cars: t.relation('cars')
  })
})

builder.queryField("attributes", (t) =>
  t.prismaField({
    type: ['Attribute'],
    resolve: (query, _parent, _args, _ctx, _info) =>
      prisma.attribute.findMany({ ...query })
  })
)