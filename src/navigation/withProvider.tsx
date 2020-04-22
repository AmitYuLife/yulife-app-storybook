import { ApolloProvider } from "@apollo/react-common";
import { ApolloClient } from "apollo-client";
import { ComponentClass } from "react";
import React from "react";
import { generateOnLeftMenuPress } from "./root";

const withProvider = (WrappedComponent: ComponentClass, client: ApolloClient<{}>, hasMenu = false) => (props: any) => {
  const otherProps: any = {};

  if (hasMenu) {
    otherProps.onLeftMenuPress = generateOnLeftMenuPress(props.componentId);
  }

  return (
    <ApolloProvider client={client}>
      <WrappedComponent {...props} {...otherProps} />
    </ApolloProvider>
  );
};

export default withProvider;
