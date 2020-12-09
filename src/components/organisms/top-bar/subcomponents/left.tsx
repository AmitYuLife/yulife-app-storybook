import React from "react";
import { TouchableOpacity, View, StyleSheet, TextStyle, Platform, ViewStyle } from "react-native";
import { BUTTON_TOP_LEFT_BAR } from "@ids";
import { Back, CloseSvg } from "@atoms";
import { Menu } from "../assets";
import { Text } from "@atoms/index";
import { Style, TOP_BAR } from "@styles/index";

export type LeftIconTypes = "Menu" | "Back" | "Close";
export const leftIconTypes = { MENU: "Menu", BACK: "Back" } as Record<"MENU" | "BACK", LeftIconTypes>;

interface Props {
  icon: LeftIconTypes;
  colour: string;
  label: string;
  onPress: () => void;
  textStyle: TextStyle;
}

export default function Left({ onPress, icon, colour, label, textStyle }: Props) {
  return (
    <TouchableOpacity
      style={styles.menuWrapper}
      onPress={onPress}
      testID={BUTTON_TOP_LEFT_BAR}
      accessibilityLabel={icon}
    >
      <Icon icon={icon} colour={colour} />
      <MenuLabel label={label} textStyle={textStyle} />
    </TouchableOpacity>
  );
}

function Icon({ icon, colour = "#333333" }: { icon: LeftIconTypes; colour: string }) {
  switch (icon) {
    case "Menu":
      return <Menu color={colour} />;
    case "Back":
      return <Back color={colour} />;
    case "Close":
      return (
        <View style={styles.closeIconMargins}>
          <CloseSvg />
        </View>
      );
    default:
      return null;
  }
}

function MenuLabel({ label, textStyle }: { label: string; textStyle: TextStyle }) {
  if (!label) {
    return null;
  }

  return (
    <View style={styles.menuLabelWrapper}>
      <Text style={StyleSheet.flatten([styles.menuLabel, textStyle])}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  menuLabel: {
    fontSize: Style.adjust(20),
    marginLeft: Style.adjust(4),
    marginTop: Style.adjust(-6),
  } as TextStyle,
  menuLabelWrapper: {
    marginBottom: Style.adjust(Platform.OS === "ios" ? -6 : 0),
    marginLeft: Style.adjust(8),
  } as ViewStyle,
  menuWrapper: {
    alignItems: "center",
    flexDirection: "row",
    paddingLeft: Style.adjust(16),
    paddingRight: Style.adjust(8),
    paddingTop: Platform.select({
      ios: Style.adjust(8),
      android: Style.adjust(10),
    }),
    top: TOP_BAR.LEFT_PADDING_TOP,
    left: 0,
    position: "absolute",
  } as ViewStyle,
  closeIconMargins: {
    marginTop: Style.adjust(4),
  } as ViewStyle,
});
