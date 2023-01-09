import React from "react";
import { Image, View } from "react-native";
import { CloseSvg, EditSvg, Text } from "@atoms";
import { Button, TouchableOpacityWithDelay } from "@molecules";
import { TOP_BAR } from "@styles";
import { IGenericHeadingProps, YuCoinCounter } from "@organisms";
import PlusSvg from "@atoms/plus/plus-svg";
import styles from "../generic-heading.styles";
import { labels } from "@navigation/root";
import { SCREEN_CLOSE } from "@ids";
import { t } from "@locale";

type IIcon = IGenericHeadingProps["rightIcon"];

interface IProps {
  icon: IIcon;
  Icon?: JSX.Element;
  color?: string;
  onPress: () => void;
  testID: string;
}

// TODO: This component needs a proper refactor in the soon...
const GenericHeaderRightIcon = ({ icon, color, onPress, testID, Icon }: IProps) => {
  const handleOnPress = icon === "COINS" ? labels[4].onPress : onPress;
  if (Icon) {
    return (
      <TouchableOpacityWithDelay
        hitSlop={TOP_BAR.HIT_SLOP}
        onPress={onPress}
        style={styles.rightIconTouchable}
        testID={testID}
      >
        {Icon}
      </TouchableOpacityWithDelay>
    );
  }

  if (icon === "SAVE") {
    return <Button label="Save" onPress={onPress} size="ExtraSmall" wrapperStyle={styles.buttonSave} testID={testID} />;
  }

  return (
    <TouchableOpacityWithDelay
      hitSlop={TOP_BAR.HIT_SLOP}
      onPress={handleOnPress}
      style={styles.rightIconTouchable}
      testID={testID}
      accessibilityLabel={accessibilityLabels[icon] ?? ""}
    >
      {getIcon(icon, color)}
    </TouchableOpacityWithDelay>
  );
};

export default GenericHeaderRightIcon;

const accessibilityLabels = {
  SETTINGS: t("generic_heading.right_icon.settings.accessibility_label"),
  CLOSE: t("generic_heading.right_icon.close.accessibility_label"),
  EDIT: t("generic_heading.right_icon.edit.accessibility_label"),
  PLUS: t("generic_heading.right_icon.plus.accessibility_label"),
  Done: t("generic_heading.right_icon.done.accessibility_label"),
  SAVE: t("generic_heading.right_icon.save.accessibility_label"),
  COINS: t("generic_heading.right_icon.coins.accessibility_label"),
};

const getIcon = (icon: IIcon, color: string) => {
  switch (icon) {
    case "SETTINGS":
      return <Image source={require("@assets/menu/settings.png")} />;

    case "EDIT":
      return (
        <View>
          <EditSvg />
        </View>
      );

    case "PLUS":
      return (
        <View>
          <PlusSvg />
        </View>
      );

    case "CLOSE":
      return (
        <View testID={SCREEN_CLOSE}>
          <CloseSvg stroke={color} accessible={false} />
        </View>
      );
    case "Done":
      return (
        <Text numberOfLines={1} style={styles.rightIconText}>
          {icon}
        </Text>
      );

    case "COINS":
      return (
        <View style={styles.rightIconCoinsWrapper}>
          <YuCoinCounter colour={color} textStyle={{ color }} />
        </View>
      );

    default:
      return null;
  }
};
