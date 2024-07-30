import { createSelector } from "@reduxjs/toolkit";
import { IReduxState } from "../_core/reducers";
import moment from "moment";

type State = IReduxState["yuScreen"];
const reducer = (state: IReduxState) => state.yuScreen;

const yuScreenSectionsSelector = (state: State) => state.sections;
export const getYuScreenSections = createSelector(reducer, yuScreenSectionsSelector);

const yuScreenLastLayoutUpdateSelector = (state: State) => state.lastLayoutUpdate;
export const getYuScreenLastLayoutUpdate = createSelector(reducer, yuScreenLastLayoutUpdateSelector);

const shouldAnimateMaximiseYu = (state: State) => {
  const now = moment();
  const animationSeenToday =
    !!state.lastMaximiseYuAnimationSeen && moment(state.lastMaximiseYuAnimationSeen).isSame(now, "day");
  const maxYuSection = state.sections.find((i) => i.__typename === "MaximiseYuSection");
  const updatedSection = maxYuSection?.lastContentUpdate && moment(maxYuSection.lastContentUpdate).isSame(now, "day");

  return !animationSeenToday && updatedSection;
};

export const getShouldAnimateMaximiseYu = createSelector(reducer, shouldAnimateMaximiseYu);

const yumojiPromptSelector = (state: State) => state.yumojiPrompt;
export const getYumojiPrompt = createSelector(reducer, yumojiPromptSelector);
