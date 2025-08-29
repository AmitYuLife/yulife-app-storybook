import React, { ComponentProps, memo, useCallback } from "react";
import { LayoutChangeEvent, View, ViewStyle } from "react-native";
import { GenericHeading } from "@organisms";
import { Colours, TOP_BAR, StyleSheet } from "@styles";
import { useBackHandler } from "@hooks";
import { useSduiActionUpdateBus, useSduiCallbackFunctionOrReduxAction } from "../_hooks";
import { VoidFunctionOrSduiActionPayload } from "../_types/sdui.types";
import { useSduiLoading } from "../_hooks/useSduiLoading";
import { ContentItemHeaderBar as GqlHeader } from "@graphql/__generated";

type Props = Omit<
  GqlHeader,
  | "id"
  | "onLeftIconPress"
  | "onRightIconPress"
  | "publishKeyHeight"
  | "contentItemHeaderBarRightIcon"
  | "backgroundColor"
> & {
  leftIcon: ComponentProps<typeof GenericHeading>["leftIcon"];
  contentItemHeaderBarRightIcon?: ComponentProps<typeof GenericHeading>["rightIcon"];
  logo: ComponentProps<typeof GenericHeading>["logo"];
  onLeftIconPress: VoidFunctionOrSduiActionPayload;
  onRightIconPress: VoidFunctionOrSduiActionPayload;
  publishKeyHeight?: string;
  color: string;
  backgroundColor?: string | null;
};

export const ContentItemHeaderBar = memo((props: Props) => {
  const {
    leftIcon,
    contentItemHeaderBarRightIcon,
    logo,
    heading,
    onLeftIconPress,
    onRightIconPress,
    publishKeyHeight,
    color = Colours.neutral.n800,
    backgroundColor,
  } = props;
  const { handleSduiAction: handleLeftIconPress } = useSduiCallbackFunctionOrReduxAction(onLeftIconPress);
  const { handleSduiAction: handleRightIconPress } = useSduiCallbackFunctionOrReduxAction(onRightIconPress);
  const { isSduiLoading } = useSduiLoading();
  const colorGuard = color || Colours.neutral.n800;

  const backHandler = useCallback(() => {
    if (isSduiLoading) {
      return false;
    }

    if (onLeftIconPress) {
      handleLeftIconPress();
      return true;
    }

    if (onRightIconPress) {
      handleRightIconPress();
      return true;
    }

    return true;
  }, [handleLeftIconPress, handleRightIconPress, isSduiLoading]);

  useBackHandler(backHandler);
  const { updateBus } = useSduiActionUpdateBus();

  const handleLayout = (event: LayoutChangeEvent) => {
    if (!publishKeyHeight) {
      return;
    }

    updateBus(publishKeyHeight, event.nativeEvent.layout.height);
  };

  return (
    <View
      onLayout={handleLayout}
      style={[styles.wrapper, { backgroundColor: backgroundColor || Colours.neutral.white }]}
    >
      <GenericHeading
        leftIcon={leftIcon}
        rightIcon={contentItemHeaderBarRightIcon}
        logo={logo}
        heading={heading}
        onLeftIconPress={!onLeftIconPress ? null : handleLeftIconPress}
        onRightIconPress={!onRightIconPress ? null : handleRightIconPress}
        disabled={isSduiLoading}
        color={colorGuard}
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
  } as ViewStyle,
});
