import { LOGOUT_SUCCESS } from "../user/user.actions";
import { SyncAction } from "@redux/_core/types";
import { GetYuScreenV5Query, GetYuScreenV5SectionsQuery } from "@graphql/__generated";
import { UPDATE_YU_SCREEN, UPDATE_YU_SCREEN_SECTIONS } from "./yu-screen.actions";
import moment from "moment";
import { YuScreenSection } from "./yu-screen.types";

export interface IYuScreenStore {
  sections: YuScreenSection[];
  lastLayoutUpdate?: string;
}

export const getInitialState = (): IYuScreenStore => ({
  sections: [],
});

const yuScreenReducer = (state: IYuScreenStore = getInitialState(), action: SyncAction): IYuScreenStore => {
  switch (action.type) {
    case UPDATE_YU_SCREEN:
      return updateYuScreen(state, action.payload);

    case UPDATE_YU_SCREEN_SECTIONS:
      return updateYuScreenSections(state, action.payload);

    case LOGOUT_SUCCESS:
      return getInitialState();

    default:
      return state;
  }
};

const updateYuScreen = (state: IYuScreenStore, data: GetYuScreenV5Query) => {
  if (!data?.getYuScreenV5) {
    return state;
  }

  // filter out sections with no id, most likely new section types from the api that needs an app update
  const filteredSections = data.getYuScreenV5.sections.filter(section => ("id" in section)) as YuScreenSection[];

  return {
    ...state,
    sections: filteredSections,
    lastLayoutUpdate: moment().format(),
  };
};

const updateYuScreenSections = (state: IYuScreenStore, data: GetYuScreenV5SectionsQuery) => {
  if (!data?.getYuScreenV5Sections) {
    return state;
  }

  const sections = [...state.sections];

  // filter out sections with no id, most likely new section types from the api that needs an app update
  const updates = data.getYuScreenV5Sections.filter(section => ("id" in section)) as YuScreenSection[];

  updates.forEach((update) => {
    const index = sections.findIndex((section) => section.id === update.id);
    const sectionToUpdate = sections[index];
    sections.splice(index, 1, { ...sectionToUpdate, ...update } as YuScreenSection);
  });

  return {
    ...state,
    sections,
  };
};

export default yuScreenReducer;
