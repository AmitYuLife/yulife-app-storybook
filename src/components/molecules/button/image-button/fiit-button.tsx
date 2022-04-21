import React, { ComponentProps, memo, useCallback } from "react";
import { openFiit } from "@services/app-link";
import ImageButton from "./image-button";

interface Props {
  style?: ComponentProps<typeof ImageButton>["wrapperStyle"];
  onPressCallback?: () => void;
}

export const FiitButton = memo(({ style, onPressCallback }: Props) => {
  const onPress = useCallback(() => {
    openFiit();

    if (onPressCallback) {
      onPressCallback();
    }
  }, [onPressCallback]);
  return (
    <ImageButton
      wrapperStyle={style}
      onPress={onPress}
      shadowColor={"#000000"}
      backgroundColor="transparent"
      backgroundGradient={["#000000", "#494949"]}
      icon="fiit"
    />
  );
});
