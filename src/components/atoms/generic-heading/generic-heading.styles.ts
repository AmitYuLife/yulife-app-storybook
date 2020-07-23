import { StyleSheet, TextStyle, ViewStyle, Platform, ImageStyle } from "react-native";
import { Colours, Style } from "../../../styles";
import { IRightIcon } from "./generic-heading.types";
import { BetaText } from "@molecules";

const styles = StyleSheet.create({
  titleWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: Platform.select({ ios: 0, android: -4 }),
  } as ViewStyle,
  headingWrapper: {
    alignItems: "center",
    borderBottomColor: "rgb(233,233,233)",
    borderBottomWidth: StyleSheet.hairlineWidth,
    paddingTop: Style.adjust(17),
    height: 54,
    justifyContent: "center",
  } as ViewStyle,
  paddingBottom: {
    paddingBottom: Style.adjust(13),
  },
  paddingHorizontal: {
    paddingHorizontal: Style.adjust(15),
  } as ViewStyle,
  subheading: {
    color: Colours.darkGray,
    fontSize: Style.adjust(12),
  } as TextStyle,
  subheadingWrapper: {
    alignItems: "center",
  } as ViewStyle,
  leftIcon: {
    position: "absolute",
    top: Style.adjust(18, { shrinkMultiplier: 0.05 }),
    alignSelf: "flex-start",
    height: Style.adjust(32),
    width: Style.adjust(32),
  },
  rightIcon: {
    position: "absolute",
    top: Style.adjust(10),
    alignSelf: "flex-end",
    height: Style.adjust(32),
    minWidth: Style.adjust(32),
  },
  backAdjust: {
    marginTop: Style.adjust(-4),
  } as ViewStyle,
  newBorderPad: {
    height: 8,
  } as ViewStyle,
  newBorderShadow: {
    position: "absolute",
    height: 1,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(0,0,0,0.1)",
  } as ViewStyle,
  rightTextIcon: {
    fontSize: Style.adjust(20),
    marginTop: Style.adjust(6),
  } as TextStyle,
  rightIconClose: {
    marginTop: Style.adjust(10),
    width: Style.adjust(12),
    height: Style.adjust(12),
  } as ImageStyle,
  recenter: {
    marginRight: -BetaText?.WIDTH || 0,
  } as ViewStyle,
});

export default styles;

interface IAdjustHitSlop {
  rightIcon?: IRightIcon | string;
}

export function adjustHitSlop({ rightIcon }: IAdjustHitSlop) {
  if (typeof rightIcon === "string") {
    return null;
  }

  if (rightIcon.icon === "CLOSE") {
    return { paddingHorizontal: Style.adjust(16) };
  }

  return null;
}
