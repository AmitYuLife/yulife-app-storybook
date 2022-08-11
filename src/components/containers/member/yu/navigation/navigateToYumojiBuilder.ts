import { ROUTES } from "@navigation/constants";
import { Navigation } from "react-native-navigation";

export const navigateToYumojiBuilder = () =>
  Navigation.push(ROUTES.yuScreen, {
    component: {
      id: ROUTES.yumojiBuilder,
      name: ROUTES.yumojiBuilder,
    },
  });
