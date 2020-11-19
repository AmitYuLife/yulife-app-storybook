import { ROUTES } from "@navigation/constants";
import { Navigation } from "react-native-navigation";

const DEFAULT_ARGS = { heading: "Create your Yumoji" };

export function navigateToAvatarCreationScreen(args = DEFAULT_ARGS) {
  const { heading } = args;

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
