import { GetYuScreenV5Query, GetYuScreenV5SectionsQuery } from "@graphql/__generated";

export const QUERY_YU_SCREEN = "QUERY_YU_SCREEN";
export const UPDATE_YU_SCREEN = "UPDATE_YU_SCREEN";
export const QUERY_YU_SCREEN_SECTIONS = "QUERY_YU_SCREEN_SECTIONS";
export const UPDATE_YU_SCREEN_SECTIONS = "UPDATE_YU_SCREEN_SECTIONS";

export const queryYuScreenLayout = () => ({
  type: QUERY_YU_SCREEN,
});

export const updateYuScreen = (data: GetYuScreenV5Query) => ({
  payload: data,
  type: UPDATE_YU_SCREEN,
});

export const queryYuScreenSections = (ids: string[]) => ({
  payload: ids,
  type: QUERY_YU_SCREEN_SECTIONS,
});

export const updateYuScreenSections = (data: GetYuScreenV5SectionsQuery) => ({
  payload: data,
  type: UPDATE_YU_SCREEN_SECTIONS,
});
