import { LOGOUT_SUCCESS } from "../user/user.actions";
import { SyncAction } from "@redux/_core/types";
import {
  UPDATE_YU_SCREEN,
  UPDATE_YU_SCREEN_MAXIMISE_YU_ANIMATION_SEEN,
  UPDATE_YU_SCREEN_SECTIONS,
} from "./yu-screen.actions";
import moment from "moment";
import { UpdateYuScreenPayload, YuScreenSection, YumojiPrompt } from "./yu-screen.types";

export interface IYuScreenStore {
  sections: YuScreenSection[];
  yumojiPrompt?: YumojiPrompt;
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
      return updateYuScreenMaximiseYuAnimationSeen(state, action.payload);

    default:
      return state;
  }
};

const updateYuScreen = (state: IYuScreenStore, payload: UpdateYuScreenPayload) => {
  const newSections = payload.sections
    .filter((section) => "id" in section) // filter out sections with no id, most likely new section types from the api that needs an app update
    .map((section) => {
      // keep content as is if initial section contains preloaded content or section is intended to be empty
      if (section.content || section.ready) {
        return { ...section, lastContentUpdate: moment().format() };
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
    yumojiPrompt: payload.yumojiPrompt,
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

      const sectionToUpdate = storedSections[index];
      const { __typename, content, ready } = update;
      storedSections.splice(index, 1, {
        ...sectionToUpdate,
        lastContentUpdate: moment().format(),
        __typename,
        content,
        ready,
      } as YuScreenSection);
    });

  return {
    ...state,
    sections: storedSections,
  };
};

const updateYuScreenMaximiseYuAnimationSeen = (state: IYuScreenStore, payload: string) => {
  return {
    ...state,
    lastMaximiseYuAnimationSeen: payload,
  };
};

export default yuScreenReducer;
