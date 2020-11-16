import { ROUTES } from "@navigation/constants";
import { Navigation } from "react-native-navigation";

interface INavigateToAvatarCreationScreen {
  heading?: string;
}

export function navigateToAvatarCreationScreen(args?: INavigateToAvatarCreationScreen) {
  const { heading = "Create your Yumoji" } = args;

  Navigation.push(ROUTES.yuScreen, {
    component: {
      id: ROUTES.avatarCreation,
      name: ROUTES.avatarCreation,
      passProps: {
        heading,
      },
    },
  });
}
