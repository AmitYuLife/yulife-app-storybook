import React, { useEffect } from "react";
import { Provider } from "react-redux";
import { mockStore } from "../src/redux/_core/store";
import { Preview } from "@storybook/react";
import { View } from "react-native";
import { ApolloProvider } from "@apollo/client";
import createClient from "../src/graphql/_core/client";
import translator from "../src/locale/translator";
import { translations } from "../src/locale/translations";
import { initialWindowMetrics, SafeAreaProvider } from "react-native-safe-area-context";
const client = createClient();

const Wrapper = (Story, context) => {
  const { locale } = context.globals;
  useEffect(() => {
    translator.setLocale(locale);
  }, [locale]);

  return (
    <Provider store={mockStore}>
      <ApolloProvider client={client}>
        <SafeAreaProvider initialMetrics={initialWindowMetrics}>
          <View style={{ position: "relative", width: 414, display: "flex" }}>
            <Story />
          </View>
        </SafeAreaProvider>
      </ApolloProvider>
    </Provider>
  );
};

const preview: Preview = {
  globalTypes: {
    locale: {
      name: "Locale",
      description: "Internationalization locale",
      toolbar: {
        icon: "globe",
        items: Object.keys(translations).map((key) => ({
          title: translations[key].name,
          value: key,
        })),
        showName: true,
      },
    },
  },
  decorators: [Wrapper],
};

export default preview;
