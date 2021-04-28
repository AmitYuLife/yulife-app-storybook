import React, { ComponentProps } from "react";
import { openCalm } from "@services/app-link";
import ImageButton from "./image-button";

interface Props {
  style?: ComponentProps<typeof ImageButton>["wrapperStyle"];
  onPressCallback?: () => void;
}

export const CalmButton = ({ style, onPressCallback }: Props) => {
  return (
    <ImageButton
      wrapperStyle={style}
      onPress={() => {
        openCalm();

        if (onPressCallback) {
          onPressCallback();
        }
      }}
      shadowColor={"#2937DF"}
      backgroundColor="transparent"
      backgroundGradient={["#3AB5EA", "#5064E4"]}
      icon="calm"
    />
  );
};
