import { Provider as ReduxProvider } from "react-redux";

// Type cast to work around React 19 type incompatibility with react-redux
const Provider = ReduxProvider as unknown as React.FC<{
  store: typeof import("@redux/_core/store").store;
  children: React.ReactNode;
}>;
import { ApolloProvider, ApolloClient } from "@apollo/client";
import { store } from "@redux/_core/store";
import { ComponentClass } from "react";
import React from "react";
import { generateOnLeftMenuPress } from "./root";
import { NavigationContext } from "./navigation.context";
import { initialWindowMetrics, SafeAreaProvider } from "react-native-safe-area-context";

const withProvider =
  (WrappedComponent: ComponentClass, client: ApolloClient<Record<string, unknown>>, hasMenu = false) =>
  (props: any) => {
    return (
      <Provider store={store}>
        <ApolloProvider client={client}>
          <SafeAreaProvider initialMetrics={initialWindowMetrics}>
            <NavigationContext.Provider
              value={{
                componentId: props.componentId,
                onLeftMenuPress: hasMenu ? generateOnLeftMenuPress(props.componentId) : null,
              }}
            >
              <WrappedComponent {...props} />
            </NavigationContext.Provider>
          </SafeAreaProvider>
        </ApolloProvider>
      </Provider>
    );
  };

export default withProvider;
