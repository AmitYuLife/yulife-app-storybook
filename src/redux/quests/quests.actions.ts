import { SyncAction } from "../_core/types";
import {
  CreateQuestMapLevelChallenge_createQuestMapLevelChallenge_yuniversalChest,
  UpdateQuestMapLevelChallenge_updateQuestMapLevelChallenge_challenge as QuestMapActiveChallenge,
} from "@graphql/_core/schema";

export const CLEAR_CHALLENGE_STATUS_PROMPT = "CLEAR_CHALLENGE_STATUS_PROMPT";
export const SET_CHALLENGE_STATUS_PROMPT = "SET_CHALLENGE_STATUS_PROMPT";

export const setChallengeStatusPrompt = (payload: {
  active: QuestMapActiveChallenge;
  yuniversalMap: number;
  yuniversalLevel: number;
  unit: string;
  chest: {
    type: string;
    value: number;
  };
  yuniversalChest: CreateQuestMapLevelChallenge_createQuestMapLevelChallenge_yuniversalChest | null;
}) => ({
  payload,
  type: SET_CHALLENGE_STATUS_PROMPT,
});

export const clearChallengeStatusPrompt = (): SyncAction => ({
  type: CLEAR_CHALLENGE_STATUS_PROMPT,
});
