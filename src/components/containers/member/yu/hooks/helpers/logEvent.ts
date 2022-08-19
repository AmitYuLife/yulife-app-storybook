import { Dispatch } from "react";
import { SduiAction } from "@graphql/_core/schema";
import { logMixpanelEventActionCreator } from "@redux/logging/logging.actions";
import { MixpanelEvent } from "@services/logging/types";
import Logger from "@services/logging/logger";

interface Payload {
  name: MixpanelEvent;
  props: Record<string, string | number | boolean>;
}

export const logEvent = (dispatch: Dispatch<ReturnType<typeof logMixpanelEventActionCreator>>, event?: SduiAction) => {
  if (event) {
    try {
      const payload = <Payload>JSON.parse(event.payload);
      dispatch(logMixpanelEventActionCreator(payload.name || "button_pressed", payload.props));
    } catch (e) {
      Logger.error(e, { where: "yu-screen-log-event" });
    }
  }
};
