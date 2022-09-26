import React, { memo } from "react";
import { TouchableOpacity, View, StyleSheet, TextStyle, ViewStyle } from "react-native";
import { BUTTON_TOP_LEFT_BAR, MENU_ICON_BADGE } from "@ids";
import { Back, CloseSvg } from "@atoms";
import { Menu } from "../assets";
import { Text } from "@atoms/index";
import { Style, TOP_BAR, Colours } from "@styles/index";
import { t } from "@locale";

export type LeftIconTypes = "Menu" | "Back" | "Close";
export const leftIconTypes = { MENU: "Menu", BACK: "Back" } as Record<"MENU" | "BACK", LeftIconTypes>;

interface Props {
  icon: LeftIconTypes;
  hasBadge: boolean;
  colour: string;
  label: string;
  onPress: () => void;
  textStyle: TextStyle;
}

const Left = ({ onPress, icon, hasBadge, colour, label, textStyle }: Props) => {
  if (!onPress) {
    return null;
  }

  return (
    <TouchableOpacity
      hitSlop={TOP_BAR.HIT_SLOP}
      style={styles.wrapper}
      onPress={onPress}
      testID={BUTTON_TOP_LEFT_BAR}
      accessibilityLabel={getAccessibilityLabel(icon)}
      accessibilityRole={"button"}
    >
      <Icon icon={icon} colour={colour} hasBadge={hasBadge} />
      <MenuLabel label={label} textStyle={textStyle} />
    </TouchableOpacity>
  );
};

export default memo(Left);

const getAccessibilityLabel = (iconType: LeftIconTypes) => {
  if (iconType === "Menu") {
    return t("top_bar.menu.icon.accessibility_label");
  }

  return iconType;
};

function Icon({ icon, colour = "#333333", hasBadge }: { icon: LeftIconTypes; colour: string; hasBadge: boolean }) {
  switch (icon) {
    case "Menu":
      return (
        <View
          style={StyleSheet.flatten([styles.iconHeight, styles.menuIconMargins])}
          testID={MENU_ICON_BADGE(hasBadge)}
        >
          <Menu color={colour} />
          {hasBadge ? <View style={styles.badge} /> : null}
        </View>
      );
    case "Back":
      return (
        <View style={styles.iconHeight}>
          <Back color={colour} />
        </View>
      );
    case "Close":
      return (
        <View style={StyleSheet.flatten([styles.iconHeight, styles.closeIconMargins])}>
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
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: Style.adjust(16),
    paddingRight: Style.adjust(8),
    top: TOP_BAR.LEFT_PADDING_TOP,
    height: Style.adjust(32),
    left: 0,
    position: "absolute",
    marginTop: Style.adjust(2),
  } as ViewStyle,
  menuLabel: {
    fontSize: Style.adjust(20),
    marginLeft: Style.adjust(4),
  } as TextStyle,
  menuLabelWrapper: {
    marginLeft: Style.adjust(8),
    marginTop: Style.adjust(2),
  } as ViewStyle,
  menuIconMargins: {
    marginTop: Style.adjust(4),
  } as ViewStyle,
  closeIconMargins: {
    marginTop: Style.adjust(4),
  } as ViewStyle,
  iconHeight: {
    justifyContent: "center",
    alignItems: "center",
  } as ViewStyle,
  badge: {
    position: "absolute",
    top: -4,
    right: -4,
    width: 8,
    height: 8,
    backgroundColor: "#FF5F5F",
    borderWidth: 1,
    borderColor: Colours.neutral.white,
    borderRadius: 4,
  } as ViewStyle,
});
