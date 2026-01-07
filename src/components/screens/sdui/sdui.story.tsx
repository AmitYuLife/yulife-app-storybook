import React from "react";
import { Provider as ReduxProvider } from "react-redux";

// Type cast to work around React 19 type incompatibility with react-redux
const Provider = ReduxProvider as unknown as React.FC<{
  store: typeof import("@redux/_core/store").store;
  children: React.ReactNode;
}>;
import { ApolloProvider } from "@apollo/client";
import { store } from "@redux/_core/store";
import createClient from "@graphql/_core/client";
import { SduiScreen } from "./sdui.screen";
import { sduiStoriesData } from "./sdui.stories.data";

const client = createClient();

const SduiStory = () => {
  return (
    <Provider store={store}>
      <ApolloProvider client={client}>
        <SduiScreen {...sduiStoriesData} />
      </ApolloProvider>
    </Provider>
  );
};

export default SduiStory;
