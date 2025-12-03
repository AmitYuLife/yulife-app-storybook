import React, { memo, useMemo } from "react";
import { View, TextStyle, ViewStyle } from "react-native";
import { BUTTON_TOP_LEFT_BAR, MENU_ICON_BADGE, NOTIF_ICON_BADGE } from "@ids";
import { Back, Box, CloseSvg } from "@atoms";
import { Menu } from "../assets";
import { Text } from "@atoms/index";
import { Style, TOP_BAR, Colours } from "@styles/index";
import { isRTL, t } from "@locale";
import NotificationSvg from "@atoms/notification/notification-svg";
import { TouchableOpacityWithDelay } from "@molecules";

import { StyleSheet } from "@styles";
export enum LeftIcon {
  MENU = "Menu",
  BACK = "Back",
  CLOSE = "Close",
  REFRESH = "Refresh",
  NOTIFICATIONS = "Notifications",
}

export interface IIcon {
  icon: LeftIcon;
  onPress: () => void;
  style?: ViewStyle;
  testID?: string;
}

interface Props {
  icons?: IIcon[];
  colour: string;
  label: string;
  badges: Record<string, boolean>;
  textStyle: TextStyle;
}

const Left = ({ icons = [], colour, label, textStyle, badges }: Props) => {
  const filteredIcons = useMemo(() => icons?.filter((icon) => icon.onPress), [icons]);

  return (
    <View style={styles.wrapper}>
      {filteredIcons.map(({ icon, testID, onPress, style }) => (
        <TouchableOpacityWithDelay
          key={icon}
          hitSlop={buildHitSlop(icon)}
          style={[styles.icon, style]}
          onPress={onPress}
          testID={testID || BUTTON_TOP_LEFT_BAR}
          accessibilityLabel={getAccessibilityLabel(icon)}
          accessibilityRole={"button"}
        >
          <Icon icon={icon} colour={colour} hasBadge={badges[icon]} />
          <MenuLabel label={label} textStyle={textStyle} />
        </TouchableOpacityWithDelay>
      ))}
    </View>
  );
};

export default memo(Left);

function Badge() {
  const props = useMemo(() => {
    return {
      [isRTL() ? "left" : "right"]: -4,
      top: 8,
      position: "absolute",
      width: 8,
      height: 8,
      bg: Colours.status.er300,
      borderWidth: 1,
      borderColor: Colours.neutral.white,
      br: 4,
    } as ViewStyle;
  }, []);

  return <Box {...props} />;
}

const getAccessibilityLabel = (iconType: LeftIcon) => {
  if (iconType === LeftIcon.MENU) {
    return t("top_bar.menu.icon.accessibility_label");
  }

  return iconType;
};

function Icon({ icon, colour = "#333333", hasBadge }: { icon: LeftIcon; colour: string; hasBadge: boolean }) {
  switch (icon) {
    case LeftIcon.MENU:
      return (
        <View style={styles.iconHeight} testID={MENU_ICON_BADGE(hasBadge)}>
          <Menu color={colour} />
          {hasBadge ? <Badge /> : null}
        </View>
      );
    case LeftIcon.BACK:
      return (
        <View style={styles.iconHeight}>
          <Back color={colour} />
        </View>
      );
    case LeftIcon.NOTIFICATIONS:
      return (
        <View style={styles.iconHeight} testID={NOTIF_ICON_BADGE(hasBadge)}>
          <NotificationSvg color={colour} hasBadge={hasBadge} />
          {hasBadge ? <Badge /> : null}
        </View>
      );
    case LeftIcon.CLOSE:
      return (
        <View style={styles.iconHeight}>
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
    alignItems: "center",
    alignSelf: "center",
    flex: 1,
    flexDirection: "row",
    height: "100%",
    justifyContent: "flex-start",
  },
  icon: {
    alignItems: "center",
    alignSelf: "flex-start",
    flexDirection: "row",
    height: "100%",
    justifyContent: "center",
    paddingStart: Style.adjust(16),
  } as ViewStyle,
  menuLabel: {
    fontSize: Style.adjust(20),
    marginStart: Style.adjust(4),
  } as TextStyle,
  menuLabelWrapper: {
    marginStart: Style.adjust(8),
  } as ViewStyle,
  iconHeight: {
    justifyContent: "center",
    alignSelf: "flex-start",
    height: "100%",
  } as ViewStyle,
});

const buildHitSlop = (icon: LeftIcon) => {
  if (icon === LeftIcon.NOTIFICATIONS) {
    return {
      ...TOP_BAR.HIT_SLOP,
      [isRTL() ? "right" : "left"]: 0,
    };
  }

  return TOP_BAR.HIT_SLOP;
};
