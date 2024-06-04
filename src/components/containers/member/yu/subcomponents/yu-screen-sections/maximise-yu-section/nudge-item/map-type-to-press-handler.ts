import { ROUTES } from "@navigation/constants";
import { Navigation } from "@navigation/main";
import { VoidFunction } from "@utils";

const TYPE_ACTION_MAP = {
  active_streak: "challenge",
  active_chest: "challenge",
  active_challenge: "challenge",
  extras_weekly: "challenge",

  extras_health: "health_questionnaire",
  extras_mood: "daily_survey",

  passive_cycle: "",
  passive_meditate: "",
  passive_walk: "",
} as Record<string, string>;

export const mapTypeToPressHandler = (type: string): VoidFunction | null => {
  const action = TYPE_ACTION_MAP[type];

  if (!action) {
    return null;
  }

  if (action === "challenge") {
    return () =>
      Navigation.mergeOptions(ROUTES.quests, {
        bottomTabs: {
          currentTabIndex: 1,
        },
        statusBar: {
          drawBehind: false,
          visible: true,
        },
      });
  }

  if (["health_questionnaire", "daily_survey"].includes(action)) {
    return () =>
      Navigation.push(ROUTES.yuScreen, {
        component: {
          id: ROUTES.journey,
          name: ROUTES.journey,
          passProps: {
            journeyId: action,
          },
        },
      });
  }
};
