import { Provider } from "react-redux";
import { ApolloProvider, ApolloClient } from "@apollo/client";
import { store } from "@redux/_core/store";
import { ComponentClass } from "react";
import React from "react";
import { generateOnLeftMenuPress } from "./root";
import { NavigationContext } from "./navigation.context";

const withProvider =
  (WrappedComponent: ComponentClass, client: ApolloClient<Record<string, unknown>>, hasMenu = false) =>
  (props: any) => {
    return (
      <Provider store={store}>
        <ApolloProvider client={client}>
          <NavigationContext.Provider
            value={{
              componentId: props.componentId,
              onLeftMenuPress: hasMenu ? generateOnLeftMenuPress(props.componentId) : null,
            }}
          >
            <WrappedComponent {...props} />
          </NavigationContext.Provider>
        </ApolloProvider>
      </Provider>
    );
  };

export default withProvider;
