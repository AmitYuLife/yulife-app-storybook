import {
  CreateQuestMapLevelChallenge_createQuestMapLevelChallenge_yuniversalChest,
  UpdateQuestMapLevelChallenge_updateQuestMapLevelChallenge_challenge as QuestMapActiveChallenge,
} from "@graphql/_core/schema";
import { SET_CHALLENGE_STATUS_PROMPT } from "./quests.actions";
import { SyncAction } from "@redux/_core/types";
import { IActiveLevel } from "@redux/levels/levels.selectors";
import { getScore } from "@redux/levels/levels.reducer";
import { CHALLENGE_RESET_SUCCESS } from "@redux/levels/levels.actions";

interface IQuestPrompt {
  active: IActiveLevel;
  yuniversalMap: number;
  yuniversalLevel: number;
  unit: string;
}
export interface IQuestStore {
  prompt: IQuestPrompt;
}

export const getInitialState = (): IQuestStore => ({
  prompt: undefined,
});

const questsReducer = (state: IQuestStore = getInitialState(), action: SyncAction): IQuestStore => {
  switch (action.type) {
    case CHALLENGE_RESET_SUCCESS:
      return { ...state, prompt: undefined };

    case SET_CHALLENGE_STATUS_PROMPT:
      return setChallengeStatusPrompt(state, action.payload);

    default:
      return state;
  }
};

export default questsReducer;

const setChallengeStatusPrompt = (
  state: IQuestStore,
  {
    active,
    yuniversalLevel,
    yuniversalMap,
    unit,
    chest,
    yuniversalChest,
  }: {
    active: QuestMapActiveChallenge;
    yuniversalMap: number;
    yuniversalLevel: number;
    unit: string;
    chest: {
      type: string;
      value: number;
    };
    yuniversalChest: CreateQuestMapLevelChallenge_createQuestMapLevelChallenge_yuniversalChest | null;
  }
): IQuestStore => ({
  ...state,
  prompt: {
    active: {
      ...state?.prompt?.active,
      chest,
      yuniversalChest,
      coins: active?.yuCoinAwarded || state.prompt?.active?.coins,
      level: active?.level || state.prompt?.active?.level,
      isLoading: false,
      milestonesLog: active?.milestoneLog || state.prompt?.active?.milestonesLog || [],
      rating: active?.rating || state.prompt?.active?.rating,
      score: getScore(active?.incomingData) || state.prompt?.active?.score,
      status: (active?.milestoneLog || state.prompt?.active?.milestonesLog || []).length > 0 ? "success" : "failed",
      challengeIsActive: false,
    },
    yuniversalLevel,
    yuniversalMap,
    unit,
  },
});
