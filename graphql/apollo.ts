import { ApolloClient, InMemoryCache } from '@apollo/client'

export const apolloClient = new ApolloClient({
  ssrMode: true,
  uri: 'http://localhost:3000/api',
  cache: new InMemoryCache(),
  defaultOptions: {
    query: {
        fetchPolicy: "no-cache",
        errorPolicy: 'all',
    }
}
})

export default apolloClient