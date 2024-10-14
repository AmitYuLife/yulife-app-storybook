import { logMixpanelEventActionCreator } from "@redux/logging/logging.actions";
import { MixpanelEvent } from "@services/logging/types";
import { useCallback } from "react";
import { useDispatch } from "react-redux";

export const useTrack = () => {
  const dispatch = useDispatch();
  const track = useCallback(
    (eventName: MixpanelEvent, properties: Record<string, unknown>) => {
      dispatch(logMixpanelEventActionCreator(eventName, properties));
    },
    [dispatch]
  );

  return track;
};
