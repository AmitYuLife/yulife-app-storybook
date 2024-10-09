import { logMixpanelEventActionCreator } from "@redux/logging/logging.actions";
import { MixpanelEvent } from "@services/logging/types";
import { useDispatch } from "react-redux";

export const useTrack = () => {
  const dispatch = useDispatch();
  return (eventName: MixpanelEvent, properties: Record<string, unknown>) => {
    dispatch(logMixpanelEventActionCreator(eventName, properties));
  };
};
