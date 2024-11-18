import { logOutSuccess as logOutSuccessAction } from "../user/user.actions";
import {
  updateYuScreen as updateYuScreenAction,
  updateYuScreenSections as updateYuScreenSectionsAction,
  updateYuScreenMaximiseYuAnimationSeen as updateYuScreenMaximiseYuAnimationSeenAction,
  setYuScreenSectionsLoading as setYuScreenSectionsLoadingAction,
} from "./yu-screen.actions";
import moment from "moment";
import {
  IYuScreenStore,
  UpdateYuScreenMaximiseYuAnimationSeenPayload,
  UpdateYuScreenPayload,
  YuScreenSection,
} from "./yu-screen.types";
import { createReducer } from "@reduxjs/toolkit";

export const getInitialState = (): IYuScreenStore => ({
  sections: [],
});

const yuScreenReducer = createReducer(getInitialState(), (builder) => {
  builder.addCase(updateYuScreenAction, (state, action) => updateYuScreen(state, action.payload));
  builder.addCase(updateYuScreenSectionsAction, (state, action) => updateYuScreenSections(state, action.payload));
  builder.addCase(updateYuScreenMaximiseYuAnimationSeenAction, (state, action) =>
    updateYuScreenMaximiseYuAnimationSeen(state, action.payload)
  );
  builder.addCase(setYuScreenSectionsLoadingAction, (state, action) =>
    setYuScreenSectionsLoading(state, action.payload)
  );
  builder.addCase(logOutSuccessAction, () => getInitialState());
  builder.addDefaultCase((state) => state);
});

const updateYuScreen = (state: IYuScreenStore, payload: UpdateYuScreenPayload) => {
  const newSections = payload.sections
    .filter((section) => "id" in section && "sectionInstanceId" in section) // filter out sections with no id, most likely new section types from the api that needs an app update
    .map((section) => {
      // keep content as is if initial section contains preloaded content or section is intended to be empty
      if (section.content || section.ready) {
        return {
          ...section,
          loading: false,
          lastContentUpdate: moment().format(),
        };
      }

      const storedSection = state.sections?.find(
        (s) => s.sectionInstanceId === section.sectionInstanceId && s.__typename === section.__typename
      );
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
    .filter((section) => "id" in section && "sectionInstanceId" in section) // filter out sections with no id, most likely new section types from the api that needs an app update
    .forEach((update) => {
      const index = storedSections.findIndex((section) => section.sectionInstanceId === update.sectionInstanceId);
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
        loading: false,
      } as YuScreenSection);
    });

  return {
    ...state,
    sections: storedSections,
  };
};

const updateYuScreenMaximiseYuAnimationSeen = (
  state: IYuScreenStore,
  { timestamp }: UpdateYuScreenMaximiseYuAnimationSeenPayload
) => {
  return {
    ...state,
    lastMaximiseYuAnimationSeen: timestamp,
  };
};

const setYuScreenSectionsLoading = (state: IYuScreenStore, sectionIds: string[]) => {
  const storedSections = [...state.sections];

  sectionIds.map((sectionId) => {
    const sectionIndexes: number[] = [];

    for (const [index, section] of storedSections.entries()) {
      if (section.id === sectionId) {
        sectionIndexes.push(index);
      }
    }

    if (!sectionIndexes?.length) {
      return;
    }

    for (const index of sectionIndexes) {
      const sectionToUpdate = storedSections[index];

      storedSections.splice(index, 1, {
        ...sectionToUpdate,
        loading: true,
      } as YuScreenSection);
    }
  });

  return {
    ...state,
    sections: storedSections,
  };
};

export default yuScreenReducer;
