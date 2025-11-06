import { call } from "redux-saga/effects";
import Share from "react-native-share";
import Logger from "@services/logging/logger";
import { parseJSON } from "@utils";
import { SduiActionWithServerPayload } from "../sdui.types";
import { getServerPayload } from "../sdui.helpers";

interface IParsedJson {
  message: string;
  url: string;

  title?: string;
  subject?: string;
  excludedActivityTypes?: string[];
}

export function* sduiActionOpenShareDialogSaga(action: SduiActionWithServerPayload) {
  try {
    const { isValid, data } = parseJSON<IParsedJson>(getServerPayload(action.payload), ["message", "url", "title"]);

    if (!isValid) {
      throw new Error("Invalid action payload for open share dialog");
    }

    const { message, url, ...rest } = data;

    // TODO: Confirm this works in dev. Testing via simulator produces inaccurate results.
    // TODO: Will clean up once confirmed.
    let text = message;
    text = text.concat(url);

    // failOnCancel prevents us getting a generic error if the user does not share
    yield call(() => Share.open({ message: text, ...rest, failOnCancel: false }));
  } catch (e) {
    yield call(() =>
      Logger.error(e, {
        sdui: true,
        location: "sduiActionOpenShareDialogSaga",
      })
    );
  }
}
