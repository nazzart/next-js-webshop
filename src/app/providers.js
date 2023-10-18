'use client'

import { ApolloProvider } from "@apollo/client";
import apolloClient from "../../graphql/apollo";


export function Providers({ children }) {
    return (

            <ApolloProvider client={apolloClient}>
            {children}
            </ApolloProvider>
    )
}