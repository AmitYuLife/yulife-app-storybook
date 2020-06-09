import StorybookUI from "./storybook";
import { Navigation } from "react-native-navigation";

const STORYBOOK = "STORYBOOK";

Navigation.registerComponent(STORYBOOK, () => StorybookUI);

Navigation.events().registerAppLaunchedListener(async () => {
  await Navigation.setRoot({
    root: {
      component: {
        id: STORYBOOK,
        name: STORYBOOK,
      },
    },
  });
});
