import React, { memo } from "react";
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
  disabled?: boolean;
}

// TODO: This component needs a proper refactor in the soon...
const GenericHeaderRightIcon = ({ icon, color, onPress, testID, Icon, disabled }: IProps) => {
  const handleOnPress = icon === "COINS" ? labels[4].onPress : onPress;
  if (Icon) {
    return (
      <TouchableOpacityWithDelay hitSlop={TOP_BAR.HIT_SLOP} onPress={onPress} testID={testID} disabled={disabled}>
        {Icon}
      </TouchableOpacityWithDelay>
    );
  }

  if (icon === "SAVE") {
    return (
      <Button
        translationKey="labels.cta.save"
        onPress={onPress}
        size="ExtraSmall"
        wrapperStyle={styles.buttonSave}
        testID={testID}
        disabled={disabled}
      />
    );
  }

  return (
    <TouchableOpacityWithDelay
      hitSlop={TOP_BAR.HIT_SLOP}
      onPress={handleOnPress}
      testID={testID}
      accessibilityLabel={accessibilityLabelKeys[icon] ? t(accessibilityLabelKeys[icon]) : ""}
      disabled={disabled}
    >
      {getIcon(icon, color)}
    </TouchableOpacityWithDelay>
  );
};

const accessibilityLabelKeys = {
  SETTINGS: "generic_heading.right_icon.settings.accessibility_label",
  CLOSE: "generic_heading.right_icon.close.accessibility_label",
  EDIT: "generic_heading.right_icon.edit.accessibility_label",
  PLUS: "generic_heading.right_icon.plus.accessibility_label",
  Done: "generic_heading.right_icon.done.accessibility_label",
  SAVE: "generic_heading.right_icon.save.accessibility_label",
  COINS: "generic_heading.right_icon.coins.accessibility_label",
};

const getIcon = (icon: IIcon, color: string) => {
  switch (icon) {
    case "SETTINGS":
      return <Image source={require("@assets/generic-header/settings.png")} />;

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
        <View>
          <YuCoinCounter textStyle={{ color }} />
        </View>
      );

    default:
      return null;
  }
};

export default memo(GenericHeaderRightIcon);
