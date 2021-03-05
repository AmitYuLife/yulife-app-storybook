import { ApolloProvider } from "@apollo/react-common";
import { ApolloClient } from "apollo-client";
import { ComponentClass } from "react";
import React from "react";
import { generateOnLeftMenuPress } from "./root";

const withProvider = (
  WrappedComponent: ComponentClass,
  client: ApolloClient<Record<string, unknown>>,
  hasMenu = false
) => (props: any) => {
  return (
    <ApolloProvider client={client}>
      <WrappedComponent {...props} onLeftMenuPress={hasMenu ? generateOnLeftMenuPress(props.componentId) : null} />
    </ApolloProvider>
  );
};

export default withProvider;
