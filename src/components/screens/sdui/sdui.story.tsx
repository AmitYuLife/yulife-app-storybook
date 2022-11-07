import React from "react";
import { Provider } from "react-redux";
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
