import { put, select } from "redux-saga/effects";
import Logger from "@services/logging/logger";
import { getActiveLevel, getYuniversalProgress } from "@redux/levels/levels.selectors";
import { challengeEndSuccessAction } from "@redux/levels/levels.actions";
import { setChallengeStatusPrompt } from "../quests.actions";

export default function* setQuestsChallengePrompt({ payload }: ReturnType<typeof challengeEndSuccessAction>) {
  try {
    const { yuniversalLevel, yuniversalMap }: ReturnType<typeof getYuniversalProgress> = yield select(
      getYuniversalProgress
    );

    const { unit, chest, yuniversalChest }: ReturnType<typeof getActiveLevel> = yield select(getActiveLevel);

    yield put(
      setChallengeStatusPrompt({ yuniversalLevel, yuniversalMap, unit, chest, yuniversalChest, active: payload })
    );
  } catch (error) {
    Logger.error(error, { file: "setQuestsChallengePrompt" });
  }
}
