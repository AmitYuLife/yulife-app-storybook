import { ROUTES } from "@navigation/constants";
import { Navigation } from "@navigation/main";

export const navigateToYumojiBuilder = () =>
  Navigation.push(ROUTES.yuScreen, {
    component: {
      id: ROUTES.yumojiBuilder,
      name: ROUTES.yumojiBuilder,
    },
  });
