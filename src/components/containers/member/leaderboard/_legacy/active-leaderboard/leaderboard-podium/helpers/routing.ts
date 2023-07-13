import { Navigation } from "@navigation/main";
import { ROUTES } from "@navigation/constants";

export const goToLeaderboardInfo = () => {
  Navigation.push(ROUTES.leaderboardsLegacy, {
    component: {
      id: ROUTES.leaderboardInfoLegacy,
      name: ROUTES.leaderboardInfoLegacy,
    },
  });
};

export const goToLeaderboardsList = () => {
  Navigation.push(ROUTES.leaderboardsLegacy, {
    component: {
      id: ROUTES.leaderboardsListLegacy,
      name: ROUTES.leaderboardsListLegacy,
    },
  });
};
