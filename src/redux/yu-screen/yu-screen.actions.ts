import { createAction } from "@reduxjs/toolkit";
import {
  UpdateYuScreenMaximiseYuAnimationSeenPayload,
  UpdateYuScreenPayload,
  YuScreenSection,
} from "./yu-screen.types";

export const QUERY_YU_SCREEN = "QUERY_YU_SCREEN";
export const UPDATE_YU_SCREEN = "UPDATE_YU_SCREEN";
export const UPDATE_YU_SCREEN_SECTIONS = "UPDATE_YU_SCREEN_SECTIONS";
export const UPDATE_YU_SCREEN_MAXIMISE_YU_ANIMATION_SEEN = "UPDATE_YU_SCREEN_MAXIMISE_YU_ANIMATION_SEEN";

export const queryYuScreenLayout = createAction(QUERY_YU_SCREEN);

export const updateYuScreen = createAction<UpdateYuScreenPayload, typeof UPDATE_YU_SCREEN>(UPDATE_YU_SCREEN);

export const updateYuScreenSections = createAction<YuScreenSection[], typeof UPDATE_YU_SCREEN_SECTIONS>(
  UPDATE_YU_SCREEN_SECTIONS
);

export const updateYuScreenMaximiseYuAnimationSeen = createAction<
  UpdateYuScreenMaximiseYuAnimationSeenPayload,
  typeof UPDATE_YU_SCREEN_MAXIMISE_YU_ANIMATION_SEEN
>(UPDATE_YU_SCREEN_MAXIMISE_YU_ANIMATION_SEEN);
