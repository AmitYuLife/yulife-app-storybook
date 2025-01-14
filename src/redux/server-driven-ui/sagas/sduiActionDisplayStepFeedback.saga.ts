import { parseJSON } from "@utils";
import Logger from "@services/logging/logger";
import { call, put } from "redux-saga/effects";
import { SduiSagaAction } from "../sdui.types";
import { getServerPayload } from "../sdui.helpers";
import { SduiAction, VariableRemoteImage } from "@graphql/__generated";
import { Navigation } from "@navigation/main";
import { MODALS } from "@navigation/constants";
import Ajv, { Schema } from "ajv";

type FeedbackEntry = {
  validation: Schema;
  handler: "half-modal";
  image: VariableRemoteImage;
  backgroundColor: string;
  displayRays: boolean;
  starMultiplier?: number;
  title: string;
  description?: string;
  ctaLabel: string;
  onCtaClickAction: SduiAction;
  onBackgroundClickAction?: SduiAction;
};

type DisplayStepFeedbackPayload = {
  feedback: {
    journeyId: string;
    noMatchAction?: SduiAction;
    entries: FeedbackEntry[];
  };
};

export function* sduiActionDisplayStepFeedback(action: SduiSagaAction) {
  const { dynamicData = {}, id: stepId } = action.contextPayload || {};
  const stepIdStr = stepId ? stepId : "";
  let journeyId;

  try {
    const { data, isValid } = parseJSON(getServerPayload(action.payload));
    const feedbackPayload = data as DisplayStepFeedbackPayload;
    journeyId = feedbackPayload?.feedback?.journeyId;

    if (!isValid || !isPayloadValid(feedbackPayload)) {
      throw new Error(`Invalid action payload for ${journeyId} ${stepIdStr}`);
    }

    const { noMatchAction } = feedbackPayload?.feedback || {};
    const entry = findValidFeedbackEntry(dynamicData, feedbackPayload.feedback.entries);

    if (!entry && noMatchAction?.type) {
      yield put({
        ...noMatchAction,
        contextPayload: action.contextPayload,
      });
      return;
    }

    if (!entry) {
      throw new Error(`No valid step feedback entry found for ${journeyId} ${stepIdStr}.`);
    }

    if (entry.handler !== "half-modal") {
      throw new Error(`Incorrect handler found for ${journeyId} ${stepIdStr} - ${entry.handler}.`);
    }

    Navigation.showOverlay({
      component: {
        id: MODALS.sduiStepFeedbackHalfModal,
        name: MODALS.sduiStepFeedbackHalfModal,
        options: {
          layout: {
            componentBackgroundColor: "transparent",
          },
          overlay: {
            interceptTouchOutside: true,
          },
        },
        passProps: {
          image: entry.image,
          backgroundColor: entry.backgroundColor,
          displayRays: entry.displayRays,
          starMultiplier: entry.starMultiplier,

          title: entry.title,
          descriptionMarkdown: entry.description,
          ctaLabel: entry.ctaLabel,

          onCtaClick: entry.onCtaClickAction,
          onBackgroundClick: entry.onBackgroundClickAction,

          sduiStateContext: action.contextPayload,
        },
      },
    });
  } catch (e) {
    const errorMessage = e?.message;
    yield call(() =>
      Logger.logMixpanelEvent("app_debug", {
        sdui: true,
        location: "sduiActionDisplayStepFeedback",
        error: errorMessage,
      })
    );
    Logger.error(errorMessage, {
      location: "sduiActionDisplayStepFeedback",
      ...(journeyId ? { journeyId } : {}),
      ...(stepId ? { stepId } : {}),
    });
  }
}

function isPayloadValid(payload: DisplayStepFeedbackPayload) {
  if (!payload?.feedback?.entries || !payload?.feedback?.journeyId) {
    return false;
  }

  return payload?.feedback?.entries.every(
    (entry) =>
      entry.image?.image?.uri && entry.title && entry.backgroundColor && entry.validation && entry.onCtaClickAction
  );
}

function findValidFeedbackEntry(
  data: Record<string, Record<string, boolean> | string | string[]>,
  entries: FeedbackEntry[]
): FeedbackEntry | undefined {
  const ajv = new Ajv({ allErrors: true });
  return entries.find((e) => ajv.compile(e.validation)(data));
}
