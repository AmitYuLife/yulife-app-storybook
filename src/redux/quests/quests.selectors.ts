import { createSelector } from "reselect";
import { IReduxState } from "../_core/reducers";
import { getHasNotification } from "../levels/levels.selectors";

type State = IReduxState["quests"];
const reducer = (state: IReduxState) => state.quests;

const questsPromptSelector = (state: State) => state.prompt;
export const getQuestsPrompt = createSelector(reducer, questsPromptSelector);

const getHasQuestPromptSelector = (state: State) => !!state.prompt;
export const getHasQuestPrompt = createSelector(reducer, getHasQuestPromptSelector);

export const getHasQuestNotification = createSelector(
  getHasQuestPrompt,
  getHasNotification,
  (prompt, levelNotification) => prompt || levelNotification
);
