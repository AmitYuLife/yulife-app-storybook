import React, { ComponentProps, useCallback } from "react";
import { openMeditopia } from "@services/app-link";
import ImageButton from "./image-button";
import { MEDITOPIA_BUTTON } from "@ids";
import Logger from "@services/logging/logger";
interface Props {
  style?: ComponentProps<typeof ImageButton>["wrapperStyle"];
  onPressCallback?: () => void;
}

export const MeditopiaButton = ({ style, onPressCallback }: Props) => {
  const onPress = useCallback(() => {
    openMeditopia();
    Logger.logEvent("mindfulness_app_open", {
      type: "meditopia",
    });

    if (onPressCallback) {
      onPressCallback();
    }
  }, [onPressCallback]);
  return (
    <ImageButton
      wrapperStyle={style}
      onPress={onPress}
      shadowColor={"#0096F2"}
      backgroundColor="#3BB4FF"
      icon="meditopia"
      testID={MEDITOPIA_BUTTON}
    />
  );
};
