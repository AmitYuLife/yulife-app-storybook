import { LOGOUT_SUCCESS } from "../user/user.actions";
import { SyncAction } from "@redux/_core/types";
import {
  CLEAR_YU_SCREEN_MAXIMISE_YU_ANIMATION_SEEN,
  UPDATE_YU_SCREEN,
  UPDATE_YU_SCREEN_MAXIMISE_YU_ANIMATION_SEEN,
  UPDATE_YU_SCREEN_SECTIONS,
} from "./yu-screen.actions";
import moment from "moment";
import { YuScreenSection } from "./yu-screen.types";

export interface IYuScreenStore {
  sections: YuScreenSection[];
  lastLayoutUpdate?: string;
  lastMaximiseYuAnimationSeen?: string;
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

    case UPDATE_YU_SCREEN_MAXIMISE_YU_ANIMATION_SEEN:
      return updateYuScreenMaximiseYuAnimationSeen(state);

    case CLEAR_YU_SCREEN_MAXIMISE_YU_ANIMATION_SEEN:
      return clearYuScreenMaximiseYuAnimationSeen(state);

    default:
      return state;
  }
};

const updateYuScreen = (state: IYuScreenStore, sections: YuScreenSection[]) => {
  const newSections = sections
    .filter((section) => "id" in section) // filter out sections with no id, most likely new section types from the api that needs an app update
    .map((section) => {
      // keep content as is if initial section contains preloaded content or section is intended to be empty
      if (section.content || section.ready) {
        return section;
      }

      const storedSection = state.sections?.find((s) => s.id === section.id && s.__typename === section.__typename);
      if (!storedSection) {
        return section;
      }

      // if waiting for content, use previously stored content while waiting
      return {
        ...section,
        content: storedSection.content,
      };
    }) as YuScreenSection[];

  return {
    ...state,
    sections: newSections,
    lastLayoutUpdate: moment().format(),
  };
};

const updateYuScreenSections = (state: IYuScreenStore, sections: YuScreenSection[]) => {
  const storedSections = [...state.sections];

  sections
    .filter((section) => "id" in section) // filter out sections with no id, most likely new section types from the api that needs an app update
    .forEach((update) => {
      const index = storedSections.findIndex((section) => section.id === update.id);
      if (index < 0) {
        return;
      }

      const sectionToUpdate = sections[index];
      const { __typename, content, ready } = update;
      sections.splice(index, 1, { ...sectionToUpdate, __typename, content, ready } as YuScreenSection);
    });

  return {
    ...state,
    sections,
  };
};

const updateYuScreenMaximiseYuAnimationSeen = (state: IYuScreenStore) => {
  return {
    ...state,
    lastMaximiseYuAnimationSeen: moment().format(),
  };
};

const clearYuScreenMaximiseYuAnimationSeen = (state: IYuScreenStore) => {
  return {
    ...state,
    lastMaximiseYuAnimationSeen: "",
  };
};

export default yuScreenReducer;
