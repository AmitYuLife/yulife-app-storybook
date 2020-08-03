import { Navigation } from "react-native-navigation";
import { ROUTES } from "@navigation/constants";

export const goToLeaderboardInfo = () => {
  Navigation.push(ROUTES.leaderboards, {
    component: {
      id: ROUTES.leaderboardInfo,
      name: ROUTES.leaderboardInfo,
    },
  });
};

export const goToLeaderboardsList = () => {
  Navigation.push(ROUTES.leaderboards, {
    component: {
      id: ROUTES.leaderboardsList,
      name: ROUTES.leaderboardsList,
    },
  });
};
