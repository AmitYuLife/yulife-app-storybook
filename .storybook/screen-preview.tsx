import { useEffect, useMemo, type ComponentType } from "react";
import type { Decorator } from "@storybook/react-webpack5";
import { ApolloProvider } from "@apollo/client";
import { Provider } from "react-redux";
import { View } from "react-native";
import { initialWindowMetrics, SafeAreaProvider } from "react-native-safe-area-context";
import ModalProvider from "../src/modules/modals/modal-provider";
import { NavigationContext } from "../src/navigation/navigation.context";
import translator from "../src/locale/translator";
import ThemeOverrideProvider from "../src/modules/themes/context";
import { DEFAULT_YULIFE_THEME } from "../src/modules/themes/helpers";
import { getOrCreateStoryStore, storyStore } from "./story-store";
import { storyApolloClient } from "./story-apollo";

const STORYBOOK_SCREEN_ID = "storybook-screen";

export const SCREEN_STORY_WIDTH = 414;
export const SCREEN_STORY_HEIGHT = 800;

type StoryStore = ReturnType<typeof getOrCreateStoryStore>;
type PreloadedState = Parameters<typeof getOrCreateStoryStore>[1];

type ScreenStoryWrapperProps = {
  Story: ComponentType;
  locale?: string;
  storyId: string;
  preloadedState?: PreloadedState;
};

const ScreenStoryWrapper = ({ Story, locale = "en-GB", storyId, preloadedState }: ScreenStoryWrapperProps) => {
  const store = useMemo(() => getOrCreateStoryStore(storyId, preloadedState) ?? storyStore, [storyId, preloadedState]);

  useEffect(() => {
    void translator.setLocale(locale);
  }, [locale]);

  return (
    <Provider store={store}>
      <ApolloProvider client={storyApolloClient}>
        <ThemeOverrideProvider theme={DEFAULT_YULIFE_THEME}>
          <SafeAreaProvider initialMetrics={initialWindowMetrics}>
            <NavigationContext value={{ componentId: STORYBOOK_SCREEN_ID }}>
              <ModalProvider componentId={STORYBOOK_SCREEN_ID}>
                <View
                  style={{
                    width: SCREEN_STORY_WIDTH,
                    height: SCREEN_STORY_HEIGHT,
                    alignSelf: "center",
                    overflow: "hidden",
                    backgroundColor: "#ffffff",
                  }}
                >
                  <View style={{ flex: 1, width: "100%", height: "100%" }}>
                    <Story />
                  </View>
                </View>
              </ModalProvider>
            </NavigationContext>
          </SafeAreaProvider>
        </ThemeOverrideProvider>
      </ApolloProvider>
    </Provider>
  );
};

export const screenPreviewDecorator: Decorator = (Story, context) => (
  <ScreenStoryWrapper
    Story={Story}
    storyId={context.id}
    preloadedState={context.parameters.preloadedState as PreloadedState}
    locale={context.globals.locale as string | undefined}
  />
);
