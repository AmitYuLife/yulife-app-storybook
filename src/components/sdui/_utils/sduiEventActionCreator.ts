import { logMixpanelEventActionCreator } from "@redux/logging/logging.actions";
import { MixpanelEvent } from "@services/logging/types";

export const defaultSduiActionProps = {
  sdui_location: "app",
};

export const sduiEventActionCreator = (
  eventName: MixpanelEvent,
  data: Record<string, string | number | boolean> = {}
) =>
  logMixpanelEventActionCreator(eventName, {
    ...defaultSduiActionProps,
    ...data,
  });
