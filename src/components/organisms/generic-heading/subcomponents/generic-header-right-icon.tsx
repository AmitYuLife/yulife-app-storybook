import React from "react";
import { Image, View } from "react-native";
import { CloseSvg, EditSvg, Text } from "@atoms";
import { Button, TouchableOpacityWithDelay } from "@molecules";
import { TOP_BAR, Colours } from "@styles";
import { IGenericHeadingProps, YuCoinCounter } from "@organisms";
import PlusSvg from "@atoms/plus/plus-svg";
import styles from "../generic-heading.styles";
import { labels } from "@navigation/root";
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
      accessibilityLabel={getAccessibilityLabel(icon)}
    >
      {getIcon(icon, color)}
    </TouchableOpacityWithDelay>
  );
};

export default GenericHeaderRightIcon;

const accessibilityLabels = {
  SETTINGS: t("genericHeading.rightIcon.settings.accessibilityLabel"),
  CLOSE: t("genericHeading.rightIcon.close.accessibilityLabel"),
  EDIT: t("genericHeading.rightIcon.edit.accessibilityLabel"),
  PLUS: t("genericHeading.rightIcon.plus.accessibilityLabel"),
  Done: t("genericHeading.rightIcon.done.accessibilityLabel"),
  SAVE: t("genericHeading.rightIcon.save.accessibilityLabel"),
  COINS: t("genericHeading.rightIcon.coins.accessibilityLabel"),
};

const getAccessibilityLabel = (icon: IIcon) => accessibilityLabels[icon];

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
        <View>
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
          <YuCoinCounter colour={Colours.neutral.white} textStyle={styles.rightIconCoinsTextColour} />
        </View>
      );

    default:
      return null;
  }
};
