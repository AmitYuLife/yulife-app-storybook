import React from "react";
import { TouchableOpacity, View, StyleSheet, TextStyle, Platform, ViewStyle } from "react-native";
import { BUTTON_TOP_LEFT_BAR } from "@ids";
import { Back } from "@atoms";
import { Menu } from "../assets";
import { Text } from "@atoms/index";
import { Style } from "@styles/index";

export type LeftIconTypes = "Menu" | "Back";
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
      <View style={styles.iconWrapper}>
        <Icon icon={icon} colour={colour} />
      </View>
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
    height: "100%",
    paddingLeft: Style.adjust(16),
    paddingRight: Style.adjust(8),
    paddingTop: Style.adjust(8),
    left: 0,
    position: "absolute",
  } as ViewStyle,
  iconWrapper: {
    marginTop: -1,
  } as ViewStyle,
});
