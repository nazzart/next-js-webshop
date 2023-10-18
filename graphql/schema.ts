// /graphql/schema.ts
import { makeSchema, queryType, mutationType } from "nexus";
import * as path from 'path'

const Query = queryType({
  definition(t) {
    // your queries will go here
  }
})

const Mutation = mutationType({
  definition(t) {
    // your mutations will go here
  }
})

export const schema = makeSchema({
  types: [Query, Mutation],
  outputs: {
    schema: path.join(process.cwd(), 'graphql/schema.graphql'),
    typegen: path.join(process.cwd(), 'graphql/generated/nexus.d.ts'),
  },
  contextType: {
    module: path.join(process.cwd(), 'graphql/context.ts'),
    export: 'Context'
  },
  sourceTypes: {
    modules: [
      {
        module: '@prisma/client',
        alias: 'db'
      }
    ]
  }
})