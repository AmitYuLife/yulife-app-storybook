import { Provider } from "react-redux";
import { ApolloProvider, ApolloClient } from "@apollo/client";
import { store } from "@redux/_core/store";
import { ComponentClass } from "react";
import React from "react";
import { generateOnLeftMenuPress } from "./root";

const withProvider = (
  WrappedComponent: ComponentClass,
  client: ApolloClient<Record<string, unknown>>,
  hasMenu = false
) => (props: any) => {
  return (
    <Provider store={store}>
      <ApolloProvider client={client}>
        <WrappedComponent {...props} onLeftMenuPress={hasMenu ? generateOnLeftMenuPress(props.componentId) : null} />
      </ApolloProvider>
    </Provider>
  );
};

export default withProvider;
