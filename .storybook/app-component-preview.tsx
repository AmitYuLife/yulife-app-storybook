import { type ComponentType } from "react";
import { ApolloProvider } from "@apollo/client";
import { Provider } from "react-redux";
import { Box } from "@atoms";
import ThemeOverrideProvider from "@modules/themes/context";
import { DEFAULT_YULIFE_THEME } from "@modules/themes/helpers";
import { createStoryStore } from "./story-store";
import { getInitialState as getInitialLevelsState } from "../src/redux/levels/levels.reducer";
import { storyApolloClient } from "./story-apollo";

const appComponentStoryStore = createStoryStore({
  levels: {
    ...getInitialLevelsState(),
    level: 10,
    yuniversalMap: 0,
    yuniversalLevel: 0,
  },
});

/** Decorator for legacy app components that need Redux, Apollo, and theme. */
export const appComponentPreviewDecorator = (Story: ComponentType) => (
  <Provider store={appComponentStoryStore}>
    <ApolloProvider client={storyApolloClient}>
      <ThemeOverrideProvider theme={DEFAULT_YULIFE_THEME}>
        <Box p={16} alignItems="center" width="100%">
          <Story />
        </Box>
      </ThemeOverrideProvider>
    </ApolloProvider>
  </Provider>
);

export const isAppComponentStory = (parameters?: { appComponent?: boolean }) => parameters?.appComponent === true;
