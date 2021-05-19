import React, { ComponentProps } from "react";
import { openHeadspace } from "@services/app-link";
import ImageButton from "./image-button";
import { Platform } from "react-native";
import { HEADSPACE_BUTTON } from "@ids";
import Logger from "@services/logging/logger";

interface Props {
  style?: ComponentProps<typeof ImageButton>["wrapperStyle"];
  onPressCallback?: () => void;
}

export const HeadspaceButton = ({ style, onPressCallback }: Props) => {
  if (Platform.OS === "android") {
    return null;
  }

  return (
    <ImageButton
      wrapperStyle={style}
      onPress={() => {
        openHeadspace();
        Logger.logEvent("mindfulness_app_open", {
          type: "headspace",
        });

        if (onPressCallback) {
          onPressCallback();
        }
      }}
      shadowColor={"#C9C9C9"}
      backgroundColor="white"
      icon="headspace"
      testID={HEADSPACE_BUTTON}
    />
  );
};
