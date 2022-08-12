import { ROUTES } from "@navigation/constants";
import { Navigation } from "react-native-navigation";

interface INavigateToYumojiBuilder {
  heading?: string;
}

export function navigateToYumojiBuilder(args?: INavigateToYumojiBuilder) {
  const { heading = "Create your Yumoji" } = args || {};

  Navigation.push(ROUTES.yuScreen, {
    component: {
      id: ROUTES.yumojiBuilder,
      name: ROUTES.yumojiBuilder,
      passProps: {
        heading,
      },
    },
  });
}
