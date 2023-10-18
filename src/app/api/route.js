import { createYoga } from 'graphql-yoga'
import { schema } from '../../../graphql/schema'

const { handleRequest } = createYoga({
  graphqlEndpoint: '/api',
  schema,
  fetchAPI: {
    Response: Response,
    Request: Request,
  },
})

export { handleRequest as GET, handleRequest as POST }