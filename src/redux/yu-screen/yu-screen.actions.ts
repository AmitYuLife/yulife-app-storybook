import { YuScreenSection } from "./yu-screen.types";

export const QUERY_YU_SCREEN = "QUERY_YU_SCREEN";
export const UPDATE_YU_SCREEN = "UPDATE_YU_SCREEN";
export const QUERY_YU_SCREEN_SECTIONS = "QUERY_YU_SCREEN_SECTIONS";
export const UPDATE_YU_SCREEN_SECTIONS = "UPDATE_YU_SCREEN_SECTIONS";
export const UPDATE_YU_SCREEN_MAXIMISE_YU_ANIMATION_SEEN = "UPDATE_YU_SCREEN_MAXIMISE_YU_ANIMATION_SEEN";

export const queryYuScreenLayout = () => ({
  type: QUERY_YU_SCREEN,
});

export const updateYuScreen = (sections: YuScreenSection[]) => ({
  payload: sections,
  type: UPDATE_YU_SCREEN,
});

export const queryYuScreenSections = (ids: string[]) => ({
  payload: ids,
  type: QUERY_YU_SCREEN_SECTIONS,
});

export const updateYuScreenSections = (sections: YuScreenSection[]) => ({
  payload: sections,
  type: UPDATE_YU_SCREEN_SECTIONS,
});

export const updateYuScreenMaximiseYuAnimationSeen = (timestamp: string) => ({
  payload: timestamp,
  type: UPDATE_YU_SCREEN_MAXIMISE_YU_ANIMATION_SEEN,
});
