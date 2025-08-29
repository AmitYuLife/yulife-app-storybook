import React, { ComponentProps, RefObject } from "react";
import { View, ViewStyle, Platform } from "react-native";
import TopBar from "./top-bar";
import { TOP_BAR, StyleSheet } from "@styles";
import { RightIconTypes } from "./subcomponents/right";
import { LeftIcon } from "./subcomponents/left";

interface Props {
  onPressLeftIcon?: ComponentProps<typeof TopBar>["onPressLeftIcon"];
  hasShadow?: boolean;
  leftIcon?: LeftIcon;
  rightIcon?: RightIconTypes;
  hasWhiteBackground?: boolean;
  type?: ComponentProps<typeof TopBar>["type"];
  leftRef?: RefObject<View>;
  name?: ComponentProps<typeof TopBar>["name"];
  menuLabel?: ComponentProps<typeof TopBar>["menuLabel"];
  timer?: ComponentProps<typeof TopBar>["timer"];
  skipFetchingNotifications?: boolean;
}

export const TopBarAbsolute = (props: Props) => {
  const {
    onPressLeftIcon,
    hasWhiteBackground,
    leftIcon,
    hasShadow,
    rightIcon,
    type,
    leftRef,
    menuLabel,
    timer,
    skipFetchingNotifications,
  } = props;

  return (
    <View
      pointerEvents="box-none"
      style={StyleSheet.flatten([styles.topBarWrapper, hasWhiteBackground && styles.whiteBackground])}
    >
      <TopBar
        menuLabel={menuLabel}
        type={type}
        rightIcon={rightIcon}
        leftIcon={leftIcon}
        onPressLeftIcon={onPressLeftIcon}
        leftRef={leftRef}
        timer={timer}
        skipFetchingNotifications={skipFetchingNotifications}
      />
      {!hasShadow ? null : <View style={styles.topBarShadow} />}
    </View>
  );
};

const styles = StyleSheet.create({
  topBarWrapper: {
    position: "absolute",
    start: 0,
    end: 0,
    height: TOP_BAR.TOP_BAR_WITH_PAD,
    paddingTop: TOP_BAR.PADDING_TOP,
  } as ViewStyle,
  topBarShadow: {
    position: "absolute",
    bottom: 0,
    start: 0,
    end: 0,
    width: "100%",
    height: Platform.select({ ios: StyleSheet.hairlineWidth, android: 1 }),
    backgroundColor: "rgba(0,0,0,0.2)",
  } as ViewStyle,
  whiteBackground: {
    backgroundColor: "white",
  } as ViewStyle,
});
