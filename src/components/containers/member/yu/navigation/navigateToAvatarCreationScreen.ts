import { ROUTES } from "@navigation/constants";
import { Navigation } from "react-native-navigation";

interface INavigateToAvatarCreationScreen {
  heading?: string;
  useNewYumojiBuilder?: boolean;
}

export function navigateToAvatarCreationScreen(args?: INavigateToAvatarCreationScreen) {
  const { heading = "Create your Yumoji", useNewYumojiBuilder } = args;

  Navigation.push(ROUTES.yuScreen, {
    component: {
      id: ROUTES.avatarCreation,
      name: useNewYumojiBuilder ? ROUTES.yumojiBuilder : ROUTES.avatarCreation,
      passProps: {
        heading,
      },
    },
  });
}
