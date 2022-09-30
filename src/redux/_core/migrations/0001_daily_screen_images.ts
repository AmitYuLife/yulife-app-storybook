import { PersistedState } from "redux-persist";
import { IReduxState } from "../reducers";

const MISSING_CENTER_IMAGES = new Map<string, string>([
  ["large_forest", "earth_forest"],
  ["mountain", "earth_mountain"],
  ["desert", "earth_desert"],
  ["ocean", "earth_ocean"],
]);

export default (state: PersistedState & IReduxState) => {
  if (MISSING_CENTER_IMAGES.has(state.theme?.dailyStepsScreen?.centredScreen?.online?.image)) {
    const {
      theme: {
        dailyStepsScreen: {
          centredScreen: {
            online: { image, ...onlineProps },
            ...centredScreenProps
          },
          ...dailyStepsScreenProps
        },
        ...themeProps
      },
      ...stateProps
    } = state;

    return {
      ...stateProps,
      theme: {
        ...themeProps,
        dailyStepsScreenProps: {
          ...dailyStepsScreenProps,
          centredScreen: {
            ...centredScreenProps,
            online: {
              ...onlineProps,
              image: MISSING_CENTER_IMAGES.get(image),
            },
          },
        },
      },
    };
  }

  return state;
};
