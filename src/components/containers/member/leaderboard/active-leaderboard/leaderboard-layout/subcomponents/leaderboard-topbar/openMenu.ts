import { Navigation } from "react-native-navigation";
import { ROUTES } from "@navigation/constants";

export const openMenu = () => {
  Navigation.mergeOptions(ROUTES.leaderboards, {
    sideMenu: {
      left: {
        enabled: true,
        visible: true,
      },
    },
    statusBar: {
      drawBehind: false,
      visible: true,
    },
  });
};
