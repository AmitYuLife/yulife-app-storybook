import React, { ComponentProps, memo, useCallback } from "react";
import { LayoutChangeEvent, StyleSheet, View, ViewStyle } from "react-native";
import { GenericHeading } from "@organisms";
import { Colours, TOP_BAR } from "@styles";
import { useBackHandler } from "@hooks";
import { useSduiActionUpdateBus, useSduiCallbackFunctionOrReduxAction } from "../_hooks";
import { VoidFunctionOrSduiActionPayload } from "../_types/sdui.types";
import { useSduiLoading } from "../_hooks/useSduiLoading";

interface Props {
  leftIcon: ComponentProps<typeof GenericHeading>["leftIcon"];
  rightIcon: ComponentProps<typeof GenericHeading>["rightIcon"];
  logo: ComponentProps<typeof GenericHeading>["logo"];
  heading: ComponentProps<typeof GenericHeading>["heading"];
  onLeftIconPress: VoidFunctionOrSduiActionPayload;
  onRightIconPress: VoidFunctionOrSduiActionPayload;
  publishKeyHeight?: string;
}

export const ContentItemHeaderBar = memo((props: Props) => {
  const { leftIcon, logo, heading, onLeftIconPress, onRightIconPress, rightIcon, publishKeyHeight } = props;
  const { handleSduiAction: handleLeftIconPress } = useSduiCallbackFunctionOrReduxAction(onLeftIconPress);
  const { handleSduiAction: handleRightIconPress } = useSduiCallbackFunctionOrReduxAction(onRightIconPress);
  const { isSduiLoading } = useSduiLoading();

  const backHandler = useCallback(() => {
    if (onLeftIconPress) {
      handleLeftIconPress();
      return true;
    }

    if (onRightIconPress) {
      handleRightIconPress();
      return true;
    }

    return true;
  }, [handleLeftIconPress, handleRightIconPress]);

  useBackHandler(backHandler);
  const { updateBus } = useSduiActionUpdateBus();

  const handleLayout = (event: LayoutChangeEvent) => {
    if (!publishKeyHeight) {
      return;
    }

    updateBus(publishKeyHeight, event.nativeEvent.layout.height);
  };

  return (
    <View onLayout={handleLayout} style={styles.wrapper}>
      <GenericHeading
        leftIcon={leftIcon}
        rightIcon={rightIcon}
        logo={logo}
        heading={heading}
        onLeftIconPress={!onLeftIconPress || isSduiLoading ? null : handleLeftIconPress}
        onRightIconPress={!onRightIconPress || isSduiLoading ? null : handleRightIconPress}
      />
    </View>
  );
});

const styles = StyleSheet.create({
  wrapper: {
    height: TOP_BAR.TOP_BAR_WITH_PAD,
    paddingTop: TOP_BAR.PADDING_TOP,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colours.neutral.white,
  } as ViewStyle,
});
