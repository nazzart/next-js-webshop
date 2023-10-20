"use client";

import store from "../../src/redux/store";
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist';
import { ApolloProvider } from "@apollo/client";
import apolloClient from "../../graphql/apollo";

export function Providers({ children }) {
  let persistor = persistStore(store);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <ApolloProvider client={apolloClient}>{children}</ApolloProvider>
      </PersistGate>
    </Provider>
  );
}
